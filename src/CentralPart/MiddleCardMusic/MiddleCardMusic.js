import React from 'react';
import './MiddleCardMusic.css';


function MiddleCardMusic(props) {
    return (
        <div className="card card_size-m">
            <div className="card_top">
                <img className="icons" alt="" src={`/assets/${props.event.icon}.svg`} />
                <div className="title">
                    {props.event.title}
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
            <div className="description_size-m">
                {props.event.description}
            </div>
            <div className="music">
                <img className="album-cover" alt="" src="/assets/album-cover.png"></img>
                    <div className="song_and_range">
                    <div className="name_of_the_song">
                        {`${props.event.data.artist} - ${props.event.data.track.name}`} 
                    </div>
                        <div className="range_and_time">
                            <input type="range" min="0" max="271" step="2" defaultValue="50" className="range" />
                                <div className="details">
                                    {props.event.data.track.length}
                                </div>
				        </div>
                    </div>
            </div>
            <div className="control_panel">
                <img className="key prev" alt="" src="/assets/Prev.svg" />
                <img className="key next" alt="" src="/assets/Prev.svg" />
                <input type="range" min="0" max="271" step="2" defaultValue="50" className="range_1" />
                <div className="details">
                    {`${props.event.data.volume} %`}
                </div>
		    </div>
        </div>
    )
}

export { MiddleCardMusic };