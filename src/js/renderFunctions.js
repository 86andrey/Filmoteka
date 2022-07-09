import MovieApiService from './movieFetch';
import { storage } from './storage';

const movie = new MovieApiService();

const containerCard = document.querySelector('.container-card');
const containerModal = document.querySelector('.modal__card-content');
const errorMessage = document.querySelector('.header-error-container');

// Функция для отображения карточек
export async function renderMarkup(movies) {
  console.log(movies);
  containerCard.innerHTML = await makeMarkup(movies.results);
}

// export async function renderMarkupByQ(searchQuery) {
//   try{
//   const array = await movie.fetchByQuery(searchQuery);
//   if(array.length===0){
//       showRequestError()
//     }
//   console.log(array.length);
//   containerCard.innerHTML=await makeMarkup(array);}
//   catch(error){showRequestError()}
//   }

function makeMarkup(array) {
  return array
    .map(({ poster_path, id, original_title, release_date, genre_ids }) => {
      const newReleaseDate = release_date.split('-')[0];
      // const genres = movie.getGenres().then(data => data);

      // function genresChanged(){
      //   if (genre_ids.length === 0) {
      //     return (genre_ids = 'Other');
      //   }
      //   genre_ids = newGenre_ids
      //     .map(genreID => (genreID = genres[genreID]))
      //     .slice(0, 2)
      //     .join(', ');

      //   return;
      // }
      // console.log(array.results)
      // const genreMain = array.results.flatMap(item => {
      //     if(item.){}
      //     console.log(item)
      //   })
      // console.log(genreMain)
      const ganresArray = [
        { id: 28, name: 'Action' },
        { id: 12, name: 'Adventure' },
        { id: 16, name: 'Animation' },
        { id: 35, name: 'Comedy' },
        { id: 80, name: 'Crime' },
        { id: 99, name: 'Documentary' },
        { id: 18, name: 'Drama' },
        { id: 10751, name: 'Family' },
        { id: 14, name: 'Fantasy' },
        { id: 36, name: 'History' },
        { id: 27, name: 'Horror' },
        { id: 10402, name: 'Music' },
        { id: 9648, name: 'Mystery' },
        { id: 10749, name: 'Romance' },
        { id: 878, name: 'Science Fiction' },
        { id: 10770, name: 'TV Movie' },
        { id: 53, name: 'Thriller' },
        { id: 10752, name: 'War' },
        { id: 37, name: 'Western' },
      ];

      const genreMain = genre_ids.reduce((acc, id) => {
        const movieGenre = ganresArray.filter(genre => genre.id === id)[0];
        acc.push(movieGenre.name);
        return acc.slice(0, 3);
      }, []);
      // console.log(genreMain.length);
      if (genreMain.length === 3) {
        genreMain.splice(2, 1, 'Other');
      }
      // if (genreMain.length === 0) {
      //    genreMain = "No janre";
      // }

      return `
                  <div class="container-card_single-card" data-id="${id}" >
                    
                      <div class="poster">
                          <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}">
                      </div>
                      <div class="info">
                        <h3 class="info_title">${original_title}</h3>
                        <p class="info_details">
                            ${genreMain.join(', ')} | ${newReleaseDate}
                        </p>
                      </div>
                    
                  </div> 
        `;
    })
    .join('');
}

export async function makeMarkupLib(array) {
  return array
    .map(({ poster_path, id, original_title, release_date, genres }) => {
      const newReleaseDate = release_date.split('-')[0];
      const allgenres = genres.flatMap(genre => genre.name).slice(0, 3);
      console.log(allgenres);
      if (allgenres.length === 3) {
        allgenres.splice(2, 1, 'Other');
      }
      return `
                  <div class="container-card_single-card" data-id="${id}" >
                    <div class="poster">
                        <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}">
                    </div>
                    <div class="info">
                      <h3 class="info_title">${original_title}</h3>
                      <p class="info_details">
                          ${allgenres.join(', ')} | ${newReleaseDate}
                      </p>
                    </div>
                  </div> 
        `;
    })
    .join('');
}

