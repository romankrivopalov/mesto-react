import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />

      <section data-type="avatar-popup" className="popup">
        <div className="popup__container">
          <button type="button" className="popup__close"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form" name="avatar-form" noValidate>

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

            <button type="submit" className="popup__submit-btn">Сохранить</button>
          </form>
        </div>
      </section>

      <section data-type="edit-popup" className="popup">
        <div className="popup__container">
          <button type="button" className="popup__close"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form" name="profile-form" noValidate>
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

            <button type="submit" className="popup__submit-btn">Сохранить</button>
          </form>
        </div>
      </section>

      <section data-type="add-popup" className="popup">
        <div className="popup__container">
          <button type="button" className="popup__close"></button>
          <h2 className="popup__title">Новое место</h2>
          <form className="popup__form" name="card-form" noValidate>
            <label className="popup__input-wrapper">
              <input
              type="text"
              id="input-img-title"
              name="name"
              className="popup__input popup__input_type_name"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required />
              <span className="popup__input-error input-img-title-error"></span>
            </label>

            <label className="popup__input-wrapper">
              <input
              type="url"
              id="input-link"
              name="link"
              className="popup__input popup__input_type_about"
              placeholder="Ссылка на картинку"
              required />
              <span className="popup__input-error input-link-error"></span>
            </label>

            <button type="submit" className="popup__submit-btn">Создать</button>
          </form>
        </div>
      </section>

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
