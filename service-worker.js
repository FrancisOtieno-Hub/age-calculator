/* ================================
   Age & Birthday Countdown PWA
   Service Worker v3.0
   ================================ */

const CACHE_VERSION = 'age-app-v3.0';
const RUNTIME_CACHE = 'age-app-runtime-v3.0';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon.png',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
];

const CACHE_STRATEGY = {
  cacheFirst: ['/', '/index.html', '/manifest.json', '/icon.png'],
  networkFirst: [],
  staleWhileRevalidate: [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ]
};

/* ========== INSTALL ========== */
self.addEventListener('install', event => {
  console.log('[SW] Installing service worker...');
  
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('[SW] Skip waiting');
        return self.skipWaiting();
      })
      .catch(err => {
        console.error('[SW] Installation failed:', err);
      })
  );
});

/* ========== ACTIVATE ========== */
self.addEventListener('activate', event => {
  console.log('[SW] Activating service worker...');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(name => {
              // Delete old caches
              return name !== CACHE_VERSION && name !== RUNTIME_CACHE;
            })
            .map(name => {
              console.log('[SW] Deleting old cache:', name);
              return caches.delete(name);
            })
        );
      })
      .then(() => {
        console.log('[SW] Claiming clients');
        return self.clients.claim();
      })
  );
});

/* ========== FETCH ========== */
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Ignore non-http(s) requests
  if (!url.protocol.startsWith('http')) {
    return;
  }

  // Ignore browser extensions
  if (url.protocol === 'chrome-extension:') {
    return;
  }

  // Strategy: Cache First (for static assets)
  if (isCacheFirst(request.url)) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Strategy: Stale While Revalidate (for fonts)
  if (isStaleWhileRevalidate(request.url)) {
    event.respondWith(staleWhileRevalidate(request));
    return;
  }

  // Default: Network First (with fallback)
  event.respondWith(networkFirst(request));
});

/* ========== CACHING STRATEGIES ========== */

// Cache First Strategy
async function cacheFirst(request) {
  try {
    const cached = await caches.match(request);
    if (cached) {
      console.log('[SW] Cache hit:', request.url);
      return cached;
    }

    console.log('[SW] Cache miss, fetching:', request.url);
    const response = await fetch(request);
    
    if (response && response.status === 200) {
      const cache = await caches.open(CACHE_VERSION);
      cache.put(request, response.clone());
    }
    
    return response;
  } catch (error) {
    console.error('[SW] Cache first failed:', error);
    
    // Try to return cached version as fallback
    const cached = await caches.match(request);
    if (cached) return cached;
    
    // Return offline page if available
    return caches.match('/index.html');
  }
}

// Network First Strategy
async function networkFirst(request) {
  try {
    const response = await fetch(request);
    
    if (response && response.status === 200 && response.type === 'basic') {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, response.clone());
    }
    
    return response;
  } catch (error) {
    console.log('[SW] Network failed, trying cache:', request.url);
    
    const cached = await caches.match(request);
    if (cached) return cached;
    
    // Fallback to index for navigation requests
    if (request.mode === 'navigate') {
      return caches.match('/index.html');
    }
    
    throw error;
  }
}

// Stale While Revalidate Strategy
async function staleWhileRevalidate(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cachedResponse = await cache.match(request);

  const fetchPromise = fetch(request).then(response => {
    if (response && response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  }).catch(err => {
    console.log('[SW] Fetch failed for:', request.url);
    return cachedResponse;
  });

  return cachedResponse || fetchPromise;
}

/* ========== HELPER FUNCTIONS ========== */

function isCacheFirst(url) {
  return CACHE_STRATEGY.cacheFirst.some(pattern => {
    if (typeof pattern === 'string') {
      return url.includes(pattern);
    }
    return pattern.test(url);
  });
}

function isStaleWhileRevalidate(url) {
  return CACHE_STRATEGY.staleWhileRevalidate.some(pattern => {
    return url.includes(pattern);
  });
}

/* ========== BACKGROUND SYNC (Future Enhancement) ========== */
self.addEventListener('sync', event => {
  console.log('[SW] Background sync:', event.tag);
  
  if (event.tag === 'sync-birthdays') {
    event.waitUntil(syncBirthdays());
  }
});

async function syncBirthdays() {
  // Placeholder for future functionality
  console.log('[SW] Syncing birthdays...');
}

/* ========== PUSH NOTIFICATIONS (Future Enhancement) ========== */
self.addEventListener('push', event => {
  console.log('[SW] Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'Your birthday is coming soon!',
    icon: '/icon.png',
    badge: '/icon.png',
    vibrate: [200, 100, 200],
    tag: 'birthday-reminder'
  };

  event.waitUntil(
    self.registration.showNotification('Birthday Reminder', options)
  );
});

self.addEventListener('notificationclick', event => {
  console.log('[SW] Notification clicked');
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('/')
  );
});

/* ========== ERROR HANDLING ========== */
self.addEventListener('error', event => {
  console.error('[SW] Error occurred:', event.error);
});

self.addEventListener('unhandledrejection', event => {
  console.error('[SW] Unhandled promise rejection:', event.reason);
});

console.log('[SW] Service Worker loaded successfully');
