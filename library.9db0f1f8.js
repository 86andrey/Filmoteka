function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},s={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},t.parcelRequired7c6=n);var r=n("5uEKZ"),i=n("6SyuW"),d=n("9OeKo"),c=n("bYdoQ"),o=(c=n("bYdoQ"),n("2nhTy")),l=n("i37hA");n("5R1Ed");document.querySelector(".back_to_top");window.addEventListener("scroll",e(d)(i.trackScroll,500));r.storage.readItem("watched");const u={watchBtn:document.querySelector("#header-watched-button"),queueBtn:document.querySelector("#header-queue-button")},h=document.querySelector(".modal__card-overlay"),v=document.querySelector(".container-card"),L=document.querySelector(".container-placeholder");v.addEventListener("click",(e=>{const t=e.path[2];if(!t.classList.contains("container-card_single-card"))return;h.classList.remove("is-hidden");const a=t.dataset.id;(0,c.openModal)(a)})),async function(){const e=r.storage.readItem("watched");if(e){const t=(0,o.addPageToArray)(1,e);t.total_results>20&&(o.paginationSettings.searchType=l.WATCHED_SEARCH_TYPE),t.results.length<21&&(v.innerHTML=await(0,c.makeMarkupLib)(t.results)),0!==t.results.length&&L.classList.add("visually-hidden"),0===t.results.length&&L.classList.remove("visually-hidden")}}(),u.watchBtn.addEventListener("click",(async()=>{const e=r.storage.readItem("watched");if(e){const t=(0,o.addPageToArray)(1,e);t.total_results>20&&(o.paginationSettings.searchType=l.WATCHED_SEARCH_TYPE),t.results.length<21&&(v.innerHTML=await(0,c.makeMarkupLib)(t.results)),0!==t.results.length&&L.classList.add("visually-hidden"),0===t.results.length&&L.classList.remove("visually-hidden")}u.watchBtn.classList.contains("is-header-nonactive")&&(u.watchBtn.classList.remove("is-header-nonactive"),u.watchBtn.classList.add("is-header-active"),u.queueBtn.classList.remove("is-header-active"),u.queueBtn.classList.add("is-header-nonactive"))})),u.queueBtn.addEventListener("click",(async()=>{const e=r.storage.readItem("qu");if(e){const t=document.querySelector("#tui-pagination-container"),a=(0,o.addPageToArray)(1,e);t.innerHTML="",a.total_results>20&&(o.paginationSettings.searchType=l.QUEUE_SEARCH_TYPE),a.results.length<21&&(v.innerHTML=await(0,c.makeMarkupLib)(a.results)),0!==a.results.length&&L.classList.add("visually-hidden"),0===a.results.length&&L.classList.remove("visually-hidden")}u.queueBtn.classList.contains("is-header-nonactive")&&(u.queueBtn.classList.remove("is-header-nonactive"),u.queueBtn.classList.add("is-header-active"),u.watchBtn.classList.remove("is-header-active"),u.watchBtn.classList.add("is-header-nonactive"))}));new Swiper;
//# sourceMappingURL=library.9db0f1f8.js.map