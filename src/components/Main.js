function Main() {
  function handleEditAvatarClick() {
    document.querySelector('[data-type="avatar-popup"]').classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    document.querySelector('[data-type="edit-popup"]').classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    document.querySelector('[data-type="add-popup"]').classList.add('popup_opened');
  }

  return (
    <main>
      <section className="profile container">
        <button
          className="profile__btn-edit-avatar"
          onClick={handleEditAvatarClick}>
          <img src="#" alt="#" className="profile__avatar" />
        </button>

        <div className="profile__info">
          <div className="profile__info-wrapper">
            <h1 className="profile__title">Заголовок</h1>
            <button
              type="button"
              className="profile__edit-btn"
              onClick={handleEditProfileClick}>
            </button>
          </div>
          <h2 className="profile__subtitle">Подзаголовок</h2>
        </div>
        <button
          type="button"
          className="profile__add-btn"
          onClick={handleAddPlaceClick}>
        </button>
      </section>

      <section className="cards container">
        <ul className="cards__list">
        </ul>
      </section>
    </main>
  )
}

export default Main
