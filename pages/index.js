let editButton = document.querySelector('.profile__edit-button');
let editWindow = document.querySelector('.popup');
let closeWindowButton = document.querySelector('.popup__close-button');

function OpenEditWindow() {
    editWindow.classList.add('popup_is_active');
}

editButton.addEventListener('click', OpenEditWindow);

function CloseEditWindow() {
    editWindow.classList.remove('popup_is_active');
}

closeWindowButton.addEventListener('click', CloseEditWindow);

let formElement = document.querySelector('.popup__form');


function formSubmitHandler (evt) {
    evt.preventDefault();

    let nameInput = document.querySelector('.popup__input_username');
    let jobInput = document.querySelector('.popup__input_job');
    let nameField = document.querySelector('.profile__name');
    let subnameField = document.querySelector('.profile__subname');
    nameField.textContent=nameInput.value;
    subnameField.textContent=jobInput.value;
  
}
formElement.addEventListener('submit', formSubmitHandler);