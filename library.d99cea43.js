function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},s=t.parcelRequired7c6;null==s&&((s=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var s={id:e,exports:{}};return a[e]=s,t.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=s);var r=s("5uEKZ"),i=s("6SyuW"),o=s("9OeKo"),l=s("bYdoQ"),c=(s("bYdoQ"),s("bYdoQ"),l=s("bYdoQ"),s("2nhTy")),d=s("i37hA");s("5R1Ed");document.querySelector(".back_to_top");window.addEventListener("scroll",e(o)(i.trackScroll,500));r.storage.readItem("watched");const u={watchBtn:document.querySelector("#header-watched-button"),queueBtn:document.querySelector("#header-queue-button")},h=document.querySelector(".modal__card-overlay"),g=document.querySelector(".container-card"),v=document.querySelector(".container-placeholder");g.addEventListener("click",(e=>{const t=e.path[2];if(!t.classList.contains("container-card_single-card"))return;h.classList.remove("is-hidden");const a=t.dataset.id;(0,l.openModal)(a)})),async function(){const e=r.storage.readItem("watched");if(e){const t=(0,c.addPageToArray)(1,e);if(console.log(t),t.total_results>20&&((0,c.createPagination)(t),c.paginationSettings.searchType=d.WATCHED_SEARCH_TYPE),t.results.length<21){g.innerHTML=await(0,l.makeMarkupLib)(t.results);localStorage.getItem("theme")?(0,l.WhiteColor)():(0,l.BlackColor)()}0!==t.results.length&&v.classList.add("visually-hidden"),0===t.results.length&&v.classList.remove("visually-hidden")}}(),u.watchBtn.addEventListener("click",(async()=>{const e=r.storage.readItem("watched");if(e){const t=(0,c.addPageToArray)(1,e);if(t.total_results>20&&((0,c.createPagination)(t),c.paginationSettings.searchType=d.WATCHED_SEARCH_TYPE),t.results.length<21){g.innerHTML=await(0,l.makeMarkupLib)(t.results);localStorage.getItem("theme")?(0,l.WhiteColor)():(0,l.BlackColor)()}0!==t.results.length&&v.classList.add("visually-hidden"),0===t.results.length&&v.classList.remove("visually-hidden")}u.watchBtn.classList.contains("is-header-nonactive")&&(u.watchBtn.classList.remove("is-header-nonactive"),u.watchBtn.classList.add("is-header-active"),u.queueBtn.classList.remove("is-header-active"),u.queueBtn.classList.add("is-header-nonactive"))})),u.queueBtn.addEventListener("click",(async()=>{const e=r.storage.readItem("qu");if(e){const t=document.querySelector("#tui-pagination-container"),a=(0,c.addPageToArray)(1,e);if(t.innerHTML="",a.total_results>20&&((0,c.createPagination)(a),c.paginationSettings.searchType=d.QUEUE_SEARCH_TYPE),a.results.length<21){g.innerHTML=await(0,l.makeMarkupLib)(a.results);localStorage.getItem("theme")?(0,l.WhiteColor)():(0,l.BlackColor)()}0!==a.results.length&&v.classList.add("visually-hidden"),0===a.results.length&&v.classList.remove("visually-hidden")}u.queueBtn.classList.contains("is-header-nonactive")&&(u.queueBtn.classList.remove("is-header-nonactive"),u.queueBtn.classList.add("is-header-active"),u.watchBtn.classList.remove("is-header-active"),u.watchBtn.classList.add("is-header-nonactive"))}));new Swiper;
//# sourceMappingURL=library.d99cea43.js.map
