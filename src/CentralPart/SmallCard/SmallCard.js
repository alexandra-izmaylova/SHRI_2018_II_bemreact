import React from 'react';
import './SmallCard.css';
import { cn } from '@bem-react/classname';

const card = cn('Card');
const cardTop = cn('CardTop');
const cardBottom = cn('CardBottom');

function SmallCard(props) {
	return (
		<div className={card({ size: 's' })}>
			<div className={cardTop()}>
				<img
					className={cardTop('Icon')}
					alt=""
					src={`/assets/${props.event.icon}.svg`}
				/>
				<div className={cardTop('Title')}>{props.event.title}</div>
				<img
					className={cardTop('Cross')}
					alt=""
					src="/assets/cross.svg"
				/>
			</div>
			<div className={card('Source')}>{props.event.source}</div>
			<div className={card('Time')}>{props.event.time}</div>
			<div className={cardBottom()}>
				<div className={cardBottom('Description')}>
					{props.event.description}
				</div>
			</div>
		</div>
	);
}

export { SmallCard };
