!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var s=r("bpxeT"),i=r("2TvXO"),c=r("jzQFI"),o=r("98tAT"),d=r("dCfNN"),u=r("2eFBA"),l=(u=r("2eFBA"),r("jcFG7")),h=r("kpqGT");r("gXLk6");document.querySelector(".back_to_top");window.addEventListener("scroll",e(d)(o.trackScroll,500));c.storage.readItem("watched");var p={watchBtn:document.querySelector("#header-watched-button"),queueBtn:document.querySelector("#header-queue-button")},f=document.querySelector(".modal__card-overlay"),v=document.querySelector(".container-card"),L=document.querySelector(".container-placeholder");function g(){return(g=e(s)(e(i).mark((function t(){var a,n;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=c.storage.readItem("watched"))){e.next=9;break}if((n=(0,l.addPageToArray)(1,a)).total_results>20&&(l.paginationSettings.searchType=h.WATCHED_SEARCH_TYPE),!(n.results.length<21)){e.next=8;break}return e.next=7,(0,u.makeMarkupLib)(n.results);case 7:v.innerHTML=e.sent;case 8:0!==n.results.length&&L.classList.add("visually-hidden");case 9:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function w(){p.watchBtn.classList.contains("is-header-nonactive")&&(p.watchBtn.classList.remove("is-header-nonactive"),p.watchBtn.classList.add("is-header-active"),p.queueBtn.classList.remove("is-header-active"),p.queueBtn.classList.add("is-header-nonactive"))}function m(){p.queueBtn.classList.contains("is-header-nonactive")&&(p.queueBtn.classList.remove("is-header-nonactive"),p.queueBtn.classList.add("is-header-active"),p.watchBtn.classList.remove("is-header-active"),p.watchBtn.classList.add("is-header-nonactive"))}v.addEventListener("click",(function(e){var t=e.path[2];if(t.classList.contains("container-card_single-card")){f.classList.remove("is-hidden");var a=t.dataset.id;(0,u.openModal)(a)}})),function(){g.apply(this,arguments)}(),p.watchBtn.addEventListener("click",e(s)(e(i).mark((function t(){var a,n;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=c.storage.readItem("watched"))){e.next=9;break}if((n=(0,l.addPageToArray)(1,a)).total_results>20&&(l.paginationSettings.searchType=h.WATCHED_SEARCH_TYPE),!(n.results.length<21)){e.next=8;break}return e.next=7,(0,u.makeMarkupLib)(n.results);case 7:v.innerHTML=e.sent;case 8:0!==n.results.length&&L.classList.add("visually-hidden");case 9:w();case 10:case"end":return e.stop()}}),t)})))),p.queueBtn.addEventListener("click",e(s)(e(i).mark((function t(){var a,n,r;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=c.storage.readItem("qu"))){e.next=12;break}if(n=document.querySelector("#tui-pagination-container"),r=(0,l.addPageToArray)(1,a),n.innerHTML="",v.innerHTML="",r.total_results>20&&(l.paginationSettings.searchType=h.QUEUE_SEARCH_TYPE),!(r.results.length<21)){e.next=11;break}return e.next=10,(0,u.makeMarkupLib)(r.results);case 10:v.innerHTML=e.sent;case 11:0!==r.results.length&&L.classList.add("visually-hidden");case 12:m();case 13:case"end":return e.stop()}}),t)}))));new Swiper}();
//# sourceMappingURL=library.bc670c0d.js.map