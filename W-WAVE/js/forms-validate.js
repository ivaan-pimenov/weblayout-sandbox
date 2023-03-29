const validation = new JustValidate('.about__form', {
  errorLabelStyle: {
    color: '#d52b1e',
  }
});

validation.onSuccess(function () {
  document.getElementById("form").submit();
});

validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Ошибка',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Ошибка',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Ошибка',
    }
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Ошибка',
    },
    {
      rule: 'email',
      errorMessage: 'Ошибка',
    },
  ])
  .addField('#message', [
    {
      rule: 'required',
      errorMessage: 'Ошибка',
    },
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'Ошибка',
    },
  ]);
