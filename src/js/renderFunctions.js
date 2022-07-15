import MovieApiService from './movieFetch';
import { storage } from './storage';
import { updateQueue } from './updateLib';
import { updateWatched } from './updateLib';

const movie = new MovieApiService();

const containerCard = document.querySelector('.container-card');

const errorMessage = document.querySelector('.header-error-container');

// Функция для отображения карточек
export async function renderMarkup(movies) {
  containerCard.innerHTML = await makeMarkup(movies.results);
}


function makeMarkup(array) {
  return array
    .map(({ poster_path, id, original_title, release_date, genre_ids, vote_average }) => {
      const newReleaseDate = release_date.split('-')[0];
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
      // console.log(typeof poster_path);
      const genreMain = genre_ids.reduce((acc, id) => {
        const movieGenre = ganresArray.filter(genre => genre.id === id)[0];
        acc.push(movieGenre.name);
        return acc.slice(0, 3);
      }, []);
      
      if (genreMain.length === 3) {
        genreMain.splice(2, 1, 'Other');
      }
      
      let newGenreMain = genreMain.join(', ')
      if (genreMain.length === 0) {
          newGenreMain = `NO GENRE`
      }
      let posterImageUrl = `https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}`
      if (poster_path === null) {
            posterImageUrl = `https://img.freepik.com/premium-photo/concept-cinema-accessories-against-dark-wooden-background_185193-61023.jpg?w=740" alt="${original_title}`
      }
      return `
      <div class="container-card_single-card" data-id="${id}" >
        
          <div class="poster">
            <span class="discription__modal-text-vote info_rating">${vote_average.toFixed(1)}</span>
              <img class="poster_img" loading="lazy" src="${posterImageUrl}">
          </div>
          <div class="info">
            <h3 class="info_title">${original_title}</h3>
            <p class="info_details">
                ${newGenreMain} | ${newReleaseDate}
            </p>
          </div>
        
      </div> 
  `;
    })
    .join('');
}

