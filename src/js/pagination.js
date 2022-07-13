import MovieApiService from './movieFetch';
import { renderMarkup } from './renderFunctions';
import { input } from '../index';
import Pagination from 'tui-pagination';
import {
  HOME_SEARCH_TYPE,
  QUERY_SEARCH_TYPE,
  WATCHED_SEARCH_TYPE,
  QUEUE_SEARCH_TYPE,
} from './searchTypes';
import { storage } from './storage';
import { makeMarkupLib } from './renderFunctions';
import sprite from '../images/icons.svg';

const movie = new MovieApiService();
const arrowIcon = `${sprite}#icon-arrow`;
const dotsIcon = `${sprite}#icon-dots`;

// старое место для пагинации
export const paginationSettings = {
  startPage: 1,
  searchType: null,
  // pagination: null,
  // totalItemsHome: null,
};

// создаем пагинацию
export function createPagination({ page, total_results }) {
  const paginationEl = document.querySelector('#tui-pagination-container');
  //   console.log(results);
  const options = {
    page,
    itemsPerPage: 20,
    totalItems: total_results,
    visiblePages: 5,
    centerAlign: true,
    usageStatistics: false,
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}">' +
        `<svg class="tui-ico-{{type}}" width="16" height="16"><use href="${arrowIcon}-{{type}}"></use></svg>` +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}">' +
        `<svg class="tui-ico-ellip" width="14" height="14"><use href="${dotsIcon}"></use></svg>` +
        '</a>',
    },
  };
  const pagination = new Pagination(paginationEl, options);
  // paginationSettings.pagination = pagination;

  // рендерим пагинацию
  pagination.on('afterMove', async event => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    const currentPage = event.page;
    const parsing = storage.readItem('watched');
    const parsingByQ = storage.readItem('qu');
    const containerCard = document.querySelector('.container-card');

    if (paginationSettings.searchType === HOME_SEARCH_TYPE) {
      const moviesPopular = await movie.fetchPopularPagination(currentPage);
      const data = await moviesPopular;
      renderMarkup(data);
    } else if (paginationSettings.searchType === QUERY_SEARCH_TYPE) {
      const moviesByQ = await movie.fetchByQueryPagination(
        input.value,
        currentPage
      );
      const data = await moviesByQ;
      // console.log(data);
      renderMarkup(data);
    }

    // Library
    else if (paginationSettings.searchType === WATCHED_SEARCH_TYPE) {
      const moviesWatched = addPageToArray(currentPage, parsing);
      console.log(moviesWatched, 'moviesWatched');
      containerCard.innerHTML = await makeMarkupLib(moviesWatched.results);
    } else if (paginationSettings.searchType === QUEUE_SEARCH_TYPE) {
      const moviesQueue = addPageToArray(currentPage, parsingByQ);
      console.log(moviesQueue, 'moviesQueue');
      containerCard.innerHTML = '';
      containerCard.innerHTML = await makeMarkupLib(moviesQueue.results);
    }
  });
  return pagination;
}

export function addPageToArray(currentPage, parsing) {
  let notesOnPage = 20;
  let page = currentPage;

  const total_results = parsing.length;

  let startPage = (page - 1) * notesOnPage;
  let endPage = startPage + notesOnPage;
  let results = parsing.slice(startPage, endPage);

  const object = {
    page,
    results,
    total_results,
  };
  return object;
}
