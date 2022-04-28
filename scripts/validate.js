function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector));

    formList.forEach((formElement) => {
        const button = formElement.querySelector(config.buttonSelector);

        toggleSubmitButtonDisabled(formElement, config, button);
        formElement.addEventListener('submit', (event) => handleFormSubmit(event, formElement, config, button));
        setListenersInput(formElement, config, button);  
    });
}

function handleFormSubmit(event, formElement, config, button ) {
    event.preventDefault();
    toggleSubmitButtonDisabled(formElement, config, button);

}

function setListenersInput(formElement, config, button) {
    const inputs = Array.from(formElement.querySelectorAll(config.inputSelector));
    
    inputs.forEach((inputElement) => {
        inputElement.addEventListener('input', (event) => {
        handleInputValidation(event, config, formElement);
        toggleSubmitButtonDisabled(formElement, config, button);
        });
    });
}

 function handleInputValidation(event, config, formElement) {
    const input = event.target;
    const errorNode = document.querySelector(`#${input.id}-error`);

    if(input.validity.valid) {
        errorNode.textContent = '';
        input.classList.remove(config.inputSelectorError);
    }
    else {
        errorNode.textContent = input.validationMessage;
        input.classList.add(config.inputSelectorError);
    }   
}


function toggleSubmitButtonDisabled(formElement, config, button)  { 

    if(formElement.checkValidity()) {
        button.classList.remove(`${config.buttonSelectorError}`);
        button.disabled = false;
    }
    else {
        button.classList.add(`${config.buttonSelectorError}`);
        button.disabled = true;
    }

}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    buttonSelector: '.popup__submit-button',
    buttonSelectorError: 'popup__submit-button_type_block',
    inputSelectorError: '.popup__input_type_error',
})
