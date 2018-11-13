import React from 'react';


function MiddleCriticalCardAc(props) {
	return (
        <div className="card card_size-m card_type-critical">
			<div className="card_top">
				<img className="icons" alt="" src={`/assets/${props.event.icon}.svg`} />
                <div className="title">
                    {props.event.titte}
                </div>
				<img className="cross" alt="" src="/assets/cross.svg" />
			</div>
			<div className="devices_and_time">
				<div className="card-source" id="source">
					{props.event.source}
				</div>
				<div className="card-time" id="time">
					{props.event.time}
				</div>
			</div>
            <div className="card corpus card_bottom">
                <div className="description">
                    {props.event.description}
                </div>
            </div>
		</div>
	)
}

export { MiddleCriticalCardAc };