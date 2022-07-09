import { storage } from './storage';
import { makeMarkupLib } from './renderFunctions';
import { openModal } from './renderFunctions';

const refs = {
    watchBtn: document.querySelector('#header-watched-button'),
    queueBtn: document.querySelector('#header-queue-button'),
};
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
    
renderWatched()
async function renderWatched() {
    const parsing = storage.readItem("watched")
    if (parsing) {
        containerCard.innerHTML = await makeMarkupLib(parsing)
    }
}
refs.watchBtn.addEventListener('click',async () => {
    const parsing = storage.readItem("watched")
    console.log(parsing)
    if (parsing) {
        containerCard.innerHTML = "";
        containerCard.innerHTML=await makeMarkupLib(parsing)
    } else {
        containerCard.innerHTML = "List is empty";
    }
    onWatchBtnClick();
});

refs.queueBtn.addEventListener('click', async () => {
        const parsing = storage.readItem("qu")
    if (parsing) {
        containerCard.innerHTML = "";
          containerCard.innerHTML=await makeMarkupLib(parsing)
    } else {
        containerCard.innerHTML = "List is empty";
    }
    onQueueBtnClick();
})

function onWatchBtnClick() {
    if (refs.watchBtn.classList.contains('is-header-nonactive')) {
        refs.watchBtn.classList.remove('is-header-nonactive');
        refs.watchBtn.classList.add('is-header-active');
        refs.queueBtn.classList.remove('is-header-active');
        refs.queueBtn.classList.add('is-header-nonactive');

        // вызов функции обновления контента страницы
    }
}

function onQueueBtnClick() {
    if (refs.queueBtn.classList.contains('is-header-nonactive')) {
        refs.queueBtn.classList.remove('is-header-nonactive');
        refs.queueBtn.classList.add('is-header-active');
        refs.watchBtn.classList.remove('is-header-active');
        refs.watchBtn.classList.add('is-header-nonactive');

        // вызов функции обновления контента страницы
    }
 
}

