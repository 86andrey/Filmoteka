import throttle from 'lodash.throttle';
// const goTopBtn = document.querySelector('.back_to_top');
// goTopBtn.addEventListener('click', backToTop);
// ('use strict');

export function trackScroll() {
  const goTopBtn = document.querySelector('.back_to_top');
  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }
  const scrolled = window.pageYOffset;
  const coords = 500;
  // console.log(coords);

  if (scrolled > coords) {
    goTopBtn.classList.add('back_to_top-show');
    goTopBtn.addEventListener('click', backToTop);
  }
  if (scrolled < coords) {
    goTopBtn.classList.remove('back_to_top-show');
    goTopBtn.removeEventListener('click', backToTop);
  }
}

// const goTopBtn = document.querySelector('.back_to_top');
// console.log(goTopBtn);
// window.addEventListener('scroll', throttle(trackScroll, 500));
// goTopBtn.addEventListener('click', backToTop);
