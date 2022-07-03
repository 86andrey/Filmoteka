import MovieApiService from './js/movieFetch.js';

// объявляем экземпляр класса
const movie = new MovieApiService();

// вызываем на этом экземпляре нужный метод (пример=>)
movie.fetchPopular();


// Sergey--------------------------------------
const containerCard = document.querySelector('.container-card')

async function renderCard() {
    const array = await movie.fetchPopular();
    console.log(array);
    const markup = array.map(({ poster_path, id, original_title, release_date, genre_ids }) => {
        const newReleaseDate = release_date.split('-')[0];
        return `
                  <div class="container-card_single-card" data-id="${id}" >
                    <div class="poster">
                        <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}">
                    </div>
                    <div class="info">
                      <h3 class="info_title">${original_title}</h3>
                      <p class="info_details">
                          ${genre_ids} | ${newReleaseDate}
                      </p>
                    </div>
                  </div> 
        `}).join('');
    containerCard.insertAdjacentHTML('beforeend', markup);
}
renderCard()


// Sergey--------------------------------------