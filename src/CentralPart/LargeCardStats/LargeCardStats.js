import React from 'react';
import './LargeCardStats.css';
import { cn } from '@bem-react/classname';

const card = cn('Card');
const cardTop = cn('CardTop');

function LargeCardStats(props) {
	return <div className={card({ size: 'l'})}>
			<div className={cardTop()}>
				<img className={cardTop('Icon')} alt="" src={`/assets/${props.event.icon}.svg`} />
                <div className={cardTop('Title')}>
                    {props.event.title}
                </div>
				<img className={cardTop('Cross')}  alt="" src="/assets/cross.svg" />
			</div>
			<div className={card('Info')}>
				<div>
					{props.event.source}
				</div>
				<div>
					{props.event.time}
				</div>
			</div>
            <div className={card('Description')}>
                {props.event.description}
            </div>
			<img className={card('Chart')} alt ="" src="/assets/Richdata.png" />
		</div>;
}

export {LargeCardStats};