'use strict';
const $ = s => document.querySelector(s), KEY = 'smartplay-arena-v1';

/* ---------- Languages ---------- */
const I = {
en: {
  home:'Home', games:'Games', missions:'Missions', profile:'Profile', lvl:'Level', feat:'Featured game', daily:'Daily challenges',
  trend:'Trending', recent:'Recently played', board:'Leaderboard', all:'View all', play:'Play', again:'Play again', back:'Back to games',
  best:'Best', score:'Score', restart:'Restart', nick:'Nickname', save:'Save', saved:'Nickname saved', lang:'Language', hist:'Game history',
  nohist:'No games yet. Pick one and play!', reset:'Reset progress', ask:'Erase all progress on this device?', start:'Tap to start',
  over:'Game over', newbest:'New best!', levelup:'Level up! Level', done:'Challenge complete', total:'Total XP', played:'Games played',
  demo:'Demo rivals are stored on this device. Earn XP to climb the ranks.', hello:'Welcome back', allg:'All games',
  ch1:'Play 3 games', ch2:'Play the featured game', ch3:'Earn 60 XP',
  wait:'Wait for green…', tap:'TAP!', soon:'Too soon!', round:'Round', watch:'Memorize', your:'Your turn', find:'Find',
  cpu:'Computer is thinking…', win:'You win!', lose:'You lost', draw:'Draw', avg:'Average',
  reaction:'Reaction Rush', reactiond:'Tap the instant it turns green', memory:'Memory Matrix', memoryd:'Remember the glowing tiles',
  target:'Tap Target', targetd:'Hit targets before they vanish', numbers:'Number Hunt', numbersd:'Tap 1 to 16 in order',
  ttt:'Tic Tac Toe', tttd:'Beat the computer', time:'Time left',
  settings:'Settings', sound:'Sound', vibration:'Vibration', search:'Search games', nores:'No games match your search.',
  c_all:'All', c_reflex:'Reflex', c_brain:'Brain', c_strategy:'Strategy', stats:'Game statistics', plays:'Plays', cal:'Streak calendar',
  calnote:'Open the app daily for a bonus: +10 XP on day 1, rising to +50 XP.', cancel:'Cancel', close:'Close', yes:'Yes, erase',
  copyb:'Copy code', bnote:'Copy this code and keep it safe. Paste it on another device to restore your progress.',
  rnote:'Paste your backup code. This replaces the progress on this account.', rconfirm:'Replace current progress with this backup?',
  storeFail:'Progress could not be saved on this device (storage full or blocked).', errGeneric:'Something went wrong. Please try again.',
  updated:'New version ready. Tap to reload.', lbLocal:'Players on this device',
  lbNote:'Local leaderboard: only accounts on this device. There is no online leaderboard.', lbSolo:'Create another local account to compete with a friend on this phone.',
  pinWarn:'The PIN only separates profiles on this device. It is not secure login: anyone with access to this browser can read or delete the data. Never reuse a real PIN or password.',
  shareNote:'Honor system: the app cannot check who you shared with. +25 XP once per day. Rewards are points and badges only - no real money or prizes.',
  lockMsg:'Too many tries. Wait 30 seconds.', maxacc:'Maximum 8 accounts on this device.', b7:'50 games', b8:'Level 10', b9:'Unbeatable', b10:'All challenges',
  lnote:'Accounts live on this device only. The PIN is a simple local lock, not secure login. Use Backup code to move progress.',
  ios:'Install: iPhone Safari → Share → Add to Home Screen. Android Chrome → ⋮ → Install app.',
  login:'Log in', signup:'Create account', guest:'Play as guest', pin:'4-digit PIN', logout:'Log out', badpin:'Wrong nickname or PIN',
  exists:'This nickname already exists', fill:'Enter a nickname and a 4-digit PIN',
  
  welcome:'Welcome to SmartPlay Arena', wsub:'Log in to keep your points safe, or play as a guest.',
  share:'Share & earn', sharetxt:'I am playing SmartPlay Arena!', ch4:'Share the app', copied:'Link copied - paste it to your friends',
  streak:'day streak', bonus:'Daily login bonus', badges:'Badges', install:'Install app', 
  backup:'Backup code', restore:'Restore', bcopied:'Backup code copied', rprompt:'Paste your backup code', rdone:'Progress restored', rbad:'Invalid code',
  b1:'First game', b2:'10 games', b3:'Level 5', b4:'7-day streak', b5:'All 5 games', b6:'Sharer'
},
hi: {
  home:'होम', games:'गेम्स', missions:'मिशन', profile:'प्रोफ़ाइल', lvl:'लेवल', feat:'खास गेम', daily:'रोज़ की चुनौतियाँ',
  trend:'ट्रेंडिंग', recent:'हाल में खेले', board:'लीडरबोर्ड', all:'सब देखें', play:'खेलें', again:'फिर खेलें', back:'गेम्स पर वापस',
  best:'सर्वश्रेष्ठ', score:'स्कोर', restart:'रीस्टार्ट', nick:'उपनाम', save:'सेव करें', saved:'उपनाम सेव हो गया', lang:'भाषा', hist:'गेम इतिहास',
  nohist:'अभी कोई गेम नहीं खेला। एक गेम चुनिए और खेलिए!', reset:'प्रगति रीसेट करें', ask:'इस डिवाइस की सारी प्रगति मिटा दें?', start:'शुरू करने के लिए टैप करें',
  over:'गेम खत्म', newbest:'नया रिकॉर्ड!', levelup:'लेवल अप! लेवल', done:'चुनौती पूरी हुई', total:'कुल XP', played:'खेले गए गेम',
  demo:'डेमो प्रतिद्वंद्वी इसी डिवाइस पर सेव हैं। XP कमाकर ऊपर चढ़िए।', hello:'वापसी पर स्वागत है', allg:'सभी गेम',
  ch1:'3 गेम खेलें', ch2:'आज का खास गेम खेलें', ch3:'60 XP कमाएँ',
  wait:'हरे रंग का इंतज़ार करें…', tap:'टैप करें!', soon:'बहुत जल्दी!', round:'राउंड', watch:'याद करें', your:'आपकी बारी', find:'ढूँढें',
  cpu:'कंप्यूटर सोच रहा है…', win:'आप जीते!', lose:'आप हारे', draw:'ड्रॉ', avg:'औसत',
  reaction:'रिएक्शन रश', reactiond:'हरा होते ही टैप करें', memory:'मेमोरी मैट्रिक्स', memoryd:'चमकते खानों को याद करें',
  target:'टैप टारगेट', targetd:'निशान गायब होने से पहले मारें', numbers:'नंबर हंट', numbersd:'1 से 16 तक क्रम से टैप करें',
  ttt:'टिक टैक टो', tttd:'कंप्यूटर को हराएँ', time:'बचा समय',
  settings:'सेटिंग्स', sound:'आवाज़', vibration:'वाइब्रेशन', search:'गेम खोजें', nores:'कोई गेम नहीं मिला।',
  c_all:'सभी', c_reflex:'रिफ्लेक्स', c_brain:'दिमागी', c_strategy:'रणनीति', stats:'गेम आँकड़े', plays:'बार', cal:'स्ट्रीक कैलेंडर',
  calnote:'रोज़ ऐप खोलें: पहले दिन +10 XP, फिर बढ़कर +50 XP तक।', cancel:'रद्द करें', close:'बंद करें', yes:'हाँ, मिटाएँ',
  copyb:'कोड कॉपी करें', bnote:'यह कोड कॉपी करके सुरक्षित रखें। दूसरे डिवाइस पर पेस्ट करके प्रगति वापस पाएँ।',
  rnote:'अपना बैकअप कोड पेस्ट करें। इससे इस अकाउंट की प्रगति बदल जाएगी।', rconfirm:'मौजूदा प्रगति को इस बैकअप से बदलें?',
  storeFail:'इस डिवाइस पर प्रगति सेव नहीं हो सकी (स्टोरेज भरा या बंद है)।', errGeneric:'कुछ गड़बड़ हुई। कृपया फिर कोशिश करें।',
  updated:'नया वर्शन तैयार है। रीलोड के लिए टैप करें।', lbLocal:'इस डिवाइस के खिलाड़ी',
  lbNote:'लोकल लीडरबोर्ड: सिर्फ़ इसी डिवाइस के अकाउंट। कोई ऑनलाइन लीडरबोर्ड नहीं है।', lbSolo:'इसी फ़ोन पर दोस्त से मुकाबले के लिए एक और लोकल अकाउंट बनाएँ।',
  pinWarn:'PIN सिर्फ़ इस डिवाइस पर प्रोफ़ाइल अलग रखता है। यह सुरक्षित लॉगिन नहीं है: इस ब्राउज़र तक पहुँच वाला कोई भी डेटा पढ़ या मिटा सकता है। असली PIN या पासवर्ड दोबारा इस्तेमाल न करें।',
  shareNote:'भरोसे पर आधारित: ऐप जाँच नहीं सकता कि आपने किसे शेयर किया। दिन में एक बार +25 XP। रिवॉर्ड सिर्फ़ पॉइंट और बैज हैं - असली पैसा या इनाम नहीं।',
  lockMsg:'बहुत ज़्यादा कोशिशें। 30 सेकंड रुकें।', maxacc:'इस डिवाइस पर ज़्यादा से ज़्यादा 8 अकाउंट।', b7:'50 गेम', b8:'लेवल 10', b9:'अजेय', b10:'सारी चुनौतियाँ',
  lnote:'अकाउंट सिर्फ़ इसी डिवाइस पर रहते हैं। PIN एक साधारण लोकल ताला है, सुरक्षित लॉगिन नहीं। प्रगति ले जाने के लिए बैकअप कोड इस्तेमाल करें।',
  ios:'इंस्टॉल: iPhone में Safari → Share → Add to Home Screen। Android में Chrome → ⋮ → Install app।',
  login:'लॉग इन', signup:'अकाउंट बनाएँ', guest:'गेस्ट बनकर खेलें', pin:'4 अंकों का PIN', logout:'लॉग आउट', badpin:'उपनाम या PIN गलत है',
  exists:'यह उपनाम पहले से मौजूद है', fill:'उपनाम और 4 अंकों का PIN डालें',
  
  welcome:'SmartPlay Arena में स्वागत है', wsub:'पॉइंट सुरक्षित रखने के लिए लॉग इन करें, या गेस्ट बनकर खेलें।',
  share:'शेयर करें और कमाएँ', sharetxt:'मैं SmartPlay Arena खेल रहा हूँ!', ch4:'ऐप शेयर करें', copied:'लिंक कॉपी हुआ - दोस्तों को भेजिए',
  streak:'दिन की स्ट्रीक', bonus:'डेली लॉगिन बोनस', badges:'बैज', install:'ऐप इंस्टॉल करें', 
  backup:'बैकअप कोड', restore:'रीस्टोर', bcopied:'बैकअप कोड कॉपी हुआ', rprompt:'अपना बैकअप कोड पेस्ट करें', rdone:'प्रगति वापस आ गई', rbad:'कोड सही नहीं है',
  b1:'पहला गेम', b2:'10 गेम', b3:'लेवल 5', b4:'7 दिन की स्ट्रीक', b5:'सभी 5 गेम', b6:'शेयरर'
}};

