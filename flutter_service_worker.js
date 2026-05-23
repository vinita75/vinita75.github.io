'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "14d32f5a02d61b84bd301b39a95e60c5",
"assets/AssetManifest.bin.json": "9e3df6a2387f66d201e43369696ef65a",
"assets/assets/images3/coding1.gif": "23007e52365d93fa9c2629b33382751e",
"assets/assets/images3/walp1.jpg": "bfcf0bc0d92c7d5a6562fda3088a2744",
"assets/assets/images3/walp2.jpg": "f45596ebe4373c5e852c4b9c73fcfafd",
"assets/assets/images3/walp3.jpg": "1bd12d960c12528f2b43c0619d7fe686",
"assets/assets/images3/walp4.jpg": "df43b15290f98095c747d79a02db8852",
"assets/assets/img/person_mkp.jpg": "ec028c10e04d165132ca8e55ec90e20d",
"assets/assets/img/person_mkp2.jpeg": "7e417223b1455fb5259c4257b4c32d54",
"assets/assets/img/vinita_profile.png": "1d18051fb424c5e24362bba92c3ef865",
"assets/assets/imgmock/bg_banner.jpg": "2258a6e5f8b74b805d813a3ef219f0c6",
"assets/assets/imgmock/bg_image_1.jpg": "584a09552f5ac2cfff0e0efb1dd64cb9",
"assets/assets/imgmock/bg_image_2.jpg": "79c4fdfbd3f67581b66c041ef38026ad",
"assets/assets/imgmock/logo/amazon.png": "f0043099e1657244841ec2c26ee1d69a",
"assets/assets/imgmock/logo/company_1.svg": "f738ddb8b11e678a5ce16ffce1e242c8",
"assets/assets/imgmock/logo/company_2.svg": "4c9a3d70ff8e1f4326eabfbe5dad76b6",
"assets/assets/imgmock/logo/company_3.svg": "ede3aa5a3ec9b431d8e57705dc8895cb",
"assets/assets/imgmock/logo/company_4.svg": "e61bbd5965d2b205b9c42d6571bd0fed",
"assets/assets/imgmock/logo/company_5.svg": "441a274125dc061076b9a2cd17002b8a",
"assets/assets/imgmock/logo/company_6.svg": "d910296bebf43aede5784c989e9a1f32",
"assets/assets/imgmock/logo/company_7.svg": "acb418e8e0d07d4b39ea9e20b6d03412",
"assets/assets/imgmock/logo/company_8.svg": "119644e02ba9114c7b6dd55a2839e1e4",
"assets/assets/imgmock/logo/google.png": "6e989f3307b45c33aeed2003865a49fd",
"assets/assets/imgmock/logo/microsoft.png": "957341598539646e404b2dd1bc5b3c7d",
"assets/assets/imgmock/logo/nginx.png": "ff1a00a5d2b96b80cd287b2d47331685",
"assets/assets/imgmock/person.jpg": "74010bfa4341d0eefd3489dceb163e8a",
"assets/assets/imgmock/photo_2.jpg": "3f63a5efc9ee200a494ff8507bd2327a",
"assets/assets/imgmock/testimonials/testimonials_1.jpg": "5d04bcd6ebceeb14d3df16bcb63f1abc",
"assets/assets/imgmock/testimonials/testimonials_2.jpg": "8c9b7a683178ef8b72ce87d371f4a981",
"assets/assets/imgmock/work/ashika_trading.png": "f30768b9fd303b4aae49f0e8c82a74fa",
"assets/assets/imgmock/work/ekyc_system.png": "02c4ba76936ea96d8dda7b92e5206e14",
"assets/assets/imgmock/work/music_player.png": "dc52262da94d565aa18ae8387547a36b",
"assets/assets/imgmock/work/pharmacy_system.png": "e0d827d0904716368571e0c8e43fbb07",
"assets/assets/imgmock/work/tickpro_plus.png": "f0d8dec59687b00a7edd8505b67b9774",
"assets/assets/imgmock/work/wealthify_tracker.png": "3f8973dcc3e2cfe95fbd5b9c30553a24",
"assets/assets/imgmock/work/work_1.jpg": "95da494968f7d35fe00a54c0bd62a64c",
"assets/assets/imgmock/work/work_2.jpg": "522c6a041a24225a04b51964717fc010",
"assets/assets/imgmock/work/work_3.jpg": "7da699e48a04ad7bb72c35e656ce572e",
"assets/assets/imgmock/work/work_4.jpg": "18e1c58dc4cb194a6cdc65681966a8a2",
"assets/assets/imgmock/work/work_5.jpg": "e070a42334a0914ca31d1549f43935c4",
"assets/assets/imgmock/work/work_6.jpg": "5d50e2262f1bd726d81a5ccbc705bde7",
"assets/assets/imgmock/work/work_7.jpg": "531fd9689ff30830affdf377ef06f11f",
"assets/assets/imgmock/work/work_8.jpg": "214dd1efe0735d7122ccc88b6a227024",
"assets/assets/imgmock/work/work_9.jpg": "0f09e14ded6f53291958d60e026ec13d",
"assets/assets/imgmock/work/work_onepass.jpeg": "2dceb0aea145b9c9bb4c8412c73d1898",
"assets/assets/svgimg/facebook.svg": "1f180fd07dedd4121acd8b8e8e82ba02",
"assets/assets/svgimg/facebook_color.svg": "7d6832bc3b14cae8fe78543325e52af3",
"assets/assets/svgimg/facebook_fiiled.svg": "7dcd8c81436d80106bc65ba90d5e0759",
"assets/assets/svgimg/github.svg": "cb073367aba4bca812aadfdf8cca82fc",
"assets/assets/svgimg/github2.svg": "42c330fff3840797cc1e38bff8fc4608",
"assets/assets/svgimg/github_filled.svg": "edd2906685e30d7b5ea8febe2a4bcec0",
"assets/assets/svgimg/gmail2.svg": "3f1b86806d4feec8ffec7eec9498fc96",
"assets/assets/svgimg/instagram.svg": "4eec003ab2d015127fbe67166f4970b0",
"assets/assets/svgimg/insta_color.svg": "d5368227272f1b9f38c5d2f2de975412",
"assets/assets/svgimg/insta_filled.svg": "28acf6f98254bb84ed38aef5eb78bf26",
"assets/assets/svgimg/linkedin_color.svg": "c29a1dc3ef77d690678140ac5f5d1d43",
"assets/assets/svgimg/linkedin_filled.svg": "2fa056c3a645bacdb31d62f493a33878",
"assets/assets/svgimg/medium.svg": "8835c0d5e2a66bc0aad1a2af8617d035",
"assets/assets/svgimg/twitter.svg": "04fa46388b93604383bc80b452951a49",
"assets/assets/svgimg/twitterx.svg": "82c3e133a8cc54b1ef3b28e311675722",
"assets/assets/svgimg/twitter_color.svg": "558f2c1ec59982bcb66eec61d8a3e81e",
"assets/assets/svgimg/twitter_filled.svg": "c4218d14f9670d19c7810ccd69ca2d07",
"assets/assets/svgimg/whatsapp.svg": "ae14534c54f717c2b3dde29f8c481913",
"assets/assets/svgimg/whatsapp_color.svg": "d9274e80fec0c32da6e7601a308ac977",
"assets/assets/svgimg/whatsapp_filled.svg": "019f4c06bc129ecddb311225ac8e0d23",
"assets/FontManifest.json": "232ee60eb064306e39a2ed4716369e57",
"assets/fonts/Lora-Bold.ttf": "04a54a65953cf0c6f9c2170ee70ee8b7",
"assets/fonts/Lora-BoldItalic.ttf": "86eab4693daea5cd20162616a7a72306",
"assets/fonts/Lora-Italic.ttf": "fe816b372d76560f16a295da2e98b198",
"assets/fonts/Lora-Medium.ttf": "4e4f1dc55a062af61b51c783c510b6ca",
"assets/fonts/Lora-MediumItalic.ttf": "aec6fac88e8c97a63cd80e1bb4177c15",
"assets/fonts/Lora-Regular.ttf": "5fbbc2dd9545c49556bbf4323e73ffe0",
"assets/fonts/Lora-SemiBold.ttf": "585af3507153b8b738555012c675662f",
"assets/fonts/Lora-SemiBoldItalic.ttf": "75e3cd0d410672cc745bd776f0c35512",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "680503a22f6a0fb6b0eee9b93fa0b970",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "1fcba7a59e49001aa1b4409a25d425b0",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "5b8d20acec3e57711717f61417c1be44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "e0d92c4316069012003a766c6e6a1327",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "70d275d1e4a3c52b9721db4f93fe585e",
"/": "70d275d1e4a3c52b9721db4f93fe585e",
"main.dart.js": "8c96d71226eac0daba8b104c70f48c5e",
"manifest.json": "958611d24910c8e2ec6a3eab453fd90e",
"PradeepYadavCV.pdf": "17dafa913f7d875cf9e599ab83319742",
"version.json": "1338a4dc52074efe8bc849b1e6e680ff",
"VinitaSharmaCV.pdf": "17d4de6bbd26b91ff8fe0f0e12f2368b"};
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
