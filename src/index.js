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
searchQuery= input.value
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





//  function modalShow(event) {
//     //   if (event.target.className !== "DIV") {
//     //     return;
//     //   }
//     console.log(event);
//     //   const selectedColor = event.target.dataset.color;
//     //   output.textContent = `Selected color: ${selectedColor}`;
//     //   output.style.color = selectedColor;
//     }
