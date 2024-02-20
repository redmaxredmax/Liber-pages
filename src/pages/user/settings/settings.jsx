import React from 'react'
import style from "./settings.module.scss"
import send from "/public/send_icon.png"
import icon from "/public/settings.svg"
export const Settings = () => {
  return (
    <div data-aos="zoom-in" className={style.settings__block}>
      <h2 className={style.settings__title}>Созламалар</h2>
      <div className={style.setting__box}>
        <img src={icon} alt="icon" />
        <button className={style.settings__btn}>Сурат юклаш</button>
      </div>
      <h3 className={style.settings__name}>Исмингиз</h3>
      <form className={style.settings__form}>
        <input placeholder="Исмингиз" type="text" className={style.settings__input} />
        <button className={style.settings__send}>
          <img src={send} alt="icon" />
        </button>
      </form>
      <button className={style.settings__save}>Сақлаш</button>
    </div>

  )
}
