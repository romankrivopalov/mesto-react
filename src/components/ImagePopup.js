function ImagePopup() {
  return (
    <section data-type="img-popup" className="popup popup_type_show-img">
      <div className="popup__container-img">
        <button type="button" className="popup__close"></button>
        <img src="#" alt="" className="popup__img" />
        <h2 className="popup__title popup__title_type_show-img">тест</h2>
      </div>
    </section>
  )
}

export default ImagePopup
