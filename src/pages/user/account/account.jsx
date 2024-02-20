import React from 'react'
import style from "./account.module.scss"
import payme from "/public/payme.svg"
import click from "/public/click.svg"
export const Account = () => {
  return (
    <div data-aos="zoom-in" className={style.account__block}>
      <h2 className={style.account__title}>Э-Хисоб</h2>
      <div className={style.account__box}>
        <p className={style.account__text}>Баланс</p>
        <p className={style.account__cost}>45 000 сўм</p>
      </div>
      <button className={style.account__button}>
        <img className={style.account__btn_img} src={payme} alt="img" />
      </button>
      <button className={style.account__button}>
        <img className={style.account__btn_img} src={click} alt="img" />
      </button>
    </div>
  )
}
