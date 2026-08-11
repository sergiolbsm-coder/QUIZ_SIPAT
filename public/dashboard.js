const socket = io();
const $ = (sel) => document.querySelector(sel);
let dashTimerInterval = null;
let revealTimeout = null;

socket.emit('dashboard:join');

socket.on('state:update', (state) => {
  $('#lobbyTeamCount').textContent = `${state.teamCount} equipe(s) conectada(s)`;
  renderRanking(state.ranking);

  $('#lobbyView').style.display = 'none';
  $('#questionView').style.display = 'none';
  $('#finishedView').style.display = 'none';

  if (state.status === 'lobby') {
    $('#statusLine').textContent = 'Aguardando início do quiz...';
    $('#lobbyView').style.display = 'block';
    stopDashTimer();
    return;
  }

  if (state.status === 'finished') {
    $('#statusLine').textContent = 'Quiz encerrado — resultado final';
    $('#finishedView').style.display = 'block';
    renderPodium(state.ranking);
    stopDashTimer();
    return;
  }

  if (state.status === 'question' || state.status === 'closed') {
    $('#statusLine').textContent = state.status === 'question' ? 'Pergunta em andamento — respondam rápido!' : 'Tempo esgotado — aguardando revelação';
    $('#questionView').style.display = 'block';
    renderQuestion(state);
    return;
  }

  if (state.status === 'reveal') {
    $('#statusLine').textContent = 'Revelando resposta...';
    $('#questionView').style.display = 'block';
  }
});

function renderQuestion(state) {
  const q = state.question;
  $('#dashRoundBadge').textContent = q.roundTitle;
  $('#dashProgressBadge').textContent = `Pergunta ${q.index + 1}/${q.total}`;
  $('#dashQuestionText').textContent = q.text;

  const grid = $('#dashOptions');
  grid.innerHTML = '';
  for (const key of ['a', 'b', 'c', 'd']) {
    const div = document.createElement('div');
    div.className = 'opt-btn';
    div.dataset.key = key;
    div.innerHTML = `<span class="letter">${key.toUpperCase()}</span><span>${q.options[key]}</span>`;
    grid.appendChild(div);
  }

  $('#dashAnswered').textContent = `${state.answeredCount} de ${state.teamCount} equipes já responderam`;
  $('#speedRankingBox').style.display = 'none';

  if (state.status === 'question') {
    startDashTimer(state.questionStartedAt, state.durationMs);
  } else {
    stopDashTimer();
    $('#dashTimer').textContent = '0';
    $('#dashTimerBar').style.width = '0%';
  }
}

function startDashTimer(startedAt, durationMs) {
  stopDashTimer();
  function tick() {
    const elapsed = Date.now() - startedAt;
    const remaining = Math.max(0, durationMs - elapsed);
    const pct = Math.max(0, Math.min(100, (remaining / durationMs) * 100));
    $('#dashTimerBar').style.width = pct + '%';
    const secs = Math.ceil(remaining / 1000);
    $('#dashTimer').textContent = secs;
    $('#dashTimer').classList.toggle('danger', secs <= 5);
    if (remaining <= 0) stopDashTimer();
  }
  tick();
  dashTimerInterval = setInterval(tick, 200);
}
function stopDashTimer() {
  if (dashTimerInterval) clearInterval(dashTimerInterval);
  dashTimerInterval = null;
}

socket.on('question:reveal', (data) => {
  document.querySelectorAll('#dashOptions .opt-btn').forEach(div => {
    if (div.dataset.key === data.correct) div.classList.add('correct');
  });
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
      <div class="team-dot" style="background:${t.color}"></div>
      <div class="rank-name">${t.name}${t.correct ? '' : ' <span class="muted">(errou)</span>'}</div>
      <div class="rank-score">${(t.timeMs / 1000).toFixed(1)}s</div>
    `;
    el.appendChild(row);
  });
}

function renderRanking(list) {
  const box = $('#dashRanking');
  box.innerHTML = '';
  if (!list.length) {
    box.innerHTML = '<p class="muted">Nenhuma equipe cadastrada ainda.</p>';
    return;
  }
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

function renderPodium(list) {
  const top3 = list.slice(0, 3);
  const order = [1, 0, 2].filter(i => top3[i]); // 2nd, 1st, 3rd para efeito visual
  const box = $('#podium');
  box.innerHTML = '';
  const cls = ['p2', 'p1', 'p3'];
  const labelIdx = { 0: 1, 1: 2, 2: 3 };
  order.forEach((teamIdx, pos) => {
    const team = top3[teamIdx];
    if (!team) return;
    const div = document.createElement('div');
    div.className = 'step ' + (teamIdx === 0 ? 'p1' : teamIdx === 1 ? 'p2' : 'p3');
    div.innerHTML = `
      <div class="bar">${teamIdx + 1}º</div>
      <div class="name">${team.name}</div>
      <div class="score">${team.score} pts</div>
    `;
    box.appendChild(div);
  });
}
