import React from 'react';
import { cn } from '@bem-react/classname';

const card = cn('Card');
const cardTop = cn('CardTop');
const cardBottom = cn('CardBottom');

function MiddleCriticalCardAc(props) {
	return (
		<div className={card({ size: 'm', type: 'critical' })}>
			<div className={cardTop()}>
				<img className={cardTop('Icon')} alt="" src={`/assets/${props.event.icon}.svg`} />
				<div className={cardTop('Title')}>
                    {props.event.title}
                </div>
				<img className={cardTop('Cross')} alt="" src="/assets/cross.svg" />
			</div>
			<div className={card('Info')}>
				<div>
					{props.event.source}
				</div>
				<div>
					{props.event.time}
				</div>
			</div>
            <div className={cardBottom()}>
                <div className={cardBottom('Description')}>
                    {props.event.description}
                </div>
            </div>
		</div>
	)
}

export { MiddleCriticalCardAc };