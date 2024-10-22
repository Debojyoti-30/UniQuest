// UnivPrograms.js
import React from 'react';
//import './UnivPrograms.css';

const UnivPrograms = ({ programs }) => {
    return (
        <section id="programs">
            <h2>Featured Programs</h2>
            <div className="program-grid">
                {programs.map((program, index) => (
                    <div className="program-card" key={index}>
                        <h3>{program.name}</h3>
                        <p>{program.description}</p>
                        <button>Learn More</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default UnivPrograms;
