const apps={"trip-card":{title:"通信大数据行程卡",icon:"trip-card/static/img_arrow@2x.png",link:"trip-card/index.html",color:"#2ba667",help_text:"<p>点击手机号或途经地点可以修改相关信息。</p>",menu:[]},ykm:{title:"粤康码",icon:"ykm/static/yss.jpeg",link:"ykm/index.html",color:"#aacc00",help_text:"<p>点击姓名、城市、场所地址等可以修改对应<p>点击二维码可以切换 “粤康码” 及 “粤康码场所通行” 页面。</p>",menu:[{title:"场所",icon:"@place",link:"ykm/checkin.html"},{title:"核酸",icon:"@vaccines",link:"ykm/detail.html"},{title:"广州",icon:"@map",link:"gwongzau-hc/checkin.html"}]},skm:{title:"苏康码",icon:"skm/src/jszwfw.png",link:"skm/index.html",color:"#a3a8eb99",help_text:"<p>点击姓名、证件号、场所地址等可以修改对应信息；</p><p>点击二维码可以展示签到页面。</p>",menu:[{title:"场所",icon:"@place",link:"skm/index.html#checkin"},{title:"核酸",icon:"@vaccines",link:"skm/detail.html"}]},jkb:{title:"北京健康宝",icon:"jkb/static/logo_jiankangbao1@2x.png",link:"jkb/index.html",color:"#fa6666",help_text:"<p>点击姓名、证件号可以修改对应信息；</p><p>点击照片可以更改或移除照片，超过 4MB 的图片可能无法在本地保存；</p><p>点击右上角二维码标志可以在 “本人健康码自查询” 和 “本人信息扫码登记” 间切换；</p><p>点击 “未见异常” 可以切换 “通勤” 标志。</p>",menu:[{title:"扫描",icon:"@qr_code_scanner",link:"jkb/scan.html"},{title:"场所",icon:"@place",link:"jkb/checkin.html"}]},tfjkt:{title:"四川天府健康通",icon:"tfjkt/static/message-icon.png",link:"tfjkt/index.html",color:"#0ba099",help_text:"<p>点击姓名、证件号、场所地址等可以修改对应信息；</p><p>点击“扫场所码”展示场所码。</p>",menu:[{title:"场所",icon:"@place",link:"tfjkt/checkin.html"}]},ssm:{html:`
    <div class="app" data-link="ssm/index.html" data-role="app" data-app-name="ssm"
        style="padding: 0 0 8px 0; margin: 18px 0 60px 0; border-radius: 8px; background-color: #eee; position: relative;">
      <div style="justify-content: space-between; padding: 6px 10px; color: white; background-color: blue;
                  border-radius: 8px 8px 0 0; display: flex; align-items: center;">
        <span style="width: 20px; text-align: center;">北</span>
        <span style="font-weight: 500; font-size: 22px;">乌鲁木齐中路</span>
        <span style="width: 20px; text-align: center;">南</span>
      </div>
      <div style="justify-content: space-between; padding: 2px 10px; color: #777; background-color: white;
                  border-radius: 0 0 8px 8px; display: flex; align-items: center;">
        <span style="width: 20px; text-align: center;">N</span>
        <span style="font-weight: 500; font-size: 16px;">Wulumuqi Rd.(M)</span>
        <span style="width: 20px; text-align: center;">S</span>
      </div>
      <div class="app-content" style="justify-content: center;">
        <div class="app-description">
          <div class="app-menu" style="width: 100%;justify-content: center;">
            <style>
              .app[data-app-name="ssm"] .app-menu-item:not(.active) { background: white; }
            </style>
            <div class="app-menu-item" data-role="link" data-link="ssm">
              <img class="app-menu-app-icon" src="ssm/static/ssbapp-logo.png"
                  style="border-radius: 20px; margin-right: 2px;">
              <span class="app-menu-app-title">随申码</span>
            </div>
            <div class="app-menu-item" data-role="link" data-link="ssm/scan.html">
              <img class="app-menu-app-icon" src="common/icons/qr_code_scanner.svg">
              <span class="app-menu-app-title">扫描</span>
            </div>
            <div class="app-menu-item" data-role="link" data-link="ssm/checkin.html">
              <img class="app-menu-app-icon" src="common/icons/place.svg">
              <span class="app-menu-app-title">场所</span>
            </div>
            <div class="app-menu-item ${localStorage.getItem("pinned")&&0<=localStorage.getItem("pinned").split(",").indexOf("ssm")?"active":""}" data-role="pin">
              <img class="app-menu-app-icon" src="common/icons/push_pin.svg">
            </div>
            <div class="app-menu-item" data-role="help" style="margin-right: 0;">
              <img class="app-menu-app-icon" src="common/icons/info.svg">
            </div>
          </div>
        </div>
      </div>
      <div style="border-width: 0 3px 0 3px; border-color: #555; border-style: solid; background-color: #eee;
                    width: 24px; height: 60px; align-self: center; position: absolute; top: 117.5px;"></div>
      <div class="app-help" style="position: fixed; bottom: 0; left: 0; margin: 30px 12px;
          background-color: #fff; border: 2px solid #000; z-index: 20;"
          onclick="this.style.display = 'none'; 
              this.closest('.app').querySelector('.app-menu-item[data-role=help]').classList.remove('active');">
        <div class="app-help-subtitle">随申码使用说明</div>
        <p>点击姓名、证件号、场所地址等可以修改对应信息；</p>
        <p>点击照片可以更改或移除照片，超过 4MB 的图片可能无法在本地保存；</p>
        <p>点击二维码展示场所码。</p>
      </div>
    </div>`,title:"随申码",icon:"ssm/static/ssbapp-logo.png",link:"ssm/index.html",color:"#bf4046",help_text:"<p>点击姓名、证件号、场所地址等可以修改对应信息；</p><p>点击照片可以更改或移除照片，超过 4MB 的图片可能无法在本地保存；</p><p>点击二维码展示场所码。</p>",menu:[{title:"扫描",icon:"@qr_code_scanner",link:"ssm/scan.html"},{title:"场所",icon:"@place",link:"ssm/checkin.html"}]},"shandong-hc":{title:"山东健康通行码",icon:"shandong-hc/static/logo.png",link:"shandong-hc/index.html",color:"#68b82e",help_text:"<p>点击姓名、证件号、场所地址等可以修改对应信息；</p><p>点击二维码可以切换到场所码页面。</p>",menu:[{title:"场所",icon:"@place",link:"shandong-hc/index.html#checkin"},{title:"威海",icon:"@map",link:"weihai-hc/index.html"}],contributors:[{name:"LibertyNeverDies",description:"参与制作",style:"namestrip"}]},"hubei-hc":{title:"湖北健康码",icon:"hubei-hc/static/logo.png",link:"hubei-hc/index.html",color:"#9a1640",help_text:"<p>点击姓名、证件号码可以修改对应信息。</p>"},"wuhan-hc":{title:"湖北健康码·武汉",icon:"wuhan-hc/static/QRlogo.png",link:"wuhan-hc/index.html",color:"#af9bff",help_text:"<p>点击姓名、证件号等可以修改对应信息；</p><p>点击通信行程卡“点击核验”可以添加行程戳；</p><p>点击“已采样”标记可以隐藏该标记。</p>"},"hunan-hc":{title:"湖南电子健康卡",icon:"hunan-hc/static/logo-b18dcf7bf55c412ec04989061d0512ad.png",link:"hunan-hc/index.html",help_text:"<p>点击姓名、证件号、采样点、场所地址等可以修改对应信息。</p><p>点击“二维码”可以切换“健康卡”与“场所码”</p>",menu:[{title:"场所",icon:"@place",link:"hunan-hc/checkin.html"}],contributors:[{name:"uodedcli",description:"参与制作",style:"namestrip"}]},"fujian-hc":{title:"福建健康码",icon:"fujian-hc/static/jkm_logo.png",link:"fujian-hc/index.html",color:"#3a5eff",help_text:"<p>点击姓名、证件号可以修改对应信息；</p><p>点击 “扫一扫” 进入场所张贴码。</p>",menu:[{title:"场所",icon:"@place",link:"fujian-hc/checkin.html"}]},"zhejiang-hc":{title:"浙江健康码",icon:"zhejiang-hc/static/logo.ico",link:"zhejiang-hc/index.html",color:"#57ac6c",help_text:"<p>点击城市名、姓名、证件号可以修改对应信息。</p>"},"henan-hc":{title:"豫康码",icon:"henan-hc/static/logo.png",link:"henan-hc/index.html",color:"#e84336",help_text:"<p>点击城市名、姓名、证件号可以修改对应信息；</p><p>点击二维码可以切换至“疫情防控场所码”。</p>",menu:[{title:"场所",icon:"@place",link:"henan-hc/checkin.html"}]},"tianjin-hc":{title:"天津数字防疫",icon:"tianjin-hc/static/img/logo.png",link:"tianjin-hc/index.html",help_text:"<p>前往“我的”一栏后点击任意位置，在配置页填写好姓名和身份证号、保存并返回后才可使用。</p>"},"shaanxi-hc":{title:"陕西一码通",icon:"shaanxi-hc/static/myCode/greenLogo.png",link:"shaanxi-hc/index.html",color:"#0bae81",help_text:"<p>点击地点名称、姓名、证件号可以修改对应信息；</p><p>点击核酸检测时间可以切换小时数；</p><p>点击“已采样”可以切换今日是否采样。</p>",menu:[{title:"场所",icon:"@place",link:"shaanxi-hc/checkin.html"},{title:"核酸",icon:"@vaccines",link:"shaanxi-hc/nucResult.html"}]},"chongqing-hc":{title:"渝康码",icon:"chongqing-hc/static/logo.png",link:"chongqing-hc/index.html",color:"#f5aa06",help_text:"<p>点击地点名称、姓名、证件号可以修改对应信息；</p><p>点击二维码可以切换至重庆市“场所码”。</p>",menu:[{title:"场所",icon:"@place",link:"chongqing-hc/checkin.html"},{title:"核酸",icon:"@vaccines",link:"chongqing-hc/detail.html"}]},"hebei-hc":{title:"河北健康码",icon:"hebei-hc/static/logo.png",link:"hebei-hc/index.html",color:"#926266",help_text:"<p>点击地点名称、姓名、证件号可以修改对应信息；</p><p>点击“扫码未见异常”可以隐藏该标识。</p>"}};function render(){let i="";for(var[n,a]of Object.entries(apps))if(a.html)i+=a.html;else{let t="";if(a.menu)for(const c of a.menu){let e=c.icon||"@qr_code";e.startsWith("@")&&(e=`common/icons/${e.slice(1)}.svg`),t+=`
          <div class="app-menu-item" data-role="link" data-link="${c.link||""}">
            <img class="app-menu-app-icon" src="${e}"></img>
            <span class="app-menu-app-title">${c.title}</span>
          </div>
        `}t+=`
    <div class="app-menu-item ${localStorage.getItem("pinned")&&0<=localStorage.getItem("pinned").split(",").indexOf(n)?"active":""}" data-role="pin">
      <img class="app-menu-app-icon" src="common/icons/push_pin.svg"></img>
    </div>`,a.help_text&&(t+=`
        <div class="app-menu-item" data-role="help">
          <img class="app-menu-app-icon" src="common/icons/info.svg"></img>
        </div>
      `);let e="";if(a.contributors)for(const s of a.contributors)"namestrip"==s.style?e+=`
            <div class="app-contributor app-contributor-namestrip">
              <span class="contributor-nametag">${s.name}</span>
              <span class="contributor-description">${s.description}</span>
            </div>
          `:"text"==s.style&&(e+=`
            <div class="app-contributor">
              <span class="contributor-nametag">${s.name}</span>
              <span class="contributor-description">${s.description}</span>
            </div>
          `);i+=`
    <div class="app" data-link="${a.link||""}" data-role="app" data-app-name="${n}">
      <div class="app-content">
        ${a.icon&&`<img src="${a.icon}" style="border-color: ${a.color||"#aaa"};">`||""}
        <div class="app-description">
          <div class="app-title-wrapper">
            <span class="app-title">${a.title}</span>
            <img class="app-title-icon" src="common/icons/arrow_forward.svg"></img>
          </div>
          <div class="app-menu">
            ${t}
          </div>
        </div>
      </div>
      <div class="app-help">
        <div class="app-help-subtitle">使用说明</div>
        ${a.help_text}
        ${e?`
          <div class="app-help-subtitle">致谢</div> 
          <div class="app-contributors-container">
            ${e} 
          </div>
        `:""}
      </div>
    </div>`}document.querySelector(".apps-list").innerHTML=i;var e=[...document.querySelectorAll(".app"),...document.getElementsByClassName("app-menu-item")];if(e.length)for(const o of e){const p=o.attributes["data-link"]&&o.attributes["data-link"].value;var t=o.attributes["data-role"]&&o.attributes["data-role"].value;const r=o.closest(".app");if(p)o.addEventListener("click",e=>{e.stopPropagation(),window.location.href=p});else if("help"==t)o.addEventListener("click",e=>{e.stopPropagation(),o.classList.contains("active")?(o.classList.remove("active"),r.querySelector(".app-help").style.display="none"):(document.querySelectorAll(".app-help").forEach(e=>{e.classList.remove("active")}),o.classList.add("active"),r.querySelector(".app-help").style.display="block")});else if("pin"==t){const d=r.attributes["data-app-name"]&&r.attributes["data-app-name"].value;d&&o.addEventListener("click",e=>{e.stopPropagation();let t=localStorage.getItem("pinned")?localStorage.getItem("pinned").split(","):[];if(o.classList.contains("active"))o.classList.remove("active"),r.style.order=0,(t=t.filter(e=>e!=d)).length?localStorage.setItem("pinned",t.join(",")):localStorage.removeItem("pinned");else{o.classList.add("active"),r.style.order=-1,t.push(d),localStorage.setItem("pinned",t.join(","));try{var i=r.attributes["data-app-name"].value;navigator.serviceWorker.controller.postMessage({type:"download",content:i})}catch(e){}}})}}var l=localStorage.getItem("pinned")?localStorage.getItem("pinned").split(","):[];if(l)for(const m of document.querySelectorAll(".app")||[])l.includes(m.attributes["data-app-name"].value)&&(m.style.order=-1),m.addEventListener("touchstart",e=>{e.target.classList[0]&&e.target.classList[0].startsWith("app-menu-item")||m.classList.add("selected")}),m.addEventListener("touchmove",()=>{m.classList.remove("selected")}),m.addEventListener("touchend",()=>{m.classList.remove("selected")}),m.addEventListener("touchcancel",()=>{m.classList.remove("selected")});for(const h of document.querySelectorAll(".app-menu-item[data-role=link]")||[])h.addEventListener("touchstart",()=>{h.classList.add("active")}),h.addEventListener("touchmove",()=>{h.classList.remove("active")}),h.addEventListener("touchend",()=>{h.classList.remove("active")}),h.addEventListener("touchcancel",()=>{h.classList.remove("active")});for(const g of document.querySelectorAll(".app-help")||[])g.addEventListener("click",e=>{e.stopPropagation()});if(window.updateServiceWorker=()=>{},"serviceWorker"in navigator){navigator.serviceWorker.register("./service-worker.js",{scope:"./"}).then(e=>{window.updateServiceWorker=t=>{t&&(t.innerText="正在检查更新..."),e.addEventListener("updatefound",()=>{window.location.reload()}),e.update().then(e=>{e.installing?t&&(t.innerText="正在应用更新..."):t&&(t.innerText="未发现更新")}).catch(()=>{t&&(t.innerText="检查更新失败")})};let t=window.setInterval(()=>{navigator.serviceWorker.controller&&(window.clearInterval(t),navigator.serviceWorker.controller.postMessage({type:"download",content:["root","common","trip-card"].concat(localStorage.getItem("pinned")?localStorage.getItem("pinned").split(","):[]).filter((e,t,i)=>i.indexOf(e)==t)}),window.setInterval(()=>{navigator.serviceWorker.controller.postMessage({type:"check"})},4e3))},300)}).catch(e=>{});const v=e=>{e&&(e=document.querySelector(`.app[data-app-name=${e}]`))&&(e.querySelector(".app-title-icon").attributes.src.value="common/icons/download_done.svg")};navigator.serviceWorker.addEventListener("message",e=>{if(e.data&&"progress"!=e.data.type)if("complete"==e.data.type){document.getElementById("sw-help-text").style.display="flex";var t=e.data.content.cached;if("string"==typeof t)v(t);else for(const i of t)v(i);e.data.content.version&&(document.getElementById("last-update-version").innerText=`(${e.data.content.version})`)}else"reload"==e.data.type&&window.location.reload()})}document.getElementById("clear-local-data").addEventListener("click",()=>{navigator.serviceWorker&&navigator.serviceWorker.controller?window.confirm("要清除全部填充信息与页面缓存吗？")&&clearCache():window.confirm("要清除全部填充信息吗？")&&clearCache()}),navigator.standalone||window.matchMedia("(display-mode: standalone)").matches?document.querySelector(".sw-status").innerHTML=`
      <div class="icon-align" onclick="toggleDisplay('#pwa-usage-help');">
        <img class="icon" src="common/icons/help.svg">
        <span>帮助</span>
      </div>`:document.querySelector(".sw-status").innerHTML=`
      <div class="icon-align" onclick="toggleDisplay('#pwa-install-help');">
        <img class="icon" src="common/icons/add_box.svg">
        <span>全屏显示</span>
      </div>`}function toggleDisplay(e,t=!1){e=document.querySelector(e);if(!e)return!1;e.style.display&&"none"!=e.style.display?e.style.display="none":e.style.display=t?"flex":"block"}function clearCache(){localStorage.clear(),navigator.serviceWorker&&navigator.serviceWorker.controller?(document.querySelector(".apps-list").innerHTML=`
      <p style="text-align: center">请稍候...</p>
    `,navigator.serviceWorker.controller.postMessage({type:"clear"})):window.location.reload()}