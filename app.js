if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(registration => {
    console.log("service worker has been registered");
    console.log(registration);
  }).catch(error => {
    console.log("service worker has not been registered");
    console.log(error);
  });
}
