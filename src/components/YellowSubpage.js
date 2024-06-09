import React, { useEffect } from 'react';

const YellowSubpage = ({ onClose }) => {
    useEffect(() => {
        const progressBar = document.querySelector('.partial-progress-bar');
        setTimeout(() => {
            progressBar.style.width = '10%';
        }, 100); // delay to ensure the transition is visible
    }, []);

    return (
        <div className="side-panel">
            <button className="close-btn" onClick={onClose}>×</button>
            <div className="subpage-content">
                <h2 className="subpage-title mb-6 mt-8 text-center">Visual Interfaces</h2>
                <div className="progress-bar">
                    <div className="partial-progress-bar">10%</div>
                </div>

                <p className="subpage-subtitle mt-6 mb-5 text-center">Detecting/ Predicting Falls through Gait Analysis
                </p>
                <p className="subpage-text-bold">Project Overview & Goals</p>
                <p className="subpage-text mb-4">
                    Falls are a leading cause of injury within the elderly, and they result in more than 3 million emergency department visits annually, with over 800,000 hospitalizations and around 38,000 deaths each year in the United States.
                </p>

                <p className="subpage-text mb-4">
                    For this project, I'm working with a team to create a system that analyzes gait patterns to detect and predict falls. Our goal is to build a hybrid CNN-LSTM model that accurately predicts falls from accelerometer and gyroscope readings from a wearable device (for the MVP, this would probably be a small microcontroller).
                </p>
                <p className="subpage-text-bold mb-2">Timeline</p>

                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-arrow">→</div>
                        <div className="timeline-content">Planning</div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-arrow">→</div>
                        <div className="timeline-content">Model Architecture Development</div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-arrow">→</div>
                        <div className="timeline-content">Hardware Integration + Testing</div>
                    </div>
                </div>
                <p className="subpage-text mb-4 mt-0">
                    Target completion: August 10
                </p>

                <p className="subpage-text-bold mb-1">Latest Update</p>
                <p className="subpage-text-date mb-1">June 8th— </p>
                <p className='subpage-text'>We just finished doing a literature review, understanding past work and figuring out what our model architecture would look like + specific details about the model. Also wrote a project proposal [<a href="https://github.com/rpandya5/gaitanalysis/blob/main/reports/Fall_Detection_Using_Gait_Analysis_Team_32.pdf" target="_blank" rel="noopener noreferrer" className="subpage-link">link</a>].</p>
                <p className='subpage-text'> Our next steps involve acquiring and preprocessing the required datasets for model training. </p>
            </div>
        </div>
    );
};
export default YellowSubpage;
