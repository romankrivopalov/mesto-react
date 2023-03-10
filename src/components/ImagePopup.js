function ImagePopup({ card, onClose}) {

  return (
    <section
      data-type="img-popup"
      className={!card.link
        ? "popup popup_type_show-img"
        : "popup popup_type_show-img popup_opened"}>
      <div className="popup__container-img">
        <button
          type="button"
          className="popup__close"
          onClick={() => onClose()}>
        </button>
        <img src={card.link} alt={card.name} className="popup__img" />
        <h2 className="popup__title popup__title_type_show-img">{card.name}</h2>
      </div>
    </section>
  )
}

export default ImagePopup
