import React from 'react';
import './SmallCard.css';

function SmallCard(props) {
    return (
        <div className="card card_size-s">
            <div className="card_top">
                <img className="icons" alt="" src={`../assets/${props.event.icon}.svg`}></img>
                <div className="title">
                    {props.event.title}
                </div>
                <img className="cross" alt="" src="../assets/cross.svg"></img>
		    </div>
            <div className="devices" id="source">
                {props.event.source}
            </div>
            <div className="time" id="time">
                {props.event.time}
            </div>
            <div className="card_bottom">
                <div className="description_size-m">
                    {props.event.description}
                </div>
            </div>
	    </div>
    )
}

export {SmallCard};