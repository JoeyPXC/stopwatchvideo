const CACHE_NAME = 'stopwatch-video-v1';

// Local shell only — the CDN script is cached at runtime instead, so a
// hiccup fetching it can never block the service worker from installing.
const APP_SHELL = [
  './',
  './manifest.json',
  './icons/icon-192.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const requestUrl = new URL(event.request.url);

  // Never intercept blob: URLs (recorded video) — let the browser handle them.
  if (requestUrl.protocol === 'blob:') return;

  // Main page — network first so updates land immediately, cache fallback
  // so the app opens with no signal at the starting line.
  const isPageNavigation = event.request.mode === 'navigate' ||
    requestUrl.pathname.endsWith('/') || requestUrl.pathname.endsWith('.html');

  if (isPageNavigation) {
    const cacheKey = new Request(requestUrl.origin + requestUrl.pathname);
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(cacheKey, clone));
          }
          return response;
        })
        .catch(() => caches.match(event.request, { ignoreSearch: true }))
    );
    return;
  }

  // Everything else (icons, manifest, the fix-webm-duration CDN script) —
  // cache first. All of it is static and versioned, so a cached copy is
  // always valid, and this is what makes cold offline starts work.
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Cache successful same-origin responses AND opaque/CORS CDN
        // responses (jsdelivr) — status 0 opaque responses are still
        // servable from cache.
        if (response.ok || response.type === 'opaque') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      });
    })
  );
});
