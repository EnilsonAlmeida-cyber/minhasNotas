// ══════════════════════════════════════════════════
//  SERVICE WORKER — MinhaNotas
//  Permite que o app funcione sem internet
// ══════════════════════════════════════════════════

const CACHE_NAME = 'minhaNotas-v1';

// Arquivos que ficam salvos no celular para uso offline
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
];

// ── Instalação: salva os arquivos no cache ──────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// ── Ativação: limpa caches antigos ─────────────────
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// ── Fetch: serve do cache quando offline ───────────
self.addEventListener('fetch', (event) => {
  // Não intercepta chamadas à API do Google (precisam de internet)
  if (event.request.url.includes('googleapis.com') ||
      event.request.url.includes('accounts.google.com')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      // Se está no cache, entrega do cache
      if (cached) return cached;
      // Se não está, busca na internet
      return fetch(event.request).catch(() => {
        // Se não tem internet e não tem cache, mostra página offline
        if (event.request.destination === 'document') {
          return caches.match('/index.html');
        }
      });
    })
  );
});
