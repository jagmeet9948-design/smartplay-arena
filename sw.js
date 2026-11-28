/* SmartPlay Arena service worker.
   Bump VERSION when you publish a new release so old caches are removed.
   Strategy: network-first (always the newest files when online), cache fallback (offline).
   All paths are relative to this file, so it works in a GitHub Pages sub-folder. */
const VERSION = 'v4';
const CACHE = 'smartplay-arena-' + VERSION;
const CORE = ['./', 'index.html', 'style.css', 'app.js', 'manifest.webmanifest'];
const EXTRA = ['icon-192.png', 'icon-512.png', 'icon-maskable-512.png'];

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await c.addAll(CORE.map(u => new Request(u, { cache: 'reload' })));            // required files: install fails if missing
    await Promise.all(EXTRA.map(u => c.add(new Request(u, { cache: 'reload' })).catch(() => {}))); // icons: optional
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k.startsWith('smartplay-arena-') && k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  e.respondWith((async () => {
    const c = await caches.open(CACHE);
    try {
      const res = await Promise.race([fetch(r.mode === 'navigate' ? new Request(r.url, { cache: 'no-cache' }) : new Request(r, { cache: 'no-cache' })), new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), 5000))]);
      if (res && res.ok && res.type === 'basic') c.put(r, res.clone()).catch(() => {});
      return res;
    } catch (err) {
      const hit = await c.match(r, { ignoreSearch: true });
      if (hit) return hit;
      if (r.mode === 'navigate') { const home = (await c.match('index.html')) || (await c.match('./')); if (home) return home; }
      return new Response('Offline', { status: 503, statusText: 'Offline', headers: { 'Content-Type': 'text/plain' } });
    }
  })());
});
