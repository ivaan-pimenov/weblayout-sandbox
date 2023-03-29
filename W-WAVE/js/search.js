const searchOpenButtons = document.querySelectorAll('.search-open');
const body = document.querySelector('body');
const timeout = 100;

if (searchOpenButtons.length > 0) {
  for (let index = 0; index < searchOpenButtons.length; index ++) {
    const searchOpenButton = searchOpenButtons[index];
    searchOpenButton.addEventListener('click', function (e) {
      const searchName = searchOpenButton.getAttribute('href').replace('#','');
      const currentSearch = document.getElementById(searchName);
      searchOpen(currentSearch);
      // body.classList.toggle('hidden');
      e.preventDefault();
    });
  }
}

function searchOpen(currentSearch) {
  document.body.classList.add('stop-scroll');
  currentSearch.classList.add('search-form--open');
  currentSearch.addEventListener('click', function (e) {
    if (!e.target.closest('.search-form__wrapper')) {
      setTimeout(() => {
        searchClose(e.target.closest('.search-form'));
        // body.classList.remove('hidden');
      }, timeout);
    }
  });
};

function searchClose(searchActive) {
  document.body.classList.remove('stop-scroll');
  searchActive.classList.remove('search-form--open');
}
