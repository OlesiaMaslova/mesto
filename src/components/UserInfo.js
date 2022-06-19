export class UserInfo {
    constructor(userInfoSelector, aboutInfoSelector, userAvatarSelector) {
        this._userInfoElement = document.querySelector(userInfoSelector);
        this._aboutInfoElement = document.querySelector(aboutInfoSelector);
        this._userAvatarElement = document.querySelector(userAvatarSelector);
    }
    getUserInfo() {
        const userInfoValue = this._userInfoElement.textContent;
        const aboutInfoValue = this._aboutInfoElement.textContent;
        const userData = {name: userInfoValue, about: aboutInfoValue};
        return userData;
    }

    setUserInfo(data) {
        this._userInfoElement.textContent = data.name;
        this._aboutInfoElement.textContent = data.about;
        this._userAvatarElement.src = data.avatar;
        this.userId = data._id;
        
    }

    // setUserAvatar(data) {
    //     this._userAvatarElement.src = data.avatar;
        
    // }
}