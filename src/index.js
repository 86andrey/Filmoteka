import MovieApiService from './js/movieFetch.js';

const popularMovie = new MovieApiService();

popularMovie.fetchPopular();
