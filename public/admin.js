const socket = io();
const $ = (sel) => document.querySelector(sel);

let isLoggedIn = false;
let lastState = null;
let adminTimerInterval = null;

$('#btnLogin').addEventListener('click', login);
$('#passInput').addEventListener('keydown', (e) => { if (e.key === 'Enter') login(); });

function login() {
  const pass = $('#passInput').value;
  socket.emit('admin:login', pass, (res) => {
    if (!res.ok) {
      $('#loginError').textContent = res.error;
      return;
    }
    isLoggedIn = true;
    $('#loginBox').style.display = 'none';
    $('#adminBox').style.display = 'block';
    render(res.state);
  });
}

socket.on('state:update', (state) => {
  if (!isLoggedIn) return;
  render(state);
});

socket.on('connect', () => {
  if (isLoggedIn) {
    // sessão de socket pode ter sido recriada; refaz login silenciosamente não é possível sem senha,
    // então apenas recarrega a página para reautenticar caso a conexão caia.
  }
});

function render(state) {
  lastState = state;
  $('#statusBadge').textContent = state.status;
  $('#statusBadge').className = 'badge' + (state.status === 'question' ? ' live' : '');
  $('#teamCountBadge').textContent = `${state.teamCount} equipes`;

  renderQuestionList(state);
  renderCurrentQuestion(state);
  renderTeams(state);
  renderRanking(state.ranking);
}

function renderQuestionList(state) {
  const box = $('#qlist');
  box.innerHTML = '';
  let lastRound = null;
  state.questionList.forEach((q) => {
    if (q.roundId !== lastRound) {
      lastRound = q.roundId;
      const h = document.createElement('div');
      h.className = 'qlist-round';
      h.textContent = `Módulo ${q.roundId} — ${q.roundTitle}`;
      box.appendChild(h);
    }
    const item = document.createElement('div');
    item.className = 'qlist-item' + (state.currentIndex === q.index ? ' active' : '');
    item.innerHTML = `
      <span class="qidx">#${q.index + 1}</span>
      <span class="qtext">${q.text}</span>
      <button class="btn-primary btn-small">Iniciar</button>
    `;
    item.querySelector('button').addEventListener('click', () => startQuestion(q.index));
    box.appendChild(item);
  });
}

function startQuestion(index) {
  const durationSec = parseInt($('#durationInput').value, 10) || 20;
  socket.emit('admin:startQuestion', { index, durationSec }, (res) => {
    if (!res.ok) alert(res.error);
  });
}

function renderCurrentQuestion(state) {
  const box = $('#currentQuestionBox');
  const controls = $('#questionControls');

  if (!state.question) {
    box.innerHTML = `
      <p class="muted">Nenhuma pergunta em andamento.</p>
      <button class="btn-primary btn-block" id="btnQuickStart">▶ Iniciar o Quiz (Pergunta #1)</button>
      <p class="muted" style="font-size:0.8rem">Ou role até "Rodadas &amp; perguntas" para começar de uma pergunta específica.</p>
    `;
    $('#btnQuickStart').addEventListener('click', () => startQuestion(0));
    controls.style.display = 'none';
    stopAdminTimer();
    $('#speedRankingBox').style.display = 'none';
    return;
  }

  if (state.status !== 'reveal') {
    $('#speedRankingBox').style.display = 'none';
  }

  const q = state.question;
  const options = ['a', 'b', 'c', 'd'].map(k => {
    const isCorrect = state.status !== 'question' && state.status !== 'closed' ? false : (q.correct === k);
    return `<div class="opt-btn${q.correct === k ? ' correct' : ''}"><span class="letter">${k.toUpperCase()}</span><span>${q.options[k]}</span></div>`;
  }).join('');

  box.innerHTML = `
    <div class="row between">
      <span class="badge round">${q.roundTitle}</span>
      <span class="badge">Pergunta ${q.index + 1}/${q.total}</span>
    </div>
    <h3>${q.text}</h3>
    <div class="options-grid">${options}</div>
  `;

  controls.style.display = 'flex';
  $('#answeredCount').textContent = `${state.answeredCount} de ${state.teamCount} equipes responderam`;

  if (state.status === 'question') {
    startAdminTimer(state.questionStartedAt, state.durationMs);
  } else {
    stopAdminTimer();
    $('#adminTimer').textContent = state.status === 'reveal' ? 'OK' : '0';
    $('#adminTimerBar').style.width = state.status === 'reveal' ? '100%' : '0%';
  }
}

