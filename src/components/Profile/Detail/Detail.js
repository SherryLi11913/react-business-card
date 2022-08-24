import React from 'react';
import './Detail.css';

function Detail(props) {
    return (
        <div className="profile-detail-container">
            <h2 className="profile-detail-heading">{props.detail.heading}</h2>
            <p className="profile-detail-description">{props.detail.description}</p>
        </div>
    )
}

export default Detail;