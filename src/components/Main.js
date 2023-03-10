import { useEffect, useState } from "react";
import api from '../utils/Api.js';
import Card from "./Card.js";

function Main(props) {

  const [ userAvatar, setUserAvatar ] = useState(''),
        [ userName, setUserName ] = useState(''),
        [ userDescription, setUserDescription ] = useState(''),
        [ cards, setCards ] = useState([]);

  useEffect(() => {
    Promise.all([ api.getUserInfo(), api.getInitialCards() ])
      .then(res => {
        const [ userData, cardsArray ] = res
        setUserAvatar(userData.avatar);
        setUserName(userData.name);
        setUserDescription(userData.about);
        setCards(cardsArray);
      })
      .catch(err => console.log(err));
  }, [])

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
          {cards.map(card => (
            <Card
              id={card._id}
              link={card.link}
              name={card.name}
              counter={card.likes.length}
              onCardClick={props.onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main
