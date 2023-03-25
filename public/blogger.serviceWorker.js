const assets = [
    "/",
    "css/style.css",
    "js/app.js",
    "/images/blog1.png",
    "/images/blog2.png",
    "/images/blog3.png,"
  ];

  const BLOGGER_ASSETS = "blogger-assets";
  self.addEventListener("install", (installEvt) => {
    installEvt.waitUntil(
      caches
        .open(BLOGGER_ASSETS)
        .then((cache) => {
          cache.addAll(assets);
        })
        .then(self.skipWaiting())
        .catch((e) => {
          console.log(e);
        })
    );
  });

  self.addEventListener("activate", function (evt) {
    evt.waitUntil(
      caches
        .keys()
        .then((keysList) => {
          return Promise.all(
            keysList.map((key) => {
              if (key === BLOGGER_ASSETS) {
                console.log(`Removed old cache from ${key}`);
                return caches.delete(key);
              }
            })
          );
        })
        .then(() => self.clients.claim())
    );
  });
  
  self.addEventListener("fetch", function (evt) {
    evt.respondWith(
      fetch(evt.request).catch(() => {
        return caches.open(BLOGGER_ASSETS).then((cache) => {
          return cache.match(evt.request);
        });
      })
    );
  })