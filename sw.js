self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("static").then(cache => {
      return cache.addAll(["./index.html"]);
    })
  );
});

self.addEventListener("fetch", e => {
  console.log(`Intercepting fetch request for: ${request.url}`);
});