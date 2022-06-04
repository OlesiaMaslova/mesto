
export class Card {
    _name;
    _link;
    _template;
    _newCard;
    constructor ({data, handleCardClick}, templateSelector) {
        this._data = data;
        this._handleCardClick = handleCardClick;
        this._templateSelector = templateSelector;
    }

    _handleCardRemove() {
        this._newCard.remove();
    }
    _toggleCardLike() {
        this._cardLikeButton.classList.toggle('card__like-button_active');
    } 
    

    getCard() {
        this._newCard = document.querySelector(this._templateSelector).content.cloneNode(true).querySelector('.card');
        this._cardLikeButton = this._newCard.querySelector('.card__like-button');
        this._cardImage = this._newCard.querySelector('.card__image');
        this._cardName = this._newCard.querySelector('.card__name');
        this._cardDeleteButton = this._newCard.querySelector('.card__delete-button');
        this._cardImage.src = this._data.link;
        this._cardImage.alt = this._data.name;
        this._cardName.textContent = this._data.name;

        this._cardDeleteButton.addEventListener('click', () => {
            this._handleCardRemove();
        });
        this._cardLikeButton.addEventListener('click', () => {
            this._toggleCardLike();
        });
        this._cardImage.addEventListener('click', () => this._handleCardClick(this._data));


        return this._newCard;
    }

}