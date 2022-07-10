import { Spinner } from 'spin.js';
import opts from './spinner';

const API_KEY = '03779c52c93ea63ebe46db37a334d7d8';
const BASE_URL = 'https://api.themoviedb.org/3/';

export default class MovieApiService {
  constructor() {
    this.searchQuery = '';
  }

  // метод получения массива популярных фильмов. Total_pages = 1000 по дефолту.
  async fetchPopular() {
    const target = document.querySelector('.container-card');
    const spinner = new Spinner(opts).spin(target);
    try {
      const url = `${BASE_URL}trending/movie/day?api_key=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      spinner.stop();
      return data;
    } catch (error) {
      console.log(error, 'fetchPopular');
    }
  }

  async fetchPopularPagination(currentPage) {
    const target = document.querySelector('.container-card');
    const spinner = new Spinner(opts).spin(target);
    try {
      const url = `${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${currentPage}`;
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      spinner.stop();
      return data;
    } catch (error) {
      console.log(error, 'fetchPopularPagination');
    }
  }

  // метод получения массива фильмов по запросу.
  async fetchByQuery(searchQuery) {
    const target = document.querySelector('.container-card');
    const spinner = new Spinner(opts).spin(target);
    try {
      const url = `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&include_adult=false`;
      const response = await fetch(url);

      const data = await response.json();
      spinner.stop();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async fetchByQueryPagination(searchQuery, currentPage) {
    const target = document.querySelector('.container-card');
    const spinner = new Spinner(opts).spin(target);
    try {
      const url = `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${currentPage}&include_adult=false`;
      const response = await fetch(url);
      const data = await response.json();
      spinner.stop();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  // метода получения массива жанров
  async getGenres() {
    try {
      const url = `${BASE_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  // метод получения колличества страниц в зависимости от запроса
  async getCountByQuery(searchQuery) {
    try {
      const url = `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&include_adult=false`;
      const response = await fetch(url);
      const data = await response.json();
      return data.total_results;
    } catch (error) {
      console.log(error);
    }
  }

  // метод получения инфо о фильме по айдишке
  async fetchById(movieId) {
    const target = document.querySelector('.container-card');
    const spinner = new Spinner(opts).spin(target);
    try {
      const url = `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      spinner.stop();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  // метод присвоения странице номера из пагинации
  setCurrentPage(page) {
    this.page = page;
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
