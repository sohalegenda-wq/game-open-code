'use strict';

const LEVELS = [
  {
    "id": 1,
    "name": "ТЕХНИЧЕСКИЙ КОРИДОР",
    "cols": 6,
    "rows": 6,
    "wallDensity": 0.22,
    "monsterInterval": 1800,
    "lightDrain": 1.0,
    "lightDrainMul": 1,
    "wallDecor": "base",
    "floorDecor": "cables",
    "accent": "#a0aab5",
    "modifiers": {},
    "dialogue": {
      "start": "Слышу тебя. Иду. Тут темно, но я вижу твой голос как ориентир.",
      "danger": "Тут что-то есть. Я слышу шаги.",
      "victory": "Первый коридор позади. Что дальше?"
    },
    "tutorial": true
  },
  {
    "id": 2,
    "name": "СЕРВЕРНАЯ",
    "cols": 6,
    "rows": 7,
    "wallDensity": 0.28,
    "monsterInterval": 1500,
    "lightDrain": 1.0,
    "lightDrainMul": 1,
    "wallDecor": "base",
    "floorDecor": "cables",
    "accent": "#5484a3",
    "modifiers": {
      "falseSilhouettes": 2
    },
    "dialogue": {
      "start": "Серверы ещё дышат. Слышу их гул. Где ты меня ведёшь?",
      "danger": "Индикатор погас. Не нравится мне это.",
      "victory": "Слышу, как шумит вентиляция. Идём дальше."
    }
  },
  {
    "id": 3,
    "name": "СТОЛОВАЯ",
    "cols": 7,
    "rows": 7,
    "wallDensity": 0.3,
    "monsterInterval": 1400,
    "lightDrain": 1.0,
    "lightDrainMul": 1,
    "wallDecor": "base",
    "floorDecor": "cables",
    "accent": "#926f52",
    "modifiers": {},
    "dialogue": {
      "start": "Тут кто-то ел. Недавно. Столы ещё тёплые.",
      "danger": "Стул скрипнул. Я не двигался.",
      "victory": "Столовая пустая. Как будто все ушли разом."
    }
  },
  {
    "id": 4,
    "name": "ВЕНТИЛЯЦИОННАЯ ШАХТА",
    "cols": 5,
    "rows": 5,
    "wallDensity": 0.35,
    "monsterInterval": 1300,
    "lightDrain": 1.0,
    "lightDrainMul": 1.4,
    "wallDecor": "base",
    "floorDecor": "cables",
    "accent": "#7b8a91",
    "modifiers": {},
    "dialogue": {
      "start": "Тесно. Я почти не могу дышать. Не веди меня в тупик.",
      "danger": "Я слышу его. Он в трубе.",
      "victory": "Выбрались. Голова кружится."
    }
  },
  {
    "id": 5,
    "name": "РЕАКТОР",
    "cols": 7,
    "rows": 7,
    "wallDensity": 0.28,
    "monsterInterval": 1400,
    "lightDrain": 1.1,
    "lightDrainMul": 1,
    "wallDecor": "base",
    "floorDecor": "cables",
    "accent": "#eb5757",
    "modifiers": {
      "fakeDuplicate": true
    },
    "dialogue": {
      "start": "Это реактор. Он ещё работает. Я слышу его сердцебиение. Или это не он?",
      "danger": "Свет мигнул. Плохо.",
      "victory": "Реактор позади. Не оглядывайся."
    }
  },
  {
    "id": 6,
    "name": "МЕДБЛОК",
    "cols": 6,
    "rows": 6,
    "wallDensity": 0.26,
    "monsterInterval": 1600,
    "lightDrain": 1.0,
    "lightDrainMul": 1,
    "wallDecor": "base",
    "floorDecor": "cables",
    "accent": "#dddfe3",
    "modifiers": {
      "silentMonster": true
    },
    "dialogue": {
      "start": "Я видел кровать. Можно я просто полежу минуту? Нет. Идём дальше.",
      "danger": "Тишина. Слишком тишина.",
      "victory": "Медблок. Здесь пахнет спиртом."
    }
  },
  {
    "id": 7,
    "name": "АРХИВ",
    "cols": 7,
    "rows": 8,
    "wallDensity": 0.32,
    "monsterInterval": 1400,
    "lightDrain": 1.0,
    "lightDrainMul": 1,
    "wallDecor": "base",
    "floorDecor": "cables",
    "accent": "#9775b5",
    "modifiers": {
      "falseSilhouettes": 3
    },
    "dialogue": {
      "start": "Здесь документы. Имена. Много имён. Я не хочу знать, что тут произошло.",
      "danger": "Бумаги шуршат. Он здесь.",
      "victory": "Архив закончился. Никогда не вернусь."
    }
  },
  {
    "id": 8,
    "name": "СТОЛОВАЯ ПЕРСОНАЛА",
    "cols": 6,
    "rows": 6,
    "wallDensity": 0.28,
    "monsterInterval": 1500,
    "lightDrain": 1.0,
    "lightDrainMul": 1,
    "wallDecor": "base",
    "floorDecor": "cables",
    "accent": "#85939c",
    "modifiers": {
      "lightGlitch": true
    },
    "dialogue": {
      "start": "Холодильник открыт. Кто-то был здесь до меня.",
      "danger": "Он дышит за спиной.",
      "victory": "Столовая персонала. Холодильник гудит."
    }
  },
  {
    "id": 9,
    "name": "ДУШЕВЫЕ",
    "cols": 6,
    "rows": 7,
    "wallDensity": 0.3,
    "monsterInterval": 1400,
    "lightDrain": 1.0,
    "lightDrainMul": 1,
    "wallDecor": "base",
    "floorDecor": "cables",
    "accent": "#6fa4aa",
    "modifiers": {
      "monsterTeleport": true
    },
    "dialogue": {
      "start": "Вода капает. Ритмично. Слишком ритмично.",
      "danger": "Шаги в воде.",
      "victory": "Душевые. Не останавливайся."
    }
  },
  {
    "id": 10,
    "name": "СКЛАД",
    "cols": 8,
    "rows": 8,
    "wallDensity": 0.3,
    "monsterInterval": 1100,
    "lightDrain": 1.0,
    "lightDrainMul": 1,
    "wallDecor": "base",
    "floorDecor": "cables",
    "accent": "#a98763",
    "modifiers": {
      "fastMonster": true
    },
    "dialogue": {
      "start": "Ящики. Мешки. Что-то шевелится за ними. Или это ветер?",
      "danger": "Он рядом. Быстрее.",
      "victory": "Склад пройден. Дальше."
    }
  },
  {
    "id": 11,
    "name": "ЛАБОРАТОРИЯ",
    "cols": 7,
    "rows": 7,
    "wallDensity": 0.3,
    "monsterInterval": 1400,
    "lightDrain": 1.0,
    "lightDrainMul": 1,
    "wallDecor": "base",
    "floorDecor": "cables",
    "accent": "#85b7ad",
    "modifiers": {
      "playerFlicker": true
    },
    "dialogue": {
      "start": "Эксперименты. Они что-то здесь выращивали. Я не хочу знать что.",
      "danger": "Стекло лопнуло. Где-то.",
      "victory": "Лаборатория. Всё в пробирках."
    }
  },
  {
    "id": 12,
    "name": "ГЕНЕРАТОРНАЯ",
    "cols": 7,
    "rows": 6,
    "wallDensity": 0.28,
    "monsterInterval": 1500,
    "lightDrain": 1.2,
    "lightDrainMul": 1,
    "wallDecor": "base",
    "floorDecor": "cables",
    "accent": "#f2c94c",
    "modifiers": {
      "loudHum": true
    },
    "dialogue": {
      "start": "Генератор работает. Если он встанет — мы оба останемся в темноте.",
      "danger": "Гул стал громче.",
      "victory": "Генераторная. Свет не мигает."
    }
  },
  {
    "id": 13,
    "name": "ТОННЕЛЬ СВЯЗИ",
    "cols": 5,
    "rows": 9,
    "wallDensity": 0.3,
    "monsterInterval": 1100,
    "lightDrain": 1.0,
    "lightDrainMul": 1,
    "wallDecor": "base",
    "floorDecor": "cables",
    "accent": "#6e8eaf",
    "modifiers": {
      "fastMonster": true,
      "narrowCorridor": true
    },
    "dialogue": {
      "start": "Я почти у цели. Слышу выход. Не потеряй меня сейчас.",
      "danger": "Он близко. Очень близко.",
      "victory": "Тоннель кончился. Впереди шлюз."
    }
  },
  {
    "id": 14,
    "name": "ШЛЮЗ",
    "cols": 6,
    "rows": 6,
    "wallDensity": 0.32,
    "monsterInterval": 1100,
    "lightDrain": 1.0,
    "lightDrainMul": 1.3,
    "wallDecor": "base",
    "floorDecor": "cables",
    "accent": "#ae7373",
    "modifiers": {
      "fastMonster": true
    },
    "dialogue": {
      "start": "Дверь заперта. Нужен код. Или ты откроешь её отсюда?",
      "danger": "Он у двери. Отвлеки.",
      "victory": "Шлюз открыт. Идём наверх."
    }
  },
  {
    "id": 15,
    "name": "ПОВЕРХНОСТЬ",
    "cols": 7,
    "rows": 7,
    "wallDensity": 0.28,
    "monsterInterval": 1200,
    "lightDrain": 1.0,
    "lightDrainMul": 1,
    "wallDecor": "base",
    "floorDecor": "cables",
    "accent": "#27ae60",
    "modifiers": {
      "twoMonsters": true
    },
    "dialogue": {
      "start": "Я вышел. Я вижу небо. Спасибо.",
      "danger": "Последний рывок.",
      "victory": "Ты вывел его. Ты слышал его голос. Ты не подвёл."
    }
  }
];

