
export class Card {
    _name;
    _link;
    _template;
    _newCard;
    constructor ({data, myId, handleCardClick, handleCardRemove, handleCardLike, handleCardDislike}, templateSelector) {
        this._data = data;
        this._handleCardClick = handleCardClick;
        this._handleCardRemove = handleCardRemove;
        this._handleCardLike = handleCardLike;
        this._handleCardDislike = handleCardDislike;
        this._templateSelector = templateSelector;
        this._ownerId = myId;
        this._cardId = data._id;
        this._id = data.owner._id;
    }

    _setDeleteButtonState() {
        if(this._id !== this._ownerId) {
            this._cardDeleteButton.classList.add('card__delete-button_state_hidden');
        } else {
            this._cardDeleteButton.classList.remove('card__delete-button_state_hidden');
        }
    }

    _checklike() {
        let isLiked = this._data.likes.find(like => like._id === this._ownerId);
            if(isLiked) {
                this._cardLikeButton.classList.add('card__like-button_active');
               
            } 
        
    }

    _setLikeAction() {
        
        let isLiked = this._data.likes.find(like => like._id === this._ownerId);
        
        if(isLiked) {
            this._handleCardDislike(this._data);
          
        } else {
            this._handleCardLike(this._data);
        }
    }


    addLikeButtonState() {
        this._cardLikeButton.classList.add('card__like-button_active');
    }

    removeLikeButtonState() {
        this._cardLikeButton.classList.remove('card__like-button_active');
    }
   
    

    setLikesState(data) {
        this._likeCounter.textContent = data.likes.length;
    }

    _setEventListeners() {
        this._cardDeleteButton.addEventListener('click', () => {
            this._handleCardRemove();
        });
        this._cardLikeButton.addEventListener('click', () => {
             this._setLikeAction();   
        });

        this._cardImage.addEventListener('click', () => this._handleCardClick(this._data));
    }



    getCard() {
        this._newCard = document.querySelector(this._templateSelector).content.cloneNode(true).querySelector('.card');
        this._cardLikeButton = this._newCard.querySelector('.card__like-button');
        this._cardImage = this._newCard.querySelector('.card__image');
        this._cardName = this._newCard.querySelector('.card__name');
        this._cardDeleteButton = this._newCard.querySelector('.card__delete-button');
        this._likeCounter = this._newCard.querySelector('.card__like-counter');
        this._cardImage.src = this._data.link;
        this._cardImage.alt = this._data.name;
        this._cardName.textContent = this._data.name;

        this._setEventListeners();
    
        this._setDeleteButtonState();
        
        
        this._likeCounter.textContent = this._data.likes.length;
        this._checklike();
        
      
        return this._newCard;
    }

}