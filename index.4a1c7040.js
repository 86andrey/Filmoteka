(new class{async fetchPopular(){try{const e=`https://api.themoviedb.org/3/trending/movie/day?api_key=03779c52c93ea63ebe46db37a334d7d8&page=${this.pageStart}`,t=await fetch(e);return(await t.json()).results}catch(e){console.log(e)}}async fetchByQuery(e){try{const t=`https://api.themoviedb.org/3/search/movie?api_key=03779c52c93ea63ebe46db37a334d7d8&language=en-US&query=${e}&page=${this.pageQuery}&include_adult=false`,a=await fetch(t),r=await a.json();return g,r.results}catch(e){console.log(e)}}async fetchById(e){try{const t=`https://api.themoviedb.org/3/movie/${e}?api_key=03779c52c93ea63ebe46db37a334d7d8&language=en-US`,a=await fetch(t);return await a.json()}catch(e){console.log(e)}}incrementPageStart(){this.pageStart+=1}incrementPageQuery(){this.pageQuery+=1}resetPageStart(){this.pageStart=1}resetPageQuery(){this.pageQuery=1}constructor(){this.searchQuery="",this.pageStart=1,this.pageQuery=1}}).fetchPopular();
//# sourceMappingURL=index.4a1c7040.js.map