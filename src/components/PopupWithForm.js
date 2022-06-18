import {Popup} from './Popup.js'
export class PopupWithForm extends Popup {
    constructor(handleFormSubmit, popupSelector) {
        super(popupSelector);
        this.handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__input');
        this._submitButton = this._form.querySelectorAll('.popup__submit-button');
        this._loaderMssg = 'Сохранение...';
        this._defaultButtonMssg = this._submitButton[0].textContent;
    }


    _getInputValues() {
       
        this._formValues = {};

        this._inputList.forEach(input => {
          this._formValues[input.name] = input.value;
        });
      
        
        return this._formValues;
    }
   
    setSubmitLoader(isLoading) {
        if(isLoading) {
           this._submitButton[0].textContent = this._loaderMssg;
        } else {
            this._submitButton[0].textContent = this._defaultButtonMssg;
        }
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.handleFormSubmit(this._getInputValues());
            

        });
    }
    closeWindow() {
        
        super.closeWindow();
        this._form.reset();
    }
    
}