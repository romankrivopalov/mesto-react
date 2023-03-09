import { useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';

function App() {
  const [ isEditAvatarPopupOpen, setIsEditAvatarPopupOpen ] = useState(false),
        [ isEditProfilePopupOpen, setIsEditProfilePopupOpen ] = useState(false),
        [ isAddPlacePopupOpen, setIsAddPlacePopupOpen ] = useState(false);

  return (
    <div className="App">

      <Header />
      <Main
        onEditAvatar={setIsEditAvatarPopupOpen}
        onEditProfile={setIsEditProfilePopupOpen}
        onAddPlace={setIsAddPlacePopupOpen}
        />
      <Footer />

      <PopupWithForm
        name='avatar'
        title='Обновить аватар'
        btnText='Сохранить'
        isOpen={isEditAvatarPopupOpen}>
          <label className="popup__input-wrapper">
            <input
            type="url"
            id="input-link-avatar"
            name="link"
            className="popup__input popup__input_type_avatar"
            placeholder="Ссылка на картинку"
            required />
            <span className="popup__input-error input-link-avatar-error"></span>
          </label>
      </PopupWithForm>

      <PopupWithForm
        name='profile'
        title='Редактировать профиль'
        btnText='Сохранить'
        isOpen={isEditProfilePopupOpen}>
          <label className="popup__input-wrapper">
            <input
            type="text"
            id="input-name"
            name="name"
            className="popup__input popup__input_type_name"
            placeholder="Введите ваше имя"
            minLength="2"
            maxLength="40"
            required />
            <span className="popup__input-error input-name-error"></span>
          </label>

          <label className="popup__input-wrapper">
            <input
            type="text"
            id="input-about"
            name="about"
            className="popup__input popup__input_type_about"
            placeholder="Добавьте описание"
            minLength="2"
            maxLength="200"
            required />
            <span className="popup__input-error input-about-error"></span>
          </label>
      </PopupWithForm>

      <PopupWithForm
        name='card'
        title='Новое место'
        btnText='Создать'
        isOpen={isAddPlacePopupOpen}>
          <label className="popup__input-wrapper">
            <input
            type="text"
            id="input-name"
            name="name"
            className="popup__input popup__input_type_name"
            placeholder="Введите ваше имя"
            minLength="2"
            maxLength="40"
            required />
            <span className="popup__input-error input-name-error"></span>
          </label>

          <label className="popup__input-wrapper">
            <input
            type="text"
            id="input-about"
            name="about"
            className="popup__input popup__input_type_about"
            placeholder="Добавьте описание"
            minLength="2"
            maxLength="200"
            required />
            <span className="popup__input-error input-about-error"></span>
          </label>
      </PopupWithForm>

      <section data-type="img-popup" className="popup popup_type_show-img">
        <div className="popup__container-img">
          <button type="button" className="popup__close"></button>
          <img src="#" alt="" className="popup__img" />
          <h2 className="popup__title popup__title_type_show-img">тест</h2>
        </div>
      </section>

      <section data-type="confirm-popup" className="popup">
        <div className="popup__container">
          <button type="button" className="popup__close"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <button type="button" className="popup__submit-btn popup__submit-btn_place_confirm">Да</button>
        </div>
      </section>

      <template id="card">
        <li className="card">
          <img alt=" Изображение загруженное пользователем." className="card__img" />
          <h2 className="card__title">Заголовок</h2>
          <button type="button" className="card__delete"></button>
          <div className="card__like-container">
            <button type="button" className="card__like-icon"></button>
            <div className="card__like-counter"></div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
