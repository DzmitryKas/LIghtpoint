import "./style/main.scss";

import Swiper from 'swiper';



var mySwiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

  pagination: {
      el: '.swiper-pagination',
    },
  });

console.log('mySwiper', mySwiper)