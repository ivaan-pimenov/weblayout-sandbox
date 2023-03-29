const element = document.querySelector('.shows__select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  position: 'bottom',
  shouldSort: false,
  labelId: 'Список авторов передач',
});
