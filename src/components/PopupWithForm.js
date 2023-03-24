function PopupWithForm({
  name,
  title,
  btnText,
  isOpen,
  onClose,
  onSubmit,
  children
  }) {

  return (
    <section
      data-type={`${name}-popup`}
      className={!isOpen ? "popup" : "popup popup_opened"}
      onClick={({ target }) => {
        if (target.classList.contains('popup_opened') || target.classList.contains('popup__close')) {
          onClose();
        }
      }}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          onClick={() => onClose()}>
        </button>
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form"
          name={`${name}-form`}
          onSubmit={onSubmit}
          noValidate>
          {children}
          <button type="submit" className="popup__submit-btn">{btnText}</button>
        </form>
      </div>
    </section>
  )
}

export default PopupWithForm
