'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ecac964a6e8c497149744bf815d6bd31",
"assets/AssetManifest.bin.json": "ce5052d99a53ec6ba5ef937f69af4617",
"assets/AssetManifest.json": "3a6db9ed7da61190630c9f131ac0db5a",
"assets/assets/font/LeckerliOne-Regular.ttf": "ca23379cb3144c5096ec92d77b47d92c",
"assets/assets/images/+.svg": "047f5e21f1bc5daaa82745a72eb6b098",
"assets/assets/images/13.svg": "c9bc93e18c088cf186410facda238955",
"assets/assets/images/300.svg": "4f171a7c6e3663a18a4cefc20b330af8",
"assets/assets/images/99.svg": "0375ac42ce505f04d87ddf6ce4c693b5",
"assets/assets/images/a.png": "4d546d5652881692f701533f1992fa0b",
"assets/assets/images/b.png": "1e658b0461cb393d8d159675d5148bab",
"assets/assets/images/badge.svg": "7c41ff1cc5db6e2403e5ab0052960a3e",
"assets/assets/images/badge2.svg": "5e1c49c63f25da851db8088e2202b009",
"assets/assets/images/buildings-2.svg": "892aae68ad44089222b4020a93ca8733",
"assets/assets/images/c.png": "113a5f10791d1997e131aacbd536f6c0",
"assets/assets/images/d.png": "618004bcccf0a7e53e2182d0988d920e",
"assets/assets/images/e.png": "f4bb455475459cc8ce4fc4ea37599950",
"assets/assets/images/eye.svg": "fb15ab681f979ddf9e8f4ddefc869502",
"assets/assets/images/f.png": "d46be4ddaa277b96c9367b0e7cb3d6cf",
"assets/assets/images/filter.png": "c05a4226e4b5d71a91dcdde437c5f255",
"assets/assets/images/frame.png": "66a376c6a7f7e2fe4263143d63cb21a1",
"assets/assets/images/g.png": "9d8a12e05fe2ac50c99412c0b5b49fd2",
"assets/assets/images/h.png": "53f17fa933c7d81a2f8be1e1ecdeea7f",
"assets/assets/images/home1.gif": "27aabd1a474196d00300fffd5bc2e53b",
"assets/assets/images/K.svg": "b5353d8dd5a356590bfff06da1e0a3df",
"assets/assets/images/link.svg": "80bae3f8c6ad41ece9eeb935b2da7c57",
"assets/assets/images/login.png": "dc2d89b10d112a56cecbabe8e31dfb45",
"assets/assets/images/logo.svg": "899fc95a7958378d5921622250c24b89",
"assets/assets/images/logo2.svg": "d5dac13cb3fd1f5b6c5a43b6647d9b43",
"assets/assets/images/logo3.svg": "99b97237c9ff1c12c7d61a119707d859",
"assets/assets/images/menu.png": "01f9a0c9abe04037d7146edc1694a157",
"assets/assets/images/search.png": "2e5f5126f4e4df9f171903f9e30f7bf9",
"assets/assets/images/signUp.png": "a4d6e58955e43874e2560a04c0f1e33f",
"assets/assets/images/subtract.png": "f068ff14453dd6cc664d70d68a70dc42",
"assets/assets/images/vector.svg": "a9e329e89a5d2915f628a808fcfd7dea",
"assets/assets/images/y.png": "d681ba4ea9f977c47b5995b88b9d4f96",
"assets/FontManifest.json": "7eeb79e990ddf78a195774fc9f09a2f1",
"assets/fonts/MaterialIcons-Regular.otf": "99631a300e6e524e25379b7400a430ac",
"assets/NOTICES": "37a745a816efb78241f97f9c8722a811",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "36b0a46479d3bee18c8d6fbcb1746ed8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "664085eb54644739890d2bd304a794df",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "cf1f0b2c44dbbe3c9fd77b1843bc67a5",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9fe1aff938ea1b4a621708e41708e658",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "bf107539cf8cb257268d9b17b9844d30",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5ce2393e2ecb58e31fb64d7628880df5",
"/": "5ce2393e2ecb58e31fb64d7628880df5",
"main.dart.js": "768c335af9084cbbfeec24d7361f2998",
"manifest.json": "73e481b85b328527699dd9fb6aeb90e6",
"version.json": "b879f1cdf4c9488a17d1216b8cd9544e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
