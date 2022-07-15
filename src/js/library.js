import { storage } from './storage';
import { trackScroll } from './btm-to-top';
import throttle from 'lodash.throttle';

import { makeMarkupLib } from './renderFunctions';
import { openModal } from './renderFunctions';

// import './btm-to-top';
import {
  createPagination,
  paginationSettings,
  addPageToArray,
} from './pagination';
import { WATCHED_SEARCH_TYPE, QUEUE_SEARCH_TYPE } from './searchTypes';

// import { onBackdropClick, toogleSliderHandler, onEscKeyPress } from './modalFooter';
import '../js/modalFooter';
// import Swiper from './modalFooter';
const goTopBtn = document.querySelector('.back_to_top');
// console.log(goTopBtn);

window.addEventListener('scroll', throttle(trackScroll, 500));
const parsing = storage.readItem('watched');
const refs = {
  watchBtn: document.querySelector('#header-watched-button'),
  queueBtn: document.querySelector('#header-queue-button'),
};
const modal = document.querySelector('.modal__card-overlay');
const containerCard = document.querySelector('.container-card');
const containerPlaceholder = document.querySelector('.container-placeholder');

// =========Открытие модалки==========
containerCard.addEventListener('click', event => {
  const movieClick = event.path[2];
  if (!movieClick.classList.contains('container-card_single-card')) {
    return;
  }
  modal.classList.remove('is-hidden');
  const movieId = movieClick.dataset.id;
  openModal(movieId);
});

//============Рендер просмотренного (по дефолту)===============
renderWatched();
async function renderWatched() {
  const parsing = storage.readItem('watched');
  if (parsing) {
    const parsingPage = addPageToArray(1, parsing);
 
    if (parsingPage.total_results > 20) {
      createPagination(parsingPage)
      paginationSettings.searchType = WATCHED_SEARCH_TYPE;
    }
    if (parsingPage.results.length < 21) {
      containerCard.innerHTML = await makeMarkupLib(parsingPage.results);
      if (parsingPage.results.length !== 0) {
        containerPlaceholder.classList.add('visually-hidden');
      }
      if (parsingPage.results.length === 0) {
        containerPlaceholder.classList.remove('visually-hidden');
      }
    }
  }
}

//============Рендер просмотренного (по кнопке в хедере)===============
refs.watchBtn.addEventListener('click', async () => {
  const parsing = storage.readItem('watched');
  if (parsing) {
    const parsingPage = addPageToArray(1, parsing);

    if (parsingPage.total_results > 20) {
      createPagination(parsingPage);

      paginationSettings.searchType = WATCHED_SEARCH_TYPE;
    }
    if (parsingPage.results.length < 21) {
      containerCard.innerHTML = await makeMarkupLib(parsingPage.results);
    }
    if (parsingPage.results.length !== 0) {
      containerPlaceholder.classList.add('visually-hidden');
    }
    if (parsingPage.results.length === 0) {
      containerPlaceholder.classList.remove('visually-hidden');
    }
  }

  onWatchBtnClick();
});

//============Рендер очереди (по кнопке в хедере)===============
refs.queueBtn.addEventListener('click', async () => {
  const parsing = storage.readItem('qu');
  if (parsing) {
    const paginationEl = document.querySelector('#tui-pagination-container');
    const parsingPage = addPageToArray(1, parsing);
    paginationEl.innerHTML = '';

    if (parsingPage.total_results > 20) {
      createPagination(parsingPage);
      paginationSettings.searchType = QUEUE_SEARCH_TYPE;
    }

    if (parsingPage.results.length < 21) {
      containerCard.innerHTML = await makeMarkupLib(parsingPage.results);

    }

    if (parsingPage.results.length !== 0) {
      containerPlaceholder.classList.add('visually-hidden');
    }
    if (parsingPage.results.length === 0) {
      containerPlaceholder.classList.remove('visually-hidden');
    }
  }

  onQueueBtnClick();
});

//============Смена стилей кнопок в хедере при клике на просмотренные===============
function onWatchBtnClick() {
  if (refs.watchBtn.classList.contains('is-header-nonactive')) {
    refs.watchBtn.classList.remove('is-header-nonactive');
    refs.watchBtn.classList.add('is-header-active');
    refs.queueBtn.classList.remove('is-header-active');
    refs.queueBtn.classList.add('is-header-nonactive');

    // вызов функции обновления контента страницы
  }
}

//============Смена стилей кнопок в хедере при клике на очередь===============
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

const swiper = new Swiper();
