import React from 'react';
import './MiddleCardFridge.css';
import { cn } from '@bem-react/classname';

const card = cn('Card');
const cardTop = cn('CardTop');
const cardBottom = cn('CardBottom');
const buttons = cn('Buttons');

function MiddleCardFridge(props) {
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
				<div className={buttons()}>
					<div className={buttons('ButtonYes')}>
						<div className={buttons('Choice')}>
							{props.event.data.buttons[0]}
						</div>
					</div>
					<div className={buttons('ButtonNo')}>
						<div className={buttons('Choice')}>
							{props.event.data.buttons[1]}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export { MiddleCardFridge };
