import React from 'react';
import './Profile.css';
import emailIcon from '../../assets/email.png';
import linkedinIcon from '../../assets/linkedin.png';
import Detail from './Detail/Detail';

function mailto(email) {
    return `mailto:${email}`;
}

function Profile(props) {
    return (
        <div className="profile-container">
            <div class="profile-intro">
                <h1 className="profile-name">{props.name}</h1>
                <h3 className="profile-job">{props.job}</h3>
                <a className="profile-website" href={props.website}>
                    {props.website}
                </a>
            </div>

            <div className="profile-buttons-container">
                <a href={mailto(props.email)}>
                    <div className="profile-button profile-email-button">
                        <img src={emailIcon} className="profile-button-icon"/>
                        <span>Email</span>
                    </div>
                </a>

                <a href={props.linkedin}>
                    <div className="profile-button profile-linkedin-button">
                        <img src={linkedinIcon} className="profile-button-icon"/>
                        <span>LinkedIn</span>
                    </div>
                </a>
            </div>

            <div className="profile-details-container">
                <Detail detail={props.about}/>
                <Detail detail={props.interests}/>
            </div>
        </div>
    );
}

export default Profile;