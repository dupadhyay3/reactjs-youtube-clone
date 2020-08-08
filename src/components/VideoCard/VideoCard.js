import React from 'react';
import './VideoCard.scss';
import Avatar from '@material-ui/core/Avatar';

function VideoCard({ thumbnail, title, views, timestamp, chanelName, chanelAvtar }) {
    return (
        <div className="videoCard">
            <img className="videoCard__thumbnail" src={thumbnail} alt=""/>
            <div className="videoCard__details">
                <Avatar src={chanelAvtar} alt={chanelName} className="videoCard__chanelAvtar"/>
                <div className="videoCard__info">
                    <h4>{title}</h4>
                    <p className="videoCard__chanelName">{chanelName}</p>
                    <p className="videoCard__misc">
                        <span>{views}</span> • <span>{timestamp}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
