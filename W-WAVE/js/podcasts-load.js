const loadMore = document.querySelector('.podcasts__load');
const articlesItems = document.querySelectorAll('.podcast');

loadMore.addEventListener('click', () => {
  articlesItems.forEach(el => {el.classList.add('podcast--visible')});
  loadMore.closest('.podcasts__btn').classList.add('podcasts__btn--hidden');
})

// ---
const visibileControl = document.querySelector('.header-what__btn');
const visibleArea = document.querySelector('.header-bottom');

visibileControl.addEventListener('click', () => {

  visibileControl.classList.toggle('header-what__btn--active');

  visibleArea.classList.toggle('header-bottom--block')

  setTimeout(() => {
    visibleArea?.classList.toggle('header-bottom--active');
    visibleArea.reset();
  }, 100);



})
