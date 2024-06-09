import React, { useEffect } from 'react';

const GreenSubpage = ({ onClose }) => {
    useEffect(() => {
        const progressBar = document.querySelector('.partial-progress-bar');
        setTimeout(() => {
            progressBar.style.width = '15%';
        }, 100); // delay to ensure the transition is visible
    }, []);

    return (
        <div className="side-panel">
            <button className="close-btn" onClick={onClose}>×</button>
            <div className="subpage-content">
                <h2 className="subpage-title mb-6 mt-8 text-center">Visual Interfaces</h2>
                <div className="progress-bar">
                    <div className="partial-progress-bar">15%</div>
                </div>

                <p className="subpage-subtitle mt-6 mb-5 text-center">Building AR Glasses from Scratch</p>
                <p className="subpage-text-bold">Project Overview & Goals</p>
                <p className="subpage-text mb-4">
                    Most DIY AR headset projects + even some commercial products are limited: they can act as voice assistants and display basic text/ numbers, but aren't able to show images or visuals.
                </p>

                <p className="subpage-text mb-4">
                    My goal is to build AR glasses that have the following features:
                    <ul>
                        <li><span className="subpage-text-bold">Voice and Proactive Agent Abilities:</span> An AI agent similar to Siri that I can talk to on the headset. It should also be proactive, listening to what I’m talking about and researching relevant information to display on the screen.</li>
                        <li><span className="subpage-text-bold">Image and Visual Display:</span> The ability to display images and visuals, not just text or numbers. This will probably involve some form of holography.</li>
                    </ul>
                </p>
                <p className="subpage-text mb-4">
                    Target completion: June 25
                </p>

                <p className="subpage-text-bold">Timeline</p>

                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-arrow">→</div>
                        <div className="timeline-content">Planning + Procurement</div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-arrow">→</div>
                        <div className="timeline-content">3D Printing</div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-arrow">→</div>
                        <div className="timeline-content">Assembly</div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-arrow">→</div>
                        <div className="timeline-content">Software</div>
                    </div>
                </div>

                <p className="subpage-text-bold mb-1">Latest Update</p>
                <p className="subpage-text-date mb-1">June 8th— </p>

                <p className="subpage-text mb-4">
                    I have almost all of the hardware components figured out, except for the visual lens display. The main challenge now is determining how to effectively display images. Currently reading papers on tensor holography, computer-generated holography, etc + understanding how 3D projectors work to see if I can replicate one of these technologies on a smaller scale to display images.
                </p>
            </div>
        </div>
    );
};

export default GreenSubpage;
