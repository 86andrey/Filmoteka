var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var s={id:e,exports:{}};return t[e]=s,n.call(s.exports,s,s.exports),s.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequired7c6=n);var s=n("5uEKZ"),o=n("bYdoQ");o=n("bYdoQ");n("6SyuW");var i=n("2nhTy"),r=n("i37hA");const l=s.storage.readItem("watched");console.log(l);const c={watchBtn:document.querySelector("#header-watched-button"),queueBtn:document.querySelector("#header-queue-button")},d=document.querySelector(".modal__card-overlay"),u=document.querySelector(".container-card"),h=document.querySelector(".container-placeholder");u.addEventListener("click",(e=>{const t=e.path[2];if(!t.classList.contains("container-card_single-card"))return;d.classList.remove("is-hidden");const a=t.dataset.id;(0,o.openModal)(a)})),async function(){const e=s.storage.readItem("watched"),t=(0,i.addPageToArray)(1,e);console.log(t.results.length),0===t.results.length&&(console.log("Нет данных"),h.classList.remove("visually-hidden"));t.total_results>20&&(console.log((0,i.createPagination)(t)),i.paginationSettings.searchType=r.WATCHED_SEARCH_TYPE);t.results.length<21&&(u.innerHTML=await(0,o.makeMarkupLib)(t.results));0!==t.results.length&&h.classList.add("visually-hidden")}(),c.watchBtn.addEventListener("click",(async()=>{const e=s.storage.readItem("watched"),t=(0,i.addPageToArray)(1,e);console.log(t.results),0===e.length&&(console.log("Нет данных watchbtn"),u.innerHTML="",h.classList.remove("visually-hidden")),t.total_results>20&&(console.log((0,i.createPagination)(t)),i.paginationSettings.searchType=r.WATCHED_SEARCH_TYPE),t.results.length<21&&(u.innerHTML=await(0,o.makeMarkupLib)(t.results)),0!==t.results.length&&h.classList.add("visually-hidden"),c.watchBtn.classList.contains("is-header-nonactive")&&(c.watchBtn.classList.remove("is-header-nonactive"),c.watchBtn.classList.add("is-header-active"),c.queueBtn.classList.remove("is-header-active"),c.queueBtn.classList.add("is-header-nonactive"))})),c.queueBtn.addEventListener("click",(async()=>{const e=s.storage.readItem("qu"),t=document.querySelector("#tui-pagination-container");console.log(e);const a=(0,i.addPageToArray)(1,e);console.log(a),t.innerHTML="",u.innerHTML="",0===e.length&&(console.log("Нет данных queqeeq"),u.innerHTML="",h.classList.remove("visually-hidden")),a.total_results>20&&(console.log("Пагинация By Queue"),console.log((0,i.createPagination)(a)),i.paginationSettings.searchType=r.QUEUE_SEARCH_TYPE),a.results.length<21&&(u.innerHTML=await(0,o.makeMarkupLib)(a.results)),0!==a.results.length&&h.classList.add("visually-hidden"),c.queueBtn.classList.contains("is-header-nonactive")&&(c.queueBtn.classList.remove("is-header-nonactive"),c.queueBtn.classList.add("is-header-active"),c.watchBtn.classList.remove("is-header-active"),c.watchBtn.classList.add("is-header-nonactive"))}));
//# sourceMappingURL=library.d41e6188.js.map
