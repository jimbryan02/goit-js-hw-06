const input = document.querySelector('#validation-input');

input.addEventListener('blur', function () {
  const length = this.getAttribute('data-length');

  if (this.value.length === Number(length)) {
    this.classList.add('valid');
    this.classList.remove('invalid');
  } else {
    this.classList.add('invalid');
    this.classList.remove('valid');
  }
});
