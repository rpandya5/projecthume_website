import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FullScreen from 'react-fullscreen-crossbrowser';
import image1 from '../assets/pink1.gif';

const GreenSubpage = ({ onClose }) => {
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
                <h2 className="subpage-title mb-6 mt-8 text-center">Visual Interfaces</h2>
                <div className="progress-bar">
                    <div className="partial-progress-bar" style={{ width: '15%' }}>15%</div>
                </div>

                <p className="subpage-subtitle mt-6 mb-5 text-center">Building AR Glasses from Scratch</p>
                <p className="subpage-text-bold">Project Overview & Goals</p>
                <p className="subpage-text mb-4">
                    Most DIY AR headset projects + even some commercial products are limited: they can act as voice assistants and display basic text/ numbers, but aren't able to show images or visuals.
                </p>

                <p className="subpage-text mb-4">
                    My goal is to build AR glasses that have the following features:
                    <ul>
                        <li><span className="subpage-text-bold">Voice Agent:</span> Thinking of integrating ChatGPT-4 API for voice interaction to create an AI agent similar to Siri that I can talk to on the headset. </li>
                        <li><span className="subpage-text-bold">Proactive Response:</span> Agent should also be proactive, listening to what I’m talking about and researching relevant information to display on the screen. For this, I'm exploring using a combination of sentiment analysis and contextual AI to proactively display relevant information + using APIs (ex. Google's Knowledge Graph) to pull and display contextual data based on the ongoing conversation.</li>
                        <li><span className="subpage-text-bold">Image and Visual Display:</span> The ability to display images and visuals, not just text or numbers. For this, I'm researching tensor and waveguide holography that use spatial light modulators and waveguides to steer light waves to create full colour 3D images.</li>
                    </ul>
                </p>
                <p className="subpage-text mb-4">
                    Target completion: June 25
                </p>

                <FullScreen isFull={isFullScreen} onChange={handleFullScreen}>
                    <div className={`carousel-container ${isFullScreen ? 'fullscreen-carousel' : ''}`}>
                        <Slider {...settings}>
                            <div>
                                <img src={image1} alt="Image 1" className="carousel-image" />
                                <p className="caption">Holographic AR Glasses w/ Metasurface Waveguides: Stanford Computational Imaging Lab</p>
                            </div>
                        </Slider>
                    </div>
                </FullScreen>

                <p className="subpage-text-bold mb-2 mt-6">Things I'm Currently Reading</p>
                <p className='subpage-text mb-4 email-link'>
                    <ul>
                        <li><a href="https://www.nature.com/articles/s41586-020-03152-0" target="_blank" rel="noopener noreferrer">
                            Towards real-time photorealistic 3D holography with deep neural networks
                        </a></li>
                        <li><a href="https://www.nature.com/articles/s41586-024-07386-0" target="_blank" rel="noopener noreferrer">
                            Full-colour 3D holographic augmented-reality displays with metasurface waveguides
                        </a></li>
                        <li><a href="https://research.nvidia.com/publication/2022-08_holographic-glasses-virtual-reality" target="_blank" rel="noopener noreferrer">
                            Holographic Glasses for Virtual Reality
                        </a></li>
                        <li><a href="https://github.com/TeamOpenSmartGlasses/OpenSourceSmartGlasses" target="_blank" rel="noopener noreferrer">
                            Team Open Smart Glasses
                        </a></li>
                    </ul>
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
                <p className="subpage-text-date mb-1">June 8th—</p>
                <p className="subpage-text mb-4">
                    I have almost all of the hardware components figured out, except for the visual lens display. The main challenge now is determining how to effectively display images. Currently reading papers on tensor holography, computer-generated holography, etc + understanding how 3D projectors work to see if I can replicate one of these technologies on a smaller scale to display images.
                </p>
            </div>
        </div>
    );
};

export default GreenSubpage;
