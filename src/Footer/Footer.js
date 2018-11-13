import React from 'react';
import './Footer.css';

function Footer() {
    const list = ['Помощь','Обратная связь','Разработчикам','Условия использования'];
    const listItem = list.map(elem => <li key={elem}><a href="/">{elem}</a></li>);
    return (
        <footer>
            <nav>
                <ul>
                    {listItem}
                </ul>
            </nav>
            <p>© 2001-2018 ООО "Яндекс"</p>
        </footer>
    )
}

export {Footer};