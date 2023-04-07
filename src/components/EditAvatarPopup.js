import PopupWithForm from './PopupWithForm';
import { useFormValidation } from '../utils/useFormValidation';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const { values, errors, isValid, handleChange, resetValues, formRef } = useFormValidation()

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: values['profileAvatarLink'],
    });

    resetValues();
  }

  const errorClassName = (name) => `popup__input-error ${errors[name] ? 'popup__input-error_active' : ''}`

  return (
    <PopupWithForm
      ref={formRef}
      name='avatar'
      title='Обновить аватар'
      btnText='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}>
        <label className="popup__input-wrapper">
          <input
          type="url"
          id="input-link-avatar"
          name="profileAvatarLink"
          className="popup__input popup__input_type_avatar"
          placeholder="Ссылка на картинку"
          value={values['profileAvatarLink'] ?? ''}
          onChange={handleChange}
          required />
          <span className={errorClassName('profileAvatarLink')}>
            {errors['profileAvatarLink']}
          </span>
        </label>
    </PopupWithForm>
  )
}

export default EditAvatarPopup
