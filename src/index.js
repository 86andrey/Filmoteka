// import './js/btm-to-top';
import MovieApiService from './js/movieFetch.js';
import { createFilmsByPopular, createFilmsBySearch } from './js/createFilms.js';
import { openModal } from './js/renderFunctions.js';
import './js/modalFooter';
import { trackScroll } from './js/btm-to-top';
import throttle from 'lodash.throttle';
import { showRequestError } from './js/renderFunctions.js';
import './js/modalFooter';
//скрипт меняет стили кнопок в хедере
//import './js/header_styles.js';
const goTopBtn = document.querySelector('.back_to_top');
// console.log(goTopBtn);
window.addEventListener('scroll', throttle(trackScroll, 500));
// объявляем экземпляр класса и елементы
export const form = document.querySelector('.header-input-container');
export const input = document.querySelector('#search-box');
const paginationEl = document.querySelector('#tui-pagination-container');
// export const optionBySearch = {
//   searchType: null,
// };

//всплывающий репета
const advertCloseBtn = document.querySelector('.advert__button-close');
const advertContainer = document.querySelector('.advert');
const advertBtnClose = () => {
  advertContainer.classList.add('is-hidden');
};
advertCloseBtn.addEventListener('click', advertBtnClose);
setTimeout(() => {
  advertCloseBtn.removeEventListener('click', advertBtnClose);
}, 5000);

//функция поиска по запросу
form.addEventListener('submit', onBtnSearch);

function onBtnSearch(evt) {
  try {
    evt.preventDefault();
    // const movies = await movie.fetchPopular();
    const searchQuery = evt.target[0].value;
    if (searchQuery.trim() === '') {
      showRequestError();
      return;
    } else if (searchQuery === evt.target[0].value) {
      createFilmsBySearch(searchQuery.trim());
    }
  } catch (error) {
    console.log(error);
  }
}

// Sergey--------------------------------------
createFilmsByPopular();

// Sergey--------------------------------------

//набросок модалки
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

// const swiper = new Swiper();
//оптимизация роботи модалки
// (() => {
//   const refs = {
//     // openModalBtn: document.querySelector('[data-modal-open]'), //openBtn
//     closeModalBtn: document.querySelector('[data-modal-close]'), //closeBtn
//     modal: document.querySelector('[data-modal]'), //modal
//     modalContent: document.querySelector('[data-modal-content]'), //modalContent
//     containerCard: document.querySelector('.container-card'), //карточка фильма
//   };
//   refs.openModalBtn.addEventListener('click', openModal);
//   refs.closeModalBtn.addEventListener('click', closeModal);
//   refs.modal.addEventListener('click', closeByOverlay);
//   refs.containerCard.addEventListener('click', openModal);

//   document.addEventListener('keydown', function (e) {
//     if (e.key === 'Escape') {
//       closeModal();
//     }
//   });
//   // function closeByOverlay(e) {   //зарытие фоном
//   //     if (e.target === modal) {
//   //         modal.removeEventListener('click', closeByOverlay);
//   //         closeModal()
//   //     }
//   // };
//   function openModal() {
//     //открыть модалку
//     refs.modal.classList.remove('is-hidden');
//   }
//   function closeModal() {
//     //закрить модалку
//     refs.modal.classList.add('is-hidden');
//   }
// })();

// function modalShow(event) {
//   //   if (event.target.className !== "DIV") {
//   //     return;
//   //   }
//   console.log(event);
//   //   const selectedColor = event.target.dataset.color;
//   //   output.textContent = `Selected color: ${selectedColor}`;
//   //   output.style.color = selectedColor;
// }
