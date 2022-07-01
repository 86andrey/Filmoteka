const API_KEY = '03779c52c93ea63ebe46db37a334d7d8';
const BASE_URL = 'https://api.themoviedb.org/3/';

  export default class MovieApiService {
    constructor() {
      this.searchQuery = '';
      this.pageStart = 1;
      this.pageQuery =1;
    }
  
    async fetchPopular(){
      try{       
      const url=`${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${this.pageStart}`
      const response=  await fetch(url);
      const data = await response.json();
      // console.log(data.results);
      return data.results;
     } catch(error){console.log(error);
      
     }}
    
     async fetchByQuery(searchQuery){
      try{ 
      const url=`${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${this.pageQuery}&include_adult=false`
      const response=  await fetch(url);
      const data = await response.json();g
      // this.incrementPage();
      return data.results;
      } catch(error){console.log(error);
      }}

      async fetchById(movieId){
        try{       
        const url=`${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
        const response=  await fetch(url);
        const data = await response.json();
        // console.log(data);
        return data;
       } catch(error){console.log(error);
      }}


    incrementPageStart() {
      this.pageStart += 1;
    }

    incrementPageQuery() {
      this.pageQuery += 1;
    }
  
    resetPageStart() {
      this.pageStart = 1;
    }

    resetPageQuery() {
      this.pageQuery = 1;
    }
  
    // get query() {
    //   return this.searchQuery;
    // }
  
    // set query(newQuery) {
    //   this.searchQuery = newQuery;
    // }
  }
