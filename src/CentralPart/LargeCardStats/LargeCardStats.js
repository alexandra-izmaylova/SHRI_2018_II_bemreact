import React from 'react';
import './LargeCardStats.css';

function LargeCardStats(props) {
    return <div className="card card_size-l">
			<div className="card_top">
				<img className="icons" alt="" src={`../assets/${props.event.icon}.svg`} />
                <div className="title">
                    {props.event.title}
                </div>
				<img className="cross" alt="" src="../assets/cross.svg" />
			</div>
			<div className="devices_and_time">
				<div className="card-source" id="source">
					{props.event.source}
				</div>
				<div className="card-time" id="time">
					{props.event.time}
				</div>
			</div>
            <div className="description_size-l">
                {props.event.description}
            </div>
			<img className="chart" alt ="" src="../assets/Richdata.png" />
		</div>;
}

export {LargeCardStats};