const $ = id => document.getElementById(id);
const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));
const distance = (a, b) => Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
const DIRECTIONS = {up:[0,-1], down:[0,1], left:[-1,0], right:[1,0]};
const same = (a, b) => a.x === b.x && a.y === b.y;

function seededRandom(seed) {
  let value = seed >>> 0;
  return () => { value = (Math.imul(1664525, value) + 1013904223) >>> 0; return value / 4294967296; };
}
function neighbors(p) {
  return Object.values(DIRECTIONS).map(([dx,dy]) => ({x:p.x+dx,y:p.y+dy}));
}
function walkable(grid, p) { return grid[p.y]?.[p.x] !== undefined && grid[p.y][p.x] !== 1; }
function bfs(grid, start, target) {
  const key = p => p.x + ',' + p.y;
  const queue = [start], parents = new Map([[key(start), null]]);
  for (let i=0; i<queue.length; i++) {
    const p = queue[i];
    if (same(p,target)) {
      const path = [];
      for (let at=p; at; at=parents.get(key(at))) path.unshift(at);
      return path;
    }
    for (const next of neighbors(p)) if (walkable(grid,next) && !parents.has(key(next))) {
      parents.set(key(next),p); queue.push(next);
    }
  }
  return null;
}
function generateMaze(level) {
  const random = seededRandom(level.id), start = {x:1,y:1};
  const exit = {x:level.cols-2,y:level.rows-2};
  let grid;
  for (let attempt=0; attempt<20; attempt++) {
    const density = level.wallDensity - (level.modifiers.narrowCorridor ? .03 : 0);
    grid = Array.from({length:level.rows}, (_,y) => Array.from({length:level.cols}, (_,x) =>
      x===0 || y===0 || x===level.cols-1 || y===level.rows-1 || random()<density ? 1 : 0));
    grid[start.y][start.x]=0; grid[exit.y][exit.x]=0;
    if (level.modifiers.narrowCorridor) {
      // Horizontal lanes with alternating side links, all inside the outer walls.
      for (let y=1; y<level.rows-1; y+=2) {
        for (let x=1; x<level.cols-1; x++) grid[y][x]=0;
        if (y+1<level.rows-1) grid[y+1][((y-1)/2)%2===0 ? level.cols-2 : 1]=0;
      }
    }
    if (bfs(grid,start,exit)) break;
    if (attempt===19) {
      for (let x=1; x<=exit.x; x++) grid[1][x]=0;
      for (let y=1; y<=exit.y; y++) grid[y][exit.x]=0;
    }
  }
  // For 5×5 the maximum interior distance is 4, not 6.
  const requiredDistance = Math.min(6, level.cols+level.rows-6);
  const spots=[];
  for (let y=Math.floor(level.rows*2/3); y<level.rows-1; y++) {
    for (let x=1; x<level.cols-1; x++) {
      const p={x,y};
      if (distance(start,p)>=requiredDistance) spots.push(p);
    }
  }
  // Carve a connection to a spawn if random walls isolated it.
  const chosen=[];
  const count=level.modifiers.twoMonsters ? 2 : 1;
  for (let i=0; i<count; i++) {
    const available=spots.filter(p=>!chosen.some(c=>same(c,p)));
    const reachable=available.filter(p=>walkable(grid,p) && bfs(grid,start,p));
    const candidates=reachable.length ? reachable : available;
    const p={...candidates[Math.floor(random()*candidates.length)]};
    if (!walkable(grid,p) || !bfs(grid,start,p)) {
      for (let x=1; x<=p.x; x++) grid[1][x]=0;
      for (let y=1; y<=p.y; y++) grid[y][p.x]=0;
    }
    // A corner spawn must have room to retreat: a one-cell dead end can
    // otherwise make the exit impossible to reach (notably the 5×5 zone).
    const interior=neighbors(p).filter(n=>n.x>0&&n.y>0&&n.x<level.cols-1&&n.y<level.rows-1);
    for (const n of interior) {
      if (interior.filter(n=>walkable(grid,n)).length>=2) break;
      grid[n.y][n.x]=0;
    }
    chosen.push(p);
  }
  // Leave a side cell at the exit too: light must not pin an approaching
  // monster into a sealed exit where the player can never pass it.
  const exitNeighbors=neighbors(exit).filter(p=>p.x>0&&p.y>0&&p.x<level.cols-1&&p.y<level.rows-1);
  for (const p of exitNeighbors) grid[p.y][p.x]=0;
  grid[exit.y][exit.x]=2; grid[start.y][start.x]=3;
  for (const p of chosen) if (!same(p,exit)) grid[p.y][p.x]=4;
  return {grid,start,exit,spawns:chosen};
}

