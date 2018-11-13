import React from 'react';
import './MiddleCardThermal.css';
import { cn } from '@bem-react/classname';

const card = cn('Card');
const cardTop = cn('CardTop');
const cardBottom = cn('CardBottom');

function MiddleCardThermal(props) {
	return (
		<div className={card({ size: 'm' })}>
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
			<div className={card('Info')}>
				<div>{props.event.source}</div>
				<div>{props.event.time}</div>
			</div>
			<div className={card('Description')}>{props.event.description}</div>
			<div className={cardBottom()}>
				<div className={cardBottom('LeftPart')}>
					<div>Температура:&nbsp;</div>
					<div className={cardBottom('LeftPart', { exact: 'data' })}>
						{props.event.data.temperature}
					</div>
				</div>
				<div className={cardBottom('RightPart')}>
					<div>Влажность:&nbsp;</div>
					<div className={cardBottom('RightPart', { exact: 'data' })}>
						{props.event.data.humidity}
					</div>
				</div>
			</div>
		</div>
	);
}

export { MiddleCardThermal };
