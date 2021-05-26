import Swiper, {
  Pagination,
  Keyboard,
} from 'swiper';

Swiper.use([Pagination, Keyboard]);

export default (function () {
  const breakpoint = window.matchMedia('(min-width:991.98px)');
  let guidesSlider;

  const breakpointChecker = function () {
    if (breakpoint.matches === true) {
      if (guidesSlider !== undefined) guidesSlider.destroy(true, true);
      return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
  };

  const enableSwiper = function () {
    guidesSlider = new Swiper('.guides__slider', {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 25,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      speed: 600,
      resizeObserver: true,
      observer: true,
      pagination: {
        el: '.guides__pagination',
        clickable: true,
      },
      breakpoints: {
        575.98: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        767.98: {
          slidesPerView: 3
        }
      }
    });
  };

  breakpoint.addEventListener("change", breakpointChecker);

  breakpointChecker();
})();

export const reviewsSlider = new Swiper('.reviews__slider', {
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 25,
  resizeObserver: true,
  observer: true,
  pagination: {
    el: '.reviews__pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  speed: 600,
  breakpoints: {
    575.98: {
      spaceBetween: 30
    },
    767.98: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    991.98: {
      slidesPerView: 3,
      grabCursor: true,
      spaceBetween: 0
    }
  }
});
