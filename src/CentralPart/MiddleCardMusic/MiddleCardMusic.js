import React from 'react';
import './MiddleCardMusic.css';
import { cn } from '@bem-react/classname';

const card = cn('Card');
const cardTop = cn('CardTop');
const music = cn('Music');
const songAndRange = cn('SongAndRange');
const details = cn('Details');
const controlPanel = cn('ControlPanel');

function MiddleCardMusic(props) {
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
			<div className={music()}>
				<img alt="" src="/assets/album-cover.png" />
				<div className={songAndRange()}>
					<div className={songAndRange('NameOfTheSong')}>
						{`${props.event.data.artist} - ${
							props.event.data.track.name
						}`}
					</div>
					<div className={songAndRange('RangeAndTime')}>
						<input
							type="range"
							min="0"
							max="271"
							step="2"
							defaultValue="50"
							className="range"
						/>
						<div className={details()}>
							{props.event.data.track.length}
						</div>
					</div>
				</div>
			</div>
			<div className={controlPanel()}>
				<img
					className={controlPanel('KeyPrev')}
					alt=""
					src="/assets/Prev.svg"
				/>
				<img
					className={controlPanel('KeyNext')}
					alt=""
					src="/assets/Prev.svg"
				/>
				<input
					type="range"
					min="0"
					max="271"
					step="2"
					defaultValue="50"
					className="range_1"
				/>
				<div className={details()}>
					{`${props.event.data.volume} %`}
				</div>
			</div>
		</div>
	);
}

export { MiddleCardMusic };
