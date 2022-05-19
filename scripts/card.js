import { popupPic, popupPicCaption, popupPicWindow, openWindow} from './utils.js'

export class Card {
    _name;
    _link;
    _template;
    _newCard;
    constructor(name, link, templateSelector) {
        this._name = name;
        this._link = link;
        this._templateSelector = templateSelector;
    }

    _handleCardRemove() {
        this._newCard.remove();
    }
    _toggleCardLike() {
        this._newCard.querySelector('.card__like-button').classList.toggle('card__like-button_active');
    }
    _handlePicPopup() {
        openWindow(popupPicWindow);
       
        popupPic.src = this._link;
        popupPicCaption.textContent = this._name;
        popupPic.alt = this._name;
    }
    getCard() {
        this._newCard = document.querySelector(this._templateSelector).content.cloneNode(true).querySelector('.card');
        this._newCard.querySelector('.card__image').src = this._link;
        this._newCard.querySelector('.card__image').alt = this._name;
        this._newCard.querySelector('.card__name').textContent = this._name;

        this._newCard.querySelector('.card__delete-button').addEventListener('click', () => {
            this._handleCardRemove();
        });
        this._newCard.querySelector('.card__like-button').addEventListener('click', () => {
            this._toggleCardLike();
        });
        this._newCard.querySelector('.card__image').addEventListener('click', () => {
            this._handlePicPopup();
            
        });


        return this._newCard;
    }

}