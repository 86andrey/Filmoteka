!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};function n(t,e,n,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,s,"next",t)}function s(t){n(i,o,a,c,s,"throw",t)}c(void 0)}))}};var r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var o={};function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t,e,n){e&&a(t.prototype,e);n&&a(t,n);return t};var i={},c=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new P(r||[]);return a._invoke=function(t,e,n){var r=d;return function(o,a){if(r===f)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw a;return T()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=E(i,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var s=l(t,e,n);if("normal"===s.type){if(r=n.done?h:p,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=h,n.method="throw",n.arg=s.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d="suspendedStart",p="suspendedYield",f="executing",h="completed",v={};function m(){}function y(){}function _(){}var g={};s(g,a,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(O([])));b&&b!==n&&r.call(b,a)&&(g=b);var x=_.prototype=m.prototype=Object.create(g);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(o,a,i,c){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function O(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:T}}function T(){return{value:e,done:!0}}return y.prototype=_,s(x,"constructor",_),s(_,"constructor",y),y.displayName=s(_,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,s(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(k.prototype),s(k.prototype,i,(function(){return this})),t.AsyncIterator=k,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new k(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(x),s(x,c,"Generator"),s(x,a,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:O(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(i);try{regeneratorRuntime=c}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=c:Function("r","regeneratorRuntime = r")(c)}var s="03779c52c93ea63ebe46db37a334d7d8",u="https://api.themoviedb.org/3/",l=new(function(){"use strict";function n(){t(r)(this,n),this.searchQuery="",this.page=1}return t(o)(n,[{key:"fetchPopular",value:function(){var n=this;return t(e)(t(i).mark((function e(){var r,o,a;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="".concat(u,"trending/movie/day?api_key=").concat(s,"&page=").concat(n.page),t.next=4,fetch(r);case 4:return o=t.sent,t.next=7,o.json();case 7:return a=t.sent,console.log(a),t.abrupt("return",a);case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),e,null,[[0,12]])})))()}},{key:"fetchByQuery",value:function(n){var r=this;return t(e)(t(i).mark((function e(){var o,a,c;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o="".concat(u,"search/movie?api_key=").concat(s,"&language=en-US&query=").concat(n,"&page=").concat(r.page,"&include_adult=false"),t.next=4,fetch(o);case 4:return a=t.sent,t.next=7,a.json();case 7:return c=t.sent,t.abrupt("return",c.results);case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),e,null,[[0,11]])})))()}},{key:"getGenres",value:function(){return t(e)(t(i).mark((function e(){var n,r,o;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="".concat(u,"genre/movie/list?api_key=").concat(s,"&language=en-US"),t.next=4,fetch(n);case 4:return r=t.sent,t.next=7,r.json();case 7:return o=t.sent,console.log(o),t.abrupt("return",o);case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),e,null,[[0,12]])})))()}},{key:"getCountByQuery",value:function(n){return t(e)(t(i).mark((function e(){var r,o,a;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="".concat(u,"search/movie?api_key=").concat(s,"&language=en-US&query=").concat(n,"&include_adult=false"),t.next=4,fetch(r);case 4:return o=t.sent,t.next=7,o.json();case 7:return a=t.sent,t.abrupt("return",a.total_results);case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),e,null,[[0,11]])})))()}},{key:"fetchById",value:function(n){return t(e)(t(i).mark((function e(){var r,o,a;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="".concat(u,"movie/").concat(n,"?api_key=").concat(s,"&language=en-US"),t.next=4,fetch(r);case 4:return o=t.sent,t.next=7,o.json();case 7:return a=t.sent,t.abrupt("return",a);case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),e,null,[[0,11]])})))()}},{key:"setCurrentPage",value:function(t){this.page=t}},{key:"incrementPage",value:function(){this.page+=1}},{key:"resetPage",value:function(){this.page=1}}]),n}()),d=document.querySelector(".container-card"),p=document.querySelector(".modal__card-content");function f(){return(f=t(e)(t(i).mark((function e(){var n;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.fetchPopular();case 2:n=t.sent,console.log(n),d.insertAdjacentHTML("beforeend",m(n));case 5:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=t(e)(t(i).mark((function e(n){var r;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.fetchByQuery(n);case 2:return r=t.sent,t.next=5,m(r);case 5:d.innerHTML=t.sent;case 6:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function m(t){return t.results.map((function(t){var e=t.poster_path,n=t.id,r=t.original_title,o=t.release_date,a=t.genre_ids,i=o.split("-")[0],c=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];console.log(c);var s=a.reduce((function(t,e){var n=c.filter((function(t){return t.id===e}))[0];return t.push(n.name),t.slice(0,3)}),[]);return console.log(s.length),'\n                  <div class="container-card_single-card" data-id="'.concat(n,'" >\n                    <div class="poster">\n                        <img src="https://image.tmdb.org/t/p/w500').concat(e,'" alt="').concat(r,'">\n                    </div>\n                    <div class="info">\n                      <h3 class="info_title">').concat(r,'</h3>\n                      <p class="info_details">\n                          ').concat(s," | ").concat(i,"\n                      </p>\n                    </div>\n                  </div> \n        ")})).join("")}function y(t){return _.apply(this,arguments)}function _(){return(_=t(e)(t(i).mark((function e(n){var r,o,a;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.fetchById(n);case 2:return r=t.sent,t.next=5,g(r);case 5:p.innerHTML=t.sent,o=document.querySelector(".modal__close"),a=document.querySelector(".modal__card-overlay"),o.addEventListener("click",(function(){a.classList.add("is-hidden")}));case 9:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function g(t){var e=t.poster_path,n=t.original_title,r=t.overview,o=t.popularity,a=t.genres_name,i=t.vote_average,c=t.vote_count;return'\n    <button type="button" class="modal__close" data-modal-close>\n      <svg class="modal__close-svg">\n        X\n      </svg>\n    </button>\n  <img src="https://image.tmdb.org/t/p/w500'.concat(e,'" alt="').concat(n,'" class="modal__img" />\n  <div class="modal__info">\n    <h2 class="modal__info-title">').concat(n,'</h2>\n    <div class="modal__info-block">\n      <ul class="modal__info discription__modal">\n        <li class="discription__modal-item">\n          <p class="discription__modal-title">Vote / Votes</p>\n        </li>\n        <li class="discription__modal-item">\n          <p class="discription__modal-title">Popularity</p>\n        </li>\n        <li class="discription__modal-item">\n          <p class="discription__modal-title">Original Title</p>\n        </li>\n        <li class="discription__modal-item">\n          <p class="discription__modal-title">Genre</p>\n        </li>\n      </ul>\n      \n      <ul class="modal__info">\n        <li class="discription__modal-item">\n          <p class="discription__modal-text">\n          <span class="discription__modal-text-vote">').concat(i,'</span>\n          <span class="discription__modal-text-slash">/</span>\n          <span class="discription__modal-text-votes">').concat(c,'</span>\n          </p>\n        </li>\n        <li class="discription__modal-item">\n          <p class="discription__modal-text">').concat(o.toFixed(1),'</p>\n        </li>\n        <li class="discription__modal-item">\n          <p class="discription__modal-text">').concat(n,'</p>\n        </li>\n        <li class="discription__modal-item">\n          <p class="discription__modal-text">').concat(a,' </p>\n        </li>\n      </ul>\n    </div>\n    <div class="modal__info about__modal">\n      <h4 class="about__modal-title">About</h4>\n      <p class="about__modal-text">').concat(r,'</p>\n    </div>\n    <div class="modal__button">\n      <button type="button" class="modal__btn-add modal__btn-1">add to Watched</button>\n      <button type="button" class="modal__btn-add modal__btn-2">add to queue</button>\n    </div>\n  </div>')}var w=document.querySelector(".header-input-container"),b=document.querySelector("#search-box");w.addEventListener("submit",(function(t){try{t.preventDefault(),searchQuery=b.value,""===searchQuery&&console.log("надо ввести фильм"),h(searchQuery)}catch(t){}})),function(){f.apply(this,arguments)}();var x=document.querySelector(".modal__card-overlay");document.querySelector(".container-card").addEventListener("click",(function(t){var e=t.path[2];e.classList.contains("container-card_single-card")&&(x.classList.remove("is-hidden"),y(e.dataset.id))}))}();
//# sourceMappingURL=index.3f4c4938.js.map
