import React from 'react';
import './LargeCriticalCardCam.css';

function LargeCriticalCardCam (props) {
    return <div className="card card_size-l card_type-critical">
			<div className="card_top">
				<img className="icons" alt="" src="../assets/cam.svg" />
				<div className="title">{props.event.title}</div>
				<img className="cross" alt="" src="../assets/cross-white.svg" />
			</div>
			<div className="devices_and_time">
				<div className="card-source" id="source">
					{props.event.source}
				</div>
				<div className="card-time" id="time">
					{props.event.time}
				</div>
			</div>
			<div className="card corpus">
				<div className="description">{props.event.description}</div>
				<div className="container_image">
					<img className="camera" alt="" src="../assets/image.jpg" />
				</div>
				<div className="user_tools">
					<div className="brightness">
						<div className="brightness_name" id="brightness_feedback">
							Яркость:&nbsp;100%
						</div>
					</div>
					<div className="zoom">
						<div className="zoom_name" id="zoom_feedback">
							Масштаб:&nbsp;1.0
						</div>
					</div>
				</div>
			</div>
		</div>;
}

export { LargeCriticalCardCam };