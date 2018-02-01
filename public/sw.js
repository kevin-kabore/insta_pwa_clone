// Service Workers similar to proxies
// All req and res goes through the SW

// install and activate triggered by browser
self.addEventListener('install', event => {
  console.log('[Service Worker] Installing Service Worker ...', event);
});

self.addEventListener('activate', event => {
  console.log('[Service Worker] activating Service Worker ...', event);
  return self.clients.claim(); // ensures SW are activated correctly
});

// fetch is triggered by web application
self.addEventListener('fetch', event => {
  console.log('[Service Worker] Fetching something ...', event);
  // event.respondWith(null); // overwrites data that gets sent back from event
  event.respondWith(fetch(event.request)); // overwrites data that gets sent back from event
});
