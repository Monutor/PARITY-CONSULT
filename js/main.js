(()=>{var e={817:()=>{Fancybox.bind('[data-fancybox="gallery"]',{}),AOS.init()},338:()=>{new Swiper(".slider-documents",{pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{100:{slidesPerView:1,spaceBetween:10},960:{slidesPerView:4,spaceBetween:30}}})},27:()=>{try{var e=document.querySelectorAll('input[type="tel"]'),t={mask:"+{7} (000) - 000 00 00"};e.forEach((function(e){IMask(e,t)}))}catch(e){}},429:()=>{try{var e=document.querySelectorAll("[data-modal]"),t=document.querySelector("body"),n=document.querySelectorAll("[data-modal-close]");function o(e){e.classList.remove("modal--active"),t.style.overflowY="",function(e){e.removeEventListener("keydown",i),e.removeEventListener("click",r)}(e)}function i(e){var t=e.currentTarget;"Escape"===e.key&&o(t)}function r(e){e.currentTarget.querySelector(".modal__content").contains(e.target)||o(e.currentTarget)}e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var n=e.target.closest("[data-modal]").getAttribute("data-modal"),o=document.getElementById(n);o&&(o.classList.add("modal--active"),t.style.overflowY="hidden",function(e){e.addEventListener("keydown",i),e.addEventListener("click",r)}(o))}))})),n.forEach((function(e){e.addEventListener("click",(function(e){var t=e.target.closest(".modal");t&&o(t)}))}))}catch(d){}},598:()=>{function e(e){var t=!0,n=!1,o=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function r(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function d(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function s(e){t=!1}function a(){document.addEventListener("mousemove",c),document.addEventListener("mousedown",c),document.addEventListener("mouseup",c),document.addEventListener("pointermove",c),document.addEventListener("pointerdown",c),document.addEventListener("pointerup",c),document.addEventListener("touchmove",c),document.addEventListener("touchstart",c),document.addEventListener("touchend",c)}function c(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",c),document.removeEventListener("mousedown",c),document.removeEventListener("mouseup",c),document.removeEventListener("pointermove",c),document.removeEventListener("pointerdown",c),document.removeEventListener("pointerup",c),document.removeEventListener("touchmove",c),document.removeEventListener("touchstart",c),document.removeEventListener("touchend",c))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(r(e.activeElement)&&d(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",s,!0),document.addEventListener("pointerdown",s,!0),document.addEventListener("touchstart",s,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(n&&(t=!0),a())}),!0),a(),e.addEventListener("focus",(function(e){var n,o,s;r(e.target)&&(t||(o=(n=e.target).type,"INPUT"===(s=n.tagName)&&i[o]&&!n.readOnly||"TEXTAREA"===s&&!n.readOnly||n.isContentEditable))&&d(e.target)}),!0),e.addEventListener("blur",(function(e){var t;r(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}(()=>{"use strict";n(598),window,document,document.documentElement,document.body,n(817),n(429),n(27),n(338);const e=e=>{clearTimeout(e.countUpTimeout),e._countUpOrigInnerHTML&&(e.innerHTML=e._countUpOrigInnerHTML,e._countUpOrigInnerHTML=void 0),e.style.visibility=""},t=(e,t={})=>{const{duration:n=1e3,delay:o=16}=t,i=n/o,r=e.toString().split(/(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/),d=[];for(let e=0;e<i;e++)d.push("");for(let e=0;e<r.length;e++)if(/([0-9.][,.0-9]*[0-9]*)/.test(r[e])&&!/<[^>]+>/.test(r[e])){let t=r[e];const n=[...t.matchAll(/[.,]/g)].map((e=>({char:e[0],i:t.length-e.index-1}))).sort(((e,t)=>e.i-t.i));t=t.replace(/[.,]/g,"");let o=d.length-1;for(let e=i;e>=1;e--){let r=parseInt(t/i*e,10);r=n.reduce(((e,{char:t,i:n})=>e.length<=n?e:e.slice(0,-n)+t+e.slice(-n)),r.toString()),d[o--]+=r}}else for(let t=0;t<i;t++)d[t]+=r[e];return d[d.length]=e.toString(),d};var o=new IntersectionObserver((function(n){n.forEach((function(n){var o=n.target;n.isIntersecting&&!o.classList.contains("is-visible")&&(((n,o={})=>{const{action:i="start",duration:r=1e3,delay:d=16}=o;if("stop"===i)return void e(n);if(e(n),!/[0-9]/.test(n.innerHTML))return;const s=t(n.innerHTML,{duration:r||n.getAttribute("data-duration"),delay:d||n.getAttribute("data-delay")});n._countUpOrigInnerHTML=n.innerHTML,n.innerHTML=s[0]||"&nbsp;",n.style.visibility="visible";const a=function(){n.innerHTML=s.shift()||"&nbsp;",s.length?(clearTimeout(n.countUpTimeout),n.countUpTimeout=setTimeout(a,d)):n._countUpOrigInnerHTML=void 0};n.countUpTimeout=setTimeout(a,d)})(o,{duration:2e3,delay:13}),o.classList.add("is-visible"))}))}),{threshold:1});document.querySelectorAll(".animate-number").forEach((function(e){o.observe(e)}))})()})();