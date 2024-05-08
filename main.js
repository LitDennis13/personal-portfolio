(()=>{"use strict";var n={60:(n,t,e)=>{e.d(t,{A:()=>u});var i=e(601),r=e.n(i),o=e(314),a=e.n(o),c=e(417),s=e.n(c),l=new URL(e(269),e.b),d=a()(r()),p=s()(l);d.push([n.id,`@font-face {\n    font-family: UbuntuSansMono;\n    src: url(${p});\n}\n\n* {\n    margin: 0px;\n    padding: 0px;\n}\n\n:root {\n    font-family: UbuntuSansMono; \n    background-image: linear-gradient(120deg, rgba(123,213,245,1) 20%, rgb(91, 99, 236) 40%, rgba(74,222,222,1) 60%, rgba(0,0,0,1) 80%, rgba(31,47,152,1) 100%);  \n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n#about-me-body {\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    row-gap: 2rem;\n}\n\nnav {\n    width: 100%;\n    display: flex;\n    flex-flow: row nowrap;\n    height: 50px;\n}\n\nnav > button {\n    color: black;\n    font-size: 8vw;\n    border: none;\n    height: 100%;\n    width: 50%;\n}\n\n#about-me-button {\n    background-color: rgb(91, 99, 236);\n}\n#about-me-button:hover, #about-me-button.active {\n    background-color: rgb(51, 59, 196);\n}\n#projects-button {\n    background-color: rgb(71,209,209);\n}\n#projects-button:hover, #projects-button.active {\n    background-color: rgb(31,179,179);\n}\n\n#about-me-header {\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n}\n\n#name {\n    text-align: center;\n    width: 100%;\n    font-size: 9vw;\n    margin-bottom: 1rem;\n}\n\n#profile-picture {\n    width: 100%;\n    max-width: 100%;\n    height: auto;\n    margin: -1rem;\n}\n\n#about-me {\n    margin-top: 1.3rem;\n    display: flex;\n    flex-flow: column nowrap;\n    row-gap: .5rem;\n    justify-content: center;\n    align-items: center;\n\n    color: white;\n}\n\n#about-me-title {\n    font-size: 10vw;\n}\n\n#description {\n    font-size: 5vw;\n    text-align: center;\n}\n\n#projects-title {\n    font-size: 9vw;\n}\n\n#projects-body {\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n}\n\n#projects-header {\n    margin-top: 1rem;\n    display: flex;\n    flex-flow: column nowrap;\n}\n#projects-title {\n    text-align: center;\n}\n\nmain {\n    display: grid;\n    grid-template-columns: 100%;\n    padding: 1rem;\n    row-gap: 2rem;\n    column-gap: 2rem;\n}\n\n#project {\n    text-decoration: none;\n    display: flex;\n    flex-flow: column nowrap;\n    color: white;\n    background-image: linear-gradient(120deg, rgba(123,213,245,1) 20%, rgb(91, 99, 236) 40%, rgba(74,222,222,1) 60%, rgba(0,0,0,1) 80%, rgba(31,47,152,1) 100%);\n}\n\n\n#project-image {\n    width: 100%;\n}\n\n#project-first-level-info {\n    display: flex;\n    flex-flow: row nowrap;\n    padding: .5rem;\n    align-items: center;\n}\n\n#project-name {\n    margin-right: auto;\n    font-size: 2rem;\n}\n\n#project-link {\n    margin-right: 1rem;\n}\n\n#link-icon {\n    width: 24px;\n    filter: invert(91%) sepia(16%) saturate(19%) hue-rotate(29deg) brightness(106%) contrast(102%);\n}\n\n#github-icon {\n    width: 24px;\n    filter: invert(91%) sepia(16%) saturate(19%) hue-rotate(29deg) brightness(106%) contrast(102%);\n    margin-right: .3rem;\n}\n\n#project-second-level-info {\n    padding: .5rem;\n}\n\n#project-desc {\n    font-size: 1rem;\n}\n\nfooter {\n    margin-top: auto;\n    display: flex;\n    flex-flow: column nowrap;\n}\n\n#profile-computer-picture {\n    width: 100%;\n    max-width: 100%;\n    height: auto;\n}\n\n#links {\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: center;\n    background-color: rgb(12,17,56);\n    height: 50px;\n}\n\n#github-link {\n    display: flex;\n    align-items: center;\n}\n#github-link > img {\n    height: 40px;\n    width: 40px;\n    filter: invert(91%) sepia(16%) saturate(19%) hue-rotate(29deg) brightness(106%) contrast(102%);\n}`,""]);const u=d},79:(n,t,e)=>{e.d(t,{A:()=>c});var i=e(601),r=e.n(i),o=e(314),a=e.n(o)()(r());a.push([n.id,"@media (min-width: 501px) {\n    nav > button {\n        font-size: 6vw;\n    }\n}\n@media (min-width: 701px) {\n    nav > button {\n        font-size: 5vw;\n    }\n    #about-me-header {\n        display: grid;\n        grid-template: 1fr 3fr / 1fr 1fr;\n    }\n    \n    #name {\n        grid-area: 1 / 1 / 2 / 3;\n        text-align: center;\n        width: 100%;\n        font-size: 7vw;\n    }\n    \n    #profile-picture {\n        grid-area: 2 / 1 / 3 / 2;\n        width: 100%;\n        max-width: 100%;\n        height: auto;\n    }\n    \n    #about-me {\n        grid-area: 2 / 2 / 3 / 4;\n        display: grid;\n        grid-template: 1fr 5fr / 1fr;\n        row-gap: .5rem;\n    \n        color: white;\n    }\n    \n    #about-me-title {\n        grid-area: 1 / 1 / 2 / 2;\n        font-size: 5vw;\n        text-align: center;\n    }\n    \n    #description {\n        grid-area: 2 / 1 / 3 / 2;\n        font-size: 2.5vw;\n        text-align: center;\n        align-self: start;\n    }\n\n\n    #projects-title {\n        font-size: 7vw;\n    }\n    \n    #projects-body {\n        display: flex;\n        flex-flow: column nowrap;\n        justify-content: center;\n    }\n    \n    #projects-header {\n        margin-top: 1rem;\n        display: flex;\n        flex-flow: column nowrap;\n    }\n    #projects-title {\n        text-align: center;\n    }\n    \n    main {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        padding: 1.6vw;\n        row-gap: 3.2vw;\n        column-gap: 3.2vw;\n    }\n    #project {\n        text-decoration: none;\n        display: flex;\n        flex-flow: column nowrap;\n        color: white;\n        background-image: linear-gradient(120deg, rgba(123,213,245,1) 20%, rgb(91, 99, 236) 40%, rgba(74,222,222,1) 60%, rgba(0,0,0,1) 80%, rgba(31,47,152,1) 100%);\n    }\n    \n    \n    #project-image {\n        width: 100%;\n    }\n    \n    #project-first-level-info {\n        display: flex;\n        flex-flow: row nowrap;\n        padding: .8vw;\n        align-items: center;\n    }\n    \n    #project-name {\n        margin-right: auto;\n        font-size: 3.5vw;\n    }\n\n    #project-link {\n        margin-right: 1.6vw;\n    }\n    \n    #link-icon {\n        width: 3vw;\n        filter: invert(91%) sepia(16%) saturate(19%) hue-rotate(29deg) brightness(106%) contrast(102%);\n    }\n    \n    #github-icon {\n        width: 3vw;\n        filter: invert(91%) sepia(16%) saturate(19%) hue-rotate(29deg) brightness(106%) contrast(102%);\n        margin-right: .3rem;\n    }\n    \n    #project-second-level-info {\n        padding: .8vw;\n    }\n    \n    #project-desc {\n        font-size: 2.1vw;\n    }\n\n    footer {\n        \n        margin-top: 20vh;\n        display: grid;\n        grid-template: 1fr / 1fr 1fr;\n        column-gap: .8vw;\n    }\n\n    #profile-computer-picture {\n        grid-area: 1 / 1 / 2 / 2;\n        width: 100%;\n        max-width: 100%;\n        height: auto;\n        \n    }\n\n    #links {\n        grid-area: 1 / 2 / 2 / 3;\n        display: flex;\n        flex-flow: row wrap;\n        justify-content: start;\n        align-items: start;\n        background-color: inherit;\n        align-self: center;\n        height: 50%;\n        width: 100%;\n    }\n\n    #github-link {\n        display: flex;\n        align-items: center;\n    }\n    #github-link > img {\n        width: 10vw;\n        height: auto;\n        filter: invert(91%) sepia(16%) saturate(19%) hue-rotate(29deg) brightness(106%) contrast(102%);\n    }\n}\n\n\n\n\n@media (min-width: 800px) {\n    nav > button {\n        font-size: 4vw;\n    }\n}\n\n@media (min-width: 1001px) {\n    nav > button {\n        font-size: 4vw;\n    }\n\n\n\n\n    #project {\n        text-decoration: none;\n        display: flex;\n        flex-flow: column nowrap;\n        color: white;\n        background-image: linear-gradient(120deg, rgba(123,213,245,1) 20%, rgb(91, 99, 236) 40%, rgba(74,222,222,1) 60%, rgba(0,0,0,1) 80%, rgba(31,47,152,1) 100%);\n        transition: transform .5s, box-shadow .5s;\n    }\n    #project:hover { \n        box-shadow: 10px 10px rgb(55,55,55);\n        transform: translate(-10px,-10px);\n        transition: transform .5s, box-shadow .5s;\n    }\n}",""]);const c=a},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",i=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),i&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),i&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,i,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);i&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},417:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function e(n){for(var e=-1,i=0;i<t.length;i++)if(t[i].identifier===n){e=i;break}return e}function i(n,i){for(var o={},a=[],c=0;c<n.length;c++){var s=n[c],l=i.base?s[0]+i.base:s[0],d=o[l]||0,p="".concat(l," ").concat(d);o[l]=d+1;var u=e(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var g=r(m,i);i.byIndex=c,t.splice(c,0,{identifier:p,updater:g,references:1})}a.push(p)}return a}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var o=i(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var c=e(o[a]);t[c].references--}for(var s=i(n,r),l=0;l<o.length;l++){var d=e(o[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=s}}},659:n=>{var t={};n.exports=function(n,e){var i=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var i="";e.supports&&(i+="@supports (".concat(e.supports,") {")),e.media&&(i+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(i+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),i+=e.css,r&&(i+="}"),e.media&&(i+="}"),e.supports&&(i+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(i,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},269:(n,t,e)=>{n.exports=e.p+"4eea655a4c30e2e6da22.ttf"}},t={};function e(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={id:i,exports:{}};return n[i](o,o.exports,e),o.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var i in t)e.o(t,i)&&!e.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:t[i]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var i=t.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=i[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var n=e(72),t=e.n(n),i=e(825),r=e.n(i),o=e(659),a=e.n(o),c=e(56),s=e.n(c),l=e(540),d=e.n(l),p=e(113),u=e.n(p),m=e(60),g={};g.styleTagTransform=u(),g.setAttributes=s(),g.insert=a().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=d(),t()(m.A,g),m.A&&m.A.locals&&m.A.locals;var f=e(79),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d(),t()(f.A,h),f.A&&f.A.locals&&f.A.locals;const b=e.p+"45cbc272759cd734a016.png",v=e.p+"0ff80c4777a1fe8fb6d1.png",w=e.p+"88d0569a07379f619a8f.png",y=e.p+"31f1cfbb9104e68a5aad.png";let x=window.innerWidth;function j(){document.querySelector("#profile-picture").src=b}function k(){x=window.innerWidth;document.querySelector("#profile-computer-picture").src=x>1e3?y:x>500?w:v}window.addEventListener("resize",(()=>{k()}));const T=e.p+"7615be16eed41f806def.png",P=`<nav>\n<button id="about-me-button" class="active">About me</button>\n<button id="projects-button">Projects</button>\n</nav>\n<header id="about-me-header">\n<h1 id="name">Dennis Antwi-Buadum</h1>\n\n<img id="profile-picture" alt="Profile Picture Avatar">\n\n<div id="about-me">\n    <h2 id="about-me-title">About Me</h2>\n    <p id="description">I like Programming. I like Computers. I like Gaming. I like Formula One. I like Racing.</p>\n</div>\n</header>\n\n<footer>\n<img id="profile-computer-picture" alt="Profile Avatar On Computer">\n<div id="links">\n    <a id="github-link" href="https://github.com/LitDennis13">\n    <img src="${T}" alt="Github Icon">\n    </a>\n</div>\n</footer>`,S=function(){const n=document.querySelector("body");n.innerHTML=P,n.id="about-me-body"},A=e.p+"e91c1d7905d4f0d96f13.png",E=e.p+"c189d5af0bf2bd895975.png",L=e.p+"6aeaf38e3734261dc9f9.png",C=e.p+"cc75da2ec2aee8db6269.png",z=e.p+"afc42511d80d9143fb38.png",I=e.p+"6ab08b29971d64588b35.png",M=e.p+"c8aa309dd44749cdeabc.png",G=e.p+"0ce28a48ebe63801efde.png",D=`<nav>\n<button id="about-me-button">About me</button>\n<button id="projects-button" class="active">Projects</button>\n</nav>\n\n<header id="projects-header">\n<h1 id="projects-title">Projects</h1>\n</header>\n\n<main>\n\n</main>\n\n<footer>\n    <img id="profile-computer-picture" alt="Profile Avatar On Computer">\n<div id="links">\n    <a id="github-link" href="https://github.com/LitDennis13">\n    <img src="${T}" alt="Github Icon">\n    </a>\n</div>\n</footer>`,q=[{name:"BattleShip",description:"Battle Ship game with a Computer AI and a Two Player Mode",imgSrc:A,imgAlt:"Battle Ship Project Picture",linkToProject:"https://litdennis13.github.io/odin-battleship/",linkToGithub:"https://github.com/LitDennis13/odin-battleship"},{name:"TodoList",description:"Todo List App",imgSrc:E,imgAlt:"Library Project Picture",linkToProject:"https://litdennis13.github.io/odin-todo-list/",linkToGithub:"https://github.com/LitDennis13/odin-todo-list"},{name:"Library",description:"Library App",imgSrc:L,imgAlt:"Todo List Project Picture",linkToProject:"https://litdennis13.github.io/odin-library/",linkToGithub:"https://github.com/LitDennis13/odin-library"},{name:"Weather",description:"Weather App",imgSrc:C,imgAlt:"Weather App Project Picture",linkToProject:"https://litdennis13.github.io/odin-weather-app/",linkToGithub:"https://github.com/LitDennis13/odin-weather-app"},{name:"Tic Tac Toe",description:"Tic Tac Toe game",imgSrc:z,imgAlt:"Tic Tac Toe Project Picture",linkToProject:"https://litdennis13.github.io/odin-tic-tac-toe/",linkToGithub:"https://github.com/LitDennis13/odin-tic-tac-toe"},{name:"Etch a Sketch",description:"Etch a Sketch",imgSrc:I,imgAlt:"Etch a Sketch Project Picture",linkToProject:"https://litdennis13.github.io/odin-etch-a-sketch/",linkToGithub:"https://github.com/LitDennis13/odin-etch-a-sketch"},{name:"Rock Paper Scissors",description:"Rock Paper Scissors game",imgSrc:M,imgAlt:"Rock Paper Scissors Project Picture",linkToProject:"https://litdennis13.github.io/odin-rockpaperscissors/",linkToGithub:"https://github.com/LitDennis13/odin-rockpaperscissors"}];function O(n,t,e,i,r,o){const a=document.createElement("a");a.href=r,a.id="project";const c=document.createElement("img");c.id="project-image",c.src=e,c.alt=i;const s=document.createElement("div");s.id="project-first-level-info";const l=document.createElement("h2");l.id="project-name",l.textContent=n;const d=document.createElement("a");d.href=r,d.id="project-link";const p=document.createElement("img");p.src=G,p.alt="Open Project Icon",p.id="link-icon";const u=document.createElement("a");u.href=o,u.id="project-github";const m=document.createElement("img");m.src=T,m.alt="Github Icon",m.id="github-icon";const g=document.createElement("div");g.id="project-second-level-info";const f=document.createElement("p");return f.id="project-desc",f.textContent=t,d.appendChild(p),u.appendChild(m),s.appendChild(l),s.appendChild(d),s.appendChild(u),g.appendChild(f),a.appendChild(c),a.appendChild(s),a.appendChild(g),a}const R=function(){const n=document.querySelector("body");n.innerHTML=D,n.id="projects-body",function(){const n=document.querySelector("main");for(const t of q){const e=O(t.name,t.description,t.imgSrc,t.imgAlt,t.linkToProject,t.linkToGithub);n.appendChild(e)}}()};S(),j(),k();let $=document.querySelector("#about-me-button"),U=document.querySelector("#projects-button");function B(){S(),j(),k(),U=document.querySelector("#projects-button"),U.addEventListener("click",N)}function N(){R(),k(),$=document.querySelector("#about-me-button"),$.addEventListener("click",B)}$.addEventListener("click",B),U.addEventListener("click",N)})()})();