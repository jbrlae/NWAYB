// Minimaler Service Worker: Chrome verlangt einen, damit «Installieren» erscheint.
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",()=>{});
