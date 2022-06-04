import {Popup} from './Popup.js'
export class PopupWithForm extends Popup {
    constructor(handleFormSubmit, popupSelector) {
        super(popupSelector);
        this.handleFormSubmit = handleFormSubmit;
        this._form = this._popupSelector.querySelector('.popup__form');
    }


    _getInputValues() {
       const inputs = this._form.querySelectorAll('.popup__input');
       if (this._form.classList.contains('popup__form_picture')) {
       const name = inputs[0].value;
       const link = inputs[1].value;
       return {name, link};
       } else {
        const user = inputs[0].value;
        const about = inputs[1].value;
        return {user, about};
       }
    }
   

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.handleFormSubmit();

        });
    }
    closeWindow() {
        super.closeWindow();
        this._form.reset()
    }
}