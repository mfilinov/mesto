//Объекты для формы popup
const popup = document.querySelector('.popup');
let formElement = popup.querySelector('.popup__container');
let nameInput = formElement.querySelector('.popup__input_name_text');
let jobInput = formElement.querySelector('.popup__input_job_text');
let popupButtonClose = popup.querySelector('.popup__button-close');

//Section profile
const profileBlock = document.querySelector('.profile__text');
const buttonEdit = profileBlock.querySelector('.profile__button-edit');
let profileTitle = profileBlock.querySelector('.profile__title');
let profileSubtitle = profileBlock.querySelector('.profile__subtitle');

//Section elements
const elementsList = document.querySelector('.elements__list');

//Templates
const elementTemplate = document.querySelector('#element-template').content;


const createElement = (name, link) => {
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  element.querySelector('.element__image').src = link;
  element.querySelector('.element__image').alt = `Изображение ${name}`;
  element.querySelector('.element__title').textContent = name;
  //Изменение состояния like после клика
  element.querySelector('.element__like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__button-like_active');
  })
  elementsList.append(element);
}

const initialCards = [
  {
    name: 'Пятигорск',
    link: './images/pyatigorsk.jpeg'
  },
  {
    name: 'Кисловодск',
    link: './images/kislovodsk.jpeg'
  },
  {
    name: 'Великий Новгород',
    link: './images/novgorod.jpeg'
  },
  {
    name: 'Махачкала',
    link: './images/makhachkala.jpeg'
  },
  {
    name: 'Владикавказ',
    link: './images/vlidikavkaz.jpeg'
  },
  {
    name: 'Грозный',
    link: './images/grozniy.jpeg'
  }
];

initialCards.forEach(function (item) {
  createElement(item.name, item.link);
})

const openPopup = () => {
  popup.classList.add('popup_opened');
  // При открытии формы поля «Имя» и «О себе» должны быть заполнены теми значениями, которые отображаются на странице.
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

const closePopup = () => {
  popup.classList.remove('popup_opened');
}

const handleFormSubmit = (evt) => {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup();
}

buttonEdit.addEventListener('click', openPopup);
popupButtonClose.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);
