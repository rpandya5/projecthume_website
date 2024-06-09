import React from 'react';
import neuralImg from '../assets/neural_img.png';

const PinkSubpage = ({ onClose }) => (
    <div className="side-panel" >
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="subpage-content"> {/* New container for padding */}
            <h2 className="subpage-title mb-6 mt-8 text-center">Neural Interfaces</h2>
            <div className="progress-bar">
                <div className="incomplete-progress-bar">0%</div>
            </div>
            <p className="subpage-subtitle mt-6 mb-5 text-center">This project is coming soon!</p>
            <p className="subpage-text-bold">Project Overview & Goals</p>
            <p className="subpage-text mb-4">
                This project is currently in its early planning stages. Details will be added soon :)
            </p>
            <p className="subpage-text mb-6">
                Have any suggestions or ideas? <a href="mailto:richapandya273@gmail.com" className="email-link">Shoot me an email.</a>
            </p>
            <img src={neuralImg} alt="Neural Interfaces" className="neural-img" />
        </div>
    </div>
);

export default PinkSubpage;
