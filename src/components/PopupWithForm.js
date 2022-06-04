import {Popup} from './Popup.js'
export class PopupWithForm extends Popup {
    constructor(handleFormSubmit, popupSelector) {
        super(popupSelector);
        this.handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__input');
    }


    _getInputValues() {
       
        this._formValues = {};

        this._inputList.forEach(input => {
          this._formValues[input.name] = input.value;
        });
      
        
        return this._formValues;
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