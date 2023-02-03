
const tab = document.querySelectorAll('.process__menu__btn');


tab.forEach(function(tabsBtn){

  tabsBtn.addEventListener('click', function(e) {

    const path = e.currentTarget.dataset.path;

    tab.forEach(function(btn) {

    btn.classList.remove('process__menu__btn--active')
    });

    e.currentTarget.classList.add('process__menu__btn--active');

    document.querySelectorAll('.process-article').forEach(function(tabsBtn) {

      tabsBtn.classList.remove('process-article--active')
      });

  document.querySelector(`[data-target="${path}"]`).classList.add('process-article--active');
  });
  });
