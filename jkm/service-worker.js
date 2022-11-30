const version="17b87f59",cache_name="hcsim-cache-"+version;let assets={};async function cleanResponse(e){const a=e.clone();return 0==a.redirected?a:("body"in a?Promise.resolve(a.body):a.blob()).then(e=>new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText}))}async function cacheAsset(e){console.log("[Service Worker] Searching for resource: "+(e.url||e));var a,s,t=await caches.match(e);return t||(t=await fetch(e),a=await caches.open(cache_name),console.log("[Service Worker] Caching new resource: "+(e.url||e)),s=await cleanResponse(t),await a.put(e,s),t)}self.addEventListener("install",e=>{console.log("[Service Worker] Install"),e.waitUntil(self.skipWaiting())}),self.addEventListener("fetch",e=>{e.respondWith(cacheAsset(e.request))});let cached_apps=[];async function broadcastMessage(e){var a=await self.clients.matchAll();if(a)for(const s of a)await s.postMessage(e)}async function checkCachedApps(){var a,s;await caches.open(cache_name);for([a,s]of Object.entries(assets))if(!cached_apps.includes(a)){let e=!1;for(const t of s){if(!await caches.match(t))break;e=!0}e&&cached_apps.push(a)}await broadcastMessage({type:"complete",content:{cached:cached_apps,version:version}})}function getAssetsList(e){return!e in assets?[]:"ykm"==e?assets.ykm.concat(assets["gwongzau-hc"]):"shandong-hc"==e?assets["shandong-hc"].concat(assets["weihai-hc"]):assets[e]}self.addEventListener("activate",e=>{console.log("[Service Worker] Activate"),e.waitUntil((async()=>{cached_apps=[];for(const e of await caches.keys())e!==cache_name&&await caches.delete(e);await self.clients.claim()})())}),self.addEventListener("message",t=>{t.data&&("download"==t.data.type?(async()=>{await checkCachedApps();let a=[];if("string"==typeof t.data.content){if(cached_apps.includes(t.data.content))return;a=getAssetsList(t.data.content)}else for(const e of t.data.content)cached_apps.includes(e)||(a=a.concat(getAssetsList(e)));if(a){await caches.open(cache_name);let e=0;for(const s of a)try{await cacheAsset(s),e++}catch(e){console.log("[Service Worker] Failed to download "+s)}e==a.length&&("string"==typeof t.data.content?cached_apps.push(t.data.content):cached_apps=cached_apps.concat(t.data.content)),broadcastMessage({type:"complete",content:{cached:cached_apps,version:version}})}})():"clear"==t.data.type?(async()=>{cached_apps=[];for(const e of await caches.keys())await caches.delete(e);for(const a of await self.clients.matchAll())a.postMessage({type:"reload"})})():"check"==t.data.type&&checkCachedApps())});;assets = {"root":["app.css","app.js","index.html","manifest.json"],"common":["common/base.js","common/g-icon.css","common/nav.css","common/icons/add_box.svg","common/icons/arrow_forward.svg","common/icons/download_done.svg","common/icons/help.svg","common/icons/info.svg","common/icons/map.svg","common/icons/place.svg","common/icons/push_pin.svg","common/icons/qr_code.svg","common/icons/qr_code_scanner.svg","common/icons/vaccines.svg","common/images/codeberg-logo.svg","common/images/logo.jpg","common/images/reddit-logo.png","common/images/telegram-logo.svg"],"chongqing-hc":["chongqing-hc/app.css","chongqing-hc/checkin.css","chongqing-hc/checkin.html","chongqing-hc/detail.css","chongqing-hc/detail.html","chongqing-hc/index.html","chongqing-hc/manifest.json","chongqing-hc/static/code_background.png","chongqing-hc/static/icon_changsuoma.png","chongqing-hc/static/icon_nucleic_active.png","chongqing-hc/static/icon_vicc_active.png","chongqing-hc/static/icon_xingcengma.png","chongqing-hc/static/icon_yiwen.png","chongqing-hc/static/line-result.png","chongqing-hc/static/logo.png","chongqing-hc/static/lvma-icon.svg","chongqing-hc/static/nav_home.svg","chongqing-hc/static/nucleic_in48_icon1.png","chongqing-hc/static/nucleic_in48_icon2.png","chongqing-hc/static/pass.svg","chongqing-hc/static/password-btn-white.svg","chongqing-hc/static/password-btn.svg","chongqing-hc/static/password-btn2-white.svg","chongqing-hc/static/password-btn2.svg","chongqing-hc/static/qrcode_golden_shield.png","chongqing-hc/static/resultBackground2.png"],"gwongzau-hc":["gwongzau-hc/checkin.html","gwongzau-hc/manifest.json","gwongzau-hc/common/base.css","gwongzau-hc/common/cell.css","gwongzau-hc/static/goBackArrow.png","gwongzau-hc/static/health-code2.gif","gwongzau-hc/static/icon-Travel-card.png","gwongzau-hc/static/icon-health-nucleic-acid.png","gwongzau-hc/static/logo.png","gwongzau-hc/static/topScorll.png","gwongzau-hc/static/travel-card.png"],"fujian-hc":["fujian-hc/app.css","fujian-hc/checkin.html","fujian-hc/index.html","fujian-hc/manifest.json","fujian-hc/static/CAM_OFF.svg","fujian-hc/static/QR_ON.svg","fujian-hc/static/TAB_DOWN_ON.svg","fujian-hc/static/TAB_UP_OFF.svg","fujian-hc/static/bg2@2x.png","fujian-hc/static/close.png","fujian-hc/static/datetime.png","fujian-hc/static/family-btn@2x.png","fujian-hc/static/family_health_code@2x.png","fujian-hc/static/icon-arrow-right@2x.png","fujian-hc/static/icon_00.png","fujian-hc/static/jkm_logo.png","fujian-hc/static/logo21@2x.png","fujian-hc/static/menu-bcjkm2.png","fujian-hc/static/menu-gljtcyjkm.png","fujian-hc/static/menu-grjkxxbb.png","fujian-hc/static/menu-grxxsz.png","fujian-hc/static/menu-hsjcdt.png","fujian-hc/static/menu-phone.png","fujian-hc/static/menu-slztm.png","fujian-hc/static/menu-yldzpz.png","fujian-hc/static/menu-ymjzdt.png","fujian-hc/static/menu-ymjzyy.png","fujian-hc/static/menu-yw.png","fujian-hc/static/nucleic-24h.png","fujian-hc/static/open.png","fujian-hc/static/place_address.png","fujian-hc/static/success.png","fujian-hc/static/travel-card@2x.png","fujian-hc/static/vaccination-done.png"],"hebei-hc":["hebei-hc/app.css","hebei-hc/index.html","hebei-hc/manifest.json","hebei-hc/static/banner.png","hebei-hc/static/biankuang3.png","hebei-hc/static/bmcc.png","hebei-hc/static/cjwt.png","hebei-hc/static/close.png","hebei-hc/static/csm.png","hebei-hc/static/dl.png","hebei-hc/static/dzjkk.png","hebei-hc/static/hsjc.png","hebei-hc/static/huangguan.png","hebei-hc/static/icon_home_selected@2x.png","hebei-hc/static/icon_me@2x.png","hebei-hc/static/jkxx.png","hebei-hc/static/kyzcsb.png","hebei-hc/static/logo.png","hebei-hc/static/logo2.gif","hebei-hc/static/lyzc.png","hebei-hc/static/map.png","hebei-hc/static/more.png","hebei-hc/static/qvkaitong.png","hebei-hc/static/rjbjkm.png","hebei-hc/static/snhsjcjg.png","hebei-hc/static/syfxzb.png","hebei-hc/static/txdsj.png","hebei-hc/static/txdsjxck.png","hebei-hc/static/wyss.png","hebei-hc/static/xgymjzxx.png"],"hubei-hc":["hubei-hc/app.css","hubei-hc/index.html","hubei-hc/manifest.json","hubei-hc/static/24.png","hubei-hc/static/bgc.png","hubei-hc/static/bian.png","hubei-hc/static/card.png","hubei-hc/static/dun.png","hubei-hc/static/icon_right.png","hubei-hc/static/icon_success.png","hubei-hc/static/icon_success_white.png","hubei-hc/static/icon_white.png","hubei-hc/static/logo.png","hubei-hc/static/phone.png","hubei-hc/static/right.png"],"henan-hc":["henan-hc/checkin.css","henan-hc/checkin.html","henan-hc/index.html","henan-hc/manifest.json","henan-hc/static/A-2NeSKm-QgsAAAAAAAAAAAAAARQnAQ.png","henan-hc/static/A1k4zRovE_bUAAAAAAAAAAAAAARQnAQ.png","henan-hc/static/A2S3dTIou2YsAAAAAAAAAAAAAARQnAQ.png","henan-hc/static/A5SeORrczUVUAAAAAAAAAAAAAARQnAQ.png","henan-hc/static/A5dkJQJC1ie4AAAAAAAAAAAAAARQnAQ.png","henan-hc/static/A7OCDT5H8ZDAAAAAAAAAAAAAAARQnAQ.png","henan-hc/static/AAE0_Q5LBeuoAAAAAAAAAAAAAARQnAQ.png","henan-hc/static/AJd-0Sb3G_ikAAAAAAAAAAAAAARQnAQ.png","henan-hc/static/APpLHR6uoJVYAAAAAAAAAAAAAARQnAQ.png","henan-hc/static/A_K4HToyDDUUAAAAAAAAAAAAAARQnAQ.png","henan-hc/static/Acb_AQbrUPVAAAAAAAAAAAAAAARQnAQ.png","henan-hc/static/Ae4rkQItFlVsAAAAAAAAAAAAAARQnAQ.png","henan-hc/static/AetxPR4FIEr0AAAAAAAAAAAAAARQnAQ.png","henan-hc/static/AkKxZTZcbcC4AAAAAAAAAAAAAARQnAQ.png","henan-hc/static/AkqtASpyxcVEAAAAAAAAAAAAAARQnAQ.png","henan-hc/static/Ao83ZRZGfQNMAAAAAAAAAAAAAARQnAQ.png","henan-hc/static/AoNGFRZnWseQAAAAAAAAAAAAAARQnAQ.png","henan-hc/static/Apbe5QbKkU14AAAAAAAAAAAAAARQnAQ.png","henan-hc/static/AvuV2SpriSJ4AAAAAAAAAAAAAARQnAQ.png","henan-hc/static/antdesigns.7b8287b9.chunk.css","henan-hc/static/code.fdf7167f.css","henan-hc/static/common.deed9a9a.css","henan-hc/static/default.umi.f3d7f435.chunk.css","henan-hc/static/font.ttf","henan-hc/static/hsjc.13715733.svg","henan-hc/static/logo.png","henan-hc/static/p__sceneuserfillin__result.41f58106.chunk.css"],"hunan-hc":["hunan-hc/app.css","hunan-hc/checkin.css","hunan-hc/checkin.html","hunan-hc/index.html","hunan-hc/manifest.json","hunan-hc/static/code-green-64c9b5ddb9932f9f3cea748c3db25990.png","hunan-hc/static/code-red-3c12d9761b32ffbdc3e8e8ce553e8449.png","hunan-hc/static/code-yellow-164dd85a5a378007a8130efa1db6cb81.png","hunan-hc/static/dun.f20ea1e5.gif","hunan-hc/static/goldenbakBG.ceebf26d.png","hunan-hc/static/logo-b18dcf7bf55c412ec04989061d0512ad.png","hunan-hc/static/note-4c1d024ad82becb246a75d136a8e944f.png"],"shaanxi-hc":["shaanxi-hc/checkin.html","shaanxi-hc/index.html","shaanxi-hc/manifest.json","shaanxi-hc/nucResult.html","shaanxi-hc/static/css/BrightCode.css","shaanxi-hc/static/css/app.css","shaanxi-hc/static/css/index.css","shaanxi-hc/static/css/main-menu.css","shaanxi-hc/static/css/nucResult.css","shaanxi-hc/static/css/qrcode.css","shaanxi-hc/static/css/u-image.css","shaanxi-hc/static/myCode/greenLogo.png","shaanxi-hc/static/myCode/yisaoma.png","shaanxi-hc/static/index/hsjccx.png","shaanxi-hc/static/index/sx01.png","shaanxi-hc/static/index/txxck.png","shaanxi-hc/static/index/wh01.png","shaanxi-hc/static/index/xzqsm.png","shaanxi-hc/static/index/ymjzcx.png"],"shandong-hc":["shandong-hc/app.css","shandong-hc/index.html","shandong-hc/manifest.json","shandong-hc/static/bg1.gif","shandong-hc/static/cleye.png","shandong-hc/static/logo.png","shandong-hc/static/newdp.gif","shandong-hc/static/opeye.png","shandong-hc/static/right.png","shandong-hc/static/shield1.png","shandong-hc/static/sy.png"],"jkb":["jkb/checkin.html","jkb/index.html","jkb/manifest.json","jkb/scan.html","jkb/static/004.gif","jkb/static/1.wav","jkb/static/4f474259427737a36d6c292a3c2f7553.svg","jkb/static/62badacba1c82.gif","jkb/static/GreenCode.png","jkb/static/blue_btn_refresh_grey.png","jkb/static/erweima.png","jkb/static/hsicon.svg","jkb/static/ic_QRcode@2x.png","jkb/static/ic_help_grey@2x.png","jkb/static/ic_help_white@2x.png","jkb/static/layout@2x.png","jkb/static/logo.png","jkb/static/logo_jiankangbao1@2x.png","jkb/static/lvicon.svg","jkb/static/mark_tongqin@2x.png","jkb/static/newtongqinbiaozhi.png","jkb/static/panel@2x.png","jkb/static/pic_hesuan_blue@2x.png","jkb/static/pic_yimiao_blue@2x.png","jkb/static/sxicon.svg","jkb/static/weijianyichang.png","jkb/static/whicon-s.svg","jkb/static/wodebj.png","jkb/static/xiaolvma.png","jkb/static/ymicon.svg","jkb/static/yuanzhu.png"],"skm":["skm/detail.html","skm/favicon.ico","skm/index.html","skm/manifest.json","skm/css/app.5e428cca.css","skm/css/chunk-vendors.e42493a3.css","skm/css/index20220509.css","skm/dist/skm1665467361.min.js","skm/plug/aes.js","skm/plug/jquery.qrcode.min.js","skm/static/all1651809278.min.js","skm/src/banner-bg1.1b63d234.png","skm/src/fill.png","skm/src/fxbb.png","skm/src/gj.png","skm/src/hours.dc948a63.png","skm/src/hs-detail.png","skm/src/hsym-back.png","skm/src/icon4.png","skm/src/img3.png","skm/src/jszwfw.png","skm/src/kangti.png","skm/src/member.png","skm/src/shape.png","skm/src/turn-left2.png","skm/src/turn-right2.png","skm/src/xingcheng.png","skm/src/xxgx.png","skm/src/yimiao.png","skm/plug/jquery/jquery.min.js","skm/plug/layer/layer.js","skm/plug/mobileSelect/mobileSelect.css","skm/plug/mobileSelect/mobileSelect.js","skm/plug/bootstrap-4.3.1/css/bootstrap.min.css","skm/plug/layer/skin/layer.css","skm/plug/bootstrap-4.3.1/js/bootstrap.min.js","skm/plug/layer/skin/default/loading-1.gif","skm/plug/layer/skin/default/loading-2.gif"],"tfjkt":["tfjkt/app.css","tfjkt/checkin.html","tfjkt/index.html","tfjkt/manifest.json","tfjkt/static/antibody_result_query@2x.png","tfjkt/static/bg1.png","tfjkt/static/bg10.png","tfjkt/static/bg11.png","tfjkt/static/bg12.png","tfjkt/static/bg2.png","tfjkt/static/bg3.png","tfjkt/static/bg4.png","tfjkt/static/bg5.png","tfjkt/static/bg6.png","tfjkt/static/bg7.png","tfjkt/static/bg8.png","tfjkt/static/bg9.png","tfjkt/static/code-refresh.svg","tfjkt/static/consulting@2x.png","tfjkt/static/familyCode.png","tfjkt/static/gou.png","tfjkt/static/medical_institution_query@2x.png","tfjkt/static/message-icon.png","tfjkt/static/other_server.png","tfjkt/static/scan.png","tfjkt/static/scan@2x.png","tfjkt/static/sqbb2.png","tfjkt/static/test.png","tfjkt/static/txxck_server.png","tfjkt/static/userInfo.png","tfjkt/static/vaccinationSuccess@2x.png"],"ssm":["ssm/app.css","ssm/checkin.html","ssm/index.html","ssm/manifest.json","ssm/scan.html","ssm/static/app.cbd0be69.css","ssm/static/authentication.png","ssm/static/back.png","ssm/static/card.de2442d.png","ssm/static/default_head.59cc591.png","ssm/static/eyeC.7bfb9de.png","ssm/static/eyeClose.png","ssm/static/eyeO.a3eead3.png","ssm/static/eysOpen.png","ssm/static/fkdj.png","ssm/static/hesuanma.png","ssm/static/hsym.png","ssm/static/icon-txz.png","ssm/static/icon_bus.png","ssm/static/icon_medical.png","ssm/static/icon_xingcheng.png","ssm/static/kangyuan.png","ssm/static/logo.png","ssm/static/newhscyd.png","ssm/static/nucleic_acid_vaccine.png","ssm/static/ssbapp-logo.png","ssm/static/suishenma_bg.png","ssm/static/suishenma_logo.png","ssm/static/suishenma_people.png","ssm/static/suishenma_title.png","ssm/static/title.9e6c09b.png","ssm/static/txz.png","ssm/static/xck.png","ssm/static/绿码，核酸24小时内阴性.mp3"],"tianjin-hc":["tianjin-hc/index.html","tianjin-hc/manifest.json","tianjin-hc/qrcode_found.wav","tianjin-hc/static/css/chunk-058132aa.60a88c55.css","tianjin-hc/static/css/chunk-10aabacd.0c0f497d.css","tianjin-hc/static/css/chunk-48084dec.15052ed4.css","tianjin-hc/static/css/chunk-4a6c042c.c61d4756.css","tianjin-hc/static/css/chunk-7162b29a.a3cf78e6.css","tianjin-hc/static/css/chunk-729dcadd.c112cd15.css","tianjin-hc/static/css/chunk-7cef904f.61e7a339.css","tianjin-hc/static/css/chunk-b6c841ba.1a0699ea.css","tianjin-hc/static/css/index.69aca790.css","tianjin-hc/static/img/bg_health.cf16faaa.png","tianjin-hc/static/img/bg_icon_describe.f59ddbec.png","tianjin-hc/static/img/bg_me_top.2402edfe.png","tianjin-hc/static/img/bg_nucleic_acid.5895ec95.png","tianjin-hc/static/img/clear-core.30e9770c.png","tianjin-hc/static/img/config-0.3b53e676.png","tianjin-hc/static/img/goto-xck.01a77940.png","tianjin-hc/static/img/ic_get_report_gray.50a14653.png","tianjin-hc/static/img/ic_me_head_man.b48dfba2.png","tianjin-hc/static/img/ic_me_head_woman.59cbfa7f.png","tianjin-hc/static/img/ic_nucleicacid_save2.a7f9ae61.png","tianjin-hc/static/img/ic_nucleicacid_title.aa40abf8.png","tianjin-hc/static/img/logo.png","tianjin-hc/static/img/map.d23401fa.png","tianjin-hc/static/img/masked-core.67c0de83.png","tianjin-hc/static/img/pcr-days.198aba75.png","tianjin-hc/static/img/report-bg.74e16362.png","tianjin-hc/static/img/shai-1.8f15bc1c.png","tianjin-hc/static/img/shai-3.d240e6b1.png","tianjin-hc/static/img/shai-qr.8d86f4f3.png","tianjin-hc/static/img/tong-active.46c8dd0a.png","tianjin-hc/static/img/tong-inactive.f98be18f.png","tianjin-hc/static/img/vaccine-ok.de2bb0c7.png","tianjin-hc/static/img/xck-0.bb8938e2.png","tianjin-hc/static/js/chunk-058132aa.59160687.js","tianjin-hc/static/js/chunk-10aabacd.c4180356.js","tianjin-hc/static/js/chunk-15920e85.91c40b35.js","tianjin-hc/static/js/chunk-2d0aba8a.97b14652.js","tianjin-hc/static/js/chunk-2d0e6128.22197f0b.js","tianjin-hc/static/js/chunk-2d0e93c0.e5590f8d.js","tianjin-hc/static/js/chunk-48084dec.26aed5d0.js","tianjin-hc/static/js/chunk-4a6c042c.481dfff5.js","tianjin-hc/static/js/chunk-7162b29a.d5c616bc.js","tianjin-hc/static/js/chunk-729dcadd.37078fff.js","tianjin-hc/static/js/chunk-784448d2.2ff3b8e1.js","tianjin-hc/static/js/chunk-7cef904f.47e43f2e.js","tianjin-hc/static/js/chunk-b6c841ba.7f570979.js","tianjin-hc/static/js/index.abc09dc0.js"],"weihai-hc":["weihai-hc/app.css","weihai-hc/index.html","weihai-hc/manifest.json","weihai-hc/static/audio1.png","weihai-hc/static/eye1.png","weihai-hc/static/eye2.png","weihai-hc/static/hstag1.png","weihai-hc/static/new_bgt.png","weihai-hc/static/new_btn1.png","weihai-hc/static/new_btn2.png","weihai-hc/static/new_btn3.png","weihai-hc/static/new_te2.jpg","weihai-hc/static/new_te3.jpg","weihai-hc/static/new_tu1.png","weihai-hc/static/xcm_lt.jpg"],"trip-card":["trip-card/app.css","trip-card/index.html","trip-card/manifest.json","trip-card/static/dianxin0.png","trip-card/static/g2.png","trip-card/static/gif_green.gif","trip-card/static/guangdian0.png","trip-card/static/img_arrow@2x.png","trip-card/static/liant0.png","trip-card/static/ucload.png","trip-card/static/withtext@2x.png","trip-card/static/xty0.png","trip-card/static/yidong0.png"],"wuhan-hc":["wuhan-hc/app.css","wuhan-hc/index.html","wuhan-hc/manifest.json","wuhan-hc/static/QRlogo.png","wuhan-hc/static/arrow-left.png","wuhan-hc/static/bolan3.png","wuhan-hc/static/customerService.png","wuhan-hc/static/declare.png","wuhan-hc/static/edit.png","wuhan-hc/static/health-border2.png","wuhan-hc/static/health-code-management.png","wuhan-hc/static/health-logo2.png","wuhan-hc/static/healthReport.png","wuhan-hc/static/jkm48.png","wuhan-hc/static/jkmlfhxxsb.png","wuhan-hc/static/jkmright02.png","wuhan-hc/static/jkmxck.png","wuhan-hc/static/jkmymjz.png","wuhan-hc/static/kyzc.png","wuhan-hc/static/lmyjjjkzc.png","wuhan-hc/static/phone.png","wuhan-hc/static/xczc0302.png"],"ykm":["ykm/checkin.html","ykm/detail.css","ykm/detail.html","ykm/index.html","ykm/manifest.json","ykm/static/029ff54f704e01717fb30acf1c95ad75.svg","ykm/static/0619260a7addd8f89093cd21356e0b80.png","ykm/static/150f406201f0b0e674a6abe0d1ac292f.svg","ykm/static/19bdc888e99ae0d767dcc137ba1464cf.png","ykm/static/27597bf024b2ecbf42295c976b1eca16.svg","ykm/static/2aee70d3d005c220bc9e4c64ad8c7485.png","ykm/static/2c258b7b98bdfcb70a00c769d685e9bb.svg","ykm/static/44e817161a84279f6440d4a52d117900.svg","ykm/static/4508c60464ce3888449fc79e838e73cd.svg","ykm/static/456533e61ba93e1af44a2d3a5c2fd032.gif","ykm/static/4f474259427737a36d6c292a3c2f7553.svg","ykm/static/80401c2e955ec7aa3f126ae90801efd1.png","ykm/static/88caf508845af9f014f0df2e2e687061.png","ykm/static/afe4df7c15bffd8eaef1fe02a4af8474.svg","ykm/static/b4455fa4d4a6cd9227fe4703238eeb51.svg","ykm/static/b739d24b3e9cf335c3d74126ce8e2b98.png","ykm/static/b80e47116a2514556e388a3639d93b7c.png","ykm/static/c8cd86abb92bbc77b0db2b2d7f390090.png","ykm/static/c9652a23beac030ca4899831aa87ff62.svg","ykm/static/d88e60f10d7b8da943b5e9ebac2fee7f.svg","ykm/static/dd22fed45003c852735958d99a0443e7.png","ykm/static/dfa1c9f48ba289110ab1d9f61c5fc749.jpg","ykm/static/e5cebec2f715d6d4f4c4e19b5856f836.svg","ykm/static/eb043b4b54f68bcc19242a706636561d.png","ykm/static/eb0bdecffb0b41192f65fbaee7cb5d39.png","ykm/static/f00f1d0fbb5c9f1863cf882cbd6f1933.svg","ykm/static/fd5c377f998d7e9484c862b9cb98ceb5.svg","ykm/static/mm.svg","ykm/static/reload.e5cebec2f715d6d4f4c4e19b5856f836.svg","ykm/static/yss.jpeg"],"zhejiang-hc":["zhejiang-hc/app.css","zhejiang-hc/index.html","zhejiang-hc/manifest.json","zhejiang-hc/static/b26f98d44882ea99faa72eff4c4a2bff.png","zhejiang-hc/static/bg.png","zhejiang-hc/static/logo.ico"]}