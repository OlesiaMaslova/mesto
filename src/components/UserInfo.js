export class UserInfo {
    constructor(userInfoSelector, aboutInfoSelector) {
        this._userInfoSelector = document.querySelector(userInfoSelector);
        this._aboutInfoSelector = document.querySelector(aboutInfoSelector);
    }
    getUserInfo() {
        const userInfoValue = this._userInfoSelector.textContent;
        const aboutInfoValue = this._aboutInfoSelector.textContent;
        const userData = {user: userInfoValue, about: aboutInfoValue};
        return userData;
    }

    setUserInfo(data) {
        this._userInfoSelector.textContent = data.user;
        this._aboutInfoSelector.textContent = data.about;
        
    }
}