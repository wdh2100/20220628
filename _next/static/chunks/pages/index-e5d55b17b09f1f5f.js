(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4556)}])},4556:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return he}});var n=r(5893),o=r(9008),i=r.n(o),a=r(7160),s=r.n(a),l=r(7294),c=r.t(l,2),u=Object.defineProperty,f=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&y(e,r,t[r]);if(f)for(var r of f(t))p.call(t,r)&&y(e,r,t[r]);return e},h=e=>Array.isArray(e),m=e=>h(e)?e:[e];var g=e=>Array.from(e),v=e=>document.createTextNode(e);let x=e=>([...e.childNodes].forEach((e=>{if(e.nodeValue)return[...e.nodeValue].forEach((t=>{e.parentNode.insertBefore(v(t),e)})),void e.remove();x(e)})),e);var j=e=>{let t=document.implementation.createHTMLDocument();return t.body.innerHTML=e,x(t.body)};const w="ti-cursor",O={started:!1,completed:!1,frozen:!1,destroyed:!1},_={breakLines:!0,cursor:!0,cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,html:!0,lifeLike:!0,loop:!1,loopDelay:750,nextStringDelay:750,speed:100,startDelay:250,startDelete:!1,strings:[],waitUntilVisible:!1,beforeString:()=>{},afterString:()=>{},beforeStep:()=>{},afterStep:()=>{},afterComplete:()=>{}};function T(e,t=!1){let r,n=document.createTreeWalker(e,NodeFilter.SHOW_ALL,{acceptNode:e=>{var t;return(null==(t=e.classList)?void 0:t.contains(w))?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),o=[];for(;r=n.nextNode();)r.originalParent=r.parentNode,o.push(r);return t?o.reverse():o}function S(e,t=!0){return t?T(j(e)):g(e).map(v)}var k=e=>document.createElement(e),E=(e,t="")=>{let r=k("style");r.id=t,r.appendChild(v(e)),document.head.appendChild(r)},N=e=>(h(e)||(e=[e/2,e/2]),e),P=(e,t)=>Math.abs(Math.random()*(e+t-(e-t))+(e-t));let I=e=>e/2;var L=e=>"value"in e;let A=e=>"function"===typeof e?e():e;var C=e=>Number.isInteger(e);let D=(e,t=document,r=!1)=>t["querySelector"+(r?"All":"")](e);var H=(e,t)=>Object.assign({},e,t),M=e=>{if(!e)return;let t=e.parentNode;(t.childNodes.length>1?e:t).remove()};let R={"font-family":"","font-weight":"","font-size":"","font-style":"","line-height":"",color:"","margin-left":"-.125em","margin-right":".125em"};var z=(e,t)=>new Array(t).fill(e);const $=({queueItems:e,selector:t,cursorPosition:r,to:n})=>{if(C(t))return-1*t;let o=new RegExp("END","i").test(n),i=t?[...e].reverse().findIndex((({char:e})=>{let r=e.parentElement,n=r.matches(t);return!(!o||!n)||n&&r.firstChild.isSameNode(e)})):-1;return i<0&&(i=o?0:e.length-1),i-r+(o?0:1)};let W=e=>new Promise((t=>{requestAnimationFrame((async()=>{t(await e())}))})),F=e=>{var t;return null==(t=e.func)?void 0:t.call(globalThis)},B=async(e,t,r)=>{let n=t[e][1],o=[],i=e,a=n,s=()=>a&&!a.delay;for(;s();)o.push(a),s()&&i++,a=t[i]?t[i][1]:null;return o.length?(await W((async()=>{for(let e of o)await F(e)})),i-1):(await r((()=>W((()=>F(n)))),n.delay),e)};const Q=function(e,t={}){let r=async(e,t,r=!1)=>{Y.frozen&&await new Promise((e=>{this.unfreeze=()=>{Y.frozen=!1,e()}})),r||await G.beforeStep(this),await(async(e,t,r)=>new Promise((n=>{r.push(setTimeout((async()=>{await e(),n()}),t||0))})))(e,t,U),r||await G.afterStep(this)},n=()=>L(Q),o=(e=0)=>function(e){let{speed:t,deleteSpeed:r,lifeLike:n}=e;return r=null!==r?r:t/3,n?[P(t,I(t)),P(r,I(r))]:[t,r]}(G)[e],i=()=>(e=>L(e)?g(e.value):T(e,!0).filter((e=>!(e.childNodes.length>0))))(Q),a=(e,t)=>(K.add(e),((e={})=>{let t=e.delay;t&&K.add({delay:t})})(t),this),s=()=>null!=X?X:V,l=(e={})=>[{func:()=>v(e)},{func:()=>v(G)}],c=e=>{let t=G.nextStringDelay;K.add([{delay:t[0]},...e,{delay:t[1]}])},u=async()=>{!n()&&ee&&Q.appendChild(ee),Z&&((e,t,r)=>{let n=`[data-typeit-id='${e}'] .ti-cursor`,o=getComputedStyle(r),i=Object.entries(R).reduce(((e,[t,r])=>`${e} ${t}: var(--ti-cursor-${t}, ${r||o[t]});`),"");E(`@keyframes blink-${e} { 0% {opacity: 0} 49% {opacity: 0} 50% {opacity: 1} } ${n} { display: inline; letter-spacing: -1em; ${i} animation: blink-${e} ${t.cursorSpeed/1e3}s infinite; } ${n}.with-delay { animation-delay: 500ms; } ${n}.disabled { animation: none; }`,e)})(J,G,Q)},f=e=>{Z&&ee&&(ee.classList.toggle("disabled",e),ee.classList.toggle("with-delay",!e))},d=()=>{let e=G.strings.filter((e=>!!e));e.forEach(((t,r)=>{if(this.type(t),r+1===e.length)return;let n=G.breakLines?[{func:()=>h(k("BR")),typeable:!0}]:z({func:F,delay:o(1)},K.getTypeable().length);c(n)}))},p=async(e=!0)=>{Y.started=!0;let t=t=>{f(!1),K.done(t,!e)};try{let n=[...K.getQueue()];for(let e=0;e<n.length;e++){let[o,a]=n[e];if(!a.done){if(a.typeable&&!Y.frozen&&f(!0),!a.deletable||a.deletable&&i().length){let o=await B(e,n,r);Array(o-e).fill(e+1).map(((e,t)=>e+t)).forEach((e=>{let[r]=n[e];t(r)})),e=o}t(o)}}if(!e)return this;if(Y.completed=!0,await G.afterComplete(this),!G.loop)throw"";let a=G.loopDelay;r((async()=>{await(async e=>{let t=s();t&&await y({value:t});for(let n of i())await r(F,o(1));K.reset(),K.set(0,{delay:e})})(a[0]),p()}),a[1])}catch(n){}return this},y=async e=>{var t,r,n;t=e,r=V,n=i(),V=Math.min(Math.max(r+t,0),n.length),((e,t,r)=>{let n=t[r-1],o=D(".ti-cursor",e);if(e=(null==n?void 0:n.parentNode)||e,n)return n.before(o);e.append(o)})(Q,i(),V)},h=e=>((e,t)=>{if(L(e))return void(e.value=`${e.value}${t.textContent}`);t.innerHTML="";let r="BODY"===(null==(n=t.originalParent)?void 0:n.tagName)?e:t.originalParent||e;var n;r.insertBefore(t,D(".ti-cursor",r)||null)})(Q,e),v=async e=>G=H(G,e),W=async()=>{n()?Q.value="":i().forEach(M)},F=()=>{let e=i();e.length&&(n()?Q.value=Q.value.slice(0,-1):M(e[V]))};this.break=function(e){return a({func:()=>h(k("BR")),typeable:!0},e)},this.delete=function(e=null,t={}){e=A(e);let r=l(t),n=e,{instant:i,to:c}=t,u=K.getTypeable(),f=null===n?u.length:C(n)?n:$({queueItems:u,selector:n,cursorPosition:s(),to:c});return a([r[0],...z({func:F,delay:i?0:o(1),deletable:!0},f),r[1]],t)},this.empty=function(e={}){return a({func:W},e)},this.exec=function(e,t={}){let r=l(t);return a([r[0],{func:()=>e(this)},r[1]],t)},this.move=function(e,t={}){e=A(e);let r=l(t),{instant:n,to:i}=t,c=$({queueItems:K.getTypeable(),selector:null===e?"":e,to:i,cursorPosition:s()}),u=c<0?-1:1;return X=s()+c,a([r[0],...z({func:()=>y(u),delay:n?0:o()},Math.abs(c)),r[1]],t)},this.options=function(e,t={}){return e=A(e),v(e),a({},t)},this.pause=function(e,t={}){return a({delay:A(e)},t)},this.type=function(e,t={}){e=A(e);let{instant:r}=t,n=l(t),i=S(e,G.html).map((e=>{return{func:()=>h(e),char:e,delay:r||(t=e,/<(.+)>(.*?)<\/(.+)>/.test(t.outerHTML))?0:o(),typeable:e.nodeType===Node.TEXT_NODE};var t})),s=[n[0],{func:async()=>await G.beforeString(e,this)},...i,{func:async()=>await G.afterString(e,this)},n[1]];return a(s,t)},this.is=function(e){return Y[e]},this.destroy=function(e=!0){U.forEach(clearTimeout),U=[],A(e)&&ee&&M(ee),Y.destroyed=!0},this.freeze=function(){Y.frozen=!0},this.unfreeze=()=>{},this.reset=function(e){!this.is("destroyed")&&this.destroy(),e?(K.wipe(),e(this)):K.reset(),V=0;for(let t in Y)Y[t]=!1;return Q[n()?"value":"innerHTML"]="",this},this.go=function(){return Y.started?this:(u(),G.waitUntilVisible?(((e,t)=>{new IntersectionObserver(((r,n)=>{r.forEach((r=>{r.isIntersecting&&(t(),n.unobserve(e))}))}),{threshold:1}).observe(e)})(Q,p.bind(this)),this):(p(),this))},this.flush=function(e=(()=>{})){return u(),p(!1).then(e),this},this.getQueue=()=>K,this.getOptions=()=>G,this.updateOptions=e=>v(e),this.getElement=()=>Q;let Q="string"===typeof(q=e)?D(q):q;var q;let U=[],V=0,X=null,Y=H({},O),G=H(_,t);G=H(G,{html:!n()&&G.html,nextStringDelay:N(G.nextStringDelay),loopDelay:N(G.loopDelay)});let J=Math.random().toString().substring(2,9),K=function(e){let t=function(e){return m(e).forEach((e=>{var t;return n.set(Symbol(null==(t=e.char)?void 0:t.innerText),b({},e))})),this},r=()=>Array.from(n.values()),n=new Map;return t(e),{add:t,set:function(e,t){let r=[...n.keys()];n.set(r[e],t)},wipe:function(){n=new Map,t(e)},reset:function(){n.forEach((e=>delete e.done))},destroy:e=>n.delete(e),done:(e,t=!1)=>t?n.delete(e):n.get(e).done=!0,getItems:(e=!1)=>e?r():r().filter((e=>!e.done)),getQueue:()=>n,getTypeable:()=>r().filter((e=>e.typeable))}}([{func:()=>{},delay:G.startDelay}]);Q.dataset.typeitId=J,E("[data-typeit-id]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}");let Z=G.cursor&&!n(),ee=(()=>{if(n())return;let e=k("span");return e.className=w,Z?(e.innerHTML=j(G.cursorChar).innerHTML,e):(e.style.visibility="hidden",e)})();G.strings=(e=>{let t=Q.innerHTML;return t?(Q.innerHTML="",G.startDelete?(Q.innerHTML=t,x(Q),c(z({func:F,delay:o(1),deletable:!0},i().length)),e):t.replace(/<!--(.+?)-->/g,"").trim().split(/<br(?:\s*?)(?:\/)?>/).concat(e)):e})(m(G.strings)),G.strings.length&&d()},{useRef:q,useEffect:U,useState:V}=c,X=e=>{const t=q(null),r=q(null),n=e,{options:o,as:i,children:a,getBeforeInit:s,getAfterInit:c}=n,u=((e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&f)for(var n of f(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(n,["options","as","children","getBeforeInit","getAfterInit"]),[y,h]=V(!0),[m,g]=V(null),v=i;return U((()=>{!function(){const e=Object.assign({},o);a&&t.current&&(e.strings=t.current.innerHTML),g(e)}(),h(!1)}),[o]),U((()=>{var e;m&&((null==(e=r.current)?void 0:e.updateOptions(m))||(r.current=new Q(t.current,m),r.current=s(r.current),r.current.go(),r.current=c(r.current)))}),[m]),U((()=>()=>{var e;return null==(e=r.current)?void 0:e.destroy()}),[]),l.createElement(v,b({ref:t,children:y?a:null,style:{opacity:y?0:1}},u))};X.defaultProps={as:"span",options:{},getBeforeInit:e=>e,getAfterInit:e=>e};var Y=r(8947),G=r(5697),J=r.n(G);function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){te(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ee(e){return ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ee(e)}function te(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function re(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function ne(e){return function(e){if(Array.isArray(e))return oe(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return oe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return oe(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function oe(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ie(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var ae=["style"];function se(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),o=ie(t.slice(0,n)),i=t.slice(n+1).trim();return o.startsWith("webkit")?e[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=i:e[o]=i,e}),{})}var le=!1;try{le=!0}catch(me){}function ce(e){return e&&"object"===ee(e)&&e.prefix&&e.iconName&&e.icon?e:Y.Qc.icon?Y.Qc.icon(e):null===e?null:e&&"object"===ee(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function ue(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?te({},e,t):{}}var fe=["forwardedRef"];function de(e){var t=e.forwardedRef,r=re(e,fe),n=r.icon,o=r.mask,i=r.symbol,a=r.className,s=r.title,l=r.titleId,c=r.maskId,u=ce(n),f=ue("classes",[].concat(ne(function(e){var t,r=e.beat,n=e.fade,o=e.beatFade,i=e.bounce,a=e.shake,s=e.flash,l=e.spin,c=e.spinPulse,u=e.spinReverse,f=e.pulse,d=e.fixedWidth,p=e.inverse,y=e.border,b=e.listItem,h=e.flip,m=e.size,g=e.rotation,v=e.pull,x=(te(t={"fa-beat":r,"fa-fade":n,"fa-beat-fade":o,"fa-bounce":i,"fa-shake":a,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":f,"fa-fw":d,"fa-inverse":p,"fa-border":y,"fa-li":b,"fa-flip-horizontal":"horizontal"===h||"both"===h,"fa-flip-vertical":"vertical"===h||"both"===h},"fa-".concat(m),"undefined"!==typeof m&&null!==m),te(t,"fa-rotate-".concat(g),"undefined"!==typeof g&&null!==g&&0!==g),te(t,"fa-pull-".concat(v),"undefined"!==typeof v&&null!==v),te(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(x).map((function(e){return x[e]?e:null})).filter((function(e){return e}))}(r)),ne(a.split(" ")))),d=ue("transform","string"===typeof r.transform?Y.Qc.transform(r.transform):r.transform),p=ue("mask",ce(o)),y=(0,Y.qv)(u,Z(Z(Z(Z({},f),d),p),{},{symbol:i,title:s,titleId:l,maskId:c}));if(!y)return function(){var e;!le&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",u),null;var b=y.abstract,h={ref:t};return Object.keys(r).forEach((function(e){de.defaultProps.hasOwnProperty(e)||(h[e]=r[e])})),pe(b[0],h)}de.displayName="FontAwesomeIcon",de.propTypes={beat:J().bool,border:J().bool,bounce:J().bool,className:J().string,fade:J().bool,flash:J().bool,mask:J().oneOfType([J().object,J().array,J().string]),maskId:J().string,fixedWidth:J().bool,inverse:J().bool,flip:J().oneOf(["horizontal","vertical","both"]),icon:J().oneOfType([J().object,J().array,J().string]),listItem:J().bool,pull:J().oneOf(["right","left"]),pulse:J().bool,rotation:J().oneOf([0,90,180,270]),shake:J().bool,size:J().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:J().bool,spinPulse:J().bool,spinReverse:J().bool,symbol:J().oneOfType([J().bool,J().string]),title:J().string,titleId:J().string,transform:J().oneOfType([J().string,J().object]),swapOpacity:J().bool},de.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var pe=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof r)return r;var o=(r.children||[]).map((function(r){return e(t,r)})),i=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=se(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[ie(t)]=n}return e}),{attrs:{}}),a=n.style,s=void 0===a?{}:a,l=re(n,ae);return i.attrs.style=Z(Z({},i.attrs.style),s),t.apply(void 0,[r.tag,Z(Z({},i.attrs),l)].concat(ne(o)))}.bind(null,l.createElement),ye=r(9398),be=(new Date).toISOString().slice(0,10),he=function(){var e=(0,l.useRef)(null),t=(0,l.useState)("\uc544\uc8fc \uc544\ub984\ub2e4\uc6b4 \ub0a0"),r=t[0],o=t[1];(0,l.useEffect)((function(){void 0!==window&&setTimeout((function(){window.scroll({top:0,left:0,behavior:"smooth"})}),100)}),[]);var a=function(){o("\uc544\uc8fc \uc544\ub984\ub2e4\uc6b4 \ub0a0"===r?be:"\uc544\uc8fc \uc544\ub984\ub2e4\uc6b4 \ub0a0")};return(0,n.jsxs)("div",{className:s().container,children:[(0,n.jsx)(i(),{children:(0,n.jsx)("title",{children:be})}),(0,n.jsxs)("main",{className:s().main,children:[(0,n.jsx)("div",{className:s().titleWrapper,children:(0,n.jsx)("div",{className:s().title,children:(0,n.jsxs)(X,{as:"h1",options:{speed:150,afterComplete:function(e){e.destroy()}},children:["\uc0ac\ub791\ud558\ub294",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"\ubd80\uc778",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"\uc724\uc774\uacbd\uc5d0\uac8c"]})})}),(0,n.jsx)("div",{className:s().description,children:(0,n.jsxs)(X,{as:"p",options:{speed:150,startDelay:2e3,breakLines:!0},children:["\uc544\ub9c8\ub3c4 \uc9c0\uae08 \uc774 \ud3b8\uc9c0\ub97c \uc77d\uace0 \uc788\ub294 \uc21c\uac04\uc5d0\ub294 ",(0,n.jsx)("br",{}),"\uc6b0\ub9b0 \ub458\uc5d0\uc11c \uc14b\uc774 \ub418\ub294 \uae30\uc801\uc744 \ub9de\uc774\ud558\uace0 \uc788\uaca0\uc9c0\uc694?",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"\uc6b0\ub9ac\uac00 \uac19\uc774 \ub9de\uc774\ud55c \uc774 \uc791\uace0, \uc5b4\uc5ec\uc058\uace0, \ub530\ub73b\ud55c \uc0dd\uba85\uc740 ",(0,n.jsx)("br",{}),"\ub0b4\uac00 \ucc98\uc74c \ubd80\uc778\uc744 \ub9cc\ub09c \uac83\ucc98\ub7fc \ub098\uc758 \uc0b6\uc5d0\ub294 \uc544\uc8fc \ud070 \uae30\uc801\uc774\uc5d0\uc694.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"\uc774\uc81c \uc6b0\ub9b0 \ub458\uc5d0\uc11c \uc14b\uc774 \ub418\uc5c8\uc9c0\ub9cc ",(0,n.jsx)("br",{}),"\ub0b4\uac00 \uc6b0\ub9ac \uac00\uc871\uc744 \uc0ac\ub791\ud558\ub294 \ub9c8\uc74c\uc740 \ud558\ub098\ub97c \ub458\ub85c \ub098\ub258\ub294 \uac8c \uc544\ub2c8\ub77c ",(0,n.jsx)("br",{}),"\ub458 \ud639\uc740 \uadf8 \uc774\uc0c1\uc774 \ub418\uc5b4 \ubc84\ub9b4 \uac70 \uac19\uc740 \uc0dd\uac01\uc774 \ub4e4\uc5b4\uc694.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"\ub9c8\uc9c0\ub9c9\uc73c\ub85c \ub108\ubb34 \uace0\ub9d9\uace0 \uc0ac\ub791\ud558\uba70 ",(0,n.jsx)("br",{}),"\ub2e4\uc2dc \ud55c\ubc88 \uc0ac\ub791\ud55c\ub2e4\uace0 \ub9d0\ud574\uc8fc\uace0 \uc2f6\uc5b4\uc694.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsxs)("b",{children:["\uc0ac\ub791\ud558\ub294 \ub098\uc758 \ubd80\uc778 \uc724\uc774\uacbd ",(0,n.jsx)("br",{}),"\uadf8\ub9ac\uace0 \uc5c4\ub9c8\uac00 \ub41c \uc774\uacbd\uc528\uc5d0\uac8c"]})]})})]}),(0,n.jsx)("footer",{className:s().footer,children:(0,n.jsx)("em",{style:{cursor:"pointer"},onMouseEnter:a,onMouseLeave:a,children:r})}),(0,n.jsx)("audio",{ref:e,src:"/audio.mp4"}),(0,n.jsx)("div",{className:s().bottom_left,children:(0,n.jsx)(de,{icon:ye.Xig,onClick:function(){null!==e.current&&(e.current.paused?e.current.play():e.current.pause())}})}),(0,n.jsx)("div",{className:s().bottom_right,children:(0,n.jsx)(de,{icon:ye.FPD,onClick:function(){window.scroll({top:0,left:0,behavior:"smooth"})}})})]})}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",titleWrapper:"Home_titleWrapper__cZ9Lr",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb",bottom_left:"Home_bottom_left__ac9Tg",bottom_right:"Home_bottom_right__nMuWj"}},9008:function(e,t,r){e.exports=r(3121)},2703:function(e,t,r){"use strict";var n=r(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[523,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);