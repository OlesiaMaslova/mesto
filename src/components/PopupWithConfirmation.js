import {Popup} from '../components/Popup.js'
export class PopupWithConfirmation extends Popup {
    constructor( popupSelector) {
        super(popupSelector);
        this._handleConfirmationSubmit = () => {};
        this._form = this._popup.querySelector('.popup__form');
    }
    
    setSubmitAction(action) {
        this._handleConfirmationSubmit = action;
      }
 
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleConfirmationSubmit();
        });
    }
 

}