function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i,c=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,p=s||d||Function("return this")(),v=Object.prototype.toString,y=Math.max,b=Math.min,m=function(){return p.Date.now()};function g(e,t,n){var o,r,i,c,a,u,f=0,l=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=o,i=r;return o=r=void 0,f=t,c=e.apply(i,n)}function v(e){return f=e,a=setTimeout(x,t),l?p(e):c}function g(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-f>=i}function x(){var e=m();if(g(e))return O(e);a=setTimeout(x,function(e){var n=t-(e-u);return s?b(n,i-(e-f)):n}(e))}function O(e){return a=void 0,d&&o?p(e):(o=r=void 0,c)}function _(){var e=m(),n=g(e);if(o=arguments,r=this,u=e,n){if(void 0===a)return v(u);if(s)return a=setTimeout(x,t),p(u)}return void 0===a&&(a=setTimeout(x,t)),c}return t=h(t)||0,w(n)&&(l=!!n.leading,i=(s="maxWait"in n)?y(h(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),_.cancel=function(){void 0!==a&&clearTimeout(a),f=0,o=u=r=a=void 0},_.flush=function(){return void 0===a?c:O(m())},_}function w(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(w(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=w(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(c,"");var n=u.test(e);return n||f.test(e)?l(e.slice(2),n?2:8):a.test(e)?NaN:+e}i=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return w(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};const x=document.querySelector(".back_to_top");window.addEventListener("scroll",e(i)((function(){const e=window.pageYOffset;e>500&&x.classList.add("back_to_top-show"),e<500&&x.classList.remove("back_to_top-show")}),500)),x.addEventListener("click",(function e(){window.pageYOffset>0&&(window.scrollBy(0,-80),setTimeout(e,0))})),r("68O3z");var O=r("bYdoQ");const _=document.querySelector(".header-input-container"),T=document.querySelector("#search-box");_.addEventListener("submit",(function(e){try{e.preventDefault();const t=T.value;""===t&&console.log("надо ввести фильм"),(0,O.renderMarkupByQ)(t)}catch{}})),(0,O.renderMarkupPopular)();const j=document.querySelector(".modal__card-overlay");document.querySelector(".container-card").addEventListener("click",(e=>{const t=e.path[2];if(!t.classList.contains("container-card_single-card"))return;j.classList.remove("is-hidden");const n=t.dataset.id;(0,O.openModal)(n)}));
//# sourceMappingURL=index.b01fa5d0.js.map