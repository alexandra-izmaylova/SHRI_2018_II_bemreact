import React from 'react';
import './Header.css';
import { Bem } from 'bem-react-core';

function Header() {
	const list = ['События', 'Сводка', 'Устройства', 'Сценарии'];
	const listItems = list.map(elem => (
		<Bem key={elem} block="List" elem="Item" tag="li">
			<a href="/">{elem}</a>
		</Bem>
	));
	return (
		<Bem block="Header" tag="header">
			<Bem block="Header" elem="Logo" />
			<Bem block="Header" elem="MenuIcon" htmlFor="menu" tag="label" />
			<Bem
				block="Header"
				elem="Menu"
				defaultChecked={false}
				id="menu"
				type="checkbox"
				tag="input"
			/>
			<Bem block="HeaderMenu" tag="nav">
				<Bem block="List" tag="ul">
					{listItems}
				</Bem>
			</Bem>
		</Bem>
	);
}

export { Header };
