function Card(props) {
  function handleClick() {
    props.onCardClick({
      name: props.name,
      link: props.link
    });
  }

  return (
    <li className="card" key={2}>
      <img
        src={props.link}
        alt={props.name}
        className="card__img"
        onClick={handleClick}/>
      <h2 className="card__title">{props.name}</h2>
      <button type="button" className="card__delete"></button>
      <div className="card__like-container">
        <button type="button" className="card__like-icon"></button>
        <div className="card__like-counter">{props.counter}</div>
      </div>
    </li>
  )
}

export default Card
