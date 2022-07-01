import MovieApiService from './js/movieFetch.js';

// для примера - через экземпляр можем достучаться до свойства
const popularMovie = new MovieApiService();

// вызываем промис в формате JSON
popularMovie.fetchPopular();
