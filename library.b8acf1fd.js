var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var s={id:e,exports:{}};return t[e]=s,n.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},e.parcelRequired7c6=n);var s=n("5uEKZ"),i=n("bYdoQ");i=n("bYdoQ");const d={watchBtn:document.querySelector("#header-watched-button"),queueBtn:document.querySelector("#header-queue-button")},c=document.querySelector(".modal__card-overlay"),r=document.querySelector(".container-card"),o=document.querySelector(".container-placeholder");r.addEventListener("click",(e=>{const t=e.path[2];if(!t.classList.contains("container-card_single-card"))return;c.classList.remove("is-hidden");const a=t.dataset.id;(0,i.openModal)(a)})),async function(){const e=s.storage.readItem("watched");0===e.length?o.classList.remove("visually-hidden"):(o.classList.add("visually-hidden"),r.innerHTML=await(0,i.makeMarkupLib)(e))}(),d.watchBtn.addEventListener("click",(async()=>{const e=s.storage.readItem("watched");0===e.length?(r.innerHTML="",o.classList.remove("visually-hidden")):(o.classList.add("visually-hidden"),r.innerHTML=await(0,i.makeMarkupLib)(e)),d.watchBtn.classList.contains("is-header-nonactive")&&(d.watchBtn.classList.remove("is-header-nonactive"),d.watchBtn.classList.add("is-header-active"),d.queueBtn.classList.remove("is-header-active"),d.queueBtn.classList.add("is-header-nonactive"))})),d.queueBtn.addEventListener("click",(async()=>{const e=s.storage.readItem("qu");0===e.length?(r.innerHTML="",o.classList.remove("visually-hidden")):(o.classList.add("visually-hidden"),r.innerHTML=await(0,i.makeMarkupLib)(e)),d.queueBtn.classList.contains("is-header-nonactive")&&(d.queueBtn.classList.remove("is-header-nonactive"),d.queueBtn.classList.add("is-header-active"),d.watchBtn.classList.remove("is-header-active"),d.watchBtn.classList.add("is-header-nonactive"))}));
//# sourceMappingURL=library.b8acf1fd.js.map
