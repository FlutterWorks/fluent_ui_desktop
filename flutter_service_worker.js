'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_8.part.js": "46442cd5ce33e43174b915cdbe17947c",
"main.dart.js_22.part.js": "1731bf15f0e2275b461f9ec179d3ce76",
"main.dart.js_11.part.js": "2cfbb9d9103be6c44e3052651d63fe51",
"main.dart.js_12.part.js": "d382ea0a4d2d6d2447ae020c7ceb8dce",
"assets/AssetManifest.json": "d28c888634906fb585a4e78b850824ca",
"assets/AssetManifest.bin.json": "ddd3257fb805b264e2dadba5b806e0f3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b6563f51aab4da1919b1718cb313cc3b",
"assets/FontManifest.json": "6b53bbac7e12ce88331411914c31782e",
"assets/NOTICES": "edbc24abafbd5582abef846aa3051320",
"assets/fonts/MaterialIcons-Regular.otf": "258caf53506d40d0f5987f6662fd99a7",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "f3c4f09a37ace3246250ff7142da5cdd",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"main.dart.js": "9b5e0cd1d35e2edb83493c2a07f1273e",
"main.dart.js_14.part.js": "dfcf9b38ab6afed528eec7271c398aa2",
"main.dart.js_26.part.js": "234dff1bf87e91deb4142348dfeb846e",
"main.dart.js_3.part.js": "17ecddb3cc5091f4e6ec4919ab9d5c6c",
"main.dart.js_5.part.js": "85d58718217e39a7d383d0aa6328ba81",
"main.dart.js_15.part.js": "229803443c0e6674c1a749601414675d",
"icons/Icon-512.png": "2650274e44ece6729a43d7ee130fdfbd",
"icons/Icon-192.png": "ef3b512b1c79d917c832c8c8c75ced88",
"icons/Icon-maskable-512.png": "2650274e44ece6729a43d7ee130fdfbd",
"icons/Icon-maskable-192.png": "ef3b512b1c79d917c832c8c8c75ced88",
"main.dart.js_21.part.js": "20d1246d7e39191c01438ad39a4016d6",
"flutter_bootstrap.js": "3c457b080a5ce05f79b1b10d4fe46b0c",
"main.dart.js_1.part.js": "2813b9addcefa43051b1f31aff30e82f",
"main.dart.js_25.part.js": "6949c0cea103e947a748e96c81d83fe8",
"favicon.png": "aa55c22e0c7bce9da0110b3035be5332",
"main.dart.js_20.part.js": "9aa433448205022f897b0d489a44932c",
"main.dart.js_10.part.js": "e7cee2cd372332dabcd6714f49906002",
"main.dart.js_23.part.js": "8123949188df84c6cc0853a7cfc2adb9",
"main.dart.js_6.part.js": "700b76fcf4db6064589eab4106d6b40b",
"main.dart.js_7.part.js": "4e3b89b5da663c9b4d61be14f081590a",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js_17.part.js": "372294e5d41c271e228ebbd4e540ec05",
"index.html": "0ee5177bc1eb0099c71de304498b5510",
"/": "0ee5177bc1eb0099c71de304498b5510",
"version.json": "ff966ab969ba381b900e61629bfb9789",
"main.dart.js_13.part.js": "c9b732bb0372d283534fb3969f4d8c33",
"main.dart.js_2.part.js": "183c628f7774fe2c67a7a4bdd1a5dcd9",
"main.dart.js_24.part.js": "681787b964208ce01f8f1597ecf469bb",
"main.dart.js_16.part.js": "6dacc41181f71b096393b5c7c44f47ff",
"manifest.json": "1e04e819df5e7720a7659fb598692f21",
"main.dart.js_4.part.js": "2e9ede7c9018792dfabe5bc7f86fbba0",
"main.dart.js_18.part.js": "c78086f83e599a6cf63eea5fe84ff5b3",
"main.dart.js_9.part.js": "8b3a58af7835393cd9d7494c6fb369e8",
"splash/style.css": "1404a5cdf67c618f89467983c828bd26",
"splash/img/light-2x.png": "19b7dded1199d8f2118591f39f5cc169",
"splash/img/dark-4x.png": "db9f16f985c9a2daf9c84e33358f0b14",
"splash/img/dark-1x.png": "299ee6a20da3b8b2eedabe5d07d1e365",
"splash/img/light-1x.png": "299ee6a20da3b8b2eedabe5d07d1e365",
"splash/img/dark-2x.png": "19b7dded1199d8f2118591f39f5cc169",
"splash/img/dark-3x.png": "6dce9ac774ebd7411409ac717fad1c3a",
"splash/img/light-4x.png": "db9f16f985c9a2daf9c84e33358f0b14",
"splash/img/light-3x.png": "6dce9ac774ebd7411409ac717fad1c3a",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
