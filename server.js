const path = require('path');
const fs = require('fs');
const http = require('http');
const express = require('express');
const { Server } = require('socket.io');

const { questions, modules } = require('./data/questions');

const PORT = process.env.PORT || 3000;
const ADMIN_PASSCODE = process.env.ADMIN_PASSCODE || 'friozem2026';
const DB_FILE = path.join(__dirname, 'db.json');
const DEFAULT_DURATION_SEC = 20;
const BASE_POINTS = 500;
const BONUS_POINTS = 500;

const TEAM_COLORS = [
  '#e63946', '#2a9d8f', '#f4a261', '#264653', '#e9c46a',
  '#8338ec', '#3a86ff', '#fb5607', '#06d6a0', '#ef476f',
  '#118ab2', '#ffd166', '#073b4c', '#c9184a', '#4361ee'
];

// ---------- Estado do jogo ----------
let state = {
  status: 'lobby', // lobby | question | closed | reveal | finished
  currentIndex: -1,
  questionStartedAt: null,
  durationMs: DEFAULT_DURATION_SEC * 1000,
  answers: {}, // teamId -> { option, timeMs, submittedAt }
  teams: {} // teamId -> { id, name, color, score, correctCount, totalTimeMs, history: [] }
};

let questionTimer = null;

function loadState() {
  try {
    if (fs.existsSync(DB_FILE)) {
      const raw = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
      if (raw && raw.teams) {
        state.teams = raw.teams;
      }
    }
  } catch (err) {
    console.error('Falha ao carregar db.json:', err.message);
  }
}

let saveTimeout = null;
function persist() {
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => {
    fs.writeFile(DB_FILE, JSON.stringify({ teams: state.teams }, null, 2), () => {});
  }, 250);
}

loadState();

// ---------- App / Socket setup ----------
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

const server = http.createServer(app);
const io = new Server(server);

function pickColor() {
  const used = new Set(Object.values(state.teams).map(t => t.color));
  const free = TEAM_COLORS.find(c => !used.has(c));
  return free || TEAM_COLORS[Math.floor(Math.random() * TEAM_COLORS.length)];
}

function publicQuestion(q) {
  if (!q) return null;
  return {
    id: q.id,
    index: q.index,
    roundId: q.roundId,
    roundTitle: q.roundTitle,
    text: q.text,
    options: q.options,
    total: questions.length
  };
}

function ranking() {
  return Object.values(state.teams)
    .slice()
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      if (b.correctCount !== a.correctCount) return b.correctCount - a.correctCount;
      return a.totalTimeMs - b.totalTimeMs;
    })
    .map((t, i) => ({ ...t, position: i + 1 }));
}

function currentQuestionObj() {
  return state.currentIndex >= 0 ? questions[state.currentIndex] : null;
}

function publicState() {
  const q = currentQuestionObj();
  return {
    status: state.status,
    currentIndex: state.currentIndex,
    totalQuestions: questions.length,
    question: state.status === 'question' || state.status === 'closed' ? publicQuestion(q) : null,
    questionStartedAt: state.questionStartedAt,
    durationMs: state.durationMs,
    answeredCount: Object.keys(state.answers).length,
    teamCount: Object.keys(state.teams).length,
    ranking: ranking(),
    modules: modules.map(m => ({ id: m.id, title: m.title, count: m.questions.length })),
    questionList: questions.map(qq => ({ id: qq.id, index: qq.index, roundId: qq.roundId, roundTitle: qq.roundTitle, text: qq.text }))
  };
}

function adminState() {
  const q = currentQuestionObj();
  return {
    ...publicState(),
    question: q ? { ...publicQuestion(q), correct: q.correct, concept: q.concept } : null,
    answers: state.answers
  };
}

function broadcastState() {
  io.to('players').emit('state:update', publicState());
  io.to('dashboard').emit('state:update', publicState());
  io.to('admins').emit('state:update', adminState());
}

function scoreForAnswer(durationMs, timeMs, isCorrect) {
  if (!isCorrect) return 0;
  const remaining = Math.max(0, durationMs - timeMs);
  const bonus = Math.round(BONUS_POINTS * (remaining / durationMs));
  return BASE_POINTS + bonus;
}

