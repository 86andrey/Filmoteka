const swiper = new Swiper('.image-slider', {
  // стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // булети,пагинація
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
   //    renderFraction: function (currentClass, totalClass) {
   //        return 'Фото <span class="' + currentClass + '"></span>' +
   //            ' из '
   //            + '<span class="' + totalClass + '"></span>';
   //    }
  },
    //scroll

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,
  slideToClickedSlide: true,

  hashNavigation: {
    watchState: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensitivity: 1,
  },

  autoHeight: true,

  slidesPerView: 2,

  slidesPerGroup: 1,

  watchOverflow: true,

  spaceBetween: 10,

  loop: true,

  autoplay: {
    delay: 2000,
    stopOnLastSlide: true,
    disableOnInteraction: false,
  },
  speed: 1000,

  // effect:'slide',

  // effect: 'fade',

  //   effect: 'flip',
  //   flipEffect: {
  //       slideShadows: true,
  //       limitRotation: true
  //   },

 //  effect: 'cube',

  //   cubeEffect: {
  //       slideShadows: true,
  //       shadow: true,
  //       shadowOffset: 20,
  //       shadowScale: 0.94
  //   },

  effect: 'coverflow',
  coverFlowEffect: {
    rotate: 30,
    stretch: 50,
    slideShadows: true,
  },

  //  breakpoints: {
  //          '@.075': {
  //             slidesPerView: 1,

  //         },

  //         '@1.00': {
  //              slidesPerView: 1,
  //         },

  //          '@01.50': {
  //              slidesPerView: 1,
  //          },
  //     },
  breakpoints: {
    320: {
      slidesPerView: 1,
      
    },
    768: {
      slidesPerView: 2,
      
    },
    992: {
      slidesPerView: 3,
      
      
    },
  },

  preloadImages: false,
  lazy: true,

  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: false,
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,

  observer: true,
  observeParents: true,
  observeSlideChildren: true,
});

const onSliderOpen = document.querySelector('.slider-open');
const wrapper = document.querySelector('.wrapper');

onSliderOpen.addEventListener('click', toogleSliderHandler);
wrapper.addEventListener('click', onBackdropClick);

export function toogleSliderHandler() {
  window.addEventListener('keydown', onEscKeyPress);
  wrapper.classList.toggle('hide');
}

export function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    toogleSliderHandler();
    console.log('click');
  }
}

export function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    toogleSliderHandler();
  }
}

//  let sliderBlock = document.querySelector('.image-slider');
// //  let qSlides = myImageSlider.slides.length;

//  sliderBlock.addEventListener('mouseenter', function (e) {
//      myImageSlider.params.autoplay.disableOnInteraction = false;
//      myImageSlider.params.autoplay.delay = 500;
//      myImageSlider.autoplay.start();
// });

// sliderBlock.addEventListener('mouseleave', function (e) {
//     myImageSlider.autoplay.stop();
//  });
