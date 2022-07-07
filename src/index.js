import MovieApiService from './js/movieFetch.js';
import { renderMarkupPopular, renderMarkupByQ,  openModal } from './js/renderFunctions.js';

//скрипт меняет стили кнопок в хедере
//import './js/header_styles.js';

// объявляем экземпляр класса и елементы
// const movie = new MovieApiService();
const form = document.querySelector('.header-input-container');
const input = document.querySelector('#search-box');

//функция поиска по запросу
form.addEventListener('submit', onBtnSearch);

function onBtnSearch(evt){
 try {evt.preventDefault();
 const searchQuery= input.value
if(searchQuery===''){console.log('надо ввести фильм');}
renderMarkupByQ(searchQuery);
}
catch{error=>console.log(error)};
}


// Sergey--------------------------------------
renderMarkupPopular()


// Sergey--------------------------------------


//набросок модалки
const modal=document.querySelector('.modal__card-overlay');
const containerCard = document.querySelector('.container-card')

containerCard.addEventListener('click', (event)=>{
    const movieClick =event.path[2]
    if(!movieClick.classList.contains('container-card_single-card')){
        return}
    modal.classList.remove('is-hidden')
    const movieId =movieClick.dataset.id;
    openModal(movieId);
    });

//оптимизация роботи модалки
// (() => {
//     const refs = {
//     // openModalBtn: document.querySelector('[data-modal-open]'), //openBtn
//     closeModalBtn: document.querySelector('[data-modal-close]'), //closeBtn
//     modal: document.querySelector('[data-modal]'), //modal
//     modalContent: document.querySelector('[data-modal-content]'), //modalContent
//     containerCard: document.querySelector('.container-card') //карточка фильма
//     };
//     refs.openModalBtn.addEventListener('click', openModal);
//     refs.closeModalBtn.addEventListener('click', closeModal);
//     refs.modal.addEventListener('click', closeByOverlay)
//     refs.containerCard.addEventListener('click', openModal)
    
//         document.addEventListener('keydown', function(e) {
//             if (e.key === 'Escape') {
//                 closeModal()
//             }
//         });
//     // function closeByOverlay(e) {   //зарытие фоном
//     //     if (e.target === modal) {
//     //         modal.removeEventListener('click', closeByOverlay);
//     //         closeModal()
//     //     }
//     // };
//     function openModal() {   //открыть модалку
//         refs.modal.classList.remove('is-hidden');
//     }
//     function closeModal() {   //закрить модалку
//         refs.modal.classList.add('is-hidden')
//     }
// })();


//  function modalShow(event) {
//     //   if (event.target.className !== "DIV") {
//     //     return;
//     //   }
//     console.log(event);
//     //   const selectedColor = event.target.dataset.color;
//     //   output.textContent = `Selected color: ${selectedColor}`;
//     //   output.style.color = selectedColor;
//     }
