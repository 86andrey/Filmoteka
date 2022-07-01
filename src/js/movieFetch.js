const API_KEY = '03779c52c93ea63ebe46db37a334d7d8';
const BASE_URL = 'https://api.themoviedb.org/3/';

  export default class MovieApiService {
    constructor() {
      this.searchQuery = '';
      this.page = 1;
    }
  
    async fetchPopular(){
      try{       
      const url=`${BASE_URL}trending/movie/day?api_key=${API_KEY}`
      const response=  await fetch(url);
      const data = await response.json();
      // console.log(data.results);
      return data.results;
     } catch(error){console.log(error);
      
          }}
    
     async fetchByQuery(query){
      try{ 
      const url=`${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${this.page}&include_adult=false`
      const response=  await fetch(url);
      const data = await response.json();
      // this.incrementPage();
      return data.results;
      } catch(error){console.log(error);
    
      }}


    incrementPage() {
      this.page += 1;
    }
  
    resetPage() {
      this.page = 1;
    }
  
    // get query() {
    //   return this.searchQuery;
    // }
  
    // set query(newQuery) {
    //   this.searchQuery = newQuery;
    // }
  }
