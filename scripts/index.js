const editButton = document.querySelector('.profile__edit-button');
const editWindow = document.querySelector('.popup');
const closeWindowButton = document.querySelector('.popup__close-button');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_username');
const jobInput = document.querySelector('.popup__input_job');
const nameField = document.querySelector('.profile__name');
const subnameField = document.querySelector('.profile__subname');

function openEditWindow() {
    editWindow.classList.add('popup_is-active');
    nameInput.value = nameField.textContent;
    jobInput.value = subnameField.textContent;
}

editButton.addEventListener('click', openEditWindow);

function closeEditWindow() {
    editWindow.classList.remove('popup_is-active');
}

closeWindowButton.addEventListener('click', closeEditWindow);


function formSubmitHandler (evt) {
    evt.preventDefault();

    nameField.textContent=nameInput.value;
    subnameField.textContent=jobInput.value;

    closeEditWindow();
}

formElement.addEventListener('submit', formSubmitHandler);