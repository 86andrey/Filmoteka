import MovieApiService from './js/movieFetch.js';
import { renderMarkupPopular, renderMarkupByQ } from './js/renderFunctions.js';

// объявляем экземпляр класса и елементы
const movie = new MovieApiService();
const form = document.querySelector('.header-input-container');
const input = document.querySelector('#search-box');

// вызываем на этом экземпляре нужный метод (пример=>)
movie.fetchPopular();

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