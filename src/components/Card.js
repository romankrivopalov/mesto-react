function Card(props) {
  return (
    <li className="card" key={props.id}>
      <img
        src={props.link}
        alt={props.name}
        className="card__img" />
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
