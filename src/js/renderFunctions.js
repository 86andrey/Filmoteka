import MovieApiService from './movieFetch';
const movie = new MovieApiService();

const containerCard = document.querySelector('.container-card')

const containerModal = document.querySelector('.modal__card-content')


export async function renderMarkupPopular() {
    const array = await movie.fetchPopular();
    // console.log(array);
    containerCard.insertAdjacentHTML('beforeend', makeMarkup(array));
}

export async function renderMarkupByQ(searchQuery) {
    const array = await movie.fetchByQuery(searchQuery);
    // console.log(array);
    containerCard.innerHTML=await makeMarkup(array);
    // containerCard.insertAdjacentHTML('beforeend', await makeMarkup(array));
}

function makeMarkup(array){
    return array.map(({ poster_path, id, original_title, release_date, genre_ids }) => {
        // const newReleaseDate = release_date.split('-')[0];
        return `
                  <div class="container-card_single-card" data-id="${id}" >
                    <div class="poster">
                        <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}">
                    </div>
                    <div class="info">
                      <h3 class="info_title">${original_title}</h3>
                      <p class="info_details">
                          ${genre_ids} | ${release_date}
                      </p>
                    </div>
                  </div> 
        `}).join('');
}


export async function openModal(movieId) {
    
    const data = await movie.fetchById(movieId);
    // console.log(array);
    containerModal.innerHTML=await makeMarkupModal(data);
    
    const modalCloseBtn=document.querySelector('.modal__close');
    const modal=document.querySelector('.modal__card-overlay');
    modalCloseBtn.addEventListener('click', ()=>{modal.classList.add('is-hidden')})
    // containerCard.insertAdjacentHTML('beforeend', await makeMarkup(array));
}


function makeMarkupModal({poster_path, id, original_title, release_date, genre_ids}){
    return`
    <button type="button" class="modal__close" data-modal-close>
    X
    <!-- data-modal-btn -->
    <!-- <svg class="modal__close-svg" data-modal-svg>
      <use href="./images/icons.svg#icon-group"></use>
    </svg> -->
  </button>
  <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title} class="modal__img" />
  <div class="modal__info">
    <h2 class="modal__info-title">${original_title}</h2>
    <ul class="modal__info discription__modal">
      <li class="discription__modal-item">
        <p class="discription__modal-title">Vote / Votes</p>
        <p class="discription__modal-text"><span>7.3</span> / 1260</p>
      </li>
      <li class="discription__modal-item">
        <p class="discription__modal-title">Popularity</p>
        <p class="discription__modal-text">100.2</p>
      </li>
      <li class="discription__modal-item">
        <p class="discription__modal-title">Original Title</p>
        <p class="discription__modal-text">${original_title}</p>
      </li>
      <li class="discription__modal-item">
        <p class="discription__modal-title">Genre</p>
        <p class="discription__modal-text"> ${genre_ids}</p>
      </li>
    </ul>
    <div class="modal__info about__modal">
      <h4 class="about__modal-title">About</h4>
      <p class="about__modal-text">
        Four of the Wests most infamous outlaws assemble to steal a huge
        stash of gold from the most corrupt settlement of the gold rush towns.
        But not all goes to plan one is killed and the other three escapes
        with bags of gold e out in the abandoned gold mine where they
        happen across another gang of three – who themselves were planning to
        hit the very same bank! As tensions rise, things go from bad to worse
        as they realise the bags of gold are filled with lead... theyve been
        double crossed – but by who and how?
      </p>
    </div>
    <div class="modal__button">
      <button type="button" class="modal__btn-add">add to Watched</button>
      <button type="button" class="modal__btn-add">add to queue</button>
    </div>
  </div>`
}


