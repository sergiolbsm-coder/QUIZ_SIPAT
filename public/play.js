const socket = io();

const $ = (sel) => document.querySelector(sel);
const screens = {
  register: $('#screen-register'),
  waiting: $('#screen-waiting'),
  question: $('#screen-question'),
  reveal: $('#screen-reveal')
};
const rankingScreen = $('#screen-ranking');

let teamId = localStorage.getItem('sipat_teamId') || null;
let teamName = localStorage.getItem('sipat_teamName') || '';
let myTeam = null;
let currentQuestionId = null;
let answeredThisQuestion = false;
let selectedOption = null;
let timerInterval = null;

function showScreen(name) {
  Object.values(screens).forEach(s => s.style.display = 'none');
  screens[name].style.display = 'block';
}

function fmtColor(hex) {
  return hex || '#888';
}

// ---------- Cadastro ----------
$('#btnJoin').addEventListener('click', doJoin);
$('#teamNameInput').addEventListener('keydown', (e) => { if (e.key === 'Enter') doJoin(); });

function doJoin() {
  const name = $('#teamNameInput').value.trim();
  if (!name) return;
  socket.emit('team:register', { teamId, name }, (res) => {
    if (!res.ok) return alert(res.error || 'Erro ao entrar.');
    teamId = res.teamId;
    teamName = res.team.name;
    localStorage.setItem('sipat_teamId', teamId);
    localStorage.setItem('sipat_teamName', teamName);
    $('#waitingTeamName').textContent = teamName;
    $('#teamBadge').textContent = teamName;
    rankingScreen.style.display = 'block';
    if (res.state) {
      $('#teamCount').textContent = res.state.teamCount;
      renderRanking(res.state.ranking);
    }
    render();
    if (res.recovered) {
      $('#waitingMsg').textContent = `Bem-vindo de volta! Sua pontuação (${res.team.score} pts) foi recuperada.`;
    }
  });
}

$('#btnEditName').addEventListener('click', () => {
  showScreen('waiting');
  screens.waiting.style.display = 'none';
  screens.register.style.display = 'block';
  $('#teamNameInput').value = teamName;
});

if (teamId && teamName) {
  socket.emit('team:register', { teamId, name: teamName }, (res) => {
    if (res.ok) {
      teamId = res.teamId;
      $('#waitingTeamName').textContent = teamName;
      $('#teamBadge').textContent = teamName;
    }
  });
}

// ---------- Estado do jogo ----------
socket.on('state:update', (state) => {
  $('#teamCount').textContent = state.teamCount;

  if (!teamId) {
    showScreen('register');
    rankingScreen.style.display = 'none';
    return;
  }

  rankingScreen.style.display = 'block';
  renderRanking(state.ranking);

  if (state.status === 'lobby' || state.status === 'finished') {
    showScreen('waiting');
    $('#waitingMsg').textContent = state.status === 'finished'
      ? 'Quiz encerrado! Confira o ranking final abaixo.'
      : 'Aguardando o início da rodada...';
    stopTimer();
    return;
  }

  if (state.status === 'question' || state.status === 'closed') {
    if (currentQuestionId !== state.question.id) {
      currentQuestionId = state.question.id;
      answeredThisQuestion = false;
      selectedOption = null;
    }
    renderQuestion(state);
    showScreen('question');
    return;
  }

  if (state.status === 'reveal') {
    showScreen('reveal');
    stopTimer();
  }
});

function renderQuestion(state) {
  const q = state.question;
  $('#roundBadge').textContent = q.roundTitle;
  $('#progressBadge').textContent = `Pergunta ${q.index + 1}/${q.total}`;
  $('#questionText').textContent = q.text;

  const grid = $('#optionsGrid');
  grid.innerHTML = '';
  for (const key of ['a', 'b', 'c', 'd']) {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.innerHTML = `<span class="letter">${key.toUpperCase()}</span><span>${q.options[key]}</span>`;
    if (selectedOption === key) btn.classList.add('selected');
    if (answeredThisQuestion || state.status === 'closed') btn.disabled = true;
    btn.addEventListener('click', () => submitAnswer(key));
    grid.appendChild(btn);
  }

  $('#answerStatus').textContent = answeredThisQuestion
    ? 'Resposta enviada! Aguarde a revelação.'
    : (state.status === 'closed' ? 'Tempo esgotado.' : '');

  startTimer(state.questionStartedAt, state.durationMs, state.status === 'closed');
}

