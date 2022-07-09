import MovieApiService from './movieFetch';
import { renderMarkup } from './renderFunctions';
import { input } from '../index';
import Pagination from 'tui-pagination';
import { HOME_SEARCH_TYPE, QUERY_SEARCH_TYPE } from './searchTypes';
import sprite from '../images/icons.svg';

const movie = new MovieApiService();
const arrowIcon = `${sprite}#icon-arrow`;
const dotsIcon = `${sprite}#icon-dots`;

export const paginationSettings = {
  startPage: 1,
  searchType: null,
  pagination: null,
  totalItemsHome: null,
};

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
  // console.dir(pagination);

  pagination.on('afterMove', async event => {
    const currentPage = event.page;
    const searchQuery = input.value;
    console.log(searchQuery);

    if (paginationSettings.searchType === HOME_SEARCH_TYPE) {
      const moviesPopular = await movie.fetchPopularPagination(currentPage);
      const data = await moviesPopular;
      console.log(data);
      renderMarkup(data);
      // console.log(form);
    } else if (paginationSettings.searchType === QUERY_SEARCH_TYPE) {
      searchQuery;
      const moviesByQ = await movie.fetchByQueryPagination(
        input.value,
        currentPage
      );
      const data = await moviesByQ;
      renderMarkup(data);
    }
  });
  return pagination;
}
