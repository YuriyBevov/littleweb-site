import { formValidation } from './form-validation';
const btns = document.querySelectorAll('[type="submit"]');

if (btns) {
  btns.forEach((btn) => {
    btn.addEventListener('click', (evt) => {
      console.log('currentTarget', evt.currentTarget.closest('form'));
      console.log('parentNode', evt.currentTarget.parentNode);
      evt.preventDefault();
      formValidation(evt.currentTarget.closest('form'));
    });
  });
}
