const slider = document.querySelector('.swiper');

let swiper = new Swiper( slider, {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  // autoplay: {
  //   delay: 3000,
  // },

  breakpoints: {
    // // when window width is >= 320px
    // 320: {
    //   slidesPerView: 2,
    //   spaceBetween: 20
    // },
    // // when window width is >= 480px
    // 480: {
    //   slidesPerView: 3,
    //   spaceBetween: 30
    // },
    // when window width is >= 640px
    320: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },


  // https://swiperjs.com/swiper-api
});