export async function openModal(movieId) {
    
    const data = await movie.fetchById(movieId);
    // console.log(array);
    containerModal.innerHTML=await makeMarkupModal(data);
    
    const modalCloseBtn=document.querySelector('.modal__close');
    const modal=document.querySelector('.modal__card-overlay');

      //МОДАЛКА ЗАКРЫТА КРЕСТИКОМ
      modalCloseBtn.addEventListener('click', closeByCross);
      function closeByCross() {
          modalCloseBtn.removeEventListener('click', closeByCross);
          modal.classList.add('is-hidden')
          // console.log("модалка закрита(крестиком)");
      }
  
      //МОДАЛКА ЗАКРЫТА ФОНОМ
      modal.addEventListener('click', closeByOverlay);
      function closeByOverlay(e) {
        if (e.target === modal) {
          modal.removeEventListener('click', closeByOverlay);
          modal.classList.add('is-hidden')
          // console.log("модалка закрита(фоном)");
        }
      }

      //МОДАЛКА ЗАКРЫТА esc
      window.addEventListener('keydown', closeByEsc);
      function closeByEsc(e) {
        if (e.keyCode === 27) {
            window.removeEventListener('keydown', closeByEsc);
            modal.classList.add('is-hidden')
            // console.log("модалка закрита(Esc)");
        }
      }
  
  const addToWatched = document.querySelector(".modal__btn-1add")
  const addToQueue = document.querySelector(".modal__btn-2add")
  const removeFromWatched = document.querySelector(".modal__btn-1remove")
  const removeFromQueue = document.querySelector(".modal__btn-2remove")
  
  // ФУНКЦИИ СОХРАНЕНИЯ КНОПОК

  saveQueueBtn();
  async function saveQueueBtn() {
    const data = await movie.fetchById(movieId);
    const parsing = storage.readItem('qu');
    if (parsing) {
      const movieTitle = data.title;
      const checkMovie = parsing.findIndex(
        option => option.title === movieTitle
      );
      if (checkMovie >= 0) {
        addToQueue.classList.add('hide-btn');
        removeFromQueue.classList.remove('hide-btn');
      } else if (parsing === [] || undefined) {
        removeFromQueue.classList.add('hide-btn');
        addToQueue.classList.remove('hide-btn');
      }
    }
  }
  saveWatchedBtn();
  async function saveWatchedBtn() {
    const data = await movie.fetchById(movieId);
    const parsing = storage.readItem('watched');
    if (parsing) {
      const movieTitle = data.title;
      const checkMovie = parsing.findIndex(
        option => option.title === movieTitle
      );
      if (checkMovie >= 0) {
        addToWatched.classList.add('hide-btn');
        removeFromWatched.classList.remove('hide-btn');
      } else if (parsing === [] || undefined) {
        removeFromWatched.classList.add('hide-btn');
        addToWatched.classList.remove('hide-btn');
      }
    }
  }
  // ФУНКЦИИ ДОБАВЛЕНИЯ И ПЕРЕЗАПИСИ В LOCALSTORAGE
  
  addToWatched.addEventListener('click', async () => {
    const data = await movie.fetchById(movieId)
    const result = storage.readItem("watched", []);
    const parsing = storage.readItem('qu');
    if (parsing) {
      const movieTitle = data.title;
      const checkMovie = parsing.findIndex(option => option.title === movieTitle)
      if (checkMovie >= 0) {
      const removMovie = parsing.splice(checkMovie, 1)
        storage.addItem("qu", parsing)
      result.push(data);
      storage.addItem("watched", result);
      } else if (checkMovie === -1) {
      result.push(data);
      storage.addItem("watched", result);
      }
    } else {
      result.push(data);
      storage.addItem("watched", result);
    }
    addToWatched.classList.add('hide-btn')
    removeFromWatched.classList.remove('hide-btn')
     removeFromQueue.classList.add('hide-btn')
    addToQueue.classList.remove('hide-btn')
  })

  addToQueue.addEventListener('click', async () => {
    const data = await movie.fetchById(movieId)
    const result = storage.readItem("qu", []);
    const parsing = storage.readItem('watched');
    if (parsing) {
      const movieTitle = data.title;
      const checkMovie = parsing.findIndex(option => option.title === movieTitle)
      if (checkMovie >= 0) {
      const removMovie = parsing.splice(checkMovie, 1)
        storage.addItem("watched", parsing)
      result.push(data);
        storage.addItem("qu", result);
      } else if (checkMovie === -1) {
      result.push(data);
       storage.addItem("qu", result);
      }
    } else {
      result.push(data);
      storage.addItem("qu", result);
    }
    addToQueue.classList.add('hide-btn')
    removeFromQueue.classList.remove('hide-btn')
      removeFromWatched.classList.add('hide-btn')
    addToWatched.classList.remove('hide-btn')
   
  })

 // ФУНКЦИИ УДАЛЕНИЯ ИЗ LOCALSTORAGE
  removeFromWatched.addEventListener('click', async () => {
      const parsing = storage.readItem('watched');
  const movieTitle = data.title
    const checkMovie = parsing.findIndex(option => option.title === movieTitle)
  if (checkMovie === -1) {
    console.log("error")
  } else {
    const removMovie = parsing.splice(checkMovie, 1)
    storage.addItem("watched", parsing);
    } 
    removeFromWatched.classList.add('hide-btn')
    addToWatched.classList.remove('hide-btn')
  })
  
  removeFromQueue.addEventListener('click', () => {
      const parsing = storage.readItem('qu');
  const movieTitle = data.title
    const checkMovie = parsing.findIndex(option => option.title === movieTitle)
  if (checkMovie === -1) {
    console.log("error")
  }else {
    const removMovie = parsing.splice(checkMovie, 1)
    storage.addItem("qu", parsing);
    } 
    removeFromQueue.classList.add('hide-btn')
    addToQueue.classList.remove('hide-btn')
  })

}

