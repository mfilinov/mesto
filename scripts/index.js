//Объекты для формы popup edit
const popupProfileEditElement = document.querySelector('.popup-profile-edit');
const formProfileElement = popupProfileEditElement.querySelector('.popup__form');
const nameInput = formProfileElement.querySelector('.popup__input_el_name');
const jobInput = formProfileElement.querySelector('.popup__input_el_job');
const popupButtonCloseElements = document.querySelectorAll('.popup__button-close');

//Popup полоэкранного режима
const popupOpenImage = document.querySelector('.popup-open-image');
const figureImage = popupOpenImage.querySelector('.popup__figure-image');
const popupFigcaptionImage = popupOpenImage.querySelector('.popup__figcaption-image');

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
const elementsContainer = document.querySelector('.elements__list');

//Templates
const elementTemplate = document.querySelector('#element-template').content;

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
}

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
}

const createElement = (item) => {
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  const elementImage =element.querySelector('.element__image')
  elementImage.src = item.link;
  elementImage.alt = `Изображение ${item.name}`;
  element.querySelector('.element__title').textContent = item.name;
  //Открытие элемента в полноэкранном режиме по клику на изображение
  elementImage.addEventListener('click', (evt) => {
    figureImage.src = item.link;
    figureImage.alt = `Изображение ${item.name}`;
    popupFigcaptionImage.textContent = item.name;
    openPopup(popupOpenImage);
  })
  //Изменение состояния like после клика
  element.querySelector('.element__like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__button-like_active');
  })
  //Удаление карточки после клика на иконку trash
  element.querySelector('.element__button-trash').addEventListener('click', (evt) => {
    evt.target.closest('.element').remove();
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
  elementsContainer.append(element);
})

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
  elementsContainer.prepend(element);
  closePopup(popupAddImageElement);
});

//Инициализация всех слушателей для закрытия Popups
popupButtonCloseElements.forEach(item => {
  const currentPopup = item.closest('.popup');
  item.addEventListener('click', () => closePopup(currentPopup))
})
