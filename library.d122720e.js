var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var o=r("5uEKZ"),i=r("bYdoQ");const a=document.querySelector(".container-card"),d={watchBtn:document.querySelector("#header-watched-button"),queueBtn:document.querySelector("#header-queue-button")};d.watchBtn.addEventListener("click",(async()=>{const e=o.storage.readItem("watched");console.log(e),e?(a.innerHTML="",a.innerHTML=await(0,i.makeMarkupLib)(e)):a.innerHTML="List is empty"})),d.queueBtn.addEventListener("click",(async()=>{const e=o.storage.readItem("qu");e?(a.innerHTML="",a.innerHTML=await(0,i.makeMarkupLib)(e)):a.innerHTML="List is empty"}));
//# sourceMappingURL=library.d122720e.js.map