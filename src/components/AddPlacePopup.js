import { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const inputNameRef = useRef(),
        inputLinkRef = useRef();

  useEffect(() => {
    inputNameRef.current.value = '';
    inputLinkRef.current.value = '';
  }, [isOpen])

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: inputNameRef.current.value,
      link: inputLinkRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name='card'
      title='Новое место'
      btnText='Создать'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
        <label className="popup__input-wrapper">
          <input
          type="text"
          id="input-img-title"
          name="name"
          className="popup__input popup__input_type_name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          ref={inputNameRef}
          required />
          <span className="popup__input-error input-img-title-error"></span>
        </label>

        <label className="popup__input-wrapper">
          <input
          type="url"
          id="input-link"
          name="link"
          className="popup__input popup__input_type_about"
          placeholder="Ссылка на картинку"
          ref={inputLinkRef}
          required/>
          <span className="popup__input-error input-link-error"></span>
        </label>
    </PopupWithForm>
  )
}

export default AddPlacePopup
