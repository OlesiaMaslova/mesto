export class UserInfo {
    constructor(userInfoSelector, aboutInfoSelector) {
        this._userInfoElement = document.querySelector(userInfoSelector);
        this._aboutInfoElement = document.querySelector(aboutInfoSelector);
    }
    getUserInfo() {
        const userInfoValue = this._userInfoElement.textContent;
        const aboutInfoValue = this._aboutInfoElement.textContent;
        const userData = {user: userInfoValue, about: aboutInfoValue};
        return userData;
    }

    setUserInfo(data) {
        this._userInfoElement.textContent = data.user;
        this._aboutInfoElement.textContent = data.about;
        
    }
}