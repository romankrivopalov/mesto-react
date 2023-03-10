import { useEffect, useState } from "react";
import api from '../utils/Api.js';

function Main(props) {

  const [ userAvatar, setUserAvatar ] = useState(null),
        [ userName, setUserName ] = useState(null),
        [ userDescription, setUserDescription ] = useState(null);

  useEffect(() => {
    api.getUserInfo()
      .then(userData => {
        setUserAvatar(userData.avatar);
        setUserName(userData.name);
        setUserDescription(userData.about);
      })
      .catch(err => console.log(err));
  })

  return (
    <main>
      <section className="profile container">
        <button
          style={{ backgroundImage: `url(${userAvatar})` }}
          className="profile__btn-edit-avatar"
          onClick={() => props.onEditAvatar(true)}>
        </button>

        <div className="profile__info">
          <div className="profile__info-wrapper">
            <h1 className="profile__title">{userName}</h1>
            <button
              type="button"
              className="profile__edit-btn"
              onClick={() => props.onEditProfile(true)}>
            </button>
          </div>
          <h2 className="profile__subtitle">{userDescription}</h2>
        </div>
        <button
          type="button"
          className="profile__add-btn"
          onClick={() => props.onAddPlace(true)}>
        </button>
      </section>

      <section className="cards container">
        <ul className="cards__list">
        </ul>
      </section>
    </main>
  )
}

export default Main
