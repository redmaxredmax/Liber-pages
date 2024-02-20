import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import style from "./layout.module.scss"
import { userData } from '../data'
import { UserInfo } from './user-info/user-info'

export const UserLayout = () => {
    return (
        <div>

            <main className='container'>
                <UserInfo />
                <div className={style.layout__wrapper}>
                    <div className={style.user__wrapper}>
                        <Link className={style.layout__link1} to="/user">Subscribe</Link>
                        <Link className={style.layout__link2} to="/user/account">Account</Link>
                        <Link className={style.layout__link3} to="/user/books">Books</Link>
                        <Link className={style.layout__link4} to="/user/settings">Settings</Link>
                        <Link className={style.layout__link5} to="/user/saved">Saved</Link>
                    </div>
                    <Outlet />
                </div>
            </main>
        </div>
    )
}