export async function makeMarkupLib(array) {
  return array
    .map(({ poster_path, id, original_title, release_date, genres, vote_average }) => {
      const newReleaseDate = release_date.split('-')[0];
      const allgenres = genres.flatMap(genre => genre.name).slice(0, 3);
      
      if (allgenres.length === 3) {
        allgenres.splice(2, 1, 'Other');
      }
      return `
      <div class="container-card_single-card" data-id="${id}" >
        <div class="poster">
            <span class="discription__modal-text-vote info_rating">${vote_average.toFixed(1)}</span>
            <img class="poster_img" loading="lazy" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}">
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
  const containerModal = document.querySelector('.modal__card-content');
  const data = await movie.fetchById(movieId);
  
  containerModal.innerHTML = await makeMarkupModal(data);
  
  const modalCloseBtn = document.querySelector('.modal__close');
  const modal = document.querySelector('.modal__card-overlay');

  //МОДАЛКА ЗАКРЫТА КРЕСТИКОМ
  modalCloseBtn.addEventListener('click', closeByCross);
  function closeByCross() {
    modalCloseBtn.removeEventListener('click', closeByCross);
    modal.classList.add('is-hidden');
    
  }

  //МОДАЛКА ЗАКРЫТА ФОНОМ
  modal.addEventListener('click', closeByOverlay);
  function closeByOverlay(e) {
    if (e.target === modal) {
      modal.removeEventListener('click', closeByOverlay);
      modal.classList.add('is-hidden');
      
    }
  }

  //МОДАЛКА ЗАКРЫТА esc
  window.addEventListener('keydown', closeByEsc);
  function closeByEsc(e) {
    if (e.keyCode === 27) {
      window.removeEventListener('keydown', closeByEsc);
      modal.classList.add('is-hidden');
      
    }
  }

  const addToWatched = document.querySelector('.modal__btn-1add');
  const addToQueue = document.querySelector('.modal__btn-2add');
  const removeFromWatched = document.querySelector('.modal__btn-1remove');
  const removeFromQueue = document.querySelector('.modal__btn-2remove');

  // ФУНКЦИИ СОХРАНЕНИЯ КНОПОК

  saveQueueBtn();
  async function saveQueueBtn() {
    
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
    
    const result = storage.readItem('watched', []);
    const parsing = storage.readItem('qu');
    if (parsing) {
      const movieTitle = data.title;
      const checkMovie = parsing.findIndex(
        option => option.title === movieTitle
      );
      if (checkMovie >= 0) {
        const removMovie = parsing.splice(checkMovie, 1);
        storage.addItem('qu', parsing);
        updateQueue()
        result.push(data);
        storage.addItem('watched', result);
      } else if (checkMovie === -1) {
        result.push(data);
        storage.addItem('watched', result);
        updateWatched()
      }
    } else {
      result.push(data);
      storage.addItem('watched', result);
    }
    addToWatched.classList.add('hide-btn');
    removeFromWatched.classList.remove('hide-btn');
    removeFromQueue.classList.add('hide-btn');
    addToQueue.classList.remove('hide-btn');
  });

  addToQueue.addEventListener('click', async () => {
    
    const result = storage.readItem('qu', []);
    const parsing = storage.readItem('watched');
    if (parsing) {
      const movieTitle = data.title;
      const checkMovie = parsing.findIndex(
        option => option.title === movieTitle
      );
      if (checkMovie >= 0) {
        const removMovie = parsing.splice(checkMovie, 1);
        storage.addItem('watched', parsing);
        updateWatched()
        result.push(data);
        storage.addItem('qu', result);
      } else if (checkMovie === -1) {
        result.push(data);
        storage.addItem('qu', result);
        updateQueue()
      }
    } else {
      result.push(data);
      storage.addItem('qu', result);
    }
    addToQueue.classList.add('hide-btn');
    removeFromQueue.classList.remove('hide-btn');
    removeFromWatched.classList.add('hide-btn');
    addToWatched.classList.remove('hide-btn');
  });

  // ФУНКЦИИ УДАЛЕНИЯ ИЗ LOCALSTORAGE
  removeFromWatched.addEventListener('click', async () => {
    const parsing = storage.readItem('watched');
    const movieTitle = data.title;
    const checkMovie = parsing.findIndex(option => option.title === movieTitle);
    if (checkMovie === -1) {
      console.log('error');
    } else {
      const removMovie = parsing.splice(checkMovie, 1);
      storage.addItem('watched', parsing);
      updateWatched()
    }
    removeFromWatched.classList.add('hide-btn');
    addToWatched.classList.remove('hide-btn');
  });

  removeFromQueue.addEventListener('click', () => {
    const parsing = storage.readItem('qu');
    const movieTitle = data.title;
    const checkMovie = parsing.findIndex(option => option.title === movieTitle);
    if (checkMovie === -1) {
      console.log('error');
    } else {
      const removMovie = parsing.splice(checkMovie, 1);
      storage.addItem('qu', parsing);
      updateQueue()
    }
    removeFromQueue.classList.add('hide-btn');
    addToQueue.classList.remove('hide-btn');
  });
}

//===========Рендер модалки===========
import sprite from '../images/icons.svg';
const closeIcon = `${sprite}#icon-close`;
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
  
  allgenres.slice(0, 3);
  let newGenreModal = allgenres.join(', ') 
  if (newGenreModal.length === 0) { 
    newGenreModal = "no genres"
  } 
  let modalPosterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`
  if (poster_path === null) { 
    modalPosterUrl = 'https://img.freepik.com/premium-photo/concept-cinema-accessories-against-dark-wooden-background_185193-61023.jpg?w=740"'
  }
  let modalAboutText = `${overview}`
  console.log(modalAboutText);
  if (modalAboutText.length === 0) { 
    modalAboutText = "Unfortunately we don't have a description for this movie :("
  }
  return `
    <button type="button" class="modal__close" data-modal-close>
      <svg width="12" height="12" class="modal-close-btn__icon">
        <use href="${closeIcon}"></use>
      </svg>
    </button>
  <img src=${modalPosterUrl} alt="${original_title}" class="modal__img" />
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
          <p class="discription__modal-text">${newGenreModal}</p>
        </li>
      </ul>
    </div>
    <div class="modal__info about__modal">
      <h4 class="about__modal-title">About</h4>
      <p class="about__modal-text">${modalAboutText}</p>
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
