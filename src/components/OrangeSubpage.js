import React, { useEffect } from 'react';

const OrangeSubpage = ({ onClose }) => {
    useEffect(() => {
        const progressBar = document.querySelector('.partial-progress-bar');
        setTimeout(() => {
            progressBar.style.width = '45%';
        }, 100); // delay to ensure the transition is visible
    }, []);

    return (
        <div className="side-panel">
            <button className="close-btn" onClick={onClose}>×</button>
            <div className="subpage-content">
                <h2 className="subpage-title mb-6 mt-8 text-center">Visual Interfaces</h2>
                <div className="progress-bar">
                    <div className="partial-progress-bar">45%</div>
                </div>

                <p className="subpage-subtitle mt-6 mb-5 text-center">A smart retainer to control my computer hands-free
                </p>
                <p className="subpage-text-bold">Project Overview & Goals</p>
                <p className="subpage-text mb-4">
                    I was inspired by a company called Augmental: their product, called MouthPad, is a smart retainer designed for individuals with quadriplegia to control their devices. Motivated by their work, I decided to create my own open-source version of their product.
                </p>

                <p className="subpage-text mb-4">
                    My goal is to develop an open-source smart retainer that enables users with limited mobility to control their computers hands-free. This device functions almost like a mini trackpad inside your mouth, and would essentially allow you to control your cursor only with your tongue. I also hope to implement click functionality with bites (ex. left bite = left click) with EMG sensors.
                </p>
                <p className="subpage-text-bold mb-2">Timeline</p>

                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-arrow">→</div>
                        <div className="timeline-content">Planning + Procurement</div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-arrow">→</div>
                        <div className="timeline-content">PCB Design + Manufacturing</div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-arrow">→</div>
                        <div className="timeline-content">Assembly</div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-arrow">→</div>
                        <div className="timeline-content">Software Integration</div>
                    </div>
                </div>
                <p className="subpage-text mb-4 mt-0">
                    Target completion: July 5
                </p>

                <p className="subpage-text-bold mb-1">Latest Update</p>
                <p className="subpage-text-date mb-1">June 8th— </p>
                <p className='subpage-text'><ul>
                    <li>I've already purchased all the components I need to build this project</li>
                    <li>Did a crash course in PCB design and designed my first PCB as a flexible PCB (ensures the device can fit comfortably inside your mouth)</li>
                    <li>Custom PCB is currently being manufactured + all SMD components are being assembled. I should have the board by June 24th</li>
                    <li>Did some research on biocompatible materials and figured out how to make the PCB non-toxic by adding conformal coating + overmolding the device in food-grade silicone</li>
                </ul></p>
            </div>
        </div>
    );
};
export default OrangeSubpage;
