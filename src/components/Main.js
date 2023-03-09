function Main(props) {

  return (
    <main>
      <section className="profile container">
        <button
          className="profile__btn-edit-avatar"
          onClick={() => {props.onEditAvatar(true)}}>
          <img src="#" alt="#" className="profile__avatar" />
        </button>

        <div className="profile__info">
          <div className="profile__info-wrapper">
            <h1 className="profile__title">Заголовок</h1>
            <button
              type="button"
              className="profile__edit-btn"
              onClick={() => {props.onEditProfile(true)}}>
            </button>
          </div>
          <h2 className="profile__subtitle">Подзаголовок</h2>
        </div>
        <button
          type="button"
          className="profile__add-btn"
          onClick={() => {props.onAddPlace(true)}}>
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
