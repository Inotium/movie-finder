import React from 'react';
import { img_300, unavailable } from '../../config/config';
import Info from '../Info/Info';
import './MovieCard.css';

const MovieCard = ({
    id,
    poster,
    title,
    date,
    media_type
}) => {
    
    return (
        <Info media_type={media_type} id={id}>
            <img className='poster' src={poster ? `${img_300}/${poster}` : unavailable} alt={title}></img>
            <b className='title'>{title}</b>
            <span className='subtitle'>
                {media_type==="tv"?"TV Series":"Movie"}
                <span className='subtitle'>
                    {date}
                </span>
            </span>

        </Info>
    )
}

export default MovieCard
