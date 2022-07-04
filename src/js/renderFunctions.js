import MovieApiService from './movieFetch';
const movie = new MovieApiService();

const containerCard = document.querySelector('.container-card')

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