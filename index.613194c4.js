const e=new class{async fetchPopular(){try{const e=`https://api.themoviedb.org/3/trending/movie/day?api_key=03779c52c93ea63ebe46db37a334d7d8&page=${this.page}`,t=await fetch(e),a=await t.json();return console.log(a),a}catch(e){console.log(e)}}async fetchByQuery(e){try{const t=`https://api.themoviedb.org/3/search/movie?api_key=03779c52c93ea63ebe46db37a334d7d8&language=en-US&query=${e}&page=${this.page}&include_adult=false`,a=await fetch(t);return(await a.json()).results}catch(e){console.log(e)}}async getGenres(){try{const e="https://api.themoviedb.org/3/genre/movie/list?api_key=03779c52c93ea63ebe46db37a334d7d8&language=en-US",t=await fetch(e),a=await t.json();return console.log(a),a}catch(e){console.log(e)}}async getCountByQuery(e){try{const t=`https://api.themoviedb.org/3/search/movie?api_key=03779c52c93ea63ebe46db37a334d7d8&language=en-US&query=${e}&include_adult=false`,a=await fetch(t);return(await a.json()).total_results}catch(e){console.log(e)}}async fetchById(e){try{const t=`https://api.themoviedb.org/3/movie/${e}?api_key=03779c52c93ea63ebe46db37a334d7d8&language=en-US`,a=await fetch(t);return await a.json()}catch(e){console.log(e)}}setCurrentPage(e){this.page=e}incrementPage(){this.page+=1}resetPage(){this.page=1}constructor(){this.searchQuery="",this.page=1}},t=document.querySelector(".container-card"),a=document.querySelector(".modal__card-content");async function n(a){const n=await e.fetchByQuery(a);t.innerHTML=await i(n)}function i(e){return e.results.map((({poster_path:e,id:t,original_title:a,release_date:n,genre_ids:i})=>{const o=n.split("-")[0],s=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];console.log(s);const c=i.reduce(((e,t)=>{const a=s.filter((e=>e.id===t))[0];return e.push(a.name),e.slice(0,3)}),[]);return console.log(c.length),`\n                  <div class="container-card_single-card" data-id="${t}" >\n                    <div class="poster">\n                        <img src="https://image.tmdb.org/t/p/w500${e}" alt="${a}">\n                    </div>\n                    <div class="info">\n                      <h3 class="info_title">${a}</h3>\n                      <p class="info_details">\n                          ${c} | ${o}\n                      </p>\n                    </div>\n                  </div> \n        `})).join("")}async function o(t){const n=await e.fetchById(t);a.innerHTML=await function({poster_path:e,original_title:t,overview:a,popularity:n,genres_name:i,vote_average:o,vote_count:s}){return`\n    <button type="button" class="modal__close" data-modal-close>\n      <svg class="modal__close-svg">\n        X\n      </svg>\n    </button>\n  <img src="https://image.tmdb.org/t/p/w500${e}" alt="${t}" class="modal__img" />\n  <div class="modal__info">\n    <h2 class="modal__info-title">${t}</h2>\n    <div class="modal__info-block">\n      <ul class="modal__info discription__modal">\n        <li class="discription__modal-item">\n          <p class="discription__modal-title">Vote / Votes</p>\n        </li>\n        <li class="discription__modal-item">\n          <p class="discription__modal-title">Popularity</p>\n        </li>\n        <li class="discription__modal-item">\n          <p class="discription__modal-title">Original Title</p>\n        </li>\n        <li class="discription__modal-item">\n          <p class="discription__modal-title">Genre</p>\n        </li>\n      </ul>\n      \n      <ul class="modal__info">\n        <li class="discription__modal-item">\n          <p class="discription__modal-text">\n          <span class="discription__modal-text-vote">${o}</span>\n          <span class="discription__modal-text-slash">/</span>\n          <span class="discription__modal-text-votes">${s}</span>\n          </p>\n        </li>\n        <li class="discription__modal-item">\n          <p class="discription__modal-text">${n.toFixed(1)}</p>\n        </li>\n        <li class="discription__modal-item">\n          <p class="discription__modal-text">${t}</p>\n        </li>\n        <li class="discription__modal-item">\n          <p class="discription__modal-text">${i} </p>\n        </li>\n      </ul>\n    </div>\n    <div class="modal__info about__modal">\n      <h4 class="about__modal-title">About</h4>\n      <p class="about__modal-text">${a}</p>\n    </div>\n    <div class="modal__button">\n      <button type="button" class="modal__btn-add modal__btn-1">add to Watched</button>\n      <button type="button" class="modal__btn-add modal__btn-2">add to queue</button>\n    </div>\n  </div>`}(n);const i=document.querySelector(".modal__close"),o=document.querySelector(".modal__card-overlay");i.addEventListener("click",(()=>{o.classList.add("is-hidden")}))}const s=document.querySelector(".header-input-container"),c=document.querySelector("#search-box");s.addEventListener("submit",(function(e){try{e.preventDefault(),searchQuery=c.value,""===searchQuery&&console.log("надо ввести фильм"),n(searchQuery)}catch{}})),async function(){const a=await e.fetchPopular();console.log(a),t.insertAdjacentHTML("beforeend",i(a))}();const l=document.querySelector(".modal__card-overlay");document.querySelector(".container-card").addEventListener("click",(e=>{const t=e.path[2];if(!t.classList.contains("container-card_single-card"))return;l.classList.remove("is-hidden");o(t.dataset.id)}));
//# sourceMappingURL=index.613194c4.js.map
