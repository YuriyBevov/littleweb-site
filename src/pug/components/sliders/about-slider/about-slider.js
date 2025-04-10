import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const sliders = document.querySelectorAll('.about-slider');

if (sliders.length) {
  sliders.forEach((slider) => {
    const pagination = slider.querySelector('.swiper-pagination');
    const prevEl = slider.querySelector('.swiper-button-prev');
    const nextEl = slider.querySelector('.swiper-button-next');

    new Swiper(slider, {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: '30',

      breakpoints: {
        767: {
          slidesPerView: 1,
        },

        1139: {
          slidesPerView: 2,
        },
      },

      navigation: {
        nextEl: nextEl ? nextEl : null,
        prevEl: prevEl ? prevEl : null,
      },

      pagination: {
        el: pagination ? pagination : null,
        dynamicBullets: true,
        clickable: true,
      },
    });
  });
}
