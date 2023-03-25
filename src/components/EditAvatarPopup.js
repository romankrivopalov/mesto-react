import { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: inputRef.current.value
    });
  }

  return (
    <PopupWithForm
      name='avatar'
      title='Обновить аватар'
      btnText='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
        <label className="popup__input-wrapper">
          <input
          type="url"
          id="input-link-avatar"
          name="link"
          className="popup__input popup__input_type_avatar"
          placeholder="Ссылка на картинку"
          ref={inputRef}
          required />
          <span className="popup__input-error input-link-avatar-error"></span>
        </label>
    </PopupWithForm>
  )
}

export default EditAvatarPopup