socket.on('question:reveal', (data) => {
  if (!isLoggedIn) return;
  const box = $('#speedRankingBox');
  const el = $('#speedRankingList');
  if (!data.speedRanking || !data.speedRanking.length) {
    box.style.display = 'none';
    return;
  }
  box.style.display = 'block';
  el.innerHTML = '';
  data.speedRanking.forEach(t => {
    const medal = t.speedPosition === 1 ? '🥇' : t.speedPosition === 2 ? '🥈' : t.speedPosition === 3 ? '🥉' : `${t.speedPosition}º`;
    const row = document.createElement('div');
    row.className = 'row between';
    row.style.padding = '6px 0';
    row.style.borderBottom = '1px solid var(--card-border)';
    row.innerHTML = `
      <span class="row"><span>${medal}</span><span class="team-dot" style="background:${t.color}"></span> ${t.name}${t.correct ? '' : ' <span class="muted">(errou)</span>'}</span>
      <span class="muted">${(t.timeMs / 1000).toFixed(1)}s</span>
    `;
    el.appendChild(row);
  });
});

function startAdminTimer(startedAt, durationMs) {
  stopAdminTimer();
  function tick() {
    const elapsed = Date.now() - startedAt;
    const remaining = Math.max(0, durationMs - elapsed);
    const pct = Math.max(0, Math.min(100, (remaining / durationMs) * 100));
    $('#adminTimerBar').style.width = pct + '%';
    $('#adminTimer').textContent = Math.ceil(remaining / 1000);
    if (remaining <= 0) stopAdminTimer();
  }
  tick();
  adminTimerInterval = setInterval(tick, 200);
}
function stopAdminTimer() {
  if (adminTimerInterval) clearInterval(adminTimerInterval);
  adminTimerInterval = null;
}

function renderTeams(state) {
  const box = $('#teamsList');
  if (!state.ranking.length) {
    box.innerHTML = '<p class="muted">Nenhuma equipe ainda.</p>';
    return;
  }
  box.innerHTML = '';
  state.ranking.forEach(team => {
    const row = document.createElement('div');
    row.className = 'row between';
    row.style.padding = '8px 0';
    row.style.borderBottom = '1px solid var(--card-border)';
    row.innerHTML = `
      <span class="row"><span class="team-dot" style="background:${team.color}"></span> ${team.name}</span>
      <span class="row">
        <span class="muted" style="font-size:0.8rem">${team.score} pts</span>
        <button class="btn-ghost btn-small" data-action="rename">Renomear</button>
        <button class="btn-danger btn-small" data-action="remove">Remover</button>
      </span>
    `;
    row.querySelector('[data-action="rename"]').addEventListener('click', () => {
      const name = prompt('Novo nome da equipe:', team.name);
      if (name && name.trim()) socket.emit('admin:renameTeam', { teamId: team.id, name: name.trim() }, () => {});
    });
    row.querySelector('[data-action="remove"]').addEventListener('click', () => {
      if (confirm(`Remover a equipe "${team.name}"?`)) socket.emit('admin:removeTeam', team.id, () => {});
    });
    box.appendChild(row);
  });
}

function renderRanking(list) {
  const box = $('#rankingBox');
  if (!list.length) {
    box.innerHTML = '<p class="muted">Nenhuma equipe ainda.</p>';
    return;
  }
  box.innerHTML = '';
  list.forEach(team => {
    const row = document.createElement('div');
    row.className = 'rank-row' + (team.position === 1 ? ' top1' : team.position === 2 ? ' top2' : team.position === 3 ? ' top3' : '');
    row.innerHTML = `
      <div class="rank-pos">${team.position}</div>
      <div class="team-dot" style="background:${team.color}"></div>
      <div class="rank-name">${team.name}<div class="rank-meta">${team.correctCount} acertos</div></div>
      <div class="rank-score">${team.score}</div>
    `;
    box.appendChild(row);
  });
}

$('#btnClose').addEventListener('click', () => socket.emit('admin:closeQuestion', null, () => {}));
$('#btnReveal').addEventListener('click', () => socket.emit('admin:reveal', null, (res) => { if (!res.ok) alert(res.error); }));
$('#btnBackLobby').addEventListener('click', () => socket.emit('admin:backToLobby', null, () => {}));
$('#btnFinish').addEventListener('click', () => {
  if (confirm('Encerrar o quiz e mostrar o pódio final?')) socket.emit('admin:finish', null, () => {});
});
$('#btnResetScores').addEventListener('click', () => {
  if (confirm('Zerar a pontuação de todas as equipes?')) socket.emit('admin:resetScores', null, () => {});
});
$('#btnResetAll').addEventListener('click', () => {
  if (confirm('Isso vai remover TODAS as equipes e pontuações. Confirmar?')) socket.emit('admin:resetAll', null, () => {});
});
