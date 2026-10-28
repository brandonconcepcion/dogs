// Pawse briefly lived at /dogs/ and registered a service worker here. This replacement removes it.
// It does NOT delete any caches: the real app at /pawse/ shares this origin's cache storage.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil(self.registration.unregister());
});
