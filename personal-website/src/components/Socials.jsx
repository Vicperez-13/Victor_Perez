import React from 'react';
import './socials.css';

const Socials = () => {
    return (
        <div className="socials">
            <h2 className="socials__title">Connect with Me</h2>
            <ul className="socials__list">
                <li className="socials__item">
                    <a className="socials__link" href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </li>
                <li className="socials__item">
                    <a className="socials__link" href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
                </li>
                <li className="socials__item">
                    <a className="socials__link" href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">Instagram</a>
                </li>
                <li className="socials__item">
                    <a className="socials__link" href="mailto:youremail@example.com">Email</a>
                </li>
            </ul>
        </div>
    );
};

export default Socials;