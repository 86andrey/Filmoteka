const refs = {
    watchBtn: document.querySelector('#header-watched-button'),
    queueBtn: document.querySelector('#header-queue-button'),
  };

refs.watchBtn.addEventListener('click', onWatchBtnClick);
refs.queueBtn.addEventListener('click', onQueueBtnClick);

function onWatchBtnClick(event) {
    if (refs.watchBtn.classList.contains('is-header-nonactive')) {
        refs.watchBtn.classList.remove('is-header-nonactive');
        refs.watchBtn.classList.add('is-header-active');
        refs.queueBtn.classList.remove('is-header-active');
        refs.queueBtn.classList.add('is-header-nonactive');

        // вызов функции обновления контента страницы
    }
}

function onQueueBtnClick(event) {
    if (refs.queueBtn.classList.contains('is-header-nonactive')) {
        refs.queueBtn.classList.remove('is-header-nonactive');
        refs.queueBtn.classList.add('is-header-active');
        refs.watchBtn.classList.remove('is-header-active');
        refs.watchBtn.classList.add('is-header-nonactive');

        // вызов функции обновления контента страницы
    }
 
}