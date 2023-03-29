(() => {
  function setTabs (dataPath, dataTarget) {
    const btns = document.querySelectorAll(`.js-tab-btn[${dataPath}]`);
    const contents = document.querySelectorAll(`.js-tab-content[${dataTarget}]`);


    btns.forEach((btn) => {
      btn.addEventListener('click', function (evt) {
        const path = this.getAttribute(dataPath);
        const target = document.querySelector(`.js-tab-content[${dataTarget}="${path}"]`);

        btns.forEach((currentBtn) => {
          currentBtn.classList.remove('is-active');
        });

        this.classList.add('is-active');

        contents.forEach((content) => {
          content.classList.remove('is-active');
        });

        target.classList.add('is-active');
      });
    });
  }

  setTabs('data-bloggers-path', 'data-bloggers-target');
  setTabs('data-crtitics-path', 'data-critics-target');
  setTabs('data-artists-path', 'data-artists-target');
  setTabs('data-scientists-path', 'data-scientists-target');
  setTabs('data-historians-path', 'data-historians-target');
  setTabs('data-phililigosts-path', 'data-philologists-target');

  $(".js-accordion").accordion({
    collapsible: true,
    active: 0,
    icons: false,
    heightStyle: 'content'
  });
})();
