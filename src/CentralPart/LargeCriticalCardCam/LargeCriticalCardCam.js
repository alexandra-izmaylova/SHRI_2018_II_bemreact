import React from 'react';
import './LargeCriticalCardCam.css';
import { cn } from '@bem-react/classname';

const card = cn('Card');
const cardTop = cn('CardTop');
const cardBottom = cn('CardBottom');
const containerImage = cn('ContainerImage');

function LargeCriticalCardCam(props) {
	return (
		<div className={card({ size: 'l', type: 'critical' })}>
			<div className={cardTop()}>
				<img className={cardTop('Icon')} alt="" src="/assets/cam.svg" />
				<div className={cardTop('Title')}>{props.event.title}</div>
				<img
					className={cardTop('Cross')}
					alt=""
					src="/assets/cross-white.svg"
				/>
			</div>
			<div className={card('Info')}>
				<div>{props.event.source}</div>
				<div>{props.event.time}</div>
			</div>
			<div className={cardBottom('Corpus')}>
				<div className={cardBottom('Description')}>
					{props.event.description}
				</div>
				<div className={containerImage()}>
					<img
						className={containerImage('Camera')}
						alt=""
						src="/assets/image.jpg"
					/>
				</div>
			</div>
		</div>
	);
}

export { LargeCriticalCardCam };