const Progress = {
  read() {
    try { const n=Number(localStorage.getItem('observer_progress')); return Number.isInteger(n)&&n>=1&&n<=15 ? n : 1; }
    catch (_) { return 1; }
  },
  write(n) { try { localStorage.setItem('observer_progress',String(n)); } catch (_) { /* Private WebViews may deny storage. */ } }
};

const Audio = {
  context:null, hum:null,
  unlock() {
    try {
      if (!this.context) this.context=new (window.AudioContext||window.webkitAudioContext)();
      if (this.context.state==='suspended') this.context.resume().then(()=>{ if (Game.state==='PLAYING'&&!Game.paused) this.startHum(); }).catch(()=>{});
      if (Game.state==='PLAYING'&&!Game.paused) this.startHum();
    } catch (_) { /* Audio is optional; movement must always work. */ }
  },
  tone(frequency, duration, volume, endFrequency, delay=0) {
    if (!this.context || this.context.state!=='running') return;
    const ctx=this.context, time=ctx.currentTime+delay;
    const oscillator=ctx.createOscillator(), gain=ctx.createGain();
    oscillator.type='sine'; oscillator.frequency.setValueAtTime(frequency,time);
    if (endFrequency) oscillator.frequency.exponentialRampToValueAtTime(endFrequency,time+duration);
    gain.gain.setValueAtTime(.0001,time); gain.gain.exponentialRampToValueAtTime(volume,time+.005);
    gain.gain.exponentialRampToValueAtTime(.0001,time+duration);
    oscillator.connect(gain); gain.connect(ctx.destination);
    oscillator.start(time); oscillator.stop(time+duration+.01);
    oscillator.onended=()=>{ oscillator.disconnect(); gain.disconnect(); };
  },
  noise(duration=.02, volume=.05) {
    const ctx=this.context; if (!ctx||ctx.state!=='running') return;
    const buffer=ctx.createBuffer(1,Math.ceil(ctx.sampleRate*duration),ctx.sampleRate), data=buffer.getChannelData(0);
    for (let i=0;i<data.length;i++) data[i]=(Math.random()*2-1)*(1-i/data.length);
    const source=ctx.createBufferSource(), gain=ctx.createGain();
    source.buffer=buffer; gain.gain.value=volume; source.connect(gain); gain.connect(ctx.destination);
    source.start(); source.onended=()=>{ source.disconnect(); gain.disconnect(); };
  },
  startHum() {
    if (this.hum||!this.context||this.context.state!=='running') return;
    const oscillator=this.context.createOscillator(), gain=this.context.createGain();
    const loud=Game.level.modifiers.loudHum;
    oscillator.frequency.value=loud ? 60 : 40; gain.gain.value=loud ? .03 : .02;
    oscillator.connect(gain); gain.connect(this.context.destination); oscillator.start();
    this.hum={oscillator,gain};
  },
  stopHum() {
    if (!this.hum) return;
    this.hum.oscillator.stop(); this.hum.oscillator.disconnect(); this.hum.gain.disconnect(); this.hum=null;
  },
  step() { this.tone(80,.03,.05); },
  monster() { if (!Game.level.modifiers.silentMonster&&!Game.level.modifiers.loudHum) this.tone(55,.045,.025); },
  alarm() { this.tone(220,.2,.08); },
  victory() { [261.63,329.63,392].forEach(f=>this.tone(f,.1,.1)); },
  death() { this.tone(220,.4,.1,110); }
};

