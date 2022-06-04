import './index.css';


import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';

import {initialCards, buttonEdit, buttonAdd, formPicElement, formUserElement, jobInput, nameInput, config} from '../utils.js';

const cardList = new Section({items:initialCards, renderer: (item) => {
    cardList.addItem(createCard(item));
}}, '.gallery__list');

const profileFormValidator = new FormValidator(config, formUserElement);
    profileFormValidator.enableValidation();
    const imageAddValidator = new FormValidator(config, formPicElement);
    imageAddValidator.enableValidation();

const userInfo = new UserInfo('.profile__name','.profile__subname');


const picPreview = new PopupWithImage('.popup_type_image');

const userForm = new PopupWithForm( (data) => {
    userInfo.setUserInfo(data);
    userForm.closeWindow();
}, '.popup_type_edit');

const picForm = new PopupWithForm((data) => {
cardList.addItem(createCard(data));
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
    const inputValuesData = userInfo.getUserInfo();
   
    nameInput.value = inputValuesData.user;
    jobInput.value = inputValuesData.about;
    userForm.openWindow();
   
});

buttonAdd.addEventListener('click', () => {
    picForm.openWindow();
    
});



cardList.renderItems();
picPreview.setEventListeners();
userForm.setEventListeners();
picForm.setEventListeners();
