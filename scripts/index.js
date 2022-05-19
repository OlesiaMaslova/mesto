import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {initialCards, buttonEdit, windowEdit, buttonAdd, windowAdd, formPicElement, formUserElement, nameField, jobInput, nameInput, subnameField, imgLinkInput, imgNameInput, cardContainer, config, openWindow, closeWindow, handleEscape} from './utils.js';


function handleFormUserSubmit (event) {
    event.preventDefault();

    nameField.textContent=nameInput.value;
    subnameField.textContent=jobInput.value;

    closeWindow(windowEdit);
}

function handleFormPicSubmit(event) {
    event.preventDefault();
    
  const element =  render(
        imgNameInput.value,
        imgLinkInput.value, 
        '.template__card')
        setCard(element);

    closeWindow(windowAdd);
    
    formPicElement.reset();
}

function getArray() {
    initialCards.forEach((item) => {
       const element = render(item.name, item.link, '.template__card');
       setCard(element); 
    });
}


function render (name, link, templateSelector) {
    const newItem = new Card(name, link, templateSelector);
    const element = newItem.getCard();
    return element;
}

function setCard(element) {
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