function clearQuestionTimer() {
  if (questionTimer) {
    clearTimeout(questionTimer);
    questionTimer = null;
  }
}

function closeQuestionOnTimeout() {
  if (state.status !== 'question') return;
  state.status = 'closed';
  broadcastState();
}

// ---------- Socket handlers ----------
io.on('connection', (socket) => {
  socket.data.isAdmin = false;
  socket.data.teamId = null;

  socket.emit('state:update', publicState());

  // ---- Equipes ----
  socket.on('team:register', ({ teamId, name }, cb) => {
    name = (name || '').toString().trim().slice(0, 40);
    if (!name) return cb && cb({ ok: false, error: 'Nome da equipe é obrigatório.' });

    let id = teamId;
    let team = id ? state.teams[id] : null;
    let recovered = false;

    if (!team) {
      // Recuperação de acesso: se já existe uma equipe com esse nome (ex.: o time
      // perdeu o acesso, trocou de aparelho ou limpou o navegador), reconecta a ela
      // em vez de criar uma equipe nova do zero.
      const existing = Object.values(state.teams).find(
        t => t.name.trim().toLowerCase() === name.toLowerCase()
      );
      if (existing) {
        id = existing.id;
        team = existing;
        recovered = true;
      } else {
        id = 'team_' + Math.random().toString(36).slice(2, 10);
        team = {
          id,
          name,
          color: pickColor(),
          score: 0,
          correctCount: 0,
          totalTimeMs: 0,
          history: []
        };
        state.teams[id] = team;
      }
    } else {
      team.name = name;
    }

    socket.data.teamId = id;
    socket.join('players');
    socket.join(`team:${id}`);
    persist();
    broadcastState();
    cb && cb({ ok: true, teamId: id, team, recovered, state: publicState() });
  });

  socket.on('team:answer', ({ teamId, option }, cb) => {
    const q = currentQuestionObj();
    if (!q || state.status !== 'question') {
      return cb && cb({ ok: false, error: 'Não há pergunta ativa no momento.' });
    }
    if (!state.teams[teamId]) {
      return cb && cb({ ok: false, error: 'Equipe não encontrada.' });
    }
    if (state.answers[teamId]) {
      return cb && cb({ ok: false, error: 'Sua equipe já respondeu esta pergunta.' });
    }
    if (!['a', 'b', 'c', 'd'].includes(option)) {
      return cb && cb({ ok: false, error: 'Opção inválida.' });
    }

    const timeMs = Math.min(state.durationMs, Date.now() - state.questionStartedAt);
    state.answers[teamId] = { option, timeMs, submittedAt: Date.now() };

    broadcastState();
    cb && cb({ ok: true });
  });

  // ---- Dashboard (telão) ----
  socket.on('dashboard:join', () => {
    socket.join('dashboard');
    socket.emit('state:update', publicState());
  });

  // ---- Admin ----
  socket.on('admin:login', (passcode, cb) => {
    if (passcode === ADMIN_PASSCODE) {
      socket.data.isAdmin = true;
      socket.join('admins');
      cb && cb({ ok: true, state: adminState() });
    } else {
      cb && cb({ ok: false, error: 'Senha incorreta.' });
    }
  });

  function requireAdmin(cb) {
    if (!socket.data.isAdmin) {
      cb && cb({ ok: false, error: 'Não autorizado.' });
      return false;
    }
    return true;
  }

  socket.on('admin:removeTeam', (teamId, cb) => {
    if (!requireAdmin(cb)) return;
    delete state.teams[teamId];
    delete state.answers[teamId];
    persist();
    broadcastState();
    cb && cb({ ok: true });
  });

  socket.on('admin:renameTeam', ({ teamId, name }, cb) => {
    if (!requireAdmin(cb)) return;
    if (state.teams[teamId] && name && name.trim()) {
      state.teams[teamId].name = name.trim().slice(0, 40);
      persist();
      broadcastState();
    }
    cb && cb({ ok: true });
  });

  socket.on('admin:startQuestion', ({ index, durationSec }, cb) => {
    if (!requireAdmin(cb)) return;
    if (index < 0 || index >= questions.length) {
      return cb && cb({ ok: false, error: 'Pergunta inválida.' });
    }
    clearQuestionTimer();
    state.currentIndex = index;
    state.durationMs = (durationSec && durationSec > 0 ? durationSec : DEFAULT_DURATION_SEC) * 1000;
    state.answers = {};
    state.status = 'question';
    state.questionStartedAt = Date.now();

    questionTimer = setTimeout(closeQuestionOnTimeout, state.durationMs + 300);

    broadcastState();
    cb && cb({ ok: true });
  });

  socket.on('admin:closeQuestion', (_, cb) => {
    if (!requireAdmin(cb)) return;
    clearQuestionTimer();
    if (state.status === 'question') state.status = 'closed';
    broadcastState();
    cb && cb({ ok: true });
  });

  socket.on('admin:reveal', (_, cb) => {
    if (!requireAdmin(cb)) return;
    const q = currentQuestionObj();
    if (!q) return cb && cb({ ok: false, error: 'Nenhuma pergunta ativa.' });
    clearQuestionTimer();

    const perTeam = {};
    for (const team of Object.values(state.teams)) {
      const ans = state.answers[team.id];
      const isCorrect = !!ans && ans.option === q.correct;
      const timeMs = ans ? ans.timeMs : state.durationMs;
      const points = scoreForAnswer(state.durationMs, timeMs, isCorrect);

      team.score += points;
      if (isCorrect) team.correctCount += 1;
      team.totalTimeMs += timeMs;
      team.history.push({
        questionId: q.id,
        roundId: q.roundId,
        correct: isCorrect,
        answered: !!ans,
        option: ans ? ans.option : null,
        timeMs,
        points
      });

      perTeam[team.id] = {
        name: team.name,
        color: team.color,
        option: ans ? ans.option : null,
        answered: !!ans,
        correct: isCorrect,
        points,
        timeMs
      };
    }

    // Ranking de velocidade desta pergunta: só entram equipes que responderam,
    // ordenadas do tempo de resposta mais rápido para o mais lento.
    const speedRanking = Object.values(perTeam)
      .filter(t => t.answered)
      .sort((a, b) => a.timeMs - b.timeMs)
      .map((t, i) => ({ ...t, speedPosition: i + 1 }));

    state.status = 'reveal';
    persist();

    const revealPayload = {
      questionId: q.id,
      correct: q.correct,
      options: q.options,
      concept: q.concept,
      perTeam,
      speedRanking,
      ranking: ranking()
    };

    io.to('players').emit('question:reveal', revealPayload);
    io.to('dashboard').emit('question:reveal', revealPayload);
    io.to('admins').emit('question:reveal', revealPayload);

    broadcastState();
    cb && cb({ ok: true });
  });

  socket.on('admin:resetScores', (_, cb) => {
    if (!requireAdmin(cb)) return;
    for (const team of Object.values(state.teams)) {
      team.score = 0;
      team.correctCount = 0;
      team.totalTimeMs = 0;
      team.history = [];
    }
    state.status = 'lobby';
    state.currentIndex = -1;
    state.answers = {};
    clearQuestionTimer();
    persist();
    broadcastState();
    cb && cb({ ok: true });
  });

  socket.on('admin:resetAll', (_, cb) => {
    if (!requireAdmin(cb)) return;
    state.teams = {};
    state.status = 'lobby';
    state.currentIndex = -1;
    state.answers = {};
    clearQuestionTimer();
    persist();
    broadcastState();
    cb && cb({ ok: true });
  });

  socket.on('admin:finish', (_, cb) => {
    if (!requireAdmin(cb)) return;
    clearQuestionTimer();
    state.status = 'finished';
    broadcastState();
    cb && cb({ ok: true });
  });

  socket.on('admin:backToLobby', (_, cb) => {
    if (!requireAdmin(cb)) return;
    clearQuestionTimer();
    state.status = 'lobby';
    state.currentIndex = -1;
    state.answers = {};
    broadcastState();
    cb && cb({ ok: true });
  });

  socket.on('disconnect', () => {});
});

server.listen(PORT, () => {
  console.log(`Quiz SIPAT Friozem 2026 rodando em http://localhost:${PORT}`);
  console.log(`  Painel de equipes: http://localhost:${PORT}/`);
  console.log(`  Painel do admin:   http://localhost:${PORT}/admin.html`);
  console.log(`  Telão / ranking:   http://localhost:${PORT}/dashboard.html`);
});
