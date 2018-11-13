import React from 'react';
import './Footer.css';
import { Bem } from 'bem-react-core';

function Footer() {
	const list = [
		'Помощь',
		'Обратная связь',
		'Разработчикам',
		'Условия использования'
	];
	const listItem = list.map(elem => (
		<Bem key={elem} block="List" elem="Item" tag="li">
			<a href="/">{elem}</a>
		</Bem>
	));
	return (
		<Bem block="Footer" tag="footer">
			<Bem block="Footer" elem="Nav" tag="nav">
				<Bem block="List" tag="ul">
					{listItem}
				</Bem>
			</Bem>
			<Bem block="Footer" elem="P" tag="p">
				© 2001-2018 ООО "Яндекс"
			</Bem>
		</Bem>
	);
}

export { Footer };
