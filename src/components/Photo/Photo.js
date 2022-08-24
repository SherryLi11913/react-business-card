import React from 'react';
import ProfilePhoto from '../../assets/profilePhoto.png';
import './Photo.css';

function Photo() {
    return (
        <div className="photo-container">
            <img className="photo" src={ProfilePhoto} />
        </div>
    )
}

export default Photo;