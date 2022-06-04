export class FormValidator {
    constructor(config, form) {
        this._config = config;
        this._form = form;
    }

    _handleInputValidation(inputElement) {
        const input = inputElement;
        const errorNode = document.querySelector(`#${input.id}-error`);
    
        if(input.validity.valid) {
            errorNode.textContent = '';
            input.classList.remove(this._config.inputSelectorError);
        }
        else {
            errorNode.textContent = input.validationMessage;
            input.classList.add(this._config.inputSelectorError);
        }   
    }

    _setListenersInput(button) {
        const inputs = Array.from(this._form.querySelectorAll(this._config.inputSelector));
        
        inputs.forEach((inputElement) => {
            inputElement.addEventListener('input', (event) => {
            this._handleInputValidation(inputElement);
            this._toggleSubmitButtonDisabled();
            });
        });
    }
    _handleFormSubmit(event, button ) {
        event.preventDefault();
        this._toggleSubmitButtonDisabled();
    
    }
    _toggleSubmitButtonDisabled()  { 

        if(this._form.checkValidity()) {
            this._button.classList.remove(`${this._config.buttonSelectorError}`);
            this._button.disabled = false;
        }
        else {
            this._button.classList.add(`${this._config.buttonSelectorError}`);
            this._button.disabled = true;
        }
    }

    enableValidation() {
        
        this._button = this._form.querySelector(this._config.buttonSelector);
    
        this._toggleSubmitButtonDisabled();
       
        this._setListenersInput();  
    }
}