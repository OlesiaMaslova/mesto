import {Card} from './card.js';
import {FormValidator} from './formValidator.js';
import {initialCards, buttonEdit, windowEdit, buttonAdd, windowAdd, formPicElement, formUserElement, nameField, jobInput, nameInput, subnameField, imgLinkInput, imgNameInput, cardContainer, config, openWindow, closeWindow, handleEscape} from './utils.js';


function handleFormUserSubmit (event) {
    event.preventDefault();

    nameField.textContent=nameInput.value;
    subnameField.textContent=jobInput.value;

    closeWindow(windowEdit);
}

function handleFormPicSubmit(event) {
    event.preventDefault();
    
    render(
        imgNameInput.value,
        imgLinkInput.value, 
        '.template__card')
    
    closeWindow(windowAdd);
    
    formPicElement.reset();
}

function getArray() {
    initialCards.forEach((item) => {
        render(item.name, item.link, '.template__card');
    });
}


function render (name, link, templateSelector) {
    const newItem = new Card(name, link, templateSelector);
    const element = newItem.getCard();
    cardContainer.prepend(element);
}

formUserElement.addEventListener('submit', handleFormUserSubmit);

buttonEdit.addEventListener('click', () => {
   
    nameInput.value = nameField.textContent;
    jobInput.value = subnameField.textContent;
    openWindow(windowEdit);
   
});

buttonAdd.addEventListener('click', () => {
    openWindow(windowAdd);
    
});

formPicElement.addEventListener('submit', handleFormPicSubmit);


    const profileFormValidator = new FormValidator(config, formUserElement);
    profileFormValidator.enableValidation();
    const imageAddValidator = new FormValidator(config, formPicElement);
    imageAddValidator.enableValidation();

function closeOverleyPopup() {
    const popupList = Array.from(document.querySelectorAll('.popup'));
        
    popupList.forEach((popupItem) => {
    popupItem.addEventListener('mousedown', (event) => {
        if (event.target.classList.contains('popup') || event.target.classList.contains('popup__close-button')) {
                    closeWindow(popupItem);
                }
        });
    });
    }
    

getArray();
closeOverleyPopup();