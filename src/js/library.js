import { storage } from './storage';
import { makeMarkupLib } from './renderFunctions';
import { openModal } from './renderFunctions';
import {
  createPagination,
  paginationSettings,
  addPageToArray,
} from './pagination';
import { WATCHED_SEARCH_TYPE, QUEUE_SEARCH_TYPE } from './searchTypes';

const parsing = storage.readItem('watched');
console.log(parsing);
const refs = {
  watchBtn: document.querySelector('#header-watched-button'),
  queueBtn: document.querySelector('#header-queue-button'),
};
const modal = document.querySelector('.modal__card-overlay');
const containerCard = document.querySelector('.container-card');

containerCard.addEventListener('click', event => {
  const movieClick = event.path[2];
  if (!movieClick.classList.contains('container-card_single-card')) {
    return;
  }
  modal.classList.remove('is-hidden');
  const movieId = movieClick.dataset.id;
  openModal(movieId);
});

renderWatched();
async function renderWatched() {
  const parsing = storage.readItem('watched');
  const parsingPage = addPageToArray(1, parsing);
  console.log(parsingPage);
  if (parsingPage.total_results > 20) {
    console.log(createPagination(parsingPage));

    paginationSettings.searchType = WATCHED_SEARCH_TYPE;
  }
  if (parsingPage.results.length < 21) {
    containerCard.innerHTML = await makeMarkupLib(parsingPage.results);
  }
}

refs.watchBtn.addEventListener('click', async () => {
  const parsing = storage.readItem('watched');
  const parsingPage = addPageToArray(1, parsing);
  console.log(parsingPage.results);
  if (parsingPage.total_results > 20) {
    console.log(createPagination(parsingPage));

    paginationSettings.searchType = WATCHED_SEARCH_TYPE;
  }
  if (parsingPage.results.length < 21) {
    containerCard.innerHTML = '';
    containerCard.innerHTML = await makeMarkupLib(parsingPage.results);
  }
  onWatchBtnClick();
});

refs.queueBtn.addEventListener('click', async () => {
  const parsing = storage.readItem('qu');
  const paginationEl = document.querySelector('#tui-pagination-container');
  console.log(parsing);
  const parsingPage = addPageToArray(1, parsing);
  console.log(parsingPage);
  paginationEl.innerHTML = '';
  containerCard.innerHTML = '';
  if (parsingPage.total_results > 20) {
    console.log('Пагинация By Queue');
    console.log(createPagination(parsingPage));

    paginationSettings.searchType = QUEUE_SEARCH_TYPE;
  }

  if (parsingPage.results.length < 21) {
    containerCard.innerHTML = '';
    containerCard.innerHTML = await makeMarkupLib(parsingPage.results);
  }
  onQueueBtnClick();
});

function onWatchBtnClick() {
  if (refs.watchBtn.classList.contains('is-header-nonactive')) {
    refs.watchBtn.classList.remove('is-header-nonactive');
    refs.watchBtn.classList.add('is-header-active');
    refs.queueBtn.classList.remove('is-header-active');
    refs.queueBtn.classList.add('is-header-nonactive');

    // вызов функции обновления контента страницы
  }
}

function onQueueBtnClick() {
  if (refs.queueBtn.classList.contains('is-header-nonactive')) {
    refs.queueBtn.classList.remove('is-header-nonactive');
    refs.queueBtn.classList.add('is-header-active');
    refs.watchBtn.classList.remove('is-header-active');
    refs.watchBtn.classList.add('is-header-nonactive');

    // вызов функции обновления контента страницы
  }
}

// До мене

// renderWatched();
// async function renderWatched() {
//   const parsing = storage.readItem('watched');
//   if (parsing) {
//     containerCard.innerHTML = await makeMarkupLib(parsing);
//   }
// }
// refs.watchBtn.addEventListener('click', async () => {
//   const parsing = storage.readItem('watched');
//   console.log(parsing);
//   if (parsing) {
//     containerCard.innerHTML = '';
//     containerCard.innerHTML = await makeMarkupLib(parsing);
//   } else {
//     containerCard.innerHTML = 'List is empty';
//   }
//   onWatchBtnClick();
// });

// refs.queueBtn.addEventListener('click', async () => {
//   const parsing = storage.readItem('qu');
//   if (parsing) {
//     containerCard.innerHTML = '';
//     containerCard.innerHTML = await makeMarkupLib(parsing);
//   } else {
//     containerCard.innerHTML = 'List is empty';
//   }
//   onQueueBtnClick();
// });
