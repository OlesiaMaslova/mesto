import '../pages/index.css';


import {Card} from './components/Card.js';
import {FormValidator} from './components/FormValidator.js';
import {Section} from './components/Section.js';
import {Popup} from './components/Popup.js';
import {PopupWithImage} from './components/PopupWithImage.js';
import {PopupWithForm} from './components/PopupWithForm.js';
import {UserInfo} from './components/UserInfo.js';

import {initialCards, buttonEdit, buttonAdd, formPicElement, formUserElement, jobInput, nameInput, config} from './utils.js';

const cardList = new Section({items:initialCards, renderer: (item) => {
    cardList.addItem(createCard(item));
}}, '.gallery__list');

const profileFormValidator = new FormValidator(config, formUserElement);
    profileFormValidator.enableValidation();
    const imageAddValidator = new FormValidator(config, formPicElement);
    imageAddValidator.enableValidation();

const userInfo = new UserInfo('.profile__name','.profile__subname');

const popupEditProfile = new Popup('.popup_type_edit');
const popupAddCardForm = new Popup('.popup_type_new-card');

const picPreview = new PopupWithImage('.popup_type_image');

const userForm = new PopupWithForm( () => {
    userInfo.setUserInfo(userForm._getInputValues());
    userForm.closeWindow();
}, '.popup_type_edit');
const picForm = new PopupWithForm(() => {
cardList.addItem(createCard(picForm._getInputValues()));
picForm.closeWindow();
}, '.popup_type_new-card');

const createCard = (data) => {
    const card = new Card({data, handleCardClick: () => {
        picPreview.openWindow(data);
       }}, '.template__card');
       const cardElement = card.getCard();
       return cardElement;
};

buttonEdit.addEventListener('click', () => {
   
    nameInput.value = userInfo.getUserInfo().user;
    jobInput.value = userInfo.getUserInfo().about;
    popupEditProfile.openWindow();
   
});

buttonAdd.addEventListener('click', () => {
    popupAddCardForm.openWindow();
    
});



cardList.renderItems();
popupEditProfile.setEventListeners();
popupAddCardForm.setEventListeners();
picPreview.setEventListeners();
userForm.setEventListeners();
picForm.setEventListeners();
