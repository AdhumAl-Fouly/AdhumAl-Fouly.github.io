'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "04523ca86f1d224f8eba7538208feec8",
"version.json": "09a1591389bf90209d7e04bd760b952a",
"favicon.ico": "32e2f77c44b38c7b3f3cce1e943cbf48",
"index.html": "303ce373f5e715380116c436b67a72cd",
"/": "303ce373f5e715380116c436b67a72cd",
"main.dart.js": "388d1b38d1edea649a449e9d4a648293",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "12b9764a253e9698ff8b2f066555b604",
"icons/Icon-192.png": "99f94cc14240c1f529fe2c868045a5b6",
"icons/Icon-maskable-192.png": "99f94cc14240c1f529fe2c868045a5b6",
"icons/Icon-maskable-512.png": "7c22488f03725da7a069509dbfc4db93",
"icons/Icon-512.png": "7c22488f03725da7a069509dbfc4db93",
"manifest.json": "f7cdc84c202093b86f0bcdbf0bc8f9f2",
"assets/AssetManifest.json": "5e0e9a69c13b935676e0f4be2d5f846c",
"assets/NOTICES": "f9ec953e1e4e2655b4fbec62c47bcb74",
"assets/FontManifest.json": "7eeb79e990ddf78a195774fc9f09a2f1",
"assets/AssetManifest.bin.json": "33455e3925786937577a2e5969cf282e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "566621e84f49c597c74a9aff2bc80b0d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9fe1aff938ea1b4a621708e41708e658",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "41234602408952b5244f3e06fe7265e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c01c68c7f9d917d02b780b05168d20b6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "24361b176e884c1bd80af59c691e0599",
"assets/fonts/MaterialIcons-Regular.otf": "0fd9ff3a66c5456526dc4875fad46dc1",
"assets/assets/images/k.png": "0293eea509789d30df3a6cfabe52fbec",
"assets/assets/images/buildings-2.svg": "05c360fa8f4c3b19f1328130095ab898",
"assets/assets/images/place_holder.png": "51c4de54ebd8ccb8dc0885a9f6888b9c",
"assets/assets/images/j.png": "cc5e557c13b59147b601f5bef6415c36",
"assets/assets/images/influencers_platform.svg": "d41e543026374bfe8e6ad69844d27efc",
"assets/assets/images/13.svg": "3e836efc4d0b6e103eb3c98f73bc7bfb",
"assets/assets/images/h.png": "53f17fa933c7d81a2f8be1e1ecdeea7f",
"assets/assets/images/i.png": "9860a10cefb08c06c49da8016cf9e92b",
"assets/assets/images/login.png": "dc2d89b10d112a56cecbabe8e31dfb45",
"assets/assets/images/m.png": "de8466f951c683573e9bc2784088cf08",
"assets/assets/images/l.png": "9cabb5e51802233608e437fcff3c41de",
"assets/assets/images/evaluate.svg": "c83b5aa1d4047ee38f15f36143a69c43",
"assets/assets/images/300.svg": "eb3fbf04a72a9f75f9395f4de0aea773",
"assets/assets/images/vector.svg": "c16d3d96676f32ff2b5c39d3ef3103a7",
"assets/assets/images/meriam_mohamed.png": "b744b139a38d3f6a836327b80e8b55c6",
"assets/assets/images/y.png": "d681ba4ea9f977c47b5995b88b9d4f96",
"assets/assets/images/n.png": "deca8b126b348afc335256b65460fd99",
"assets/assets/images/o.png": "21e2b662ca7a8e2a9bc831ed53de215b",
"assets/assets/images/influncers.png": "ce960e7e1a3812e6acd69717009097e7",
"assets/assets/images/inflow_package.svg": "2aefed29361be3d9f58086af0c057f14",
"assets/assets/images/link.svg": "88b03573a305c02f864501f288e3bf4c",
"assets/assets/images/99.svg": "b9728cb3df8f4a8269a87a5d995b5578",
"assets/assets/images/footer_desghn.png": "849d0323767782a647bfb0fc0d286dc2",
"assets/assets/images/shareef_mohamed.png": "0743eb2dd3028ce53c0218ccfc5cd039",
"assets/assets/images/step_2.png": "b96e86bdc1aad1b10bc425345c2705ea",
"assets/assets/images/partnerships.svg": "50e9d6df3438aef433862a6704105086",
"assets/assets/images/step_3.png": "65d828d6046f2eccb1d60e497824c19e",
"assets/assets/images/+.svg": "e8a377c5f085cc562d6651b2110a05ac",
"assets/assets/images/step_1.png": "80607c7de5113d048b6ded93eb3a7c35",
"assets/assets/images/signUpInf.png": "31786fb46e1a5f3e3208aaadb384b58d",
"assets/assets/images/shape.png": "6159ac62d713d94b8427ed4daf9080ff",
"assets/assets/images/K.svg": "001e07a4b76dbc3f17947bee74407dc6",
"assets/assets/images/search.png": "2e5f5126f4e4df9f171903f9e30f7bf9",
"assets/assets/images/badge2.svg": "d74adfc5487f8fca8aa46947138b913f",
"assets/assets/images/congratilations.png": "159163f3d01330c09184a7c9c851ff0f",
"assets/assets/images/badge.svg": "9d7f3a2c4c6a07ccf3677b99c072be1f",
"assets/assets/images/menu.png": "01f9a0c9abe04037d7146edc1694a157",
"assets/assets/images/iphone.png": "826c3333c07479242db130669ac5c9c6",
"assets/assets/images/mostafa_ali.png": "085eefe45e309b3de91559f397d81b64",
"assets/assets/images/signUp.png": "a4d6e58955e43874e2560a04c0f1e33f",
"assets/assets/images/apple_google.png": "27a034dbb478b22281f7feb3b796f7a4",
"assets/assets/images/filter.png": "c05a4226e4b5d71a91dcdde437c5f255",
"assets/assets/images/specialized.svg": "07a266831156158dc5f9b9af9d8e1a5d",
"assets/assets/images/logo4.jpg": "091e93a907c73e0a05b37f47dc998878",
"assets/assets/images/frame.png": "66a376c6a7f7e2fe4263143d63cb21a1",
"assets/assets/images/b.png": "1e658b0461cb393d8d159675d5148bab",
"assets/assets/images/eye.svg": "828586f66df7ed290ac08f43667cf7b5",
"assets/assets/images/c.png": "113a5f10791d1997e131aacbd536f6c0",
"assets/assets/images/a.png": "4d546d5652881692f701533f1992fa0b",
"assets/assets/images/logo2.svg": "6081e0e5e8e3fb965c3fdfc650496176",
"assets/assets/images/logo.svg": "a150739d2b3f8ba332111a36f8609c8a",
"assets/assets/images/d.png": "618004bcccf0a7e53e2182d0988d920e",
"assets/assets/images/menu_desighn.png": "86d2bce76724105e395771f64492fc75",
"assets/assets/images/e.png": "f4bb455475459cc8ce4fc4ea37599950",
"assets/assets/images/logo3.svg": "7d06ab2d1f84c7bf2631e028f61f72d7",
"assets/assets/images/g.png": "9d8a12e05fe2ac50c99412c0b5b49fd2",
"assets/assets/images/p.png": "180c4270cb5cc472fb29ae79beb2b808",
"assets/assets/images/collaborations.svg": "d148ded5888668c3c94c6715202b769c",
"assets/assets/images/subtract.png": "f068ff14453dd6cc664d70d68a70dc42",
"assets/assets/images/q.png": "2436072dab1c5178d0230182c6f933ea",
"assets/assets/images/f.png": "d46be4ddaa277b96c9367b0e7cb3d6cf",
"assets/assets/font/LeckerliOne-Regular.ttf": "ca23379cb3144c5096ec92d77b47d92c",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
