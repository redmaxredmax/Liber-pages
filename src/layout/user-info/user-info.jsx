import React from 'react'
import { userData } from '../../data'
import style from "./user.module.scss"
export const UserInfo = () => {
    return (

        <div>
            {userData.map((item) =>
                <div key={item.id} className={style.user__wrapper}>
                    <div className={style.user__img}>
                        <img src={item.img} alt="img" />
                    </div>
                    <div className={style.user__info}>
                        <h2 className={style.user__title}>{item.name}</h2>
                        <p className={style.user__num}>{item.number}</p>
                        <span className={style.user__id}>{item.identification}</span>
                        <span className={style.user__id}>{item.balans}</span>
                    </div>
                </div>
            )}
        </div>
    )
}
