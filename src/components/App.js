import { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [ currentUser, setCurrentUser ] = useState({}),
        [ isEditAvatarPopupOpen, setIsEditAvatarPopupOpen ] = useState(false),
        [ isEditProfilePopupOpen, setIsEditProfilePopupOpen ] = useState(false),
        [ isAddPlacePopupOpen, setIsAddPlacePopupOpen ] = useState(false),
        [ selectedCard, setSelectedCard ] = useState({name: '', link: ''}),
        allSetsPopupOpen = [setIsEditAvatarPopupOpen, setIsEditProfilePopupOpen, setIsAddPlacePopupOpen ];

  const [ cards, setCards ] = useState([]);

  useEffect(() => {
    Promise.all([ api.getUserInfo(), api.getInitialCards() ])
      .then(res => {
        const [ userData, cardsArray ] = res;
        setCards(cardsArray);
        setCurrentUser(userData);
      })
      .catch(err => console.log(err));
  }, [])

  function closeAllPopups() {
    allSetsPopupOpen.forEach(item => item(false));
    setSelectedCard({name: '', link: ''});
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(isLiked, card.id)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card.id ? newCard : c));
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">

        <Header />
        <Main
          onEditAvatar={setIsEditAvatarPopupOpen}
          onEditProfile={setIsEditProfilePopupOpen}
          onAddPlace={setIsAddPlacePopupOpen}
          cards={cards}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          />
        <Footer />

        <PopupWithForm
          name='avatar'
          title='Обновить аватар'
          btnText='Сохранить'
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}>
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
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}>
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
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}>
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

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />

        <section data-type="confirm-popup" className="popup">
          <div className="popup__container">
            <button type="button" className="popup__close"></button>
            <h2 className="popup__title">Вы уверены?</h2>
            <button type="button" className="popup__submit-btn popup__submit-btn_place_confirm">Да</button>
          </div>
        </section>

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
