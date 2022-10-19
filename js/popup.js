const popup = document.querySelector('.popup')
const popupCloseButton = document.querySelector('.button-form-section')

popupCloseButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.toggle('popup-close')
  userName.focus();
});
