function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (event) => handleFormSubmit(event, formElement, config));
        SetListenersInput(formElement, config);
        toggleSubmitButtonDisabled(formElement, config);
    });
}

function handleFormSubmit(event, formElement, config) {
    event.preventDefault();
    toggleSubmitButtonDisabled(formElement, config);
}

function SetListenersInput(formElement, config) {
    let inputs = Array.from(formElement.querySelectorAll(config.inputSelector));
    inputs.forEach((inputElement) => {
        inputElement.addEventListener('input', (event) => handleInputValidation(event, config, formElement))
    });
}

 function handleInputValidation(event, config, formElement) {
    const input = event.target;
    const errorNode = document.querySelector(`#${input.id}-error`);

    if(input.validity.valid) {
        errorNode.textContent = '';
        input.classList.remove('popup__input_type_error');
    }
    else {
        errorNode.textContent = input.validationMessage;
        input.classList.add('popup__input_type_error');
    }
    toggleSubmitButtonDisabled(formElement, config);
    
}

function toggleSubmitButtonDisabled(formElement, config)  {
        const button = formElement.querySelector(config.buttonSelector);
        button.disabled = !formElement.checkValidity();
    
        button.classList.toggle('popup__submit-button_type_block', !formElement.checkValidity());  
    }
    

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    buttonSelector: '.popup__submit-button',
});