/* ---------- Safe storage (never throws) ---------- */
const AK = 'smartplay-accounts-v1', GID = ['reaction', 'memory', 'target', 'numbers', 'ttt'], CHI = ['a', 'b', 'c', 'd'], BID = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'b10'];
const mem = {};
let warned = false;
const ls = {
  get(k) { try { const v = localStorage.getItem(k); if (v !== null) return v; } catch (e) {} return k in mem ? mem[k] : null; },
  set(k, v) { mem[k] = v; try { localStorage.setItem(k, v); return true; } catch (e) { return false; } },
  del(k) { delete mem[k]; try { localStorage.removeItem(k); } catch (e) {} }
};
const jp = s => { try { const o = JSON.parse(s); return o && typeof o === 'object' && !Array.isArray(o) ? o : null; } catch (e) { return null; } };
const num = (v, lo, hi, d = 0) => { v = Math.floor(+v); return Number.isFinite(v) ? Math.min(hi, Math.max(lo, v)) : d; };
const okName = n => typeof n === 'string' && n.trim().length > 0 && /^[\p{L}\p{M}\p{N} _.-]{1,14}$/u.test(n.trim());
const iso = (d = new Date()) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');

/* Rebuilds a safe state object from ANY input (corrupted storage, restored backups). */
function clean(o) {
  o = o && typeof o === 'object' ? o : {};
  const s = {
    name: okName(o.name) ? o.name.trim() : 'Player' + (1000 + Math.floor(Math.random() * 9000)), xp: num(o.xp, 0, 1e7),
    lang: o.lang === 'hi' || o.lang === 'en' ? o.lang : ((navigator.language || '').startsWith('hi') ? 'hi' : 'en'),
    hist: [], best: {}, st: {}, d: {}, streak: { last: '', n: 0 }, cal: [], bdg: [],
    shares: num(o.shares, 0, 1e6), perfect: num(o.perfect, 0, 1e6),
    set: { snd: o.set && o.set.snd === 0 ? 0 : 1, vib: o.set && o.set.vib === 0 ? 0 : 1 }
  };
  if (Array.isArray(o.hist)) s.hist = o.hist.filter(h => h && GID.includes(h.g)).slice(0, 30).map(h => ({ g: h.g, s: num(h.s, 0, 1e5), x: num(h.x, 0, 100), t: num(h.t, 0, 9e12) }));
  GID.forEach(id => {
    if (o.best && o.best[id] != null && Number.isFinite(+o.best[id])) s.best[id] = num(o.best[id], 0, 1e5);
    const q = o.st && o.st[id], h = s.hist.filter(x => x.g === id);
    s.st[id] = q && typeof q === 'object' ? { p: num(q.p, 0, 1e6), s: num(q.s, 0, 1e9) } : { p: h.length, s: h.reduce((a, x) => a + x.s, 0) };
  });
  if (o.d && typeof o.d.date === 'string') s.d = { date: o.d.date.slice(0, 40), iso: /^\d{4}-\d{2}-\d{2}$/.test(o.d.iso) ? o.d.iso : '', plays: num(o.d.plays, 0, 1e4), xp: num(o.d.xp, 0, 1e6), feat: num(o.d.feat, 0, 1), shared: num(o.d.shared, 0, 1), all: num(o.d.all, 0, 1), done: Array.isArray(o.d.done) ? [...new Set(o.d.done.filter(x => CHI.includes(x)))] : [] };
  if (o.streak && typeof o.streak === 'object') s.streak = { last: typeof o.streak.last === 'string' ? o.streak.last.slice(0, 40) : '', n: num(o.streak.n, 0, 9999), i: /^\d{4}-\d{2}-\d{2}$/.test(o.streak.i) ? o.streak.i : '' };
  if (Array.isArray(o.cal)) s.cal = [...new Set(o.cal.filter(x => typeof x === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(x)))].slice(-120);
  if (Array.isArray(o.bdg)) s.bdg = [...new Set(o.bdg.filter(x => BID.includes(x)))];
  return s;
}
function loadA() {
  const a = { cur: '', users: {} }, o = jp(ls.get(AK));
  if (o) {
    if (o.users && typeof o.users === 'object') Object.entries(o.users).forEach(([id, u]) => {
      if (/^u_.{1,30}$/.test(id) && u && okName(u.name) && typeof u.h === 'string' && u.h.length <= 80) a.users[id] = { name: u.name.trim(), h: u.h, s: typeof u.s === 'string' ? u.s.slice(0, 32) : '' };
    });
    if (o.cur === 'guest' || (typeof o.cur === 'string' && Object.hasOwn(a.users, o.cur))) a.cur = o.cur;
  }
  return a;
}
let A = loadA();
const saveA = () => ls.set(AK, JSON.stringify(A));
const dk = () => !A.cur || A.cur === 'guest' ? KEY : KEY + ':' + A.cur;
const load = () => clean(jp(ls.get(dk())));
let S = load(), view = 'home', cur = '', timers = [], run = null;
function save() {
  if (!A.cur) return; /* never write while logged out */
  const w = () => ls.set(dk(), JSON.stringify(S));
  if (w()) return;
  S.hist = S.hist.slice(0, 10); S.cal = S.cal.slice(-30);
  if (!w() && !warned) { warned = true; toast(t('storeFail')); }
}

