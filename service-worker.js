/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d1db4f49b8f2a7ebc69f9f934c86cb31"
  },
  {
    "url": "assets/css/0.styles.1205a14e.css",
    "revision": "80fdba1f1511a2fb4f2e275f5f1202bb"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.cc3f06ad.js",
    "revision": "21f096bc3d029ee481f7a1c3dfcc91c0"
  },
  {
    "url": "assets/js/10.160d55d1.js",
    "revision": "cf7ec8c399133d6655fd90d6178756c8"
  },
  {
    "url": "assets/js/100.e6e97dbb.js",
    "revision": "53473cbc91df332f1db40ece9ae57cfe"
  },
  {
    "url": "assets/js/101.71531ea7.js",
    "revision": "41122d44111e12e5c9ce6a24bfa01287"
  },
  {
    "url": "assets/js/102.02fe4d6c.js",
    "revision": "5f496da749c4063163768de6afe73964"
  },
  {
    "url": "assets/js/103.12e8b38f.js",
    "revision": "8026419385a459e029b5cf3dff86aa7b"
  },
  {
    "url": "assets/js/104.82c39721.js",
    "revision": "253fda840c70800f9a0bf1f8aa8313c0"
  },
  {
    "url": "assets/js/105.b22df0d5.js",
    "revision": "4cb0c91158b785d332e8c0c3978d7e8c"
  },
  {
    "url": "assets/js/106.ec826255.js",
    "revision": "d1a48b36d6573e054d75483f2045536a"
  },
  {
    "url": "assets/js/107.c02a9f79.js",
    "revision": "41f01535c617643b5389cdfcfb427201"
  },
  {
    "url": "assets/js/108.b79b5d30.js",
    "revision": "76533e4127e9477d8eac869081c94c9d"
  },
  {
    "url": "assets/js/109.83d55e2d.js",
    "revision": "2f461b133646bc0ff78c4f5f7b57e497"
  },
  {
    "url": "assets/js/11.a35387bb.js",
    "revision": "e1b30f4d526fbca5f1cbe2c00d7d255f"
  },
  {
    "url": "assets/js/110.6a42a645.js",
    "revision": "a27508ff41a83adc2cd7bf1dc3623b7f"
  },
  {
    "url": "assets/js/111.a6276c13.js",
    "revision": "5a6d3c5ecf8d81bd09d95ccf4948ad23"
  },
  {
    "url": "assets/js/112.90ed5a1a.js",
    "revision": "07afe714cc74a56e6046954f2660b711"
  },
  {
    "url": "assets/js/113.903a9362.js",
    "revision": "9e9a89faf604f1bf275a13f74bfd2574"
  },
  {
    "url": "assets/js/114.602eb4e7.js",
    "revision": "d02a1020831a2303fbac0e41436d6008"
  },
  {
    "url": "assets/js/115.4adf123d.js",
    "revision": "8a317dfb90a816f95216d7536424c58e"
  },
  {
    "url": "assets/js/116.cef1f71d.js",
    "revision": "6c6b4303dcf8beda6636c8bb5340e875"
  },
  {
    "url": "assets/js/117.9036abef.js",
    "revision": "25ed10f7f580eda30853c6702ab938e4"
  },
  {
    "url": "assets/js/118.c128aa9e.js",
    "revision": "0d5ebf68e8ccf95379b3543bf935c88b"
  },
  {
    "url": "assets/js/119.11cc1ca9.js",
    "revision": "6e06c4d96451240e8074f15e6fe10c76"
  },
  {
    "url": "assets/js/12.7823f514.js",
    "revision": "bd648485a89b968dc2e447d3ee429def"
  },
  {
    "url": "assets/js/120.8437dd63.js",
    "revision": "e20f0c838cdff2e1ef9c9d40ecc4e18f"
  },
  {
    "url": "assets/js/121.3d9e7945.js",
    "revision": "b418c5127fc5950a7be4aa464c94e55a"
  },
  {
    "url": "assets/js/122.fe4e41e3.js",
    "revision": "0ad1e0a718aeb925de30e2ee7e62d4be"
  },
  {
    "url": "assets/js/123.cc7e22d5.js",
    "revision": "bc76e87fed6cb21005d849f74dba7e09"
  },
  {
    "url": "assets/js/124.1931b133.js",
    "revision": "4113c391fa1c707c54b3349891e34a1c"
  },
  {
    "url": "assets/js/125.de3ae808.js",
    "revision": "64dfc3ec947871bc981a2cfacc0d59b9"
  },
  {
    "url": "assets/js/126.e8fa28d2.js",
    "revision": "5449be51f8d192f77b9216624532a34b"
  },
  {
    "url": "assets/js/127.2f3166a1.js",
    "revision": "a79b5f8031062db5c29960ed8e3bbd55"
  },
  {
    "url": "assets/js/128.17964bad.js",
    "revision": "adfec24ade0838058725e32ba2e5fa45"
  },
  {
    "url": "assets/js/129.4417f800.js",
    "revision": "55805633439991db424d84eeca4c4584"
  },
  {
    "url": "assets/js/13.cc979e6d.js",
    "revision": "df97a0dfc7c188c07456d7093841572a"
  },
  {
    "url": "assets/js/130.53b1a0c5.js",
    "revision": "21e3a8a7c955b2187347e9c82b605787"
  },
  {
    "url": "assets/js/131.b16ded87.js",
    "revision": "517a06e979961e7dafdd8229d0ab9502"
  },
  {
    "url": "assets/js/132.a5076ef8.js",
    "revision": "f323d3c8c4450c9c7ee54d9e64620749"
  },
  {
    "url": "assets/js/133.e1abc333.js",
    "revision": "0233df92804e5d2c9707ecf329245f28"
  },
  {
    "url": "assets/js/134.8c3a1244.js",
    "revision": "6ebdfbcb25e9676dd05c0433c78c5584"
  },
  {
    "url": "assets/js/135.c0f8727c.js",
    "revision": "4fe2dd244f3513a1c8128f9dd7a3a953"
  },
  {
    "url": "assets/js/136.62564340.js",
    "revision": "1dfcd39550d26c00bddb1c71fcac35fe"
  },
  {
    "url": "assets/js/137.640edf57.js",
    "revision": "690913a6d3ae438c9bb797bff25f464c"
  },
  {
    "url": "assets/js/138.af07d739.js",
    "revision": "ad3e0463cdd83815f85d29db33191c74"
  },
  {
    "url": "assets/js/139.5120cab1.js",
    "revision": "c911f2db768dbd4976592a91b9a0ad4c"
  },
  {
    "url": "assets/js/14.0440142f.js",
    "revision": "a9e49bc65cf464fe679aaf0fb74787c3"
  },
  {
    "url": "assets/js/140.b16e6c70.js",
    "revision": "c3ad882f2b3a054f3906d2df692d77a7"
  },
  {
    "url": "assets/js/141.e3c51d8e.js",
    "revision": "6fc67e6c2353a0fe8f20eb04d5046d47"
  },
  {
    "url": "assets/js/142.79855c10.js",
    "revision": "60eb1fdd0676eea3019d8460af185b73"
  },
  {
    "url": "assets/js/143.8fc95c6d.js",
    "revision": "ed0cffdee476d601b5e0f83307af6fb0"
  },
  {
    "url": "assets/js/144.a55296ab.js",
    "revision": "55bdf72645dbf1b1f04c7cba93e9583e"
  },
  {
    "url": "assets/js/145.2d24729e.js",
    "revision": "f357ec55233de32a818dc82a7f80a491"
  },
  {
    "url": "assets/js/146.9452a096.js",
    "revision": "53fd6c39c6c3dae59d9f9cda8d64d15c"
  },
  {
    "url": "assets/js/147.dfe05da0.js",
    "revision": "311bac6112d901b305a6637b06c6966d"
  },
  {
    "url": "assets/js/15.a139094c.js",
    "revision": "82f17127d5fb9468e063f876820daed0"
  },
  {
    "url": "assets/js/16.d20f90e4.js",
    "revision": "c5829cf05153ff5d87f6038d8cbf0a3d"
  },
  {
    "url": "assets/js/17.c9ce3cf5.js",
    "revision": "4bd6e70eb557280402a4b849f34fa13e"
  },
  {
    "url": "assets/js/18.b1e2d4ef.js",
    "revision": "851a28a06ee909680a3a33f631425b32"
  },
  {
    "url": "assets/js/19.7d6d3f53.js",
    "revision": "20c765f1802c3190ae673f90c3e353d0"
  },
  {
    "url": "assets/js/2.37d86db1.js",
    "revision": "ad7eb2232eba24930f4ddcb896112074"
  },
  {
    "url": "assets/js/20.c521cea3.js",
    "revision": "711fd7903a094b7dd17610f5716ea74c"
  },
  {
    "url": "assets/js/21.ccea3a82.js",
    "revision": "a8debb956b5d3d7acbd05e1ad286e50b"
  },
  {
    "url": "assets/js/22.6fa5e8a4.js",
    "revision": "aae012f85da2d9ff1c5230d8670b2b3d"
  },
  {
    "url": "assets/js/23.939919f6.js",
    "revision": "5c033a1d8d2cd73d0bcfc3a377be3224"
  },
  {
    "url": "assets/js/24.3faf37e5.js",
    "revision": "cf209d882a04ced01dd46c46b7ebdb8c"
  },
  {
    "url": "assets/js/25.f70c904d.js",
    "revision": "3e637545c77a406ace7973acd3562a03"
  },
  {
    "url": "assets/js/26.6052344d.js",
    "revision": "ac2d976f87d0defc5d5e2fb53cd7e233"
  },
  {
    "url": "assets/js/27.6499fc3a.js",
    "revision": "afd786f23b46f124c03edaec872932df"
  },
  {
    "url": "assets/js/28.9154973d.js",
    "revision": "1867f93d693823633a3f668003982806"
  },
  {
    "url": "assets/js/29.9ca1c48d.js",
    "revision": "aae30ef4e032af70a38ffc4c350a3e02"
  },
  {
    "url": "assets/js/3.d3875ecb.js",
    "revision": "a6edd751be73e8d030ce49b2b1089699"
  },
  {
    "url": "assets/js/30.dd8fe803.js",
    "revision": "cc850b50c0956e9cda2b40a8d0435af2"
  },
  {
    "url": "assets/js/31.7f2b73d2.js",
    "revision": "851d4d0812f56b521400613e542d298f"
  },
  {
    "url": "assets/js/32.3ca8601e.js",
    "revision": "6b5ef218273627a7318c998c7cc00552"
  },
  {
    "url": "assets/js/33.af20ffca.js",
    "revision": "8ef15b7040973ef5ef52bd3b45dca397"
  },
  {
    "url": "assets/js/34.190b3705.js",
    "revision": "09788bdd1c86d96209ab6f3d894bb059"
  },
  {
    "url": "assets/js/35.da1e27e0.js",
    "revision": "7c6995f1828ad641c07c9507e65654c3"
  },
  {
    "url": "assets/js/36.b2fc05d6.js",
    "revision": "7c20b9e239d07a0d7506f6684852817d"
  },
  {
    "url": "assets/js/37.bcf8ff77.js",
    "revision": "21b21012c6955379c553729ab24c4303"
  },
  {
    "url": "assets/js/38.b04fee82.js",
    "revision": "69917a971fe56d777bd75c77ee910907"
  },
  {
    "url": "assets/js/39.c607287c.js",
    "revision": "fa2452baa1ef7e36f5427c5ac5be368e"
  },
  {
    "url": "assets/js/4.4cd90f81.js",
    "revision": "ed40373758c09b53e05b2bf6d5096eaa"
  },
  {
    "url": "assets/js/40.4c1fd8f5.js",
    "revision": "431de9e8557307aa66027e0b1f000d03"
  },
  {
    "url": "assets/js/41.7aaf5197.js",
    "revision": "96429e2d8174c89385a40e4445298503"
  },
  {
    "url": "assets/js/42.946896b2.js",
    "revision": "924dad2e3df250953bb66b2d3c9a7b43"
  },
  {
    "url": "assets/js/43.5ef74812.js",
    "revision": "3302977d05265ee7eb6b9528a2d2e4d5"
  },
  {
    "url": "assets/js/44.1e2fc0bb.js",
    "revision": "af322cd8f376246eb9547140ad6f9aec"
  },
  {
    "url": "assets/js/45.fefcde8f.js",
    "revision": "648a6d86030d518b80bc74128a64b474"
  },
  {
    "url": "assets/js/46.8e36621c.js",
    "revision": "b4bae2ce361eb242959e40b0f323e5eb"
  },
  {
    "url": "assets/js/47.59296eac.js",
    "revision": "8a3a8e7c7eef109328190c1f4b4fd53c"
  },
  {
    "url": "assets/js/48.8e4410eb.js",
    "revision": "8adf4eab71eaa05095905948bf23e5e5"
  },
  {
    "url": "assets/js/49.ea5f52b4.js",
    "revision": "46963322a6ee3adf62f7b1e88c829704"
  },
  {
    "url": "assets/js/5.224e4806.js",
    "revision": "02fda2d98022e05ac02d1b5eacbc74c7"
  },
  {
    "url": "assets/js/50.fd4033d9.js",
    "revision": "82bfbee31f4b282659737820e77fccad"
  },
  {
    "url": "assets/js/51.6df6fe2b.js",
    "revision": "68387e75e80ccab7579f1c8367751423"
  },
  {
    "url": "assets/js/52.bfc9810c.js",
    "revision": "4bb1413b8916b9200cc1a6ccbb63c415"
  },
  {
    "url": "assets/js/53.627252a9.js",
    "revision": "d2a3b7ddb3c6f47874b308cf860a4483"
  },
  {
    "url": "assets/js/54.57f7633b.js",
    "revision": "fca0ecd587067ee85d3c3186b3d8d07e"
  },
  {
    "url": "assets/js/55.c2ea99b1.js",
    "revision": "8dfc80dcdd7a11cf0fc4fd73fc697475"
  },
  {
    "url": "assets/js/56.814fbd04.js",
    "revision": "2a0a2d138dfe0930ea0fcf39c8bb0bbb"
  },
  {
    "url": "assets/js/57.0eaf163d.js",
    "revision": "e071467848c1147fd91f4b06be917826"
  },
  {
    "url": "assets/js/58.a6f8a604.js",
    "revision": "c68f4fdc689d7ea0c51cf5d500542773"
  },
  {
    "url": "assets/js/59.b77057ab.js",
    "revision": "aaad9243dccc1167b9c5cbe712c0211d"
  },
  {
    "url": "assets/js/60.97e8741f.js",
    "revision": "5f0e8ec26a171d92e63263d78eefeb3d"
  },
  {
    "url": "assets/js/61.df02c544.js",
    "revision": "10b1af854c92deb130e170cc5a43fd69"
  },
  {
    "url": "assets/js/62.294ae033.js",
    "revision": "d318763db29f403dbdf601ad2d860e17"
  },
  {
    "url": "assets/js/63.cf571b59.js",
    "revision": "ebecd00fa48a87120b34cb7b2a85974d"
  },
  {
    "url": "assets/js/64.5eb3d725.js",
    "revision": "3170a684955c876f1f9a6fe8a3974bf9"
  },
  {
    "url": "assets/js/65.c0567b9f.js",
    "revision": "2f65d080bc52385fdd411e8835f50ba5"
  },
  {
    "url": "assets/js/66.30429915.js",
    "revision": "01b206804553c5ef68923a2962460818"
  },
  {
    "url": "assets/js/67.39c517d4.js",
    "revision": "b57516b645dd4e60c170de4136ec4bd9"
  },
  {
    "url": "assets/js/68.627c3486.js",
    "revision": "e2d916f3a05d2d61380e88d311e85c18"
  },
  {
    "url": "assets/js/69.9dd77c64.js",
    "revision": "ca1b29736c9f85e7197c333dcdff1b0e"
  },
  {
    "url": "assets/js/70.3d7360ed.js",
    "revision": "6c41dfdef51b9d43d0b631a3bfcac770"
  },
  {
    "url": "assets/js/71.571a4c40.js",
    "revision": "ae6b146cd5645a61e11c72992cb6a968"
  },
  {
    "url": "assets/js/72.a6e6870c.js",
    "revision": "1a2f059491b07102666b185ad12cbc92"
  },
  {
    "url": "assets/js/73.a85b68dc.js",
    "revision": "7b33df1f1323337d2353bb0dd265d865"
  },
  {
    "url": "assets/js/74.854292ff.js",
    "revision": "007837d16ab80d94fa2868f8577668b9"
  },
  {
    "url": "assets/js/75.59c65f77.js",
    "revision": "fe69132703c1100484504b96f518ea9b"
  },
  {
    "url": "assets/js/76.790cd438.js",
    "revision": "7fb9eb7e651b4f222a6747c5c86c3313"
  },
  {
    "url": "assets/js/77.f5196ae9.js",
    "revision": "52ee8207ef2127948cd77b4b51a05a48"
  },
  {
    "url": "assets/js/78.8e75b395.js",
    "revision": "ab25ff569360477110eda4a1e253846c"
  },
  {
    "url": "assets/js/79.eeeecc72.js",
    "revision": "9f7abd2bd14b8e61ffe484ed719e50a8"
  },
  {
    "url": "assets/js/8.2f82557c.js",
    "revision": "2d6e74002a6dbc54de05df93644dcb75"
  },
  {
    "url": "assets/js/80.73a83a76.js",
    "revision": "f2e068d9044e224826608fc784ec098f"
  },
  {
    "url": "assets/js/81.5aff3206.js",
    "revision": "1c9c59902a9dedf93b26c4cad529af03"
  },
  {
    "url": "assets/js/82.d874e3e1.js",
    "revision": "6e3fd8c32920e699e4ae4ef74995aba4"
  },
  {
    "url": "assets/js/83.0978523e.js",
    "revision": "502b2ce5936e463ac73ea5d9ff0a3774"
  },
  {
    "url": "assets/js/84.cf0d6800.js",
    "revision": "8c8bbbc9356ae64a9588bfaf42d4178e"
  },
  {
    "url": "assets/js/85.2b25cddf.js",
    "revision": "747ad401c4840c12ee3a3a57870f0947"
  },
  {
    "url": "assets/js/86.61513d86.js",
    "revision": "4e6c6960c784672e827ee7df93413246"
  },
  {
    "url": "assets/js/87.1ecfc4f7.js",
    "revision": "a165be979628fea46d8ad16f3b0626e6"
  },
  {
    "url": "assets/js/88.16b1b92d.js",
    "revision": "675601093ef4f6269b492a94c2288900"
  },
  {
    "url": "assets/js/89.33d897d6.js",
    "revision": "e40335d373fe0f06f444f5e04d410c4c"
  },
  {
    "url": "assets/js/9.c37c4773.js",
    "revision": "d9c430e6272067f73e7627b5e817f6f2"
  },
  {
    "url": "assets/js/90.4b29da58.js",
    "revision": "ad1398128dfc60e4c4a3d681d9f9931f"
  },
  {
    "url": "assets/js/91.87313cd9.js",
    "revision": "3f060cb0187e67253107dee867b22fb7"
  },
  {
    "url": "assets/js/92.cd998f9d.js",
    "revision": "de28ef21308951d62fe0e8bc27cbd684"
  },
  {
    "url": "assets/js/93.ab2e5ec0.js",
    "revision": "c6039d7ba491ba07f70da5315259df00"
  },
  {
    "url": "assets/js/94.d1458e82.js",
    "revision": "3e62d9579ac31fe10caad882f3a2c38c"
  },
  {
    "url": "assets/js/95.0e2a2f7a.js",
    "revision": "651359d5d633074b1dd92818587b05b9"
  },
  {
    "url": "assets/js/96.9abf1dbe.js",
    "revision": "d86169274f6f5de2458da98d14927e0f"
  },
  {
    "url": "assets/js/97.af95c1fc.js",
    "revision": "c8b438eee0ef7f6e843dd37fe6d2ef3c"
  },
  {
    "url": "assets/js/98.5482320b.js",
    "revision": "3222c5fc2cfa13dda792a362d489892c"
  },
  {
    "url": "assets/js/99.22093678.js",
    "revision": "883c0c9115144038355fc6637dafbd37"
  },
  {
    "url": "assets/js/app.0ba421cd.js",
    "revision": "437ce5a877fe934538fc62de6ce3dea6"
  },
  {
    "url": "assets/js/vendors~docsearch.4208d876.js",
    "revision": "73e941cf2ccc68412b2f30819ec205fa"
  },
  {
    "url": "blog/2018.html",
    "revision": "fd6b54f719108e017cb7c1695a64e42f"
  },
  {
    "url": "blog/2019-12.html",
    "revision": "f4a0ea9abb6d3790d86d4a40af70b240"
  },
  {
    "url": "blog/2019-6.html",
    "revision": "7e1beb0620a6e7a4453f5cc9c76c7d2a"
  },
  {
    "url": "blog/2020-6.html",
    "revision": "ad8862d6e6a3b9f7afcb39164297ed08"
  },
  {
    "url": "blog/base-computer-flow.png",
    "revision": "e095714298dbc676ea08e45dfb83a014"
  },
  {
    "url": "blog/base-computer-line.png",
    "revision": "8446b7225d5894993a57dddd5f67bee0"
  },
  {
    "url": "blog/base-computer.html",
    "revision": "67848895ea633a0db5b774f3d6ed288d"
  },
  {
    "url": "blog/base-design-pattern.html",
    "revision": "7fb45a2c69b8f143cf8dc5be3aaf9fd3"
  },
  {
    "url": "blog/base-design-pattren-mvc.png",
    "revision": "7f500560b7f5db156f54401d4d7570d3"
  },
  {
    "url": "blog/base-design-pattren-mvp.png",
    "revision": "9eb71d6abfa0291cdfc2faf2d02071a0"
  },
  {
    "url": "blog/base-design-pattren-mvvm.png",
    "revision": "279d1579b7762f89e49fe6653c6ae40a"
  },
  {
    "url": "blog/base-function-monad.html",
    "revision": "bfd5ac7fc74e624b0f54c357b2278c6b"
  },
  {
    "url": "blog/base-function.html",
    "revision": "d480180da6a35f0125e4f9f78af60fed"
  },
  {
    "url": "blog/base-functional.html",
    "revision": "bfd6928d6d698d2d9ab49d9eb1fbc3f2"
  },
  {
    "url": "blog/base-graphql.html",
    "revision": "f01c4dfc0052b356f81d33849320dd9d"
  },
  {
    "url": "blog/base-ioc.html",
    "revision": "aa8cc52c337800367345d8a10a013579"
  },
  {
    "url": "blog/base-ioc.jpg",
    "revision": "e71a2119796c6da6a3a4bddc364e5a5e"
  },
  {
    "url": "blog/base-structure-base-select.html",
    "revision": "1e49bee2a57052a7dd279e655f695c75"
  },
  {
    "url": "blog/base-structure-base-sort.html",
    "revision": "2f72507cd16784aef3574963acdd66aa"
  },
  {
    "url": "blog/base-structure-high-algorithm.html",
    "revision": "e41f7852e9e76020721d26fe7ee4f61f"
  },
  {
    "url": "blog/base-structure-senior-sort.html",
    "revision": "4dbf9b5618f9199357d61cce671acac5"
  },
  {
    "url": "blog/base-structure.html",
    "revision": "632cc03fe6dfeb21806deb9f5fc4bd13"
  },
  {
    "url": "blog/base-technology.html",
    "revision": "793144e3a92e80319a00e7a645f243bd"
  },
  {
    "url": "blog/base-typescript.html",
    "revision": "651fe77611d55e69b00a562f90dc5faa"
  },
  {
    "url": "blog/base-webcomponents.html",
    "revision": "e7cf2abfe0c70e9cc46bb743405fd187"
  },
  {
    "url": "blog/css-devicePixelRatio.html",
    "revision": "2a538bb414a98e5821cb77093a89047e"
  },
  {
    "url": "blog/css-devicePixelRatio.png",
    "revision": "4d40c1ce6c79c1e3a762cf6181237cb1"
  },
  {
    "url": "blog/css-flex.html",
    "revision": "c2424b718e2231a1795afd93777c5807"
  },
  {
    "url": "blog/css-houdini-star-fragments.png",
    "revision": "673a05390c131213c80b371259317397"
  },
  {
    "url": "blog/css-houdini-star.gif",
    "revision": "905af6ad0da0f34c544c53fcd0b266a9"
  },
  {
    "url": "blog/css-houdini-star.html",
    "revision": "b90966983f314d52120cea34fa89b01c"
  },
  {
    "url": "blog/css-icon.html",
    "revision": "a100846530cbe6cf8464993522c1ab1c"
  },
  {
    "url": "blog/css-ifc-baseline.jpg",
    "revision": "3257df202141626bcd373c1168be21c5"
  },
  {
    "url": "blog/css-ifc-box.jpg",
    "revision": "4b9457e2e5d4992ac6522214fbf6bf8c"
  },
  {
    "url": "blog/css-ifc-img1.png",
    "revision": "43a67d486c1c28da49fe638045236ee4"
  },
  {
    "url": "blog/css-ifc-img2.png",
    "revision": "f95164b2ce631ae62b98c1ce2bf2079e"
  },
  {
    "url": "blog/css-ifc-img3.png",
    "revision": "7e1e10bdb9e9a606b49a5d961e1b9170"
  },
  {
    "url": "blog/css-ifc-img4.png",
    "revision": "49646a1fa11442858640be387dfda6fd"
  },
  {
    "url": "blog/css-ifc.html",
    "revision": "19a8ea84bcdf13eda03d3bf7bfb2cbaa"
  },
  {
    "url": "blog/css-modules-all.png",
    "revision": "c214d7210aca56fd2034b2494389a1da"
  },
  {
    "url": "blog/css-modules.html",
    "revision": "7b09d0f071242315bf6e25d55712234e"
  },
  {
    "url": "blog/css-next.html",
    "revision": "ced45af317a45d6c4d32ddbcfcdacd66"
  },
  {
    "url": "blog/css-useful.html",
    "revision": "d16ab1245cdb6a64165e6d2b18979400"
  },
  {
    "url": "blog/css.html",
    "revision": "6c3d543d2e6052497bf8337b2429f253"
  },
  {
    "url": "blog/devops-cdfang-spider.html",
    "revision": "33cd30290f34c74903b4872417a5689a"
  },
  {
    "url": "blog/devops-cli-diy-demo.png",
    "revision": "fb68b8b2efe526f029212ef6e54070b6"
  },
  {
    "url": "blog/devops-cli-diy-inquirer.gif",
    "revision": "e8c2aee89570fc8916099e34576ca232"
  },
  {
    "url": "blog/devops-cli-diy.html",
    "revision": "be8c519804a98aba9735a1c6b6b36e53"
  },
  {
    "url": "blog/devops-commitlint.html",
    "revision": "6169c9425f6a1a3805d99afe742f38ec"
  },
  {
    "url": "blog/devops-dependencies.html",
    "revision": "83d6dcd87de78c6829cdf6c7b06ef42c"
  },
  {
    "url": "blog/devops-docker.html",
    "revision": "a88cb6f1393886816552de67b1ce5627"
  },
  {
    "url": "blog/devops-docker.png",
    "revision": "68303391c402338e2841fba331dee61a"
  },
  {
    "url": "blog/devops-git-rebase.jpg",
    "revision": "abb1767186fb9fa30f5b0e5b6386d496"
  },
  {
    "url": "blog/devops-git.html",
    "revision": "aedd40f422f695d01d35b1ad8598ab1a"
  },
  {
    "url": "blog/devops-image.html",
    "revision": "947960ba9a37eede6caefd1586d29d3c"
  },
  {
    "url": "blog/devops-image.png",
    "revision": "e02bfa355435c1f45d2306cc347fe654"
  },
  {
    "url": "blog/devops-kubernetes-step1.png",
    "revision": "a383ca6b10cf54cdf08b09e93daf374f"
  },
  {
    "url": "blog/devops-kubernetes-step2.png",
    "revision": "3ab73fdd30236034fce0b2630b286349"
  },
  {
    "url": "blog/devops-kubernetes-step3.png",
    "revision": "9a58967ee520665e3076e17966144739"
  },
  {
    "url": "blog/devops-kubernetes-step4.1.png",
    "revision": "e60ee965ffe978807b7dc94967bf62e6"
  },
  {
    "url": "blog/devops-kubernetes-step4.png",
    "revision": "1e7556d81ee883f8ae88aca2bf8b61e3"
  },
  {
    "url": "blog/devops-kubernetes-step5.png",
    "revision": "2ca05d57a0d8ffe340630b10e04da300"
  },
  {
    "url": "blog/devops-kubernetes-step6.png",
    "revision": "6d670ecf5bc26f818e15a35346fbe1d6"
  },
  {
    "url": "blog/devops-kubernetes-step7.png",
    "revision": "33381fdc74674697be73e50569e647d3"
  },
  {
    "url": "blog/devops-kubernetes-step8.png",
    "revision": "00bd1e65a6f816f81efc2318dae948f3"
  },
  {
    "url": "blog/devops-kubernetes.html",
    "revision": "6999cfdf343157f46cf1c80ec040d1d0"
  },
  {
    "url": "blog/devops-microfrontend.html",
    "revision": "bd5053bf1c7b32125faa885aecf87170"
  },
  {
    "url": "blog/devops-performance-cache.png",
    "revision": "8f33689a73abfb2f216bb69095aab475"
  },
  {
    "url": "blog/devops-performance-page_render.png",
    "revision": "f0817ffb80d8ce5be57a86304b522efd"
  },
  {
    "url": "blog/devops-performance-render.png",
    "revision": "6ced6b1be85cd8ce2e1ece5aaec65fef"
  },
  {
    "url": "blog/devops-performance.html",
    "revision": "4249791ecefe5ed8eadf54b533be78ff"
  },
  {
    "url": "blog/devops-test.html",
    "revision": "0848148692af8f9965474246227e1d6d"
  },
  {
    "url": "blog/devops-webpack-entry.html",
    "revision": "80129b8b327c68db641badb9e89787ac"
  },
  {
    "url": "blog/devops-webpack-flow.html",
    "revision": "87995ec9ba85b7c26705d1f9909758ef"
  },
  {
    "url": "blog/devops-webpack-steps.jpg",
    "revision": "5ca3edba14315b118ddfab5c2b502e53"
  },
  {
    "url": "blog/devops-webpack.html",
    "revision": "a8e0457ff131f2088c890fe44ffef74b"
  },
  {
    "url": "blog/front-interview-cross-domain.png",
    "revision": "25591a8af7684ec4fb761ae90dbc326a"
  },
  {
    "url": "blog/frontend.html",
    "revision": "54f9a634b3dc489c987653a7363983e8"
  },
  {
    "url": "blog/index.html",
    "revision": "36bc416eaf95e8f56cd33ff90d64a19a"
  },
  {
    "url": "blog/js-canvas.html",
    "revision": "a543cb083357d84ff44f77a0e27fe0d6"
  },
  {
    "url": "blog/js-event.html",
    "revision": "e1591664f4cb021a70b335f22817d839"
  },
  {
    "url": "blog/js-form.html",
    "revision": "905ccd1caaafe76fca434c75d40f0787"
  },
  {
    "url": "blog/js-html5-program.html",
    "revision": "c10608325dfbe5883647a2eca6835f40"
  },
  {
    "url": "blog/js-huanqi.html",
    "revision": "2eafe748a85e2ebac32381d0aab7feba"
  },
  {
    "url": "blog/js-inherit.html",
    "revision": "3a006cd2dcae3e4052e5a62a35e762a7"
  },
  {
    "url": "blog/js-jsBridge-core.png",
    "revision": "aa05dbcd700744448fa64ee9e81b8e75"
  },
  {
    "url": "blog/js-jsBridge-detail.png",
    "revision": "a0801c4e787701b363e1ca6fc0d50832"
  },
  {
    "url": "blog/js-jsBridge.html",
    "revision": "5f8ae4d00d648c7a1b66bc5aa10d65e5"
  },
  {
    "url": "blog/js-module.html",
    "revision": "caca2968890554b587183570dd9e0738"
  },
  {
    "url": "blog/js-object-ergodic.html",
    "revision": "c91873fb604a285d834e44ad45775231"
  },
  {
    "url": "blog/js-operator-priority.html",
    "revision": "68585e47bf257b3d7a193f3d9b37bcde"
  },
  {
    "url": "blog/js-principle.html",
    "revision": "aa159a2b3adad3a7798c68e856331e63"
  },
  {
    "url": "blog/js-promise-test.png",
    "revision": "3591e9c41536344ee17495f96e25c52d"
  },
  {
    "url": "blog/js-promise.html",
    "revision": "913d7f640cacc0f2f516e37d87f8f6e2"
  },
  {
    "url": "blog/js-prototype.html",
    "revision": "da64806332e0ea10a52b8a944d003b82"
  },
  {
    "url": "blog/js-recursion.html",
    "revision": "0113aae46b31561f108343725b9bd6c4"
  },
  {
    "url": "blog/js-this.html",
    "revision": "501e2db2629e82bb88aa1afcc8a0f793"
  },
  {
    "url": "blog/libary-react-core.html",
    "revision": "a3e827dcf45bef1c5601f732a0732f17"
  },
  {
    "url": "blog/library-koa-diy-flow.png",
    "revision": "388d7c4fdf6d757cb13bf8bf24b9eba1"
  },
  {
    "url": "blog/library-koa-diy.html",
    "revision": "611c1bd326699c2c7e07fc3d97a31194"
  },
  {
    "url": "blog/library-koa.html",
    "revision": "d9abb1a2796f9d493b7b55671f4a7823"
  },
  {
    "url": "blog/library-miniProgram-appService.png",
    "revision": "a9d1133bb0109828ef08495fdc020d96"
  },
  {
    "url": "blog/library-miniProgram-component.jpeg",
    "revision": "711a1e88bba7265c4a2de4666a04b7ac"
  },
  {
    "url": "blog/library-miniProgram-jiagou.png",
    "revision": "39a3f88f3d9482b722c058db8b6a3a9f"
  },
  {
    "url": "blog/library-miniProgram-jiagou2.png",
    "revision": "ea953d686390837662ebde6f3a1fbbf4"
  },
  {
    "url": "blog/library-miniProgram-wxml.png",
    "revision": "f80cb9e26caa6f28355fc712f42ddb9c"
  },
  {
    "url": "blog/library-miniProgram-wxss.png",
    "revision": "dce54cb46a769cd5f0d494d6c0a727e2"
  },
  {
    "url": "blog/library-miniProgram.html",
    "revision": "28c49e565a1308071b59081a4c48f4ff"
  },
  {
    "url": "blog/library-node-async.png",
    "revision": "4194c06b592b3c0dc430fabb70927ca6"
  },
  {
    "url": "blog/library-node-backend.png",
    "revision": "3e4e3bf6802d9a3d4782c7ed74c3837a"
  },
  {
    "url": "blog/library-node.html",
    "revision": "b434d232c5a73493d384bd5e77f3fcbe"
  },
  {
    "url": "blog/library-react-batchedUpdates.png",
    "revision": "3fd9fa9462ff121c2242e18db6219faf"
  },
  {
    "url": "blog/library-react-children-map.png",
    "revision": "16443a082ef65bdb180c76d1a942a9ba"
  },
  {
    "url": "blog/library-react-code-1.html",
    "revision": "c50b20be6d7fcdfdaa59d59e82d6d8f8"
  },
  {
    "url": "blog/library-react-code-2.html",
    "revision": "429a82c7ab46410a1f919035b073537e"
  },
  {
    "url": "blog/library-react-code-3.html",
    "revision": "e559402ac23f7e2f8e4cb4427ab748d0"
  },
  {
    "url": "blog/library-react-code-4.html",
    "revision": "1b286939a8e0c390859cad1233679af7"
  },
  {
    "url": "blog/library-react-code3-fiber-detail.png",
    "revision": "d3f432d807596a32698dee5b44fd0bb6"
  },
  {
    "url": "blog/library-react-code3-fiber.png",
    "revision": "6768aba4e04b67193a700c283661148b"
  },
  {
    "url": "blog/library-react-code4-effectlist.png",
    "revision": "18d7e632db3244d234cb1e7f497c9637"
  },
  {
    "url": "blog/library-react-code4-render-phase.png",
    "revision": "287b0a3564174ba2cd2cb7d837f4cdfc"
  },
  {
    "url": "blog/library-react-code4-updatequeue.png",
    "revision": "560191954e084b0cf18336c920d2b9fb"
  },
  {
    "url": "blog/library-react-code4-workinprocess.png",
    "revision": "38d278ac5274ff8fcfdaec47bfaca278"
  },
  {
    "url": "blog/library-react-effect-2.png",
    "revision": "52214aec0f93351b042032a1f6962e54"
  },
  {
    "url": "blog/library-react-effect.png",
    "revision": "c5d667a728acff34d14b041891dd2d73"
  },
  {
    "url": "blog/library-react-hooks.html",
    "revision": "664da573159081e0670496351ba6797e"
  },
  {
    "url": "blog/library-react-redux-code.html",
    "revision": "73de896a43e856dc43f7f378843e661c"
  },
  {
    "url": "blog/library-react-router.html",
    "revision": "2c05a5985bd2c4a91bd95e023c1dc49f"
  },
  {
    "url": "blog/library-react-scheduler-fiber-scheduler.png",
    "revision": "5614e29c9aecf8cea3589cc1aeeaea8b"
  },
  {
    "url": "blog/library-react-scheduler-render-root.png",
    "revision": "6f8ace8bff5693dd642d9d83eeeb2c41"
  },
  {
    "url": "blog/library-react-ssr.html",
    "revision": "6bc555b38a5440b1ca57b351dc1aa64f"
  },
  {
    "url": "blog/library-react-tree-demo-Fiber.png",
    "revision": "15c5490dad9ef96d7022ce624851fe9a"
  },
  {
    "url": "blog/library-react.html",
    "revision": "3edc6de1ca4a4ce90ab7eda5d6146790"
  },
  {
    "url": "blog/library-redux-code-flow.png",
    "revision": "92a506e8ddb170e872237052c604c574"
  },
  {
    "url": "blog/library-redux-flux.png",
    "revision": "f719fccae7b22258f97c2c3f9490f3f2"
  },
  {
    "url": "blog/library-redux-mvc.png",
    "revision": "7b8ac74d335701de13b99290ab65240a"
  },
  {
    "url": "blog/library-redux.html",
    "revision": "7f6581d4531a712d217fabceb882a267"
  },
  {
    "url": "blog/library-rxjs.html",
    "revision": "661e6d1e26dffb19a1b1089c2790bc3b"
  },
  {
    "url": "blog/library-vue-flow.html",
    "revision": "f2219a9a302f63503fe0952b3439b0aa"
  },
  {
    "url": "blog/library-vue-nexttick.html",
    "revision": "3a0af524f89a1c4fea310ad07845a7c1"
  },
  {
    "url": "blog/library-vue.html",
    "revision": "a95d74c41d3c8a93203f649ece5e43e0"
  },
  {
    "url": "blog/operation-docker-micro-service.html",
    "revision": "d562b6e5280e7e439650c8d89c778a41"
  },
  {
    "url": "blog/operation-linux-file.html",
    "revision": "61df59a7e232ee134bf07782f5a03b00"
  },
  {
    "url": "blog/operation-linux-login.html",
    "revision": "bee1f40d7c261996bc304f77e731ffb6"
  },
  {
    "url": "blog/operation-linux.html",
    "revision": "8c9a080dbeaf93db74a1017fb199b054"
  },
  {
    "url": "blog/operation-myserver.html",
    "revision": "f5344a2ae57032afa7dc8e0a2211b27f"
  },
  {
    "url": "blog/operation-nginx-load-balancing-loadBalancing.png",
    "revision": "7a6ec47ab1d5d6a9a0668ea67c0dcd68"
  },
  {
    "url": "blog/operation-nginx-load-balancing-reverseProxy.png",
    "revision": "5e9558d00008ece24f3f3b50918c76a6"
  },
  {
    "url": "blog/operation-nginx-load-balancing.html",
    "revision": "03b60972252bbe8bc73b8ac5090740b5"
  },
  {
    "url": "blog/operation-nginx-match.html",
    "revision": "b9e4e257c582c282b6595c581e3ebc98"
  },
  {
    "url": "blog/osi-flow.html",
    "revision": "65ad7e3670710d30d6624fb6e8ccbd77"
  },
  {
    "url": "blog/osi-hijack-meituan.png",
    "revision": "6b2540801dd3898e44bd7c3d7fa0464d"
  },
  {
    "url": "blog/osi-hijack.html",
    "revision": "a58593d3697859e92c46893318c575fe"
  },
  {
    "url": "blog/osi-http-0rtt.png",
    "revision": "a81b6efb8af80fb839b1181b210f4a21"
  },
  {
    "url": "blog/osi-http-binary_framing_layer.svg",
    "revision": "ae09920e853bee0b21be83f8e770ba01"
  },
  {
    "url": "blog/osi-http-duolufuyong-1.png",
    "revision": "29bab6ea23377b0d2fe85a97680600e8"
  },
  {
    "url": "blog/osi-http-duolufuyong.png",
    "revision": "8e01bb02ebacabc03da3e79dab7ee8d9"
  },
  {
    "url": "blog/osi-http-header_compression.svg",
    "revision": "feb142f82737d148ed5bcefd91915276"
  },
  {
    "url": "blog/osi-http-jiami.png",
    "revision": "71b35bce707111d2f81dd87e2024f8bb"
  },
  {
    "url": "blog/osi-http-push.svg",
    "revision": "d759887277b266a42c526643285dd244"
  },
  {
    "url": "blog/osi-http-streams_messages_frames.svg",
    "revision": "8e6931bb40fc26c511ad15645e7b6113"
  },
  {
    "url": "blog/osi-http.html",
    "revision": "f7ae597831e7db2d6347e3819df31304"
  },
  {
    "url": "blog/osi-https-hash1.png",
    "revision": "87c69f423d32966c5e0890e0ae0ed637"
  },
  {
    "url": "blog/osi-https-hash2.png",
    "revision": "91d4b06df8230a597c054f83dabf5a9b"
  },
  {
    "url": "blog/osi-https-tsl.png",
    "revision": "3cbf6a508ade1eb3c3e7e819a48c5c7e"
  },
  {
    "url": "blog/osi-https.html",
    "revision": "d14251ca3c40102a1209c816f2c8b89d"
  },
  {
    "url": "blog/osi-https.png",
    "revision": "99291362aca06ef1c282cf0561fd37d4"
  },
  {
    "url": "blog/osi-tcp-arq.png",
    "revision": "a56f5dd37438dbcc059b1b11b3a6ac6c"
  },
  {
    "url": "blog/osi-tcp-cancel.png",
    "revision": "9bb6008d0e5d389285bdd5a7f1c914b7"
  },
  {
    "url": "blog/osi-tcp-connect.png",
    "revision": "27055efa76010e511c26f44c403116fe"
  },
  {
    "url": "blog/osi-tcp-header.png",
    "revision": "77d18b4b741565596e54b545dca60ebe"
  },
  {
    "url": "blog/osi-tcp-resend-congestion-avoidance.png",
    "revision": "ca1f34dc9951e3dd44770620fd900c05"
  },
  {
    "url": "blog/osi-tcp-resend.png",
    "revision": "494d24b3f888b61dd1f0e43318698272"
  },
  {
    "url": "blog/osi-tcp.html",
    "revision": "a5463ecc6f8eb35d4c7d3b59ee056d81"
  },
  {
    "url": "blog/osi-web-login-oauth.jpg",
    "revision": "2dae82002027e00a585f7b6b673b397e"
  },
  {
    "url": "blog/osi-web-login-sso1.jpeg",
    "revision": "ec1c5788d8b1d7140ddd6e6a2878c3ea"
  },
  {
    "url": "blog/osi-web-login-sso2.jpeg",
    "revision": "8d17a3f406ccd2f845cbcd40a9ee531a"
  },
  {
    "url": "blog/osi-web-login-sso3.jpeg",
    "revision": "94ce0cdc0d6db01494df7ce516a6b575"
  },
  {
    "url": "blog/osi-web-login.html",
    "revision": "f845d631a7cdfc62803baabf8c02a109"
  },
  {
    "url": "blog/osi-web-security-1.png",
    "revision": "ca28968daa49b9787e11039c2c3a9d27"
  },
  {
    "url": "blog/osi-web-security-2.png",
    "revision": "cec7aaca64d04a1a0545db9bae985ee1"
  },
  {
    "url": "blog/osi-web-security-csrf.jpg",
    "revision": "0c8a1016b3659bf99bbf1db4759b1e1b"
  },
  {
    "url": "blog/osi-web-security.html",
    "revision": "cb5c64f5a447c48710bbb98b66b4eaba"
  },
  {
    "url": "blog/other-npm.html",
    "revision": "97c0dd54ee44370cde272855504d5691"
  },
  {
    "url": "blog/other-pit.html",
    "revision": "da0406f189141b5e420c01b907841c8d"
  },
  {
    "url": "blog/other-tools.html",
    "revision": "0579efafec168fa8b4c765076d5c36bb"
  },
  {
    "url": "blog/other-vscode.html",
    "revision": "8a4ff4519d10c32f2d007720bb6fb053"
  },
  {
    "url": "blog/vue-dir.png",
    "revision": "5c582c957a5cff9cf58ab13b73b411de"
  },
  {
    "url": "blog/vue-flow.png",
    "revision": "cd92342a375f5a699de658e857cc4937"
  },
  {
    "url": "blog/vue-mvvm.png",
    "revision": "a2c5e4e7a6be3029a5fd6818cc89cb0e"
  },
  {
    "url": "blog/vue-platforms.png",
    "revision": "89b10f58b5d84dc85e84a819350ce965"
  },
  {
    "url": "blog/冒泡排序.gif",
    "revision": "e1a5e701ab13aa61112dcf0d7732e929"
  },
  {
    "url": "blog/希尔排序.gif",
    "revision": "26d982ad88862f930b1b7e67ad87b37f"
  },
  {
    "url": "blog/归并排序.gif",
    "revision": "b99460f4173a23f9ed1be77f2f9fd224"
  },
  {
    "url": "blog/快速排序.gif",
    "revision": "90fb5f9dd147f5acbb04419c8c8b4ac0"
  },
  {
    "url": "blog/插入排序.gif",
    "revision": "ffda0249330d775e6fd3488f198c5c43"
  },
  {
    "url": "blog/选择排序.gif",
    "revision": "f37e5468225dff6e2edd0d9bec3778a2"
  },
  {
    "url": "book/book-act-like-a-leader.html",
    "revision": "044579876cfdf5c84d9a97e60e4d56a7"
  },
  {
    "url": "book/book-boyilun.html",
    "revision": "07525958df59728aac649c4dd05f2c14"
  },
  {
    "url": "book/book-code.html",
    "revision": "3294087e8d9ba2cf8fa7a1c90594f381"
  },
  {
    "url": "book/book-how-network-connect.html",
    "revision": "d9aa50cfb6ae5da20fe84c476ee7caec"
  },
  {
    "url": "book/book-http-graph.html",
    "revision": "5058787b957c1e70b8f62a79c8fb16ba"
  },
  {
    "url": "book/book-http2.html",
    "revision": "60695533b94e6916f1270aa399fa06e8"
  },
  {
    "url": "book/book-maintainable-js.html",
    "revision": "0d4a4d8a9e52c7fffe53f52be34c25bc"
  },
  {
    "url": "book/book-microfront.html",
    "revision": "4f068487a981c46d546eb86b8c971a48"
  },
  {
    "url": "book/book-nodejs.html",
    "revision": "5c323f56cad5869ee988f8d24363824f"
  },
  {
    "url": "book/book-regular.html",
    "revision": "18c5d9978043189819c2f13a0bcc2474"
  },
  {
    "url": "book/book-self-control.html",
    "revision": "533dc4ee78de5557e4ee0f65e9d3ce67"
  },
  {
    "url": "book/book-webgl-flow.jpeg",
    "revision": "4e3f5cc4ea17e4f086d6d0b1f725793f"
  },
  {
    "url": "book/book-webgl-structure.png",
    "revision": "78903b0d4e9a363e41966d81ae5c464e"
  },
  {
    "url": "book/book-webgl.html",
    "revision": "4d39b7add0bc617f4c337505b9ef1869"
  },
  {
    "url": "book/index.html",
    "revision": "7ae6aea627fb687f55ce01549a923d2e"
  },
  {
    "url": "index.html",
    "revision": "5c54ae7b0de1627f4675b173b7fc165a"
  },
  {
    "url": "interview/2019-9-1.html",
    "revision": "12255c9d108f71386986040ecca32b56"
  },
  {
    "url": "interview/base.html",
    "revision": "417417306f9328d23843ef669a58be4d"
  },
  {
    "url": "interview/css.html",
    "revision": "a7483f67679cc9b7175c2be077b6104c"
  },
  {
    "url": "interview/framework.html",
    "revision": "16ceb1e4005216f8e1866becba205bd4"
  },
  {
    "url": "interview/html.html",
    "revision": "6fb9ec83b153e3bdea99f7b2a44b70bf"
  },
  {
    "url": "interview/index.html",
    "revision": "084fe258ae13163ee4ea53a68abfa3bc"
  },
  {
    "url": "interview/interview-abstractCompare.png",
    "revision": "683b800b15d495bfd2e2ade99b6eba74"
  },
  {
    "url": "interview/interview-bom.jpg",
    "revision": "637f20e7efb9d9f0af995dd5b97529b4"
  },
  {
    "url": "interview/interview-css.png",
    "revision": "e2ef1b6cbdb573ccb36a31952542907b"
  },
  {
    "url": "interview/interview-jsbridge.png",
    "revision": "e1f58f641b1961a977f56cc0244117e9"
  },
  {
    "url": "interview/js.html",
    "revision": "ab67be1b1cf7f8bf0350d60c1d4434a8"
  },
  {
    "url": "interview/smallzhishi.html",
    "revision": "7747ada9eef4dc1586435ee932e6fb50"
  },
  {
    "url": "interview/structure.html",
    "revision": "e911762fd644a7ea94dc7d2607d70e06"
  },
  {
    "url": "interview/suanfa.html",
    "revision": "4e013973d870fbe550f3e12e34973d08"
  },
  {
    "url": "logo.png",
    "revision": "4be593b6331b4d3b4320e3d53b9fbd34"
  },
  {
    "url": "qianduanrizhi.png",
    "revision": "d1ede0e6a9b10d10c8c69097888ac07d"
  },
  {
    "url": "translate/index.html",
    "revision": "ece3682ea31a78de95d6cf1af6953b8c"
  },
  {
    "url": "translate/translate-browser-color.html",
    "revision": "eeb5e1f6807ca07b23e9f370fe540db7"
  },
  {
    "url": "translate/translate-uuid.html",
    "revision": "8417bc4edb410e8a0243aff18d7645c5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
