import React from 'react';
import './MiddleCardThermal.css';


function MiddleCardThermal(props) {
    return <div className="card card_size-m">
			<div className="card_top">
				<img className="icons" alt="" src={`/assets/${props.event.icon}.svg`} />
				<div className="title">{props.event.title}</div>
				<img className="cross" alt=""  src="/assets/cross.svg" />
			</div>
			<div className="devices_and_time">
				<div className="card-source" id="source">
					{props.event.source}
				</div>
				<div className="card-time" id="time">
					{props.event.time}
				</div>
			</div>
			<div className="description_size-m">{props.event.description}</div>
			<div className="card_bottom">
				<div className="left_flex">
					<div>Температура:&nbsp;</div>
					<div className="exact_data">
						{props.event.data.temperature}
					</div>
				</div>
				<div className="right_flex">
					<div>Влажность:&nbsp;</div>
					<div className="exact_data">{props.event.data.humidity}</div>
				</div>
			</div>
		</div>;
}
        
export {MiddleCardThermal};