/* ---------- Helpers, errors, sound ---------- */
const t = k => (I[S.lang] && I[S.lang][k]) || I.en[k] || k;
const esc = s => String(s).replace(/[&<>"'`]/g, c => '&#' + c.charCodeAt(0) + ';');
const lv = () => Math.floor(S.xp / 100) + 1;
const T = (f, m) => { const i = setTimeout(f, m); timers.push(i); return i; };
const V = (f, m) => { const i = setInterval(f, m); timers.push(i); return i; };
const clearT = () => { timers.forEach(i => { clearTimeout(i); clearInterval(i); }); timers = []; };
const dayNum = () => Math.floor(Date.now() / 864e5);
function toast(m, ms = 2400) {
  const e = $('#toast'); if (!e) return; e.textContent = m; e.classList.add('show');
  clearTimeout(toast.i); toast.i = setTimeout(() => e.classList.remove('show'), ms);
}
const report = e => { try { console.error(e); } catch (x) {} if (Date.now() - report.t > 3000) { report.t = Date.now(); toast(t('errGeneric')); } };
report.t = 0;
addEventListener('error', e => report(e.error || e.message));
addEventListener('unhandledrejection', e => report(e.reason));
const safe = f => (...a) => { try { const r = f(...a); if (r && r.catch) r.catch(report); return r; } catch (e) { report(e); } };
let ac;
const beep = (f = 440, ms = 80, ty = 'sine') => {
  if (!S.set.snd) return;
  try {
    ac = ac || new (window.AudioContext || window.webkitAudioContext)(); if (ac.state === 'suspended') ac.resume();
    const o = ac.createOscillator(), g = ac.createGain(); o.type = ty; o.frequency.value = f; g.gain.value = .06; o.connect(g); g.connect(ac.destination); o.start(); o.stop(ac.currentTime + ms / 1000);
  } catch (e) {}
};
const buzz = ms => { if (S.set.vib && navigator.vibrate) try { navigator.vibrate(ms); } catch (e) {} };
const modal = h => { const m = $('#modal'); m.innerHTML = '<div class="mb" role="dialog" aria-modal="true">' + h + '</div>'; m.hidden = false; const b = m.querySelector('button'); if (b) b.focus(); };
const closeModal = () => { const m = $('#modal'); m.hidden = true; m.innerHTML = ''; };

function addXp(n) {
  n = num(n, 0, 500); const o = lv(); S.xp = Math.min(1e7, S.xp + n);
  if (lv() > o) setTimeout(() => toast(t('levelup') + ' ' + lv()), 700);
}

/* ---------- Daily challenges, badges ---------- */
const D = () => {
  const k = new Date().toDateString(), i = iso();
  /* a new day starts only when the date moves FORWARD; setting the clock back keeps today's claims */
  if (!S.d || (S.d.date !== k && (!S.d.iso || i > S.d.iso))) S.d = { date: k, iso: i, plays: 0, xp: 0, feat: 0, shared: 0, all: 0, done: [] };
  if (!S.d.iso) S.d.iso = i;
  return S.d;
};
const CH = [
  { id: 'a', k: 'ch1', n: 3, r: 20, v: d => d.plays },
  { id: 'b', k: 'ch2', n: 1, r: 30, v: d => d.feat },
  { id: 'c', k: 'ch3', n: 60, r: 40, v: d => d.xp },
  { id: 'd', k: 'ch4', n: 1, r: 25, v: d => d.shared | 0 }
];
/* Each challenge pays once per day: it is only paid if its id is not yet in d.done. */
function chk() {
  const d = D();
  CH.forEach(c => { if (!d.done.includes(c.id) && c.v(d) >= c.n) { d.done.push(c.id); addXp(c.r); toast(t('done') + ' +' + c.r + ' XP'); } });
  if (d.done.length === CH.length && !d.all) { d.all = 1; S.perfect++; }
}
const total = () => GID.reduce((a, i) => a + S.st[i].p, 0);
const BADGES = [
  ['b1', '🎮', () => total() >= 1], ['b2', '🏅', () => total() >= 10], ['b3', '⭐', () => lv() >= 5], ['b4', '🔥', () => S.streak.n >= 7],
  ['b5', '👑', () => GID.every(i => S.best[i] != null)], ['b6', '📣', () => S.shares > 0], ['b7', '💯', () => total() >= 50],
  ['b8', '🚀', () => lv() >= 10], ['b9', '🏆', () => S.best.ttt >= 100], ['b10', '🎯', () => S.perfect > 0]
];
/* Badges are stored once in S.bdg, so they can never be awarded twice. */
function badges() { BADGES.forEach(b => { if (!S.bdg.includes(b[0]) && b[2]()) { S.bdg.push(b[0]); setTimeout(() => toast('🏅 ' + t(b[0])), 1200); } }); }

/* ---------- Game list ---------- */
const G = [
  { id: 'reaction', e: '⚡', c: ['#22d3ee', '#3b82f6'], max: 500, cat: 'reflex', f: reaction },
  { id: 'memory', e: '🧠', c: ['#8b5cf6', '#ec4899'], max: 120, cat: 'brain', f: memory },
  { id: 'target', e: '🎯', c: ['#3b82f6', '#22d3ee'], max: 250, cat: 'reflex', f: target },
  { id: 'numbers', e: '🔢', c: ['#a78bfa', '#22d3ee'], max: 300, cat: 'brain', f: numbers },
  { id: 'ttt', e: '❌', c: ['#ec4899', '#8b5cf6'], max: 100, cat: 'strategy', f: ttt }
];
const feat = () => G[dayNum() % G.length];

function finish(id, s) {
  const g = G.find(x => x.id === id); if (!g) return { xp: 0, nb: false };
  s = num(s, 0, 1e5);
  const xp = 5 + Math.round(Math.min(1, s / g.max) * 45), d = D(), nb = s > (S.best[id] ?? -1);
  d.plays++; if (id === feat().id) d.feat = 1; d.xp += xp; addXp(xp);
  if (nb) S.best[id] = s;
  const st = S.st[id] || (S.st[id] = { p: 0, s: 0 }); st.p++; st.s += s;
  S.hist.unshift({ g: id, s, x: xp, t: Date.now() }); S.hist = S.hist.slice(0, 30);
  chk(); badges(); save();
  const b = $('#bs'); if (b) b.textContent = S.best[id];
  return { xp, nb };
}
function end(id, s, extra) {
  clearT();
  const r = finish(id, s); buzz(40); beep(r.nb ? 880 : 520, 160);
  const st = $('#ga'); if (!st) return;
  st.insertAdjacentHTML('beforeend', `<div class="ov"><h3>${t('over')}</h3><div class="big">${esc(s)}</div>${extra ? `<p>${esc(extra)}</p>` : ''}<p class="xp">+${r.xp} XP${r.nb ? ' · ' + t('newbest') : ''}</p>
    <button class="btn" data-a="restart">${t('again')}</button><button class="btn ghost" data-a="back">${t('back')}</button></div>`);
}

/* ---------- Games ---------- */
function reaction(a, api) {
  let r = 0, tot = 0, ms = [], st = 'idle', t0 = 0;
  a.innerHTML = '<button class="rx idle" id="rx">' + t('start') + '</button><p class="hint" id="rh" style="margin-top:12px"></p>';
  const b = $('#rx');
  function round() {
    if (r >= 5) return api.end(tot, t('avg') + ': ' + (ms.length ? Math.round(ms.reduce((x, y) => x + y, 0) / ms.length) : '-') + ' ms');
    st = 'wait'; b.className = 'rx wait'; b.textContent = t('wait'); $('#rh').textContent = t('round') + ' ' + (r + 1) + '/5';
    T(() => { st = 'go'; b.className = 'rx go'; b.textContent = t('tap'); t0 = performance.now(); }, 1000 + Math.random() * 2500);
  }
  const hit = e => {
    if (e.repeat) return; e.preventDefault();
    if (st === 'idle') return round();
    if (st === 'wait') { clearT(); st = 'x'; r++; b.className = 'rx bad'; api.beep(160, 160, 'square'); b.textContent = t('soon'); T(round, 1000); return; }
    if (st === 'go') {
      const m = performance.now() - t0, p = Math.max(0, 100 - Math.round(m / 10));
      ms.push(m); tot += p; api.beep(660, 70); api.buzz(20); r++; st = 'x'; api.score(tot);
      b.className = 'rx idle'; b.textContent = Math.round(m) + ' ms  (+' + p + ')'; T(round, 1100);
    }
  };
  b.onpointerdown = hit; b.onkeydown = e => { if (e.key === ' ' || e.key === 'Enter') hit(e); };
}

function memory(a, api) {
  let L = 1, tg = [], pk = [], lock = true;
  a.innerHTML = '<p class="hint" id="mh"></p><div class="grid g4">' + [...Array(16)].map(() => '<button class="cell"></button>').join('') + '</div>';
  const cs = [...a.querySelectorAll('.cell')], h = $('#mh');
  function lvl() {
    pk = []; lock = true; cs.forEach(c => c.className = 'cell');
    h.textContent = t('watch') + ' · ' + t('lvl') + ' ' + L;
    const n = Math.min(2 + L, 10);
    tg = [...Array(16).keys()].sort(() => Math.random() - .5).slice(0, n);
    T(() => tg.forEach(i => cs[i].classList.add('lit')), 600);
    T(() => { cs.forEach(c => c.className = 'cell'); lock = false; h.textContent = t('your'); }, 1600 + n * 150);
  }
  cs.forEach((c, i) => c.onclick = () => {
    if (lock || pk.includes(i)) return;
    pk.push(i);
    if (tg.includes(i)) {
      c.classList.add('ok'); api.beep(520, 60);
      if (pk.length === tg.length) { lock = true; api.score(L * 10); L++; T(lvl, 800); }
    } else {
      lock = true; c.classList.add('no'); api.beep(150, 220, 'square'); api.buzz(60); tg.forEach(j => { if (!pk.includes(j)) cs[j].classList.add('lit'); });
      T(() => api.end((L - 1) * 10, t('lvl') + ' ' + L), 1300);
    }
  });
  lvl();
}

function target(a, api) {
  let sc = 0, left = 20, tg, sp;
  a.innerHTML = '<div class="bar tbar"><i id="tb" style="width:100%"></i></div><div class="arena" id="ar"></div>';
  const ar = $('#ar'), tb = $('#tb');
  function spawn() {
    if (tg) tg.remove(); clearTimeout(sp);
    const w = ar.clientWidth, h = ar.clientHeight, s = Math.max(46, 86 - Math.floor(sc / 30) * 4);
    tg = document.createElement('button'); tg.className = 'tgt'; tg.setAttribute('aria-label', 'target');
    tg.style.cssText = `width:${s}px;height:${s}px;left:${Math.random() * (w - s)}px;top:${Math.random() * (h - s)}px`;
    tg.onpointerdown = e => { e.preventDefault(); sc += 10; api.score(sc); api.beep(700, 50); spawn(); };
    ar.appendChild(tg);
    sp = T(() => { sc = Math.max(0, sc - 5); api.score(sc); spawn(); }, Math.max(650, 1200 - sc * 2));
  }
  V(() => {
    left = Math.max(0, left - .1); tb.style.width = (left / 20 * 100) + '%';
    if (left <= 0) { clearT(); api.end(sc, ''); }
  }, 100);
  spawn();
}

function numbers(a, api) {
  let n = 1, t0 = 0, pen = 0;
  const arr = [...Array(16).keys()].map(i => i + 1).sort(() => Math.random() - .5);
  a.innerHTML = '<p class="hint" id="nh"></p><div class="grid g4">' + arr.map(v => `<button class="cell" data-n="${v}">${v}</button>`).join('') + '</div>';
  const h = $('#nh'); h.textContent = t('find') + ' 1';
  api.score('0.0s');
  a.querySelectorAll('.cell').forEach(b => b.onclick = () => {
    if (!t0) { t0 = performance.now(); V(() => api.score(((performance.now() - t0) / 1000 + pen).toFixed(1) + 's'), 100); }
    if (+b.dataset.n === n) {
      b.classList.add('ok'); n++; api.beep(540, 50);
      if (n > 16) { const s = (performance.now() - t0) / 1000 + pen; clearT(); api.score(s.toFixed(1) + 's'); api.end(Math.max(0, Math.round(300 - s * 10)), s.toFixed(1) + 's'); }
      else h.textContent = t('find') + ' ' + n;
    } else { pen += .5; api.beep(150, 150, 'square'); b.classList.add('no'); T(() => b.classList.remove('no'), 300); }
  });
}

function ttt(a, api) {
  let b = Array(9).fill(''), busy = false, done = false;
  a.innerHTML = '<p class="hint" id="th"></p><div class="grid g3">' + [...Array(9)].map(() => '<button class="cell xo"></button>').join('') + '</div>';
  const cs = [...a.querySelectorAll('.xo')], h = $('#th'), me = () => h.textContent = (S.lang === 'hi' ? 'आप' : 'You') + ' = X';
  me(); api.score(0);
  const L = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  const win = x => { for (const l of L) if (x[l[0]] && x[l[0]] === x[l[1]] && x[l[0]] === x[l[2]]) return x[l[0]]; return x.includes('') ? null : 'D'; };
  const mm = (x, p, d) => {
    const w = win(x); if (w) return w === 'O' ? 10 - d : w === 'X' ? d - 10 : 0;
    let best = p === 'O' ? -99 : 99;
    x.forEach((v, i) => { if (!v) { x[i] = p; const s = mm(x, p === 'O' ? 'X' : 'O', d + 1); x[i] = ''; best = p === 'O' ? Math.max(best, s) : Math.min(best, s); } });
    return best;
  };
  function ai() {
    const e = b.map((v, i) => v ? -1 : i).filter(i => i >= 0);
    if (Math.random() < .25) return e[Math.floor(Math.random() * e.length)];
    let bi = e[0], bs = -99;
    e.forEach(i => { b[i] = 'O'; const s = mm(b, 'X', 1); b[i] = ''; if (s > bs) { bs = s; bi = i; } });
    return bi;
  }
  function mark(i, p) {
    b[i] = p; api.beep(p === 'X' ? 600 : 420, 60); cs[i].textContent = p === 'X' ? '✕' : '○'; cs[i].classList.add(p === 'X' ? 'ox' : 'oo');
    const w = win(b);
    if (w) { done = true; const sc = w === 'X' ? 100 : w === 'D' ? 40 : 10; api.score(sc); T(() => api.end(sc, t(w === 'X' ? 'win' : w === 'D' ? 'draw' : 'lose')), 700); return true; }
    return false;
  }
  cs.forEach((c, i) => c.onclick = () => {
    if (busy || done || b[i]) return;
    if (mark(i, 'X')) return;
    busy = true; h.textContent = t('cpu');
    T(() => { mark(ai(), 'O'); busy = false; if (!done) me(); }, 550);
  });
}

/* ---------- Account (local only), streak, share, backup ---------- */
function streak() {
  const n = new Date().toDateString(), y = new Date(); y.setDate(y.getDate() - 1);
  const k = S.streak, i = iso(), pd = k.last ? new Date(k.last) : null, li = k.i || (pd && !isNaN(pd) ? iso(pd) : '');
  if (li && i <= li) return false; /* same day, or device clock set back: no second bonus */
  if (!S.cal.includes(i)) S.cal = S.cal.concat(i).slice(-120);
  k.n = k.last === y.toDateString() ? Math.min(k.n + 1, 9999) : 1; k.last = n; k.i = i;
  const b = Math.min(k.n * 10, 50); addXp(b); badges(); save();
  setTimeout(() => toast(t('bonus') + ' +' + b + ' XP · 🔥 ' + k.n), 500);
  return true;
}
async function hash(id, s, p) {
  const x = s ? id + ':' + s + ':' + p : id + ':' + p; /* accounts made before salts existed still verify */
  try { const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(x)); return [...new Uint8Array(b)].map(v => v.toString(16).padStart(2, '0')).join(''); }
  catch (e) {
    let a = 0xdeadbeef, b = 0x41c6ce57;
    for (let i = 0; i < x.length; i++) { const c = x.charCodeAt(i); a = Math.imul(a ^ c, 2654435761); b = Math.imul(b ^ c, 1597334677); }
    a = Math.imul(a ^ (a >>> 16), 2246822507) ^ Math.imul(b ^ (b >>> 13), 3266489909); b = Math.imul(b ^ (b >>> 16), 2246822507) ^ Math.imul(a ^ (a >>> 13), 3266489909);
    return 'f' + (4294967296 * (2097151 & b) + (a >>> 0)).toString(16);
  }
}
const rnd = () => { try { return [...crypto.getRandomValues(new Uint8Array(8))].map(v => v.toString(16).padStart(2, '0')).join(''); } catch (e) { return Math.random().toString(16).slice(2, 18); } };
function enter(id, isNew) {
  if (A.cur) save();
  A.cur = id; saveA();
  S = isNew ? clean({ name: A.users[id].name, lang: S.lang }) : load();
  save(); streak(); badges(); save(); view = 'home'; hset('home', false); render(); scrollTo(0, 0);
}
let busy = false, fails = 0, lockUntil = 0;
async function auth(mode) {
  if (busy) return; busy = true;
  try {
    const m = $('#lm'), n = $('#ln').value.trim(), p = $('#lp').value.trim();
    if (!okName(n) || !/^\d{4}$/.test(p)) { m.textContent = t('fill'); return; }
    if (Date.now() < lockUntil) { m.textContent = t('lockMsg'); return; }
    const id = 'u_' + n.toLowerCase();
    if (mode === 'new') {
      if (Object.hasOwn(A.users, id)) { m.textContent = t('exists'); return; }
      if (Object.keys(A.users).length >= 8) { m.textContent = t('maxacc'); return; }
      const s = rnd(); A.users[id] = { name: n, s, h: await hash(id, s, p) }; saveA(); enter(id, true);
    } else {
      const u = Object.hasOwn(A.users, id) ? A.users[id] : null;
      if (!u || (await hash(id, u.s, p)) !== u.h) { if (++fails >= 5) { lockUntil = Date.now() + 3e4; fails = 0; } m.textContent = t('badpin'); return; }
      fails = 0; enter(id);
    }
  } finally { busy = false; }
}
let sharing = false;
async function shareApp() {
  if (sharing) return; sharing = true;
  try {
    const url = location.href.split('#')[0].split('?')[0], text = t('sharetxt') + ' ' + t('lvl') + ' ' + lv() + ', ' + S.xp + ' XP!';
    try {
      if (navigator.share) await navigator.share({ title: 'SmartPlay Arena', text, url });
      else { await navigator.clipboard.writeText(text + ' ' + url); toast(t('copied')); }
    } catch (e) {
      if (!e || e.name !== 'AbortError') modal(`<h3>${t('share')}</h3><textarea readonly>${esc(text + ' ' + url)}</textarea><button class="btn ghost" data-a="mclose">${t('close')}</button>`);
      return; /* cancelled or failed: no reward */
    }
    S.shares = Math.min(S.shares + 1, 1e6); D().shared = 1; chk(); badges(); save(); render();
  } finally { sharing = false; }
}
const b64e = s => { let r = ''; new TextEncoder().encode(s).forEach(x => r += String.fromCharCode(x)); return btoa(r); };
const b64d = s => { const r = atob(s), u = new Uint8Array(r.length); for (let i = 0; i < r.length; i++) u[i] = r.charCodeAt(i); return new TextDecoder('utf-8', { fatal: true }).decode(u); };
function parseBackup(x) {
  x = String(x || '').trim();
  if (!x || x.length > 80000 || !/^[A-Za-z0-9+/=\s]+$/.test(x)) throw 0;
  const o = jp(b64d(x.replace(/\s+/g, ''))); if (!o) throw 0;
  const d = o.app === 'smartplay-arena' && o.data && typeof o.data === 'object' ? o.data : o; /* also accepts v1 backups */
  if (typeof d.xp !== 'number' || !Number.isFinite(d.xp) || d.xp < 0 || !Array.isArray(d.hist)) throw 0;
  return clean(d);
}
let pend = null;
const backupModal = () => modal(`<h3>${t('backup')}</h3><p class="note">${t('bnote')}</p><textarea id="bt" readonly>${esc(b64e(JSON.stringify({ app: 'smartplay-arena', v: 2, ts: Date.now(), data: S })))}</textarea><button class="btn" data-a="copy">${t('copyb')}</button><button class="btn ghost" data-a="mclose">${t('close')}</button>`);
const restoreModal = () => modal(`<h3>${t('restore')}</h3><p class="note">${t('rnote')}</p><textarea id="rt" placeholder="…"></textarea><p id="rm" class="note" style="color:#ff8a8a;margin:0"></p><button class="btn" data-a="dorestore">${t('restore')}</button><button class="btn ghost" data-a="mclose">${t('cancel')}</button>`);

/* ---------- Screens ---------- */
const board = () => {
  const rows = [];
  if (A.cur === 'guest') rows.push({ n: S.name, x: S.xp, me: 1 });
  else if (ls.get(KEY) !== null) { const d = clean(jp(ls.get(KEY))); rows.push({ n: d.name, x: d.xp }); }
  Object.keys(A.users).forEach(id => { const me = id === A.cur, d = me ? S : clean(jp(ls.get(KEY + ':' + id))); rows.push({ n: A.users[id].name, x: d.xp, me: me ? 1 : 0 }); });
  return rows.sort((a, b) => b.x - a.x).map((r, i) => (r.rk = i + 1, r));
};
const lbHtml = n => { const b = board(), r = b.filter((x, i) => i < n || x.me);
  return '<div class="card">' + r.map(x => `<div class="lb ${x.me ? 'me2' : ''}"><span class="rk">${x.rk}</span><span class="n">${esc(x.n)}</span><span class="x">${x.x} XP</span></div>`).join('') +
    `<p class="note">${t('lbNote')}${b.length < 2 ? ' ' + t('lbSolo') : ''}</p></div>`; };
const gcard = (g, hot, full) => `<button class="gc" data-a="play" data-g="${g.id}" style="${full ? 'width:100%;' : ''}--a:${g.c[0]};--b:${g.c[1]}">${hot ? '<span class="hot">🔥</span>' : ''}
  <span class="ico">${g.e}</span><b>${t(g.id)}</b><small>${t(g.id + 'd')}</small>${S.best[g.id] != null ? `<em>${t('best')} ${S.best[g.id]}</em>` : ''}</button>`;
const chHtml = () => { const d = D(); return '<div class="card">' + CH.map(c => {
  const v = Math.min(c.n, c.v(d)), ok = d.done.includes(c.id);
  return `<div class="ch ${ok ? 'ok' : ''}"><div><b>${t(c.k)}${c.k === 'ch2' ? ': ' + t(feat().id) : ''}</b><small>+${c.r} XP</small></div><div class="bar"><i style="width:${v / c.n * 100}%"></i></div><span>${ok ? '✓' : v + '/' + c.n}</span></div>`;
}).join('') + '</div>'; };
const calHtml = () => { let h = ''; for (let i = 13; i >= 0; i--) { const d = new Date(); d.setDate(d.getDate() - i); h += `<span class="cd ${S.cal.includes(iso(d)) ? 'on' : ''} ${i === 0 ? 'td' : ''}">${d.getDate()}</span>`; }
  return `<div class="card"><div class="cal">${h}</div><p class="note">🔥 ${S.streak.n} ${t('streak')} · ${t('calnote')}</p></div>`; };
const sec = (title, link) => `<div class="sec"><h3>${title}</h3>${link || ''}</div>`;
const shBtn = () => `<button class="btn" data-a="share" style="width:100%;margin-top:12px">📣 ${t('share')} · +25 XP</button>`;
const profCard = () => `<div class="card me"><div class="av">${esc([...S.name][0].toUpperCase())}</div><div class="in">
  <div class="nm">${esc(S.name)}</div><div class="bar" style="margin-top:8px"><i style="width:${S.xp % 100}%"></i></div>
  <div class="row"><span>${t('lvl')} ${lv()}</span><span>🔥 ${S.streak.n}</span><span>${S.xp % 100}/100 XP</span></div></div></div>`;
const hdr = () => `<div class="top"><div class="logo"><svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true"><defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#22d3ee"/><stop offset="1" stop-color="#8b5cf6"/></linearGradient></defs>
  <path d="M20 3l14 8v18l-14 8-14-8V11z" fill="none" stroke="url(#lg)" stroke-width="2.5"/><path d="M16 14l11 6-11 6z" fill="url(#lg)"/></svg><b>SmartPlay Arena</b></div>
  <button class="pill" data-a="lang">${S.lang === 'en' ? 'हिन्दी' : 'English'}</button></div>`;
let gq = '', gc = 'all';
const gList = () => { const q = gq.trim().toLowerCase(), l = G.filter(g => (gc === 'all' || g.cat === gc) && (!q || (t(g.id) + ' ' + t(g.id + 'd') + ' ' + g.id).toLowerCase().includes(q)));
  return l.length ? l.map(g => gcard(g)).join('') : `<p class="note">${t('nores')}</p>`; };
const setHtml = () => '<div class="card">' + [['snd', 'sound'], ['vib', 'vibration']].map(([k, l]) => `<div class="tg"><span>${t(l)}</span><button class="sw ${S.set[k] ? 'on' : ''}" role="switch" aria-checked="${!!S.set[k]}" aria-label="${t(l)}" data-a="tg" data-k="${k}"></button></div>`).join('') +
  `<div class="tg"><span>${t('lang')}</span><button class="pill" data-a="lang">${S.lang === 'en' ? 'हिन्दी' : 'English'}</button></div></div>`;
const statsTbl = () => `<div class="card"><table class="tbl"><tr><th></th><th>${t('plays')}</th><th>${t('best')}</th><th>${t('avg')}</th></tr>${G.map(g => { const s = S.st[g.id];
  return `<tr><td>${g.e} ${t(g.id)}</td><td>${s.p}</td><td>${S.best[g.id] ?? '-'}</td><td>${s.p ? Math.round(s.s / s.p) : '-'}</td></tr>`; }).join('')}</table></div>`;
const badgeHtml = () => '<div class="card badges">' + BADGES.map(b => `<div class="bd ${S.bdg.includes(b[0]) ? 'on' : ''}"><span>${b[1]}</span><small>${t(b[0])}</small></div>`).join('') + '</div>';
const standalone = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
let ip;

const views = {
  login() {
    return hdr() + `<div class="card" style="margin-top:8px"><h2 style="font-size:1.3rem">${t('welcome')}</h2><p class="note" style="font-size:.9rem">${t('wsub')}</p>
    <div class="fld" style="flex-direction:column"><input id="ln" type="text" maxlength="14" placeholder="${t('nick')}" autocomplete="username"><input id="lp" type="password" inputmode="numeric" maxlength="4" placeholder="${t('pin')}" autocomplete="off"></div>
    <p id="lm" class="note" style="color:#ff8a8a;min-height:1.3em" aria-live="polite"></p>
    <button class="btn" data-a="login" style="width:100%">${t('login')}</button><button class="btn ghost" data-a="signup" style="width:100%;margin-top:10px">${t('signup')}</button>
    <button class="link" data-a="guest" style="width:100%;margin-top:12px">${t('guest')}</button><p class="note">${t('lnote')}</p></div>`;
  },
  home() {
    const f = feat(), r = dayNum() % 5 + 1, rot = G.slice(r).concat(G.slice(0, r)), rec = [...new Set(S.hist.map(h => h.g))].slice(0, 5).map(id => G.find(g => g.id === id));
    return hdr() + profCard() +
      sec(t('feat')) + `<button class="gc big" data-a="play" data-g="${f.id}" style="--a:${f.c[0]};--b:${f.c[1]}"><span class="ico">${f.e}</span><span><b>${t(f.id)}</b><br><small>${t(f.id + 'd')}</small></span><span class="go">${t('play')}</span></button>` +
      sec(t('daily'), `<button class="link" data-a="tab" data-v="missions">${t('all')}</button>`) + chHtml() + shBtn() +
      sec(t('trend')) + `<div class="rail">${rot.map(g => gcard(g, 1)).join('')}</div>` +
      (rec.length ? sec(t('recent')) + `<div class="rail">${rec.map(g => gcard(g)).join('')}</div>` : '') +
      sec(t('board'), `<button class="link" data-a="tab" data-v="profile">${t('all')}</button>`) + lbHtml(3);
  },
  games() {
    return hdr() + sec(t('allg')) + `<input id="gs" class="srch" type="search" maxlength="30" placeholder="${t('search')}" value="${esc(gq)}" aria-label="${t('search')}">
    <div class="chips">${['all', 'reflex', 'brain', 'strategy'].map(c => `<button class="chip ${gc === c ? 'on' : ''}" data-a="cat" data-c="${c}">${t('c_' + c)}</button>`).join('')}</div><div class="grid2" id="gl">${gList()}</div>`;
  },
  missions() { return hdr() + sec(t('daily')) + chHtml() + shBtn() + `<p class="note">${t('shareNote')}</p>` + sec(t('cal')) + calHtml() + sec(t('feat')) + gcard(feat(), 0, 1); },
  profile() {
    const hist = S.hist.slice(0, 15);
    return hdr() + profCard() +
      `<div class="stats3"><div><b>${lv()}</b><small>${t('lvl')}</small></div><div><b>${S.xp}</b><small>${t('total')}</small></div><div><b>${total()}</b><small>${t('played')}</small></div></div>` +
      sec(t('badges') + ' ' + S.bdg.length + '/' + BID.length) + badgeHtml() + sec(t('settings')) + setHtml() + shBtn() + `<p class="note">${t('shareNote')}</p>` +
      sec(t('nick')) + `<div class="fld"><input id="nm" type="text" maxlength="14" value="${esc(S.name)}" aria-label="${t('nick')}"><button class="btn" data-a="name">${t('save')}</button></div>` +
      sec(t('stats')) + statsTbl() + sec(t('lbLocal')) + lbHtml(8) +
      sec(t('hist')) + `<div class="card">${hist.length ? hist.map(h => { const g = G.find(x => x.id === h.g);
        return `<div class="hi"><span class="e">${g.e}</span><span class="n">${t(g.id)}<small>${new Date(h.t).toLocaleDateString(S.lang === 'hi' ? 'hi-IN' : 'en-IN', { day: 'numeric', month: 'short' })}</small></span><span>${h.s} · <b>+${h.x} XP</b></span></div>`; }).join('') : `<p class="note" style="margin:0">${t('nohist')}</p>`}</div>` +
      `<div style="margin-top:22px;display:grid;gap:10px">${standalone() ? '' : ip ? `<button class="btn" data-a="install">⬇ ${t('install')}</button>` : `<p class="note" style="margin:0">${t('ios')}</p>`}
      <div class="fld" style="margin:0"><button class="btn ghost" data-a="bk" style="flex:1">${t('backup')}</button><button class="btn ghost" data-a="rs" style="flex:1">${t('restore')}</button></div>
      <button class="btn ghost" data-a="logout">${t('logout')}</button><button class="btn danger" data-a="reset">${t('reset')}</button><p class="note" style="margin:0">${t('pinWarn')}</p></div>`;
  }
};
const ICONS = {
  home: '<path d="M3 11l9-8 9 8v10h-6v-6H9v6H3z"/>', games: '<rect x="3" y="7" width="18" height="11" rx="4"/><path d="M8 10v5M5.5 12.5h5M16 11h.01M18 14h.01"/>',
  missions: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/>', profile: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>'
};

function gameView(id) {
  const g = G.find(x => x.id === id);
  if (!g) { view = 'games'; return render(); }
  clearT(); cur = id;
  const me = { over: false }; run = me; /* one token per game start: stale timers/duplicate end() calls are ignored */
  $('#app').innerHTML = `<section class="gv" style="--a:${g.c[0]};--b:${g.c[1]}">
    <div class="gh"><button class="ib" data-a="back" aria-label="${t('back')}">‹</button><div><h2>${g.e} ${t(id)}</h2><small>${t(id + 'd')}</small></div></div>
    <div class="sb"><div><small>${t('score')}</small><b id="sc">0</b></div><div><small>${t('best')}</small><b id="bs">${S.best[id] ?? 0}</b></div></div>
    <div class="stage" id="ga"></div><button class="btn ghost" data-a="restart">↻ ${t('restart')}</button></section>`;
  try {
    g.f($('#ga'), { score: v => { const e = $('#sc'); if (run === me && e) e.textContent = v; }, end: (s, x) => { if (run !== me || me.over) return; me.over = true; end(id, s, x); }, beep, buzz });
  } catch (e) { report(e); $('#ga').innerHTML = `<p class="hint">${t('errGeneric')}</p>`; }
}
function render() {
  document.documentElement.lang = S.lang;
  if (!view.startsWith('game:')) run = null;
  const nav = $('#nav');
  try {
    if (view.startsWith('game:')) { nav.hidden = true; return gameView(view.slice(5)); }
    if (!Object.hasOwn(views, view)) view = 'home';
    nav.hidden = view === 'login';
    $('#app').innerHTML = views[view]();
    nav.innerHTML = view === 'login' ? '' : ['home', 'games', 'missions', 'profile'].map(v =>
      `<button data-a="tab" data-v="${v}" class="${v === view ? 'on' : ''}" ${v === view ? 'aria-current="page"' : ''}><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[v]}</svg>${t(v)}</button>`).join('');
  } catch (e) { report(e); if (view !== 'home') { view = 'home'; render(); } }
}

/* ---------- Events (each registered exactly once; one delegated click handler) ---------- */
/* History: tabs keep at most [home, tab]; a game adds one entry, so the Android back button leaves the game, then the tab, then the app. */
const hs = () => { try { return (history.state && history.state.v) || ''; } catch (e) { return ''; } };
const hset = (v, push) => { try { (push ? history.pushState : history.replaceState).call(history, { v }, ''); } catch (e) {} };
let gfrom = 'games';
const go = v => {
  clearT(); const g = v.startsWith('game:'), c = hs();
  if (g) gfrom = view;
  hset(v, g || (v !== 'home' && c === 'home'));
  view = v; render(); scrollTo(0, 0);
};
addEventListener('popstate', safe(e => {
  clearT(); const v = e.state && e.state.v;
  view = v && (Object.hasOwn(views, v) || (v.startsWith('game:') && G.some(g => g.id === v.slice(5)))) ? v : 'home';
  if (!A.cur) view = 'login'; else if (view === 'login') view = 'home';
  closeModal(); render(); scrollTo(0, 0);
}));
let lastK = '', lastT = 0;
document.addEventListener('click', safe(e => {
  if (e.target.id === 'modal') return closeModal();
  const el = e.target.closest('[data-a]'); if (!el) return;
  const a = el.dataset.a, d = el.dataset, k = a + (d.g || d.v || d.c || d.k || ''), n = Date.now();
  if (k === lastK && n - lastT < 400) return; /* ignore accidental double taps */
  lastK = k; lastT = n;
  switch (a) {
    case 'tab': if (Object.hasOwn(views, d.v) && d.v !== 'login') go(d.v); break;
    case 'play': if (G.some(g => g.id === d.g)) go('game:' + d.g); break;
    case 'back': if (view.startsWith('game:') && gfrom === 'games' && hs() === view) { clearT(); history.back(); } else { clearT(); hset('games', false); view = 'games'; render(); scrollTo(0, 0); } break;
    case 'restart': if (view.startsWith('game:')) { clearT(); render(); } break;
    case 'lang': S.lang = S.lang === 'en' ? 'hi' : 'en'; save(); render(); break;
    case 'cat': gc = ['all', 'reflex', 'brain', 'strategy'].includes(d.c) ? d.c : 'all'; render(); break;
    case 'tg': if (d.k === 'snd' || d.k === 'vib') { S.set[d.k] = S.set[d.k] ? 0 : 1; save(); render(); if (d.k === 'snd') beep(660, 80); else buzz(30); } break;
    case 'name': { const v = $('#nm').value.trim(); if (okName(v)) { S.name = v; save(); render(); toast(t('saved')); } else toast(t('fill')); break; }
    case 'login': auth('old'); break;
    case 'signup': auth('new'); break;
    case 'guest': enter('guest'); break;
    case 'logout': save(); A.cur = ''; saveA(); view = 'login'; hset('login', false); render(); scrollTo(0, 0); break;
    case 'share': shareApp(); break;
    case 'bk': backupModal(); break;
    case 'rs': restoreModal(); break;
    case 'copy': { const x = $('#bt'); if (x) { x.select(); try { navigator.clipboard.writeText(x.value).then(() => toast(t('bcopied')), () => document.execCommand('copy')); } catch (er) { document.execCommand('copy'); } } break; }
    case 'dorestore': try { pend = parseBackup($('#rt').value); modal(`<h3>${t('restore')}</h3><p>${esc(pend.name)} · ${t('lvl')} ${Math.floor(pend.xp / 100) + 1} · ${pend.xp} XP</p><p class="note">${t('rconfirm')}</p><button class="btn" data-a="okrestore">${t('restore')}</button><button class="btn ghost" data-a="mclose">${t('cancel')}</button>`); } catch (er) { $('#rm').textContent = t('rbad'); } break;
    case 'okrestore': if (pend) { S = pend; pend = null; D(); save(); badges(); save(); closeModal(); render(); toast(t('rdone')); } break;
    case 'mclose': pend = null; closeModal(); break;
    case 'reset': modal(`<h3>${t('reset')}</h3><p>${t('ask')}</p><button class="btn danger" data-a="doreset">${t('yes')}</button><button class="btn ghost" data-a="mclose">${t('cancel')}</button>`); break;
    case 'doreset': S = clean({ name: S.name, lang: S.lang }); save(); closeModal(); render(); scrollTo(0, 0); break;
    case 'install': if (ip) { const p = ip; ip = null; p.prompt(); p.userChoice.finally(() => render()); } break;
  }
}));
document.addEventListener('input', e => { if (e.target.id === 'gs') { gq = e.target.value.slice(0, 30); const l = $('#gl'); if (l) l.innerHTML = gList(); } });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !$('#modal').hidden) closeModal();
  if (e.key === 'Enter' && view === 'login' && e.target.tagName === 'INPUT') auth('old');
});
document.addEventListener('visibilitychange', safe(() => { if (!document.hidden && A.cur && !view.startsWith('game:') && $('#modal').hidden && streak()) render(); }));
addEventListener('beforeinstallprompt', e => { e.preventDefault(); ip = e; if (view === 'profile') render(); });
addEventListener('appinstalled', () => { ip = null; if (view === 'profile') render(); });
$('#toast').addEventListener('click', () => { if ($('#toast').dataset.reload) location.reload(); });

/* ---------- Start ---------- */
if (A.cur) { D(); streak(); badges(); save(); } else view = 'login';
hset(view, false);
render();
if ('serviceWorker' in navigator) addEventListener('load', () => {
  let had = !!navigator.serviceWorker.controller;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!had) { had = true; return; }
    if (view.startsWith('game:')) { $('#toast').dataset.reload = 1; toast(t('updated'), 8000); } else location.reload();
  });
  navigator.serviceWorker.register('sw.js').then(r => {
    setInterval(() => r.update().catch(() => {}), 36e5);
    document.addEventListener('visibilitychange', () => { if (!document.hidden) r.update().catch(() => {}); });
  }).catch(() => {});
});
