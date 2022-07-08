import MovieApiService from './movieFetch';
import { renderMarkup, showRequestError } from './renderFunctions';
import { createPagination, paginationSettings } from './pagination';
import { HOME_SEARCH_TYPE, QUERY_SEARCH_TYPE } from './searchTypes';

const movie = new MovieApiService();

export async function createFilmsByPopular() {
  try {
    const movies = await movie.fetchPopular();
    console.log(movies);
    createPagination(movies);

    paginationSettings.searchType = HOME_SEARCH_TYPE;

    renderMarkup(movies);
  } catch (err) {
    console.dir(err);
  }
}

export async function createFilmsBySearch(searchQuery) {
  try {
    const movies = await movie.fetchByQuery(searchQuery);
    if (movies.results.length === 0) {
      showRequestError();
    }
    console.log(movies);
    createPagination(movies);
    paginationSettings.searchType = QUERY_SEARCH_TYPE;
    renderMarkup(movies);
  } catch (err) {
    console.log(err);
    showRequestError();
  }
}
