(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r){var o=e.data,i=e.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_name",void 0),t(this,"_link",void 0),t(this,"_template",void 0),t(this,"_newCard",void 0),this._data=o,this._handleCardClick=i,this._templateSelector=r}var r,o;return r=n,(o=[{key:"_handleCardRemove",value:function(){this._newCard.remove()}},{key:"_toggleCardLike",value:function(){this._cardLikeButton.classList.toggle("card__like-button_active")}},{key:"getCard",value:function(){var e=this;return this._newCard=document.querySelector(this._templateSelector).content.cloneNode(!0).querySelector(".card"),this._cardLikeButton=this._newCard.querySelector(".card__like-button"),this._cardImage=this._newCard.querySelector(".card__image"),this._cardName=this._newCard.querySelector(".card__name"),this._cardDeleteButton=this._newCard.querySelector(".card__delete-button"),this._cardImage.src=this._data.link,this._cardImage.alt=this._data.name,this._cardName.textContent=this._data.name,this._cardDeleteButton.addEventListener("click",(function(){e._handleCardRemove()})),this._cardLikeButton.addEventListener("click",(function(){e._toggleCardLike()})),this._cardImage.addEventListener("click",(function(){return e._handleCardClick(e._data)})),this._newCard}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._form=n}var t,n;return t=e,(n=[{key:"_handleInputValidation",value:function(e){var t=e,n=document.querySelector("#".concat(t.id,"-error"));t.validity.valid?(n.textContent="",t.classList.remove(this._config.inputSelectorError)):(n.textContent=t.validationMessage,t.classList.add(this._config.inputSelectorError))}},{key:"_setListenersInput",value:function(e){var t=this;Array.from(this._form.querySelectorAll(this._config.inputSelector)).forEach((function(e){e.addEventListener("input",(function(n){t._handleInputValidation(e),t.toggleSubmitButtonDisabled()}))}))}},{key:"_handleFormSubmit",value:function(e,t){e.preventDefault(),this.toggleSubmitButtonDisabled()}},{key:"toggleSubmitButtonDisabled",value:function(){this._form.checkValidity()?(this._button.classList.remove("".concat(this._config.buttonSelectorError)),this._button.disabled=!1):(this._button.classList.add("".concat(this._config.buttonSelectorError)),this._button.disabled=!0)}},{key:"enableValidation",value:function(){this._button=this._form.querySelector(this._config.buttonSelector),this.toggleSubmitButtonDisabled(),this._setListenersInput()}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){var r,o,i=this,u=t.items,a=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(){i._items.forEach((function(e){i._renderer(e)}))},(r="renderItems")in this?Object.defineProperty(this,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[r]=o,this._items=u,this._renderer=a,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.closeWindow()},(n="_handleEscape")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"openWindow",value:function(){this._popup.classList.add("popup_is-active"),document.addEventListener("keydown",this._handleEscape)}},{key:"closeWindow",value:function(){this._popup.classList.remove("popup_is-active"),document.removeEventListener("keydown",this._handleEscape)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__close-button"))&&e.closeWindow()}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function p(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=y(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},d.apply(this,arguments)}function y(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(i,e);var t,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(n);if(r){var o=_(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return p(this,e)});function i(e){var t,n,r,u,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),a=function(e){n._popupImageCaption.textContent=e.name,n._popupImage.src=e.link,n._popupImage.alt=e.name,d((t=f(n),_(i.prototype)),"openWindow",t).call(t)},(u="openWindow")in(r=f(n=o.call(this,e)))?Object.defineProperty(r,u,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[u]=a,n._popupImageCaption=n._popup.querySelector(".popup__caption"),n._popupImage=n._popup.querySelector(".popup__image"),n}return t=i,Object.defineProperty(t,"prototype",{writable:!1}),t}(c);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},v.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function S(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t)).handleFormSubmit=e,n._form=n._popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__input"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;v(k(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e.handleFormSubmit(e._getInputValues())}))}},{key:"closeWindow",value:function(){v(k(u.prototype),"closeWindow",this).call(this),this._form.reset()}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c);function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userInfoElement=document.querySelector(t),this._aboutInfoElement=document.querySelector(n)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{user:this._userInfoElement.textContent,about:this._aboutInfoElement.textContent}}},{key:"setUserInfo",value:function(e){this._userInfoElement.textContent=e.user,this._aboutInfoElement.textContent=e.about}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),C=(document.querySelector(".popup__image"),document.querySelector(".popup__caption"),document.querySelector(".popup_type_image"),document.querySelector(".profile__edit-button")),P=(document.querySelector(".popup_type_edit"),document.querySelector(".profile__add-button")),L=(document.querySelector(".popup_type_new-card"),document.querySelector(".popup__form_userinfo")),q=document.querySelector(".popup__form_picture"),I=document.querySelector(".popup__input_username"),R=document.querySelector(".popup__input_job"),x=(document.querySelector(".profile__name"),document.querySelector(".profile__subname"),document.querySelector(".popup__input_picture-name"),document.querySelector(".popup__input_picture-link"),document.querySelector(".gallery__list"),{inputSelector:".popup__input",buttonSelector:".popup__submit-button",buttonSelectorError:"popup__submit-button_type_block",inputSelectorError:".popup__input_type_error"}),B=new u({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){B.addItem(A(e))}},".gallery__list");new o(x,L).enableValidation();var D=new o(x,q);D.enableValidation();var W=new j(".profile__name",".profile__subname"),T=new b(".popup_type_image"),V=new O((function(e){W.setUserInfo(e),V.closeWindow()}),".popup_type_edit"),U=new O((function(e){B.addItem(A(e)),U.closeWindow()}),".popup_type_new-card"),A=function(e){return new n({data:e,handleCardClick:function(){T.openWindow(e)}},".template__card").getCard()};C.addEventListener("click",(function(){var e=W.getUserInfo();I.value=e.user,R.value=e.about,V.openWindow()})),P.addEventListener("click",(function(){D.toggleSubmitButtonDisabled(),U.openWindow()})),B.renderItems(),T.setEventListeners(),V.setEventListeners(),U.setEventListeners()})();