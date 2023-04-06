import { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';
import { useFormValidation } from '../utils/useFormValidation';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const { values, errors, isValid, handleChange, resetValues, setValue, formRef } = useFormValidation()
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    if (currentUser) {
      setValue('userName', currentUser.name);
      setValue('userDescription', currentUser.about);
    }
  }, [currentUser, setValue]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name: values['userName'],
      about: values['userDescription'],
    });
  }

  const errorClassName = (name) => `popup__input-error ${errors[name] ? 'popup__input-error_active' : ''}`

  const onClosePopup = () => {
    onClose();
    resetValues({
      'userName': currentUser.name,
      'userDescription': currentUser.about,
    });
  }

  return (
    <PopupWithForm
      ref={formRef}
      name='profile'
      title='Редактировать профиль'
      btnText='Сохранить'
      isOpen={isOpen}
      onClose={onClosePopup}
      onSubmit={handleSubmit}
      isValid={isValid}>
        <label className="popup__input-wrapper">
          <input
          type="text"
          id="input-name"
          name="userName"
          className="popup__input popup__input_type_name"
          placeholder="Введите ваше имя"
          minLength="2"
          maxLength="40"
          value={values['userName'] ?? ''}
          onChange={handleChange}
          required />
          <span className={errorClassName('userName')}>
            {errors['userName']}
          </span>
        </label>

        <label className="popup__input-wrapper">
          <input
          type="text"
          id="input-about"
          name="userDescription"
          className="popup__input popup__input_type_about"
          placeholder="Добавьте описание"
          minLength="2"
          maxLength="200"
          value={values['userDescription'] ?? ''}
          onChange={handleChange}
          required />
          <span className={errorClassName('userDescription')}>
            {errors['userDescription']}
          </span>
        </label>
    </PopupWithForm>
  )
}

export default EditProfilePopup
