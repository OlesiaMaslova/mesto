export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }
    _handleEscape = (event) => {
        if(event.key === 'Escape') {
        
        this.closeWindow();
        }
    }
    openWindow ()  {
        this._popup.classList.add('popup_is-active');
        document.addEventListener('keydown', this._handleEscape);
    }
    closeWindow () {
        this._popup.classList.remove('popup_is-active');
        document.removeEventListener('keydown',this._handleEscape);
    }
    setEventListeners () {
        this._popup.addEventListener('mousedown', (event) => {
            if (event.target.classList.contains('popup') || event.target.classList.contains('popup__close-button')) {
                   this.closeWindow();
                }
        });
     
    }
}