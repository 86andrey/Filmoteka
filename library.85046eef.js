function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},s=t.parcelRequired7c6;null==s&&((s=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var s={id:e,exports:{}};return a[e]=s,t.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=s);var i=s("5uEKZ"),r=s("6SyuW"),c=s("9OeKo"),o=s("bYdoQ"),d=(o=s("bYdoQ"),s("2nhTy")),l=s("i37hA");s("5R1Ed");document.querySelector(".back_to_top");window.addEventListener("scroll",e(c)(r.trackScroll,500));i.storage.readItem("watched");const u={watchBtn:document.querySelector("#header-watched-button"),queueBtn:document.querySelector("#header-queue-button")},h=document.querySelector(".modal__card-overlay"),v=document.querySelector(".container-card"),g=document.querySelector(".container-placeholder");v.addEventListener("click",(e=>{const t=e.path[2];if(!t.classList.contains("container-card_single-card"))return;h.classList.remove("is-hidden");const a=t.dataset.id;(0,o.openModal)(a)})),async function(){const e=i.storage.readItem("watched");if(e){const t=(0,d.addPageToArray)(1,e);console.log(t),t.total_results>20&&((0,d.createPagination)(t),d.paginationSettings.searchType=l.WATCHED_SEARCH_TYPE),t.results.length<21&&(v.innerHTML=await(0,o.makeMarkupLib)(t.results),0!==t.results.length&&g.classList.add("visually-hidden"),0===t.results.length&&g.classList.remove("visually-hidden"))}}(),u.watchBtn.addEventListener("click",(async()=>{const e=i.storage.readItem("watched");if(e){const t=(0,d.addPageToArray)(1,e);t.total_results>20&&((0,d.createPagination)(t),d.paginationSettings.searchType=l.WATCHED_SEARCH_TYPE),t.results.length<21&&(v.innerHTML=await(0,o.makeMarkupLib)(t.results)),0!==t.results.length&&g.classList.add("visually-hidden"),0===t.results.length&&g.classList.remove("visually-hidden")}u.watchBtn.classList.contains("is-header-nonactive")&&(u.watchBtn.classList.remove("is-header-nonactive"),u.watchBtn.classList.add("is-header-active"),u.queueBtn.classList.remove("is-header-active"),u.queueBtn.classList.add("is-header-nonactive"))})),u.queueBtn.addEventListener("click",(async()=>{const e=i.storage.readItem("qu");if(e){const t=document.querySelector("#tui-pagination-container"),a=(0,d.addPageToArray)(1,e);t.innerHTML="",a.total_results>20&&((0,d.createPagination)(a),d.paginationSettings.searchType=l.QUEUE_SEARCH_TYPE),a.results.length<21&&(v.innerHTML=await(0,o.makeMarkupLib)(a.results)),0!==a.results.length&&g.classList.add("visually-hidden"),0===a.results.length&&g.classList.remove("visually-hidden")}u.queueBtn.classList.contains("is-header-nonactive")&&(u.queueBtn.classList.remove("is-header-nonactive"),u.queueBtn.classList.add("is-header-active"),u.watchBtn.classList.remove("is-header-active"),u.watchBtn.classList.add("is-header-nonactive"))}));new Swiper;
//# sourceMappingURL=library.85046eef.js.map