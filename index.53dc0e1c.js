const e=new class{async fetchPopular(){try{const e=`https://api.themoviedb.org/3/trending/movie/day?api_key=03779c52c93ea63ebe46db37a334d7d8&page=${this.page}`,a=await fetch(e),t=await a.json();return console.log(t),t.results}catch(e){console.log(e)}}async fetchByQuery(e){try{const a=`https://api.themoviedb.org/3/search/movie?api_key=03779c52c93ea63ebe46db37a334d7d8&language=en-US&query=${e}&page=${this.page}&include_adult=false`,t=await fetch(a);return(await t.json()).results}catch(e){console.log(e)}}async getGenres(){try{const e="https://api.themoviedb.org/3/genre/movie/list?api_key=03779c52c93ea63ebe46db37a334d7d8&language=en-US",a=await fetch(e),t=await a.json();return console.log(t.genres),t.genres}catch(e){console.log(e)}}async getPagesCountByQuery(e){try{const a=`https://api.themoviedb.org/3/search/movie?api_key=03779c52c93ea63ebe46db37a334d7d8&language=en-US&query=${e}&include_adult=false`,t=await fetch(a);return(await t.json()).total_pages}catch(e){console.log(e)}}async fetchById(e){try{const a=`https://api.themoviedb.org/3/movie/${e}?api_key=03779c52c93ea63ebe46db37a334d7d8&language=en-US`,t=await fetch(a);return await t.json()}catch(e){console.log(e)}}setCurrentPage(e){this.page=e}incrementPage(){this.page+=1}resetPage(){this.page=1}constructor(){this.searchQuery="",this.page=1}};e.fetchPopular();const a=document.querySelector(".container-card");!async function(){const t=await e.fetchPopular();console.log(t);const n=t.map((({poster_path:e,id:a,original_title:t,release_date:n,genre_ids:s})=>`\n                  <div class="container-card_single-card" data-id="${a}" >\n                    <div class="poster">\n                        <img src="https://image.tmdb.org/t/p/w500${e}" alt="${t}">\n                    </div>\n                    <div class="info">\n                      <h3 class="info_title">${t}</h3>\n                      <p class="info_details">\n                          ${s} | ${n.split("-")[0]}\n                      </p>\n                    </div>\n                  </div> \n        `)).join("");a.insertAdjacentHTML("beforeend",n)}(),e.getGenres();
//# sourceMappingURL=index.53dc0e1c.js.map