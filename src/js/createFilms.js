import MovieApiService from './movieFetch';
import { renderMarkup, showRequestError } from './renderFunctions';
import { createPagination, paginationSettings } from './pagination';
import { HOME_SEARCH_TYPE, QUERY_SEARCH_TYPE } from './searchTypes';
const movie = new MovieApiService();


// рендерит карточки популярных фильмов
export async function createFilmsByPopular() {
  try {
    const movies = await movie.fetchPopular();
    // console.log(movies);
    if (movies.total_results > 20) {
      createPagination(movies);

      paginationSettings.searchType = HOME_SEARCH_TYPE;
    }
    renderMarkup(movies);
  } catch (err) {
    console.dir(err);
  }
}

// Якщо пошук по запиту не прайшовав нічого, то показує популярні фільми

// рендерит карточки фильмов по запросу
export async function createFilmsBySearch(searchQuery) {
  const paginationEl = document.querySelector('#tui-pagination-container');
  const containerCard = document.querySelector('.container-card');
  const mainContainerPlaceholder = document.querySelector('.container-empty');
  // console.log(optionBySearch.searchType);
  try {
    const movies = await movie.fetchByQuery(searchQuery);

    paginationEl.innerHTML = '';
    if (movies.results.length === 0) {
      showRequestError();
      return;
    }
    if (movies.total_results > 20) {
      createPagination(movies);
      paginationSettings.searchType = QUERY_SEARCH_TYPE;
    }
    // optionBySearch.searchType = POPULAR_SEARCH_TYPE;
    renderMarkup(movies);
  } catch (err) {
    // console.log(err);
    showRequestError();
    paginationEl.innerHTML = '';
    containerCard.innerHTML = '';
  
    console.log(mainContainerPlaceholder);
    mainContainerPlaceholder.classList.remove('.visually-hidden')
    // containerCard.innerHTML = '';
    // createFilmsByPopular();
  }
}
