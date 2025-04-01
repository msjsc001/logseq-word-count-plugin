"use strict";(function(){function i(t,n){let e=null;return function(){e&&clearTimeout(e),e=setTimeout(()=>t.apply(this,arguments),n)}}async function c(){try{const t=await logseq.Editor.getCurrentPage();if(!t)return 0;const n=await logseq.Editor.getPageBlocksTree(t.name);let e=0;const l=o=>{if(o.content){const s=o.content.replace(/[#*`~\[\]()]/g,""),g=(s.match(/[\u4e00-\u9fa5]/g)||[]).length,p=(s.match(/\b[a-zA-Z]+\b/g)||[]).length,d=(s.match(/\d+/g)||[]).length;e+=g+p+d}o.children&&o.children.forEach(l)};return n.forEach(l),console.log("当前页面字数：",e),e}catch(t){return console.error("计数错误:",t),0}}function a(t){logseq.App.registerUIItem("toolbar",{key:"word-count-display",template:`
        <a title="当前页面字数" style="
          display: flex;
          align-items: center;
          padding: 4px 6px;
          font-size: 14px;">
          <span>✏️ ${t} </span>
        </a>
      `,replace:!0})}const r=i(async()=>{const t=await c();a(t)},500);function u(){console.log("字数统计插件已加载"),a(0),logseq.App.onRouteChanged(()=>{r()}),setTimeout(r,2e3),logseq.Editor.registerSlashCommand("字数统计",async()=>{const t=await c();logseq.UI.showMsg(`当前页面：${t} 字`,"success")})}logseq.ready(u).catch(console.error)})();
