import { useEffect, useState, useContext } from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/api.js';
import Card from "./Card.js";

function Main(props) {

  const [ cards, setCards ] = useState([]);

  const userData = useContext(CurrentUserContext);

  useEffect(() => {
    Promise.all([ api.getInitialCards() ])
      .then(res => {
        const [ cardsArray ] = res
        setCards(cardsArray);
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <main>
      <section className="profile container">
        <button
          style={{ backgroundImage: `url(${userData.avatar})` }}
          className="profile__btn-edit-avatar"
          onClick={() => props.onEditAvatar(true)}>
        </button>

        <div className="profile__info">
          <div className="profile__info-wrapper">
            <h1 className="profile__title">{userData.name}</h1>
            <button
              type="button"
              className="profile__edit-btn"
              onClick={() => props.onEditProfile(true)}>
            </button>
          </div>
          <h2 className="profile__subtitle">{userData.about}</h2>
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
              key={card._id}
              id={card._id}
              link={card.link}
              name={card.name}
              likes={card.likes}
              onCardClick={props.onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main
