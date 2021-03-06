import React, { Component } from 'react';
import { Footer } from '../Footer/Footer.js';
import './CentralPart.css';
import './Card.css';
import Events from './events.json';
import { LargeCardStats } from './LargeCardStats/LargeCardStats.js';
import { LargeCriticalCardCam } from './LargeCriticalCardCam/LargeCriticalCardCam.js';
import { MiddleCardFridge } from './MiddleCardFridge/MiddleCardFridge.js';
import { MiddleCardMusic } from './MiddleCardMusic/MiddleCardMusic.js';
import { MiddleCardThermal } from './MiddleCardThermal/MiddleCardThermal.js';
import { MiddleCriticalCardAc } from './MiddleCriticalCardAc/MiddleCriticalCardAc.js';
import { SmallCard } from './SmallCard/SmallCard.js';
import { cn } from '@bem-react/classname';

const centralPart = cn('CentralPart');
const mainPart = cn('MainPart');

const eventsInfo = Events.events;

class CentralPart extends Component {
	render() {
		const event = eventsInfo.map((event, index) => {
			if (event.size === 's')
				return <SmallCard event={event} key={index} />;
			if (event.icon === 'stats')
				return <LargeCardStats event={event} key={index} />;
			if (event.icon === 'thermal')
				return <MiddleCardThermal event={event} key={index} />;
			if (event.icon === 'ac')
				return <MiddleCriticalCardAc event={event} key={index} />;
			if (event.icon === 'music')
				return <MiddleCardMusic event={event} key={index} />;
			if (event.icon === 'fridge')
				return <MiddleCardFridge event={event} key={index} />;
			if (event.icon === 'cam')
				return <LargeCriticalCardCam event={event} key={index} />;
			return null;
		});
		return (
			<div className={centralPart()}>
				<main>
					<div className={mainPart()}>
						<div className={mainPart('NewsLine')}>
							Лента событий
						</div>
						<div className={mainPart('Container')}>{event}</div>
					</div>
				</main>
				<Footer />
			</div>
		);
	}
}

export { CentralPart };
