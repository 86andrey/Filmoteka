import throttle from 'lodash.throttle';

('use strict');

function trackScroll() {
  const scrolled = window.pageYOffset;
  const coords = 500;
  //   console.log(coords);

  if (scrolled > coords) {
    goTopBtn.classList.add('back_to_top-show');
  }
  if (scrolled < coords) {
    goTopBtn.classList.remove('back_to_top-show');
  }
}

function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -80);
    setTimeout(backToTop, 0);
  }
}

const goTopBtn = document.querySelector('.back_to_top');

window.addEventListener('scroll', throttle(trackScroll, 500));
goTopBtn.addEventListener('click', backToTop);
