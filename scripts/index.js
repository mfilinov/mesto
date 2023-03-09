//Объекты для формы popup edit
const popupProfileEditElement = document.querySelector('.popup-profile-edit');
const formProfileElement = popupProfileEditElement.querySelector('.popup__form');
const nameInput = formProfileElement.querySelector('.popup__input_el_name');
const jobInput = formProfileElement.querySelector('.popup__input_el_job');
const popupButtonCloseElements = document.querySelectorAll('.popup__button-close');

//Profile add
const popupAddImageElement = document.querySelector('.popup-add-image');
const formAddImageElement = popupAddImageElement.querySelector('.popup__form');
const imageNameInputElement = formAddImageElement.querySelector('.popup__input_el_image-name')
const imageLinkInputElement = formAddImageElement.querySelector('.popup__input_el_image-link')

//Section profile
const profileBlock = document.querySelector('.profile');
const buttonEdit = profileBlock.querySelector('.profile__button-edit');
const profileTitle = profileBlock.querySelector('.profile__title');
const profileSubtitle = profileBlock.querySelector('.profile__subtitle');
const profileButtonAdd = profileBlock.querySelector('.profile__button-add');


//Section elements
const elementsList = document.querySelector('.elements__list');

//Templates
const elementTemplate = document.querySelector('#element-template').content;


const createElement = (item) => {
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  element.querySelector('.element__image').src = item.link;
  element.querySelector('.element__image').alt = `Изображение ${item.name}`;
  element.querySelector('.element__title').textContent = item.name;
  //Изменение состояния like после клика
  element.querySelector('.element__like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__button-like_active');
  })
  return element;
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
  const element = createElement(item);
  elementsList.append(element);
})

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
}

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
}

buttonEdit.addEventListener('click', () => {
  openPopup(popupProfileEditElement);
  // При открытии формы поля «Имя» и «О себе» должны быть заполнены теми значениями, которые отображаются на странице.
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
});

profileButtonAdd.addEventListener('click', () => {
  openPopup(popupAddImageElement);
  imageNameInputElement.value = '';
  imageLinkInputElement.value = '';
});

formProfileElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupProfileEditElement);
});

formAddImageElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const objectNameLink = {name:imageNameInputElement.value, link:imageLinkInputElement.value}
  const element = createElement(objectNameLink);
  elementsList.prepend(element);
  closePopup(popupAddImageElement);
});

//Инициализация всех слушателей для закрытия Popups
popupButtonCloseElements.forEach(item => {
  const currentPopup = item.closest('.popup');
  item.addEventListener('click', () => closePopup(currentPopup))
})
