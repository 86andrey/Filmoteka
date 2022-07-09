import MovieApiService from './movieFetch';
import { renderMarkup, showRequestError } from './renderFunctions';
import { createPagination, paginationSettings } from './pagination';
import { HOME_SEARCH_TYPE, QUERY_SEARCH_TYPE } from './searchTypes';

const movie = new MovieApiService();

export async function createFilmsByPopular() {
  try {
    const movies = await movie.fetchPopular();
    // console.log(movies);
    if (movies.results.length > 19) {
      createPagination(movies);

      paginationSettings.searchType = HOME_SEARCH_TYPE;
    }
    renderMarkup(movies);
  } catch (err) {
    console.dir(err);
  }
}

export async function createFilmsBySearch(searchQuery) {
  const paginationEl = document.querySelector('#tui-pagination-container');
  const containerCard = document.querySelector('.container-card');

  try {
    const movies = await movie.fetchByQuery(searchQuery);

    paginationEl.innerHTML = '';
    if (movies.results.length === 0) {
      // paginationEl.innerHTML = '';
      showRequestError();
    }
    // console.log(movies);
    if (movies.results.length > 19) {
      createPagination(movies);
      paginationSettings.searchType = QUERY_SEARCH_TYPE;
    }
    renderMarkup(movies);
  } catch (err) {
    console.log('ошибка поиска', err);
    showRequestError();
    paginationEl.innerHTML = '';
    containerCard.innerHTML = '';
  }
}
