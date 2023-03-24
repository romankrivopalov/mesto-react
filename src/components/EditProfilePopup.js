import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);

  const [ name, setName ] = useState({}),
        [ description, setDescription ] = useState({});

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName({ target }) {
    const text = target.value;
    setName(text);
  }

  function handleChangeDescription({ target }) {
    const text = target.value;
    setDescription(text);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name='profile'
      title='Редактировать профиль'
      btnText='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
        <label className="popup__input-wrapper">
          <input
          type="text"
          id="input-name"
          name="name"
          className="popup__input popup__input_type_name"
          placeholder="Введите ваше имя"
          minLength="2"
          maxLength="40"
          value={name || ''}
          onChange={handleChangeName}
          required />
          <span className="popup__input-error input-name-error"></span>
        </label>

        <label className="popup__input-wrapper">
          <input
          type="text"
          id="input-about"
          name="about"
          className="popup__input popup__input_type_about"
          placeholder="Добавьте описание"
          minLength="2"
          maxLength="200"
          value={description || ''}
          onChange={handleChangeDescription}
          required />
          <span className="popup__input-error input-about-error"></span>
        </label>
    </PopupWithForm>
  )
}

export default EditProfilePopup
