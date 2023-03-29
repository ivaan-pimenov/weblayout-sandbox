const popupLinks = document.querySelectorAll('.popup-link');

let unlock = true;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index ++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener('click', function (e) {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const currentPopup = document.getElementById(popupName);
      popupOpen(currentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseIcons = document.querySelectorAll('.close-popup');
if (popupCloseIcons.length > 0) {
  for (let index = 0; index < popupCloseIcons.length; index ++) {
    const popupCloseIcon = popupCloseIcons[index];
    popupCloseIcon.addEventListener('click', function (e) {
      popupClose(e.target.closest('.popup'));
      e.preventDefault();
    });
  }
}

function popupOpen(currentPopup) {
  if (currentPopup && unlock) {
    const popupActive = document.querySelector('.popup--open');
    // if (popupActive) {
    //   popupClose(popupActive, false);
    // } else {
    //   bodyLock();
    // }
    document.body.classList.add('stop-scroll');
    currentPopup.classList.add('popup--open');
    currentPopup.addEventListener('click', function (e) {
      if (!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'));
      }
    });
  }
};

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    document.body.classList.remove('stop-scroll');
    popupActive.classList.remove('popup--open');
    // if(doUnlock) {
    //   bodyUnLock();
    // }
  }

};

// function bodyLock() {
//   const lockPaddingValue = window.innerWidth - document.documentElement.clientWidth;

//   body.style.paddingRight = lockPaddingValue;
//   body.classList.add('stop-scroll');
// }

// function bodyUnLock () {

//   body.style.paddingRight = '0px';
//   body.classList.remove('stop-scroll');
// };