// One pausable timer for the typewriter. No hidden-tab catch-up or stale lines.
const Terminal = {
  queue:[], text:'', position:0, timer:null, due:0, remaining:0, phase:'idle', paused:false,
  clear() {
    clearTimeout(this.timer); this.timer=null; this.queue=[]; this.text=''; this.position=0;
    this.phase='idle'; this.paused=false; this.remaining=0;
    $('terminal').textContent=''; $('terminal').style.opacity='1';
  },
  say(text) { Game.events++; this.queue.push(text); if (this.phase==='idle') this.next(); },
  next() {
    if (!this.queue.length) { this.phase='idle'; return; }
    this.text=this.queue.shift(); this.position=0; this.phase='typing';
    $('terminal').textContent=''; $('terminal').style.opacity='1'; this.schedule(30);
  },
  schedule(ms) {
    clearTimeout(this.timer); this.remaining=ms;
    if (this.paused) return;
    this.due=performance.now()+ms; this.timer=setTimeout(()=>this.tick(),ms);
  },
  tick() {
    this.timer=null;
    if (this.phase==='typing') {
      $('terminal').textContent=this.text.slice(0,++this.position);
      $('terminal').scrollTop=$('terminal').scrollHeight;
      if (this.position<this.text.length) this.schedule(30);
      else { this.phase='holding'; this.schedule(4000); }
    } else {
      $('terminal').style.opacity='.4'; this.phase='idle'; this.next();
    }
  },
  pause() {
    this.paused=true;
    if (this.timer!==null) { this.remaining=Math.max(0,this.due-performance.now()); clearTimeout(this.timer); this.timer=null; }
  },
  resume() { this.paused=false; if (this.phase!=='idle') this.schedule(this.remaining); }
};

