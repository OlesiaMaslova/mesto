const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

const editButton = document.querySelector('.profile__edit-button');
const editWindow = document.querySelector('.popup_type_edit');
const addButton = document.querySelector('.profile__add-button');
const addWindow = document.querySelector('.popup_type_new-card')
const closeWindowButton = document.querySelector('.popup__close-button');
const closeAddWindowButton = document.querySelector('.popup__close-button_place_new-card');
const closePicWindowButton = document.querySelector('.popup__close-button_place_image');
const formUserElement = document.querySelector('.popup__form_userinfo');
const formPicElement = document.querySelector('.popup__form_picture');
const popupPicWindow = document.querySelector('.popup_type_image')

const nameInput = document.querySelector('.popup__input_username');
const jobInput = document.querySelector('.popup__input_job');
const nameField = document.querySelector('.profile__name');
const subnameField = document.querySelector('.profile__subname');
const imgNameInput = document.querySelector('.popup__input_picture-name');
const imgLinkInput = document.querySelector('.popup__input_picture-link');
const popupPic = document.querySelector('.popup__image');
const popupPicCaption = document.querySelector('.popup__caption');

const template = document.querySelector('.template__card');
const cardContainer = document.querySelector('.gallery__list');

function openWindow(popup) {
   popup.classList.add('popup_is-active');
}

function closeWindow(popup) {
    popup.classList.remove('popup_is-active');
}

function handleFormUserSubmit (event) {
    event.preventDefault();

    nameField.textContent=nameInput.value;
    subnameField.textContent=jobInput.value;

    closeWindow(editWindow);
}

function handleFormPicSubmit(event) {
    event.preventDefault();
    
    render({
        name: imgNameInput.value,
        link: imgLinkInput.value, 
    });

    formPicElement.reset();


    closeWindow(addWindow);
}

function handlePicPopup(card) {

    openWindow(popupPicWindow);
    
    popupPic.src = card.link;
    popupPicCaption.textContent = card.name;
}

function getArray() {
    initialCards.forEach(render);
}


function render (card) {
    const element = getCard(card);
    cardContainer.prepend(element);
}


function getCard(card) {
    const newCard = template.content.cloneNode(true);
    const imgLink = newCard.querySelector('.card__image');
    const cardName = newCard.querySelector('.card__name');
    const deleteButton = newCard.querySelector('.card__delete-button');
    const likeButton = newCard.querySelector('.card__like-button');

    imgLink.src = card.link;
    imgLink.alt = card.name;
    cardName.textContent = card.name;

    deleteButton.addEventListener('click', handleCardRemove);
    likeButton.addEventListener('click', toggleCardLike);
    imgLink.addEventListener('click', () => handlePicPopup(card));

    return newCard;
}

function handleCardRemove(event) {
   const element = event.target.closest('.card');
   element.remove();
}

function toggleCardLike(event) {
    const element = event.target;
    element.classList.toggle('card__like-button_active');
}



formUserElement.addEventListener('submit', handleFormUserSubmit);

editButton.addEventListener('click', () => {
    openWindow(editWindow);
    nameInput.value = nameField.textContent;
    jobInput.value = subnameField.textContent;
});

closeWindowButton.addEventListener('click', () => {
    closeWindow(editWindow);
});

addButton.addEventListener('click', () => {
    openWindow(addWindow);
});

closeAddWindowButton.addEventListener('click', () => {
    closeWindow(addWindow);
});

closePicWindowButton.addEventListener('click', () => {
    closeWindow(popupPicWindow);
});

formPicElement.addEventListener('submit', handleFormPicSubmit);

getArray();