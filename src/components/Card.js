function Card(card) {
  function handleClick() {
    card.onCardClick(card);
  }

  return (
    <li className="card">
      <img
        src={card.link}
        alt={card.name}
        className="card__img"
        onClick={handleClick}/>
      <h2 className="card__title">{card.name}</h2>
      <button type="button" className="card__delete"></button>
      <div className="card__like-container">
        <button type="button" className="card__like-icon"></button>
        <div className="card__like-counter">{card.counter}</div>
      </div>
    </li>
  )
}

export default Card
