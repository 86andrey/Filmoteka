!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var a={id:e,exports:{}};return r[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){t[e]=n},n.parcelRequired7c6=a);var o=a("bpxeT"),i=a("2TvXO"),c=a("jzQFI"),u=a("2eFBA"),s=document.querySelector(".container-card"),d={watchBtn:document.querySelector("#header-watched-button"),queueBtn:document.querySelector("#header-queue-button")};d.watchBtn.addEventListener("click",e(o)(e(i).mark((function n(){var r;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=c.storage.readItem("watched"),console.log(r),!r){e.next=9;break}return s.innerHTML="",e.next=6,(0,u.makeMarkupLib)(r);case 6:s.innerHTML=e.sent,e.next=10;break;case 9:s.innerHTML="List is empty";case 10:case 11:case"end":return e.stop()}}),n)})))),d.queueBtn.addEventListener("click",e(o)(e(i).mark((function n(){var r;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=c.storage.readItem("qu"))){e.next=8;break}return s.innerHTML="",e.next=5,(0,u.makeMarkupLib)(r);case 5:s.innerHTML=e.sent,e.next=9;break;case 8:s.innerHTML="List is empty";case 9:case 10:case"end":return e.stop()}}),n)}))))}();
//# sourceMappingURL=library.23891970.js.map