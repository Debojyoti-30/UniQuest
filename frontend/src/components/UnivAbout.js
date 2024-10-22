// UnivAbout.js
import React from 'react';
//import './UnivAbout.css';

const UnivAbout = ({ about }) => {
    return (
        <section id="about">
            <h2>About Us</h2>
            <p>{about}</p>
        </section>
    );
};

export default UnivAbout;
