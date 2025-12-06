// Name of the cache
const CACHE_NAME = "age-app-v1";

// Files to cache
const ASSETS = [
  "/",
  "/index.html",
  "/service-worker.js",
  "/manifest.json",
  "/icon.png",
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
];

// Install Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate Service Worker
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Fetch event (Cache-first strategy)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return (
        cachedResponse ||
        fetch(event.request)
          .then((response) => {
            // Cache fetched files dynamically only if they come from your domain
            if (
              event.request.url.startsWith(self.location.origin) &&
              response.status === 200 &&
              response.type === "basic"
            ) {
              const cloned = response.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, cloned);
              });
            }
            return response;
          })
          .catch(() => {
            // OPTIONALLY serve fallback content offline
            return caches.match("/index.html");
          })
      );
    })
  );
});



