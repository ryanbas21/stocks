(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,n,t){e.exports=t(54)},41:function(e,n,t){},43:function(e,n,t){},51:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},52:function(e,n,t){},54:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),i=t(4),c=t.n(i),r=(t(41),t(23)),l=t(24),s=t(31),u=t(25),d=t(32),f=t(63),h=t(65),v=(t(43),function(e){return a.a.createElement("div",{className:"search-container"},a.a.createElement("div",{className:"inline-search"},a.a.createElement(f.a,{value:e.value,onChange:e.onChange,onSubmit:e.onSubmit}),a.a.createElement(h.a,{fill:!1,onClick:e.onClick,label:"Add To Portfolio"})))}),m=t(64),g=function(e){return a.a.createElement(m.a,{pad:"medium",elevation:"medium"},e.children)},p=(t(51),t(52),function(e){function n(){var e,t;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(a)))).state={value:"",stocks:[]},t.onChange=function(e){var n=e.target.value;t.setState({value:n})},t.onClick=function(e){fetch("https://api.iextrading.com/1.0/stock/"+t.state.value+"/book").then(function(e){return e.json()}).then(function(e){return e.quote}).then(function(e){t.setState({stocks:t.state.stocks.concat(e)})})},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(v,{value:this.state.value,onChange:this.onChange,onClick:this.onClick,onSubmit:this.onSubmit}),a.a.createElement(g,null,this.state.stocks.map(function(e){return a.a.createElement("div",null,a.a.createElement("div",null,e.companyName),a.a.createElement("div",null,e.symbol),a.a.createElement("div",null,e.change),a.a.createElement("div",null,"Price: ",e.latestPrice))})))}}]),n}(o.Component)),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(a.a.createElement(p,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/stocks",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/stocks","/service-worker.js");w?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):k(n,e)})}}()}},[[36,2,1]]]);
//# sourceMappingURL=main.411dab69.chunk.js.map