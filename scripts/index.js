//Объекты для формы popup
const popup = document.querySelector('.popup');
let formElement = popup.querySelector('.popup__container');
let nameInput = formElement.querySelector('.popup__input_name_text');
let jobInput = formElement.querySelector('.popup__input_job_text');
let popupButtonClose = popup.querySelector('.popup__button-close');

//Объекты из секции profile
const profileBlock = document.querySelector('.profile__text');
const buttonEdit = profileBlock.querySelector('.profile__button-edit');
let profileTitle = profileBlock.querySelector('.profile__title');
let profileSubtitle = profileBlock.querySelector('.profile__subtitle');


function openPopup() {
  popup.classList.add('popup_opened');
  // При открытии формы поля «Имя» и «О себе» должны быть заполнены теми значениями, которые отображаются на странице.
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup();
}

buttonEdit.addEventListener('click', openPopup);
popupButtonClose.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);
