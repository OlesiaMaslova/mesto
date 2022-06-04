import {Popup} from './Popup.js';
export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImageCaption = this._popup.querySelector('.popup__caption');
        this._popupImage =  this._popup.querySelector('.popup__image');
   
    }


    openWindow = (data) => {
            this._popupImageCaption.textContent = data.name;
            this._popupImage.src = data.link;
            this._popupImage.alt = data.name;
    
            super.openWindow();
    
        }
    
    }