function makeMarkupModal({
  poster_path,
  original_title,
  overview,
  popularity,
  genres,
  vote_average,
  vote_count,
}) {
  const allgenres = genres.flatMap(genre => genre.name).slice(0, 3);
  // console.log(allgenres)
  allgenres.slice(0, 3);
  return `
    <button type="button" class="modal__close" data-modal-close>
      <svg class="icon modal-close-btn__icon" width="16" height="16">
          <use href="/src/images/icons.svg#icon-X"
      </svg>
    </button>
  <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}" class="modal__img" />
  <div class="modal__info">
    <h2 class="modal__info-title">${original_title}</h2>
    <div class="modal__info-block">
      <ul class="modal__info discription__modal">
        <li class="discription__modal-item">
          <h4 class="discription__modal-title">Vote / Votes</h4>
          <p class="discription__modal-text">
            <span class="discription__modal-text-vote">${vote_average}</span>
            <span class="discription__modal-text-slash">/</span>
            <span class="discription__modal-text-votes">${vote_count}</span>
          </p>
        </li>
        <li class="discription__modal-item">
          <h4 class="discription__modal-title">Popularity</h4>
          <p class="discription__modal-text">${popularity.toFixed(1)}</p>
        </li>
        <li class="discription__modal-item">
          <h4 class="discription__modal-title">Original Title</h4>
          <p class="discription__modal-text">${original_title}</p>
        </li>
        <li class="discription__modal-item">
          <h4 class="discription__modal-title">Genre</h4>
          <p class="discription__modal-text">${allgenres.join(", ")}</p>
        </li>
      </ul>
    </div>
    <div class="modal__info about__modal">
      <h4 class="about__modal-title">About</h4>
      <p class="about__modal-text">${overview}</p>
    </div>
    <div class="modal__button">
      <button type="button" class="modal__btn-add modal__btn-1add">add to Watched</button>
      <button type="button" class="modal__btn-add modal__btn-1remove hide-btn">remove from Watched</button>
      <button type="button" class="modal__btn-add modal__btn-2add">add to queue</button>
      <button type="button" class="modal__btn-add modal__btn-2remove hide-btn">remove from queue</button>
    </div>
  </div>`;
}

export function showRequestError() {
  errorMessage.classList.remove('is-hidden');
  setTimeout(() => {
    errorMessage.classList.add('is-hidden');
  }, 2000);
}
