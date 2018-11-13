import React from 'react';
import './MiddleCardFridge.css';


function MiddleCardFridge(props) {
    return <div className="card card_size-m">
			<div className="card_top">
				<img className="icons" alt=""  src={`../assets/${props.event.icon}.svg`} />
				<div className="title">{props.event.titte}</div>
			<img className="cross" alt=""  src="../assets/cross.svg" />
			</div>
			<div className="devices_and_time">
				<div className="card-source" id="source">
					{props.event.source}
				</div>
				<div className="card-time" id="time">
					{props.event.time}
				</div>
			</div>
			<div className="description_size-m">
				{props.event.description}
			</div>
			<div className="card_bottom">
				<div className="buttons">
					<div className="button button-yes">
						<div className="choice">
							{props.event.data.buttons[0]}
						</div>
					</div>
					<div className="button button-no">
						<div className="choice">
							{props.event.data.buttons[1]}
						</div>
					</div>
				</div>
			</div>
		</div>;
}
        
export {MiddleCardFridge};