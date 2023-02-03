document.querySelector('.header__search-btn')?.addEventListener('click', () => {

  document.querySelector('.header__search')?.classList.add('header__search-show')

});

document.querySelector('.header__search-close')?.addEventListener('click', () => {

  document.querySelector('.header__search')?.classList.remove('header__search-show')

})
