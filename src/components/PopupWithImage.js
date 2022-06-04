import {Popup} from './Popup.js';
export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
   
    }


    openWindow = (data) => {
            document.querySelector('.popup__caption').textContent = data.name;
            document.querySelector('.popup__image').src = data.link;
    
            super.openWindow();
    
        }
    
    }
