function PopupWithForm(props) {
  return (
    <section data-type={`${props.name}-popup`} className={!props.isOpen ? "popup" : "popup popup_opened"}>
      <div className="popup__container">
        <button type="button" className="popup__close"></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={`${props.name}-form`} noValidate>
          {props.children}
          <button type="submit" className="popup__submit-btn">{props.btnText}</button>
        </form>
      </div>
    </section>
  )
}

export default PopupWithForm
