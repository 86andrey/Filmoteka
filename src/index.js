import MovieApiService from './js/movieFetch.js';

// объявляем экземпляр класса
const movie = new MovieApiService();

// вызываем на этом экземпляре нужный метод (пример=>)
movie.fetchPopular();