function submitAnswer(option) {
  if (answeredThisQuestion) return;
  selectedOption = option;
  socket.emit('team:answer', { teamId, option }, (res) => {
    if (!res.ok) {
      alert(res.error || 'Não foi possível registrar a resposta.');
      selectedOption = null;
      return;
    }
    answeredThisQuestion = true;
    document.querySelectorAll('.opt-btn').forEach(b => b.disabled = true);
    $('#answerStatus').textContent = 'Resposta enviada! Aguarde a revelação.';
  });
}

function startTimer(startedAt, durationMs, isClosed) {
  stopTimer();
  const bar = $('#timerBar');
  const display = $('#timerDisplay');

  function tick() {
    const elapsed = Date.now() - startedAt;
    const remaining = Math.max(0, durationMs - elapsed);
    const pct = Math.max(0, Math.min(100, (remaining / durationMs) * 100));
    bar.style.width = pct + '%';
    const secs = Math.ceil(remaining / 1000);
    display.textContent = isClosed || remaining <= 0 ? '0' : secs;
    display.classList.toggle('danger', secs <= 5);
    if (remaining <= 0) stopTimer();
  }
  tick();
  timerInterval = setInterval(tick, 200);
}

function stopTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = null;
}

// ---------- Revelação ----------
socket.on('question:reveal', (data) => {
  const box = $('#revealOptions');
  box.innerHTML = '';
  for (const key of ['a', 'b', 'c', 'd']) {
    const div = document.createElement('div');
    div.className = 'opt-btn';
    if (key === data.correct) div.classList.add('correct');
    if (selectedOption === key && key !== data.correct) div.classList.add('wrong');
    div.innerHTML = `<span class="letter">${key.toUpperCase()}</span><span>${data.options[key]}</span>`;
    box.appendChild(div);
  }
  $('#revealConcept').textContent = data.concept || '';

  const mine = data.perTeam[teamId];
  const result = $('#revealMyResult');
  if (!mine || !mine.answered) {
    result.innerHTML = `<span class="badge" style="background:var(--danger);color:#fff">Sua equipe não respondeu — 0 pontos</span>`;
  } else if (mine.correct) {
    result.innerHTML = `<span class="badge" style="background:var(--accent);color:#fff">Acertou! +${mine.points} pontos (respondeu em ${(mine.timeMs / 1000).toFixed(1)}s)</span>`;
  } else {
    result.innerHTML = `<span class="badge" style="background:var(--danger);color:#fff">Errou — 0 pontos (respondeu em ${(mine.timeMs / 1000).toFixed(1)}s)</span>`;
  }

  renderSpeedRanking(data.speedRanking);
  renderRanking(data.ranking);
});

function renderSpeedRanking(list) {
  const box = $('#speedRankingBox');
  const el = $('#speedRankingList');
  if (!list || !list.length) {
    box.style.display = 'none';
    return;
  }
  box.style.display = 'block';
  el.innerHTML = '';
  list.forEach(t => {
    const medal = t.speedPosition === 1 ? '🥇' : t.speedPosition === 2 ? '🥈' : t.speedPosition === 3 ? '🥉' : `${t.speedPosition}º`;
    const row = document.createElement('div');
    row.className = 'rank-row';
    row.innerHTML = `
      <div class="rank-pos">${medal}</div>
      <div class="team-dot" style="background:${fmtColor(t.color)}"></div>
      <div class="rank-name">${t.name}${t.correct ? '' : ' <span class="muted">(errou)</span>'}</div>
      <div class="rank-score">${(t.timeMs / 1000).toFixed(1)}s</div>
    `;
    el.appendChild(row);
  });
}

function renderRanking(list) {
  const el = $('#rankingList');
  el.innerHTML = '';
  if (!list.length) {
    el.innerHTML = '<p class="muted center">Nenhuma equipe cadastrada ainda.</p>';
    return;
  }
  list.forEach(team => {
    const row = document.createElement('div');
    row.className = 'rank-row' + (team.position === 1 ? ' top1' : team.position === 2 ? ' top2' : team.position === 3 ? ' top3' : '');
    row.innerHTML = `
      <div class="rank-pos">${team.position}</div>
      <div class="team-dot" style="background:${fmtColor(team.color)}"></div>
      <div class="rank-name">${team.name}${team.id === teamId ? ' (você)' : ''}
        <div class="rank-meta">${team.correctCount} acertos</div>
      </div>
      <div class="rank-score">${team.score}</div>
    `;
    el.appendChild(row);
  });
}

render();
function render() {
  if (teamId && teamName) {
    $('#waitingTeamName').textContent = teamName;
    $('#teamBadge').textContent = teamName;
    showScreen('waiting');
  } else {
    showScreen('register');
  }
}
