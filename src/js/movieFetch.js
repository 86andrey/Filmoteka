const API_KEY = '03779c52c93ea63ebe46db37a334d7d8';
const BASE_URL = 'https://api.themoviedb.org/3/';


  export default class MovieApiService {
    constructor() {
      this.searchQuery = '';
      this.page = 1;
      
    }
  
    // метод получения массива популярных фильмов. Total_pages = 1000 по дефолту.
    async fetchPopular(){
      try{       
      const url=`${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${this.page}`
      const response=  await fetch(url);
      const data = await response.json();
      console.log(data);
      return data.results;
     } catch(error){console.log(error);
    }}
    
    // метод получения массива фильмов по запросу.
     async fetchByQuery(searchQuery){
      try{ 
      const url=`${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${this.page}&include_adult=false`
      const response=  await fetch(url);
      const data = await response.json();
      // this.incrementPage();
      return data.results;
      } catch(error){console.log(error);
      }}

    // метода получения массива жанров
    async getGenres(){
      try{ 
      const url=`${BASE_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`
      const response=  await fetch(url);
      const data = await response.json();
      console.log(data.genres);
      return data.genres;
      } catch(error){console.log(error);
      }}
   
    // метод получения колличества страниц в зависимости от запроса
    async getCountByQuery(searchQuery){
      try{ 
      const url=`${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&include_adult=false`
      const response=  await fetch(url);
      const data = await response.json();
      return data.total_results;
      } catch(error){console.log(error);
      }}

    // метод получения инфо о фильме по айдишке
      async fetchById(movieId){
        try{       
        const url=`${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
        const response=  await fetch(url);
        const data = await response.json();
        // console.log(data);
        return data;
       } catch(error){console.log(error);
      }}

    // метод присвоения странице номера из пагинации
    setCurrentPage(page){
    this.page=page;
     }

    // метод добавления по одной странице
    incrementPage() {
      this.page += 1;
    }

    // метод сброса нумерации страниц на первую
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
