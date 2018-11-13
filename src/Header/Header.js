import React from 'react';
import './Header.css';
import { cn } from '@bem-react/classname';

const logo = cn('Logo');
const menuIcon = cn('MenuIcon');
const menu = cn('Menu');

function Header() {
    const list = ['События','Сводка','Устройства','Сценарии'];
    const listItems = list.map(elem => <li key={elem}><a href="/">{elem}</a></li>);
    return (
        <header>
            <div className={logo()}></div>
            <label htmlFor="menu" className={menuIcon()}></label>
            <input type="checkbox" className={menu()} defaultChecked={false} id="menu"></input>
            <nav>
                <ul>
                    {listItems}
                </ul>
            </nav>
        </header>
    )
}



export {Header}