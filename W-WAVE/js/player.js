const svgPlay = document.querySelectorAll('.broadcast-play');
const svgPause = document.querySelectorAll('.broadcast-pause');
const buttonsPlayer = document.querySelectorAll('.broadcast__btn');


if (typeof buttonsPlayer === 'object' && buttonsPlayer !== null && 'addEventListener' in buttonsPlayer) {
  for (let index = 0; index < buttonsPlayer.length; index++) {
    const buttonPlayer = buttonsPlayer[index];
    buttonPlayer.addEventListener('click', () => {

      svgPlay.classList.toggle('display-none');

      svgPause.classList.toggle('display-inline');
    });
  };
}
//   buttonsPlayer.addEventListener('click',  () => {

//     svgPlay.classList.toggle('display-none');

//     svgPause.classList.toggle('display-inline');

//   });
// };

// if (typeof svgPlay === 'object' && svgPlay !== null && 'addEventListener' in svgPlay) {

//   svgPause.addEventListener('click', () => {

//     svgPlay.classList.add('display-inline');

//     svgPause.classList.add('display-none');
//   });
// };