const Game = {
  state:'START', running:false, paused:false, nativePaused:false, raf:0, level:null,
  levelIndex:0, player:null, monsters:[], cells:[], elapsed:0, events:0, energy:100, stress:0,
  light:false, lightHeld:false, lightPointer:null, lightDelay:0, overheating:false,
  canMove:true, moveTimer:null, lastTime:0, dangerLinePlayed:false, alarmPlayed:false,
  scheduled:[], falseDots:[], fakeAccumulator:0, duplicateAccumulator:0,

  setState(next) {
    if (!['START','PLAYING','DEATH','VICTORY'].includes(next)) return;
    this.running=false; cancelAnimationFrame(this.raf); this.raf=0;
    clearTimeout(this.moveTimer); this.moveTimer=null; this.releaseLight(); Audio.stopHum(); Terminal.clear();
    this.state=next;
    document.querySelectorAll('.screen').forEach(el=>el.classList.toggle('active',el.id===next));
    if (next==='START') {
      this.levelIndex=Progress.read()-1;
      $('progressHint').textContent='ЗОНА '+String(this.levelIndex+1).padStart(2,'0')+' / ГЛУБИНА −240 М';
    } else if (next==='PLAYING') {
      this.initLevel(); this.paused=document.hidden||this.nativePaused;
      $('pauseNotice').hidden=!this.paused;
      if (!this.paused) { this.running=true; this.lastTime=performance.now(); Audio.startHum(); this.raf=requestAnimationFrame(now=>this.loop(now)); }
      else Terminal.pause();
    } else if (next==='DEATH') {
      Audio.death();
      // Reinsert the class to replay the three-iteration glitch on every death.
      const heading=$('DEATH').querySelector('h2'); heading.style.animation='none'; void heading.offsetWidth; heading.style.animation='';
    } else if (next==='VICTORY') {
      this.events++; // The victory dialogue counts exactly once.
      $('victoryLine').textContent=this.level.dialogue.victory;
      $('statistics').textContent='ВРЕМЯ: '+(this.elapsed/1000).toFixed(1)+' с\nЭНЕРГИЯ: '+Math.round(this.energy)+'%\nСОБЫТИЙ: '+this.events;
      $('nextButton').textContent=this.level.id<15 ? 'СЛЕДУЮЩАЯ ЗОНА' : 'ЗАНОВО';
      Progress.write(this.level.id<15 ? this.level.id+1 : 1); Audio.victory();
    }
  },
  initLevel() {
    this.level=LEVELS[this.levelIndex];
    const generated=generateMaze(this.level);
    this.grid=generated.grid; this.player={...generated.start}; this.exit=generated.exit;
    this.monsters=generated.spawns.map(p=>({...p,accumulator:0,lastRepel:-500,near:false,teleportClock:0,hiddenFor:0}));
    this.energy=100; this.stress=0; this.elapsed=0; this.events=0; this.canMove=true;
    this.light=false; this.lightHeld=false; this.lightDelay=0; this.overheating=false;
    this.dangerLinePlayed=false; this.alarmPlayed=false;
    this.falseDots=[]; this.fakeAccumulator=0; this.duplicateAccumulator=0;
    this.scheduled=[{at:500,text:this.level.dialogue.start}];
    this.tutorialMoved=false;
    if (this.level.tutorial) this.scheduled.push({at:1000,text:'Нажми ↑'},{at:5000,text:'Дойди до зелёной клетки'});
    $('zoneTitle').textContent='ЗОНА '+String(this.level.id).padStart(2,'0')+' · '+this.level.name;
    $('monitor').classList.remove('lit','static'); $('energy').classList.remove('overheating');
    $('app').style.setProperty('--accent',this.level.accent);
    this.buildMonitor(); this.refreshFalseDots(); this.renderMonitor();
    requestAnimationFrame(()=>this.fitMaze());
  },
  buildMonitor() {
    const maze=$('maze'); maze.replaceChildren(); this.cells=[];
    maze.style.gridTemplateColumns='repeat('+this.level.cols+',1fr)';
    maze.style.gridTemplateRows='repeat('+this.level.rows+',1fr)';
    maze.style.aspectRatio=this.level.cols+'/'+this.level.rows;
    for (let y=0;y<this.level.rows;y++) for (let x=0;x<this.level.cols;x++) {
      const cell=document.createElement('div'), type=this.grid[y][x];
      cell.className='cell '+(type===1?'wall':type===2?'exit':'floor'); maze.appendChild(cell); this.cells.push(cell);
    }
    this.playerMarker=document.createElement('div'); this.playerMarker.className='marker player';
    this.monsterMarkers=this.monsters.map(()=>{ const el=document.createElement('div'); el.className='marker monster'; return el; });
    $('radar').replaceChildren();
    const dot=className=>{ const el=document.createElement('div'); el.className='radar-dot '+className; $('radar').appendChild(el); return el; };
    this.playerDot=dot('player'); this.exitDot=dot('exit'); this.monsterDots=this.monsters.map(()=>dot('monster'));
    const n=(this.level.modifiers.falseSilhouettes||0)+(this.level.modifiers.fakeDuplicate?1:0);
    this.falseDotElements=Array.from({length:n},()=>dot('false'));
    this.fitMaze();
  },
  fitMaze() {
    if (!this.level||this.state!=='PLAYING') return;
    const frame=$('mazeFrame'), style=getComputedStyle(frame);
    const width=frame.clientWidth-parseFloat(style.paddingLeft)-parseFloat(style.paddingRight);
    const height=frame.clientHeight-parseFloat(style.paddingTop)-parseFloat(style.paddingBottom);
    const cell=Math.max(0,Math.min(width/this.level.cols,height/this.level.rows));
    $('maze').style.width=(cell*this.level.cols)+'px'; $('maze').style.height=(cell*this.level.rows)+'px';
  },
  refreshFalseDots() {
    const n=this.level.modifiers.falseSilhouettes||0;
    for (let i=0;i<n;i++) this.falseDots[i]={x:1+Math.random()*(this.level.cols-3),y:1+Math.random()*(this.level.rows-3)};
    if (this.level.modifiers.fakeDuplicate&&!this.falseDots[n]) this.falseDots[n]={x:this.level.cols-2,y:1};
  },
  loop(now) {
    if (!this.running||this.state!=='PLAYING'||this.paused) return;
    const dt=clamp(now-this.lastTime,0,250); this.lastTime=now;
    this.elapsed+=dt;
    this.updatePlayer(dt); this.updateLight(dt); this.updateMonsters(dt);
    if (this.state!=='PLAYING') return;
    this.updateStress(dt); this.updateAtmosphere(dt); this.checkApproaches(); this.renderMonitor();
    this.raf=requestAnimationFrame(time=>this.loop(time));
  },
  updatePlayer() { /* Position changes only on a command, never by frame interpolation. */ },
  move(dx,dy) {
    if (this.state!=='PLAYING'||this.paused||!this.canMove) return;
    this.canMove=false; clearTimeout(this.moveTimer); this.moveTimer=setTimeout(()=>{ this.canMove=true; },120);
    const next={x:this.player.x+dx,y:this.player.y+dy};
    if (!walkable(this.grid,next)) { Audio.noise(); return; }
    this.player=next; Audio.step();
    if (this.monsters.some(m=>same(m,this.player))) { this.setState('DEATH'); return; }
    if (same(this.player,this.exit)) { this.setState('VICTORY'); return; }
    if (this.level.tutorial&&!this.tutorialMoved&&this.elapsed<10000) {
      this.tutorialMoved=true;
      // Do not ask for a first step after one has already happened.
      this.scheduled=this.scheduled.filter(item=>item.text!=='Нажми ↑');
      Terminal.say('Веди по свободным клеткам');
    }
    this.checkApproaches(); this.renderMonitor();
  },
  updateMonsters(dt) {
    for (const m of this.monsters) {
      if (this.level.modifiers.monsterTeleport) {
        if (m.hiddenFor>0) {
          m.hiddenFor=Math.max(0,m.hiddenFor-dt);
          if (m.hiddenFor===0) this.teleport(m);
          if (this.state!=='PLAYING') return;
          continue;
        }
        m.teleportClock+=dt;
        if (m.teleportClock>=20000) { m.teleportClock-=20000; m.hiddenFor=2000; m.accumulator=0; continue; }
      }
      m.accumulator+=dt;
      if (m.accumulator<this.level.monsterInterval) continue;
      m.accumulator-=this.level.monsterInterval;
      if (this.light&&distance(this.player,m)<=2) continue;
      if (Math.random()<.2) continue;
      const dx=this.player.x-m.x, dy=this.player.y-m.y;
      let horizontal=Math.abs(dx)>Math.abs(dy);
      if (Math.abs(dx)===Math.abs(dy)) horizontal=Math.random()<.5;
      const axes=horizontal ? [[Math.sign(dx),0],[0,Math.sign(dy)]] : [[0,Math.sign(dy)],[Math.sign(dx),0]];
      for (const [sx,sy] of axes) {
        if (!sx&&!sy) continue;
        const next={x:m.x+sx,y:m.y+sy};
        if (this.canMonsterEnter(next,m)) { m.x=next.x; m.y=next.y; Audio.monster(); break; }
      }
      if (same(m,this.player)) { this.setState('DEATH'); return; }
    }
  },
  canMonsterEnter(p,self) { return walkable(this.grid,p)&&!this.monsters.some(m=>m!==self&&same(m,p)); },
  teleport(m) {
    // Advance 2–3 edges along a real floor path. Walls and other components cannot be crossed.
    const path=bfs(this.grid,m,this.player);
    if (!path||path.length<3) return;
    const limit=Math.min(2+Math.floor(Math.random()*2),path.length-2);
    for (let i=limit;i>=1;i--) {
      const p=path[i];
      if (this.canMonsterEnter(p,m)&&!same(p,this.player)) { m.x=p.x; m.y=p.y; break; }
    }
    m.accumulator=0;
  },
  pressLight() {
    if (this.state!=='PLAYING'||this.paused||this.overheating||this.lightHeld) return;
    this.lightHeld=true;
    if (this.level.modifiers.lightGlitch&&Math.random()<.3) {
      this.lightDelay=200; $('lightButton').classList.add('pending'); Audio.noise(.08,.07);
    } else this.activateLight();
  },
  activateLight() {
    if (!this.lightHeld||this.overheating||this.paused||this.state!=='PLAYING') return;
    this.lightDelay=0; this.light=true; this.events++;
    $('lightButton').classList.remove('pending');
  },
  releaseLight() {
    this.lightHeld=false; this.light=false; this.lightDelay=0; this.lightPointer=null;
    $('lightButton').classList.remove('pending','pressed'); $('lightButton').setAttribute('aria-pressed','false');
    $('monitor').classList.remove('lit');
  },
  updateLight(dt) {
    if (this.lightDelay>0) { this.lightDelay-=dt; if (this.lightDelay<=0) this.activateLight(); }
    if (this.light) {
      this.energy=Math.max(0,this.energy-30*this.level.lightDrain*this.level.lightDrainMul*dt/1000);
      if (this.energy===0) { this.overheating=true; this.releaseLight(); }
    } else {
      this.energy=Math.min(100,this.energy+10*dt/1000);
      if (this.energy>=30) this.overheating=false;
    }
    if (this.light) for (const m of this.monsters) {
      if (m.hiddenFor>0||distance(this.player,m)>2||this.elapsed-m.lastRepel<500) continue;
      m.lastRepel=this.elapsed;
      const current=distance(this.player,m);
      const options=neighbors(m).filter(p=>this.canMonsterEnter(p,m)&&!same(p,this.player)&&distance(p,this.player)>current);
      options.sort((a,b)=>distance(b,this.player)-distance(a,this.player));
      if (options.length) { m.x=options[0].x; m.y=options[0].y; }
    }
  },
  updateStress(dt) {
    const dist=Math.min(...this.monsters.map(m=>distance(this.player,m)));
    this.stress=clamp(this.stress+(dist<=4?(10-dist)*3:-4)*dt/1000,0,100);
    if (this.stress>=50&&!this.dangerLinePlayed) { this.dangerLinePlayed=true; Terminal.say(this.level.dialogue.danger); }
    if (this.stress>=80) {
      $('monitor').classList.add('static'); if (!this.alarmPlayed) { Audio.alarm(); this.alarmPlayed=true; }
    } else if (this.stress<60) { $('monitor').classList.remove('static'); this.alarmPlayed=false; }
  },
  checkApproaches() {
    for (const m of this.monsters) {
      const near=distance(this.player,m)<=2;
      if (near&&!m.near) this.events++;
      m.near=near;
    }
  },
  updateAtmosphere(dt) {
    const due=this.scheduled.filter(item=>item.at<=this.elapsed);
    this.scheduled=this.scheduled.filter(item=>item.at>this.elapsed);
    due.forEach(item=>Terminal.say(item.text));
    this.fakeAccumulator+=dt;
    if (this.fakeAccumulator>=500) { this.fakeAccumulator%=500; this.refreshFalseDots(); }
    if (this.level.modifiers.fakeDuplicate) {
      this.duplicateAccumulator+=dt;
      if (this.duplicateAccumulator>=150) {
        this.duplicateAccumulator%=150;
        const p=this.falseDots[this.level.modifiers.falseSilhouettes||0];
        p.x=clamp(p.x+(Math.random()-.5),1,this.level.cols-2); p.y=clamp(p.y+(Math.random()-.5),1,this.level.rows-2);
      }
    }
  },
  renderMonitor() {
    if (!this.playerMarker) return;
    const cell=p=>this.cells[p.y*this.level.cols+p.x];
    if (this.playerMarker.parentNode!==cell(this.player)) cell(this.player).appendChild(this.playerMarker);
    const position=(el,p)=>{ el.style.left=((p.x+.5)/this.level.cols*100)+'%'; el.style.top=((p.y+.5)/this.level.rows*100)+'%'; };
    position(this.playerDot,this.player); position(this.exitDot,this.exit);
    this.playerDot.style.visibility=this.level.modifiers.playerFlicker&&this.elapsed%500>=250 ? 'hidden' : 'visible';
    this.monsters.forEach((m,i)=>{
      const marker=this.monsterMarkers[i];
      if (marker.parentNode!==cell(m)) cell(m).appendChild(marker);
      // Teleport suppresses the radar signal only. The physical monster remains visible and dangerous.
      position(this.monsterDots[i],m); this.monsterDots[i].style.visibility=m.hiddenFor>0?'hidden':'visible';
    });
    this.falseDotElements.forEach((el,i)=>{ if (this.falseDots[i]) position(el,this.falseDots[i]); });
    $('energyFill').style.width=this.energy+'%'; $('stressFill').style.width=this.stress+'%';
    $('energyText').textContent=Math.round(this.energy)+'%'; $('stressText').textContent=Math.round(this.stress)+'%';
    $('energy').setAttribute('aria-valuenow',String(Math.round(this.energy))); $('stress').setAttribute('aria-valuenow',String(Math.round(this.stress)));
    $('energy').classList.toggle('overheating',this.overheating);
    $('lightButton').classList.toggle('cooling',this.overheating);
    $('lightButton').classList.toggle('pressed',this.light); $('lightButton').setAttribute('aria-pressed',String(this.light));
    $('monitor').classList.toggle('lit',this.light);
    $('signalStatus').textContent=this.overheating?'СВЕТ: ОХЛАЖДЕНИЕ':this.stress>=80?'ПОМЕХИ':'СИГНАЛ СЛАБЫЙ';
  },
  syncPause() {
    const pause=document.hidden||this.nativePaused;
    if (this.state!=='PLAYING') {
      if (pause) { Terminal.pause(); Audio.stopHum(); if (Audio.context?.state==='running') Audio.context.suspend().catch(()=>{}); }
      return;
    }
    if (pause===this.paused) return;
    this.paused=pause; $('pauseNotice').hidden=!pause;
    if (pause) {
      this.running=false; cancelAnimationFrame(this.raf); this.raf=0; this.releaseLight();
      this.swipe=null; clearTimeout(this.moveTimer); this.canMove=true;
      Terminal.pause(); Audio.stopHum();
      if (Audio.context?.state==='running') Audio.context.suspend().catch(()=>{});
    } else {
      this.lastTime=performance.now(); this.running=true; Terminal.resume();
      if (Audio.context) Audio.context.resume().then(()=>{ if (this.state==='PLAYING'&&!this.paused) Audio.startHum(); }).catch(()=>{});
      this.raf=requestAnimationFrame(now=>this.loop(now));
    }
  }
};

