export class Api {
    constructor(url, cohortId, token) { 
        this._url = url;
        this._token = token;
        this._cohortId = cohortId;
    }

    setInitialState() {
       return Promise.all([this.getInitialCards(), this.getUserInfo()]);
    }

    getInitialCards() {
        return fetch(`${this._url}/${this._cohortId}/cards`, {
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
            if(res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        });
    }
    getUserInfo() {
        return fetch(`${this._url}/${this._cohortId}/users/me`, {
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
            if(res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        })
    }
    updateUserInfo(data) {
        return fetch(`${this._url}/${this._cohortId}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                about: data.about
              })
        })
        .then((res) => {
            if(res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        }) 
    }
    updateUserAvatar(data) {
        return fetch(`${this._url}/${this._cohortId}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar:data.avatar
              })
        })
        .then((res) => {
            if(res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        }) 
    }
    

    postNewCard(data) {
        return fetch(`${this._url}/${this._cohortId}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                link: data.link
              })
        }) 
        .then((res) => {
            if(res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        }) 
    }  

    deleteCard(data) {
        return fetch(`${this._url}/${this._cohortId}/cards/${data._id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        }) 
        .then((res) => {
            if(res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        }) 
    }

    addLike(data) {
        return fetch(`${this._url}/${this._cohortId}/cards/${data._id}/likes`, {
            method: 'PUT',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        }) 
        .then((res) => {
            if(res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        }) 
    }
    removeLike(data) {
        return fetch(`${this._url}/${this._cohortId}/cards/${data._id}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        }) 
        .then((res) => {
            if(res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Ошибка: ${res.status}`);
            }
        }) 
    }
}