import { forwardRef } from 'react';

const PopupWithForm = forwardRef(({
  name,
  title,
  btnText,
  isOpen,
  onClose,
  onSubmit,
  children,
  isValid
  }, ref) => {

  return (
    <section
      data-type={`${name}-popup`}
      className={`popup ${!isOpen ? '' : 'popup popup_opened'}`}
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
          ref={ref}
          className="popup__form"
          name={`${name}-form`}
          onSubmit={onSubmit}
          noValidate>
          {children}
          <button
            type="submit"
            className={`popup__submit-btn ${isValid ? '' : 'popup__submit-btn_inactive'}`}
            disabled={isValid ? false : true}>
              {btnText}
          </button>
        </form>
      </div>
    </section>
  )
})

export default PopupWithForm
