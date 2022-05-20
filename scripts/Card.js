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
        this._cardLikeButton.classList.toggle('card__like-button_active');
    }
    _handlePicPopup() {
        
        popupPic.src = this._link;
        popupPicCaption.textContent = this._name;
        popupPic.alt = this._name;
        openWindow(popupPicWindow);
    }
    getCard() {
        this._newCard = document.querySelector(this._templateSelector).content.cloneNode(true).querySelector('.card');
        this._cardLikeButton = this._newCard.querySelector('.card__like-button');
        this._cardImage = this._newCard.querySelector('.card__image');
        this._cardName = this._newCard.querySelector('.card__name');
        this._cardDeleteButton = this._newCard.querySelector('.card__delete-button');
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._cardName.textContent = this._name;

        this._cardDeleteButton.addEventListener('click', () => {
            this._handleCardRemove();
        });
        this._cardLikeButton.addEventListener('click', () => {
            this._toggleCardLike();
        });
        this._cardImage.addEventListener('click', () => {
            this._handlePicPopup();
            
        });


        return this._newCard;
    }

}