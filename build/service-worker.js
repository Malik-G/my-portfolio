"use strict";var precacheConfig=[["/index.html","c247ba79674a82ed7848820f36385010"],["/static/css/main.20cbcf44.css","0254def5ebca51df650a1c41ad748c86"],["/static/js/main.0fbcb5a6.js","0285bac6fb86daa29b89b7321b2e5b68"],["/static/media/abel-latin-400.f2a14a03.woff2","f2a14a03721b71b489f01a14e97f6489"],["/static/media/abel-latin-400.fddfd901.woff","fddfd90105b27ee60048ec036f77398b"],["/static/media/alegreya-sans-sc-latin-100.206e3aed.woff","206e3aed916450732b47ba5bdb0f3f61"],["/static/media/alegreya-sans-sc-latin-100.dff91022.woff2","dff91022e9f7aa7bed39239a679d7b30"],["/static/media/alegreya-sans-sc-latin-100italic.6e253146.woff","6e2531462df721ce780d5302c1d84ac2"],["/static/media/alegreya-sans-sc-latin-100italic.81989557.woff2","8198955739cf4b462a50aa9047496a56"],["/static/media/alegreya-sans-sc-latin-300.19f790e4.woff","19f790e45f489dd6aa33f36fcc86d798"],["/static/media/alegreya-sans-sc-latin-300.fabc7013.woff2","fabc70133cf25f3c6bdd96e9e273537d"],["/static/media/alegreya-sans-sc-latin-300italic.a3b654d7.woff2","a3b654d7b39c44834d1f049a14636bb2"],["/static/media/alegreya-sans-sc-latin-300italic.a86fff64.woff","a86fff64436fb0b9f4696046b9f74c07"],["/static/media/alegreya-sans-sc-latin-400.3cd1b65e.woff2","3cd1b65ed46dc4f5108724566ab68d2f"],["/static/media/alegreya-sans-sc-latin-400.ad8ec48c.woff","ad8ec48c31c331b60a2f9d5ef9302d5d"],["/static/media/alegreya-sans-sc-latin-400italic.22789390.woff","227893903ce72db9d79e1ce607f0f737"],["/static/media/alegreya-sans-sc-latin-400italic.ba78dadb.woff2","ba78dadb00ca1e9019c7ee47e3589aa7"],["/static/media/alegreya-sans-sc-latin-500.68818b03.woff2","68818b03497af72c05698ef3903fbf7d"],["/static/media/alegreya-sans-sc-latin-500.f673bf9f.woff","f673bf9f42b538cf001f940b9a416356"],["/static/media/alegreya-sans-sc-latin-500italic.46fd2d9d.woff","46fd2d9dc3286527044d3d52518c3ec8"],["/static/media/alegreya-sans-sc-latin-500italic.64b55782.woff2","64b557822aaa0ef31acc456170d109f1"],["/static/media/alegreya-sans-sc-latin-700.2dd52135.woff","2dd5213577ac630ec3ae1feb437ba733"],["/static/media/alegreya-sans-sc-latin-700.8fa25eda.woff2","8fa25eda9e94ab70845ea965a7df77f8"],["/static/media/alegreya-sans-sc-latin-700italic.4b95cf02.woff2","4b95cf02583343038b4483662c45e108"],["/static/media/alegreya-sans-sc-latin-700italic.aff29be8.woff","aff29be8e5ffa55da49adc546e1c4686"],["/static/media/alegreya-sans-sc-latin-800.1548270c.woff2","1548270c44100c40d50574f2568449b4"],["/static/media/alegreya-sans-sc-latin-800.ed38ebdb.woff","ed38ebdb170cbbc8db35809520b2350c"],["/static/media/alegreya-sans-sc-latin-800italic.4bbf8a17.woff2","4bbf8a17f90b85e91cb749302a8603b2"],["/static/media/alegreya-sans-sc-latin-800italic.96ad3fe4.woff","96ad3fe4ea1970f6c75cae116805fd10"],["/static/media/alegreya-sans-sc-latin-900.9bdbc277.woff2","9bdbc277c905307f097c70f4b7de3a2e"],["/static/media/alegreya-sans-sc-latin-900.b3479e11.woff","b3479e11aad304fb5a9b45080b4a9f83"],["/static/media/alegreya-sans-sc-latin-900italic.c846619a.woff","c846619a925670b1885d9b45bdc05bc4"],["/static/media/alegreya-sans-sc-latin-900italic.f3be26fc.woff2","f3be26fcbaec8537b20e1ee9fd51959f"],["/static/media/nothing-you-could-do-latin-400.4b199541.woff2","4b19954192d9e89f2d68d67bd567d608"],["/static/media/nothing-you-could-do-latin-400.abd73d73.woff","abd73d73f0de9402af9f1053ff8d48b1"],["/static/media/syncopate-latin-400.0e3148a5.woff","0e3148a59192a5f67ebb3bba76fe1769"],["/static/media/syncopate-latin-400.d6a0d1b5.woff2","d6a0d1b5923a5836904a2a1ae14f92b5"],["/static/media/syncopate-latin-700.e85b7e5f.woff2","e85b7e5f34b65f72603d74d1b24a6c1b"],["/static/media/syncopate-latin-700.ea4f6a9c.woff","ea4f6a9ce63392262637c0b4d3143173"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(a,e){var t=new URL(a);return"/"===t.pathname.slice(-1)&&(t.pathname+=e),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(a,e,t,c){var n=new URL(a);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(e)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(a,e){if(0===a.length)return!0;var t=new URL(e).pathname;return a.some(function(a){return t.match(a)})},stripIgnoredUrlParameters=function(a,t){var e=new URL(a);return e.hash="",e.search=e.search.slice(1).split("&").map(function(a){return a.split("=")}).filter(function(e){return t.every(function(a){return!a.test(e[0])})}).map(function(a){return a.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(a){var e=a[0],t=a[1],c=new URL(e,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(a){return a.keys().then(function(a){return a.map(function(a){return a.url})}).then(function(a){return new Set(a)})}self.addEventListener("install",function(a){a.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(e){if(!t.has(e)){var a=new Request(e,{credentials:"same-origin"});return fetch(a).then(function(a){if(!a.ok)throw new Error("Request for "+e+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return c.put(e,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(a){var t=new Set(urlsToCacheKeys.values());a.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var n="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(a){return a.match(urlsToCacheKeys.get(t)).then(function(a){if(a)return a;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});