$('startButton').addEventListener('click',()=>{ Audio.unlock(); Game.levelIndex=Progress.read()-1; Game.setState('PLAYING'); });
$('retryButton').addEventListener('click',()=>{ Audio.unlock(); Game.setState('PLAYING'); });
$('nextButton').addEventListener('click',()=>{ Audio.unlock(); Game.levelIndex=Game.level.id<15 ? Game.levelIndex+1 : 0; Game.setState('PLAYING'); });
document.querySelectorAll('[data-direction]').forEach(button=>button.addEventListener('click',()=>{
  Audio.unlock(); Game.move(...DIRECTIONS[button.dataset.direction]);
}));
const lightButton=$('lightButton');
// Pointer events unify touchstart/mousedown and support holding light while using the D-pad.
lightButton.addEventListener('pointerdown',event=>{
  if (event.button!==0||Game.lightPointer!==null) return;
  event.preventDefault(); Audio.unlock(); Game.lightPointer=event.pointerId;
  lightButton.setPointerCapture(event.pointerId); Game.pressLight();
});
function lightUp(event) { if (event.pointerId===Game.lightPointer) Game.releaseLight(); }
lightButton.addEventListener('pointerup',lightUp);
lightButton.addEventListener('pointercancel',lightUp);
lightButton.addEventListener('lostpointercapture',lightUp);
lightButton.addEventListener('contextmenu',event=>event.preventDefault());
lightButton.style.touchAction='none';
$('monitor').addEventListener('touchstart',event=>{
  if (event.touches.length!==1) { Game.swipe=null; return; }
  const t=event.touches[0]; Game.swipe={x:t.clientX,y:t.clientY,id:t.identifier}; Audio.unlock();
},{passive:true});
$('monitor').addEventListener('touchmove',event=>{ if (event.touches.length!==1) Game.swipe=null; },{passive:true});
$('monitor').addEventListener('touchcancel',()=>{ Game.swipe=null; },{passive:true});
$('monitor').addEventListener('touchend',event=>{
  const start=Game.swipe; Game.swipe=null;
  if (!start||event.touches.length) return;
  const t=Array.from(event.changedTouches).find(touch=>touch.identifier===start.id); if (!t) return;
  const dx=t.clientX-start.x,dy=t.clientY-start.y;
  if (Math.max(Math.abs(dx),Math.abs(dy))<30) return;
  if (Math.abs(dx)>Math.abs(dy)) Game.move(Math.sign(dx),0); else Game.move(0,Math.sign(dy));
},{passive:true});
document.addEventListener('keydown',event=>{
  if (Game.state!=='PLAYING'||Game.paused) return;
  const keys={ArrowUp:'up',ArrowDown:'down',ArrowLeft:'left',ArrowRight:'right',w:'up',s:'down',a:'left',d:'right'};
  if (keys[event.key]) { event.preventDefault(); Audio.unlock(); if (!event.repeat) Game.move(...DIRECTIONS[keys[event.key]]); }
  if (event.code==='Space') { event.preventDefault(); if (!event.repeat) { Audio.unlock(); Game.pressLight(); } }
});
document.addEventListener('keyup',event=>{ if (event.code==='Space') Game.releaseLight(); });
document.addEventListener('visibilitychange',()=>Game.syncPause());
window.addEventListener('observerPause',()=>{ Game.nativePaused=true; Game.syncPause(); });
window.addEventListener('observerResume',()=>{ Game.nativePaused=false; Game.syncPause(); });
window.addEventListener('blur',()=>Game.releaseLight());
window.addEventListener('resize',()=>Game.fitMaze());
new ResizeObserver(()=>Game.fitMaze()).observe($('mazeFrame'));
Game.setState('START');
