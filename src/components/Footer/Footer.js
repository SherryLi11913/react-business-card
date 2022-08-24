import react from 'react';
import './Footer.css';
import TwitterIcon from '../../assets/twitter.png';
import FacebookIcon from '../../assets/facebook.png';
import InsIcon from '../../assets/instagram.png';
import GithubIcon from '../../assets/github.png';

function Footer(props) {
    return (
        <div className="footer-container">
            <a href={props.twitter}>
                <div className="footer-icon-container">
                    <img src={TwitterIcon} className="footer-icon" />
                </div>
            </a>

            <a href={props.facebook}>
                <div className="footer-icon-container">
                    <img src={FacebookIcon} className="footer-icon" />
                </div>
            </a>

            <a href={props.instagram}>
                <div className="footer-icon-container">
                    <img src={InsIcon} className="footer-icon" />
                </div>
            </a>

            <a href={props.github}>
                <div className="footer-icon-container">
                    <img src={GithubIcon} className="footer-icon" />
                </div>
            </a>
        </div>
    );
}

export default Footer;