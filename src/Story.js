import React from 'react';
import { Avatar } from '@material-ui/core'
import "./Story.css"

function Story({ image, profileSrc, title }) {
    return (
        <div
            style={{ backgroundImage: `url(${image})`, backgroudRepeat: "no-repeat" }}
            className='story'>
            <Avatar className='story__avatar' src={profileSrc} />
            <h4>{title}</h4>

        </div>
    );
}

export default Story;