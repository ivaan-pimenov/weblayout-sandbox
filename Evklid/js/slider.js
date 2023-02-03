const swiper = new Swiper('.hero__swiper', {
  // slidesPerView: 1,
  loop: true,
  // spaceBetween: 30,
  // autoplay: {
  //   delay: 3000,
  //   pauseOnMouseEnter: true,
  // },
  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },
  speed: 300,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true,
  },
  effect: 'fade',
  // 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards'

});
