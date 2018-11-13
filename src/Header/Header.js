import React from 'react';
import './Header.css';

function Header() {
    const list = ['События','Сводка','Устройства','Сценарии'];
    const listItems = list.map(elem => <li key={elem}><a href="/">{elem}</a></li>);
    return (
        <header>
            <div className="logo"></div>
            <label htmlFor="menu" className="menu_icon"></label>
            <input type="checkbox" className="menu"></input>
            <nav>
                <ul>
                    {listItems}
                </ul>
            </nav>
        </header>
    )
}



export {Header}