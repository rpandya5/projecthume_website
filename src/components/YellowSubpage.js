import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FullScreen from 'react-fullscreen-crossbrowser';
import image1 from '../assets/yellow1.png';

const YellowSubpage = ({ onClose }) => {
    const [isFullScreen, setIsFullScreen] = React.useState(false);

    useEffect(() => {
        const progressBar = document.querySelector('.partial-progress-bar');
        setTimeout(() => {
            progressBar.style.width = '15%';
        }, 100); // delay to ensure the transition is visible
    }, []);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true
    };

    const handleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };

    return (
        <div className="side-panel">
            <button className="close-btn" onClick={onClose}>×</button>
            <div className="subpage-content">
                <h2 className="subpage-title mb-6 mt-8 text-center">Biometric Interfaces</h2>
                <div className="progress-bar">
                    <div className="partial-progress-bar">10%</div>
                </div>

                <p className="subpage-subtitle mt-6 mb-5 text-center">Detecting/ Predicting Falls through Gait Analysis
                </p>
                <p className="subpage-text-bold">Project Overview & Goals</p>
                <p className="subpage-text mb-4">
                    Falls are a leading cause of injury within the elderly, and they result in more than 3 million emergency department visits annually, with over 800,000 hospitalizations and around 38,000 deaths each year in the United States.
                </p>

                <p className="subpage-text mb-6">
                    For this project, I'm working with a team to create a system that analyzes gait patterns to detect and predict falls. Our goal is to build a <u>hybrid CNN-LSTM model that accurately predicts falls</u> from accelerometer and gyroscope readings from a wearable device.
                </p>

                <FullScreen isFull={isFullScreen} onChange={handleFullScreen}>
                    <div className={`carousel-container ${isFullScreen ? 'fullscreen-carousel' : ''}`}>
                        <Slider {...settings}>
                            <div>
                                <img src={image1} alt="Image 1" className="carousel-image" />
                                <p className="caption">Detecting and predicting falls through a comprehensive pipeline involving sensor data processing, hybrid CNN-LSTM modeling, and real-time emergency notifications.
                                </p>
                            </div>
                        </Slider>
                    </div>
                </FullScreen>

                <p className="subpage-text-bold mb-2 mt-6">Timeline</p>

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
