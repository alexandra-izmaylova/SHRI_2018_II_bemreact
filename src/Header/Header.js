import React from 'react';
import './Header.css';
import { Bem } from '@bem-react/core';
import { cn } from '@bem-react/classname';

const header = cn('Header');


function Header() {
    const list = ['События','Сводка','Устройства','Сценарии'];
    const listItems = list.map(elem => <li key={elem} className={header('MenuItem')}><a href="/">{elem}</a></li>);
    return <Bem block="Header" tag="header">
			<Bem block="Header" elem="Logo" />
			<Bem block="Header" elem="MenuIcon" htmlFor="menu" tag="label" />
			<Bem block="Header" elem="Menu" defaultChecked={false} id="menu" type="checkbox" tag="input" />
			<Bem block="Nav" tag="nav">
				<Bem block="Nav" elem="List" tag="ul">
					{listItems}
				</Bem>
			</Bem>
		</Bem>;
}



export {Header}