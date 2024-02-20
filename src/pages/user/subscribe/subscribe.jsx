import React from 'react'
import style from "./subscribe.module.scss"
export const Subscribe = () => {
  return (
    <div data-aos="zoom-in">
      <div  className={style.subscribe__block}>
        <h3 className={style.subscribe__block_title}>
          Узингиз севган булимга обуна бўлинг
        </h3>
      </div>
      <div className={style.subscribe__wrapper}>
        <div className={style.subscribe_box}>
        <h3 className={style.subscribe__wrapper_title}>
          Обуна
        </h3>
          <h3 className={style.subscribe__name}>Обуна давом этиш вакти</h3>
          <form className={style.subscribe__form}>
            <input className={style.subscribe__input} type="text" placeholder='30 кун' />
            <select className={style.subscribe__sel}>
              <option value="30 кун"></option>
              <option value="45 кун">45 кун</option>
              <option value="60 кун">60 кун</option>
            </select>
          </form>
          <h3 className={style.subscribe__name}>Булимни танланг</h3>
          <form className={style.subscribe__form}>
            <input className={style.subscribe__input} type="text" placeholder='Фантастика' />
            <select className={style.subscribe__sel}>
              <option></option>
              <option></option>
              <option></option>
            </select>
          </form>
          <p className={style.subscribe__time}>
            Обуна 30 кун давом этади
          </p>
        </div>
        <div className={style.box}>
          <div className={style.block}>
            <div className={style.wrapper}>
              <p className={style.text}>Бошланиш вакти</p>
              <p className={style.data}>12/09/2021</p>
            </div>
            <div className={style.wrapper}>
              <p className={style.text}>Якунланиш вакти</p>
              <p className={style.data}>12/10/2021</p>
            </div>
            <div className={style.wrapper}>
              <p className={style.text}>Обуна нархи</p>
              <p className={style.cost}>12 000 сум</p>
            </div>
          </div>
          <button className={style.button}>Обуна булиш</button>
        </div>
      </div>
    </div>
  )
}
