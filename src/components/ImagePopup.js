function ImagePopup(props) {
  return (
    <section
      data-type="img-popup"
      className={!props.card
        ? "popup popup_type_show-img"
        : "popup popup_type_show-img popup_opened"}>
      <div className="popup__container-img">
        <button
          type="button"
          className="popup__close"
          onClick={() => props.onClose()}>
        </button>
        <img src={props.card.link} alt={props.card.name} className="popup__img" />
        <h2 className="popup__title popup__title_type_show-img">{props.card.name}</h2>
      </div>
    </section>
  )
}

export default ImagePopup
