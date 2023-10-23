(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(645),i=n.n(r)()((function(t){return t[1]}));i.push([t.id,"/**\r\n * Body CSS\r\n */\r\n\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n}\r\n\r\nhtml,\r\nbody,\r\ninput,\r\ntextarea,\r\nbutton {\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n\ttext-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\r\n}\r\n\r\n/**\r\n * Sidebar CSS\r\n */\r\n\r\n#sidebar {\r\n\tbackground-color: #2196f3;\r\n\tpadding: 15px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n\t#sidebar {\r\n\t\tposition: fixed;\r\n\t\ttop: 0;\r\n\t\tbottom: 0;\r\n\t\twidth: 180px;\r\n\t\theight: 100%;\r\n\t\tpadding-top: 30px;\r\n\t}\r\n}\r\n\r\n/**\r\n * Content CSS\r\n */\r\n@media (min-width: 768px) {\r\n\t#content {\r\n\t\tmargin-left: 180px;\r\n\t}\r\n}\r\n",""]);const o=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},379:(t,e,n)=>{var r,i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),o=[];function a(t){for(var e=-1,n=0;n<o.length;n++)if(o[n].identifier===t){e=n;break}return e}function s(t,e){for(var n={},r=[],i=0;i<t.length;i++){var s=t[i],c=e.base?s[0]+e.base:s[0],d=n[c]||0,u="".concat(c," ").concat(d);n[c]=d+1;var l=a(u),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==l?(o[l].references++,o[l].updater(f)):o.push({identifier:u,updater:v(f,e),references:1}),r.push(u)}return r}function c(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,u=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function l(t,e,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=u(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function f(t,e,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var p=null,h=0;function v(t,e){var n,r,i;if(e.singleton){var o=h++;n=p||(p=c(e)),r=l.bind(null,n,o,!1),i=l.bind(null,n,o,!0)}else n=c(e),r=f.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var i=a(n[r]);o[i].references--}for(var c=s(t,e),d=0;d<n.length;d++){var u=a(n[d]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}n=c}}}}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{class t{static create(n){return fetch("https://best-avtoriz-for-site-default-rtdb.asia-southeast1.firebasedatabase.app/qestions.json",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((t=>t.json())).then((t=>(n.id=t.name,n))).then(e).then(t.renderList)}static renderList(){const t=r(),e=t.length?t.map(i).join(""):'<div class="mui--text-headline">нет вопросов</div>';document.getElementById("list").innerHTML=e}}function e(t){const e=r();e.push(t),localStorage.setItem("questions",JSON.stringify(e))}function r(){return JSON.parse(localStorage.getItem("questions")||"[]")}function i(t){return`\n\t<div class="mui--text-black-54">\n\t\t${new Date(t.date).toLocaleDateString()}\n\t\t${new Date(t.date).toLocaleTimeString()}\n\t</div>\n\t<div>\n\t\t${t.text}\n\t</div>\n\t<br>\n\n\t`}var o=n(379),a=n.n(o),s=n(426);function c(t){return t.length>=10}a()(s.Z,{insert:"head",singleton:!1}),s.Z.locals;const d=document.getElementById("form"),u=d.querySelector("#question-input"),l=d.querySelector("#submit");window.addEventListener("load",t.renderList),d.addEventListener("submit",(function(e){if(e.preventDefault(),c(u.value)){const e={text:u.value.trim(),date:(new Date).toJSON()};l.disabled=!0,t.create(e).then((()=>{u.value="",u.className="",l.disabled=!1}))}})),u.addEventListener("input",(()=>{l.disabled=!c(u.value)}))})()})();