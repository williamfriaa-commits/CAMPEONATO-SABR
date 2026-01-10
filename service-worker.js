const CACHE_NAME = "eventos-sabr-v1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./tabela.html",
  "./manifest.json",
  "./logo.png",
  "./logo-192.png",
  "./logo-512.png",
  "./fundo-pc-1920x1080.png",
  "./fundo-mobile-1080x1920.png"
];

// INSTALA
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// ATIVA
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// FETCH
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
