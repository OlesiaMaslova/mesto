import './index.css';


import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {Section} from '../components/Section.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithConfirmation} from '../components/PopupWithConfirmation.js';
import {UserInfo} from '../components/UserInfo.js';
import {Api} from '../components/Api.js'
import {initialCards, buttonEdit, buttonAdd, avatarEdit, userAvatar, formAvatarElement, formPicElement, formUserElement, jobInput, nameInput, config, openWindow, avatarEditWindow} from '../utils.js';

let myId;

const api = new Api('https://mesto.nomoreparties.co/v1', 'cohort-43', '4772447b-886a-4135-9b3c-8735b1b9c3a9');

api.setInitialState()
.then((data) => {
    const [ userData, cardData ] = data;
    userInfo.setUserInfo(userData);
    myId = userData._id;
    
    cardData.reverse().forEach((item) => {
        cardList.addItem(createCard(item, myId)); 
        
})
})
.catch((err) => {
    console.log(`Ошибка: ${err}`);
})


const userInfo = new UserInfo('.profile__name','.profile__subname', '.profile__avatar');
const picPreview = new PopupWithImage('.popup_type_image');
const deleteConfirmation = new PopupWithConfirmation('.popup_type_delete-confirmation');
const cardList = new Section({items:initialCards, renderer: (item) => {
    cardList.addItem(createCard(item)); 
}}, '.gallery__list');

const userForm = new PopupWithForm( (data) => {
  userForm.setSubmitLoader(true);
    api.updateUserInfo(data)
    .then((data) => {
    userInfo.setUserInfo(data);   
    userForm.closeWindow(); 
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
        userForm.setSubmitLoader(false);
    })
}, '.popup_type_edit');


const picForm = new PopupWithForm((data) => {
    picForm.setSubmitLoader(true);
    api.postNewCard(data)
    .then((data) => {
        cardList.addItem(createCard(data, myId)); 
        picForm.closeWindow();
        
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
        picForm.setSubmitLoader(false);
    })
}, '.popup_type_new-card');

const userAvatarForm = new PopupWithForm((data) => {
    userAvatarForm.setSubmitLoader(true);
    api.updateUserAvatar(data)
    .then((data) => {
        userInfo.setUserInfo(data);
        userAvatarForm.closeWindow();
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
        userAvatarForm.setSubmitLoader(false);
    })
}, '.popup_type_new-avatar')



const createCard = (data, myId) => {
    const card = new Card({data, myId, handleCardClick: () => {
        picPreview.openWindow(data);
       },
    handleCardRemove: () => {
        deleteConfirmation.openWindow();
        deleteConfirmation.setSubmitAction(() => {
          api.deleteCard(data)
          .then(() => {
              deleteConfirmation.closeWindow();
          })
          .then(() => {
              cardElement.remove();
          })
          .catch((err) => {
              console.log(`Ошибка: ${err}`);
          })
        }) 
         
      
         },
    handleCardLike: (data) => {
   
    api.addLike(data)
      .then((data) => {
        card.setLikesState(data);
       card.addLikeButtonState();
       
        
    })
     .catch((err) => {
        console.log(`Ошибка: ${err}`);
    })
    },
    handleCardDislike: (data) => {
    api.removeLike(data)
    .then((data) => {
        
        card.setLikesState(data);
        card.removeLikeButtonState();
    })
     .catch((err) => {
        console.log(`Ошибка: ${err}`);
    })
       },
}, '.template__card');
       const cardElement = card.getCard();
      
       return cardElement;
};




buttonEdit.addEventListener('click', () => {
    const inputValuesData = userInfo.getUserInfo();
   
    nameInput.value = inputValuesData.name;
    jobInput.value = inputValuesData.about;
    userForm.openWindow();  
});

buttonAdd.addEventListener('click', () => {
    imageAddValidator.toggleSubmitButtonDisabled();
    picForm.openWindow(); 
});

avatarEdit.addEventListener('click', () => {
    avatarValidator.toggleSubmitButtonDisabled();
    userAvatarForm.openWindow();
})


const profileFormValidator = new FormValidator(config, formUserElement);
    profileFormValidator.enableValidation();
const imageAddValidator = new FormValidator(config, formPicElement);
    imageAddValidator.enableValidation();
const avatarValidator = new FormValidator(config, formAvatarElement);
    avatarValidator.enableValidation();

picPreview.setEventListeners();
userForm.setEventListeners();
picForm.setEventListeners();
userAvatarForm.setEventListeners();
deleteConfirmation.setEventListeners();
