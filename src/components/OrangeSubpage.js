import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FullScreen from 'react-fullscreen-crossbrowser';
import image1 from '../assets/orange1.jpeg';
import video1 from '../assets/orange2.mov';

const OrangeSubpage = ({ onClose }) => {
    const [isFullScreen, setIsFullScreen] = React.useState(false);

    useEffect(() => {
        const progressBar = document.querySelector('.partial-progress-bar');
        setTimeout(() => {
            progressBar.style.width = '45%';
        }, 100); // delay to ensure the transition is visible
    }, []);

    const settings = {
        dots: true,
        infinite: true,
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
                <h2 className="subpage-title mb-6 mt-8 text-center">Intraoral Interfaces</h2>
                <div className="progress-bar">
                    <div className="partial-progress-bar">45%</div>
                </div>

                <p className="subpage-subtitle mt-6 mb-5 text-center">A smart retainer to control my computer hands-free</p>
                <p className="subpage-text-bold">Project Overview & Goals</p>
                <p className="subpage-text mb-4">
                    I was inspired by a company called <a className="email-link" href="https://www.augmental.tech/" target="_blank" rel="noopener noreferrer">Augmental</a>: their product, called MouthPad, is a smart retainer designed for individuals with quadriplegia to control their devices. Motivated by their work, I decided to create my own open-source version of their product.
                </p>

                <p className="subpage-text mb-4">
                    My goal is to develop an open-source <u>smart retainer that enables users with limited mobility to control their computers hands-free.</u> This device functions almost like a mini trackpad inside your mouth, and would essentially allow you to control your cursor only with your tongue. I also hope to implement click functionality with bites (ex. left bite = left click) with EMG sensors.
                </p>

                <FullScreen isFull={isFullScreen} onChange={handleFullScreen}>
                    <div className={`carousel-container ${isFullScreen ? 'fullscreen-carousel' : ''}`}>
                        <Slider {...settings}>
                            <div>
                                <img src={image1} alt="Image 1" className="carousel-image" />
                                <p className="caption">Augmental's MouthPad</p>
                            </div>
                            <div>
                                <video controls className="carousel-image">
                                    <source src={video1} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <p className="caption">My flexible PCB design (currently being manufactured)</p>
                            </div>
                        </Slider>
                    </div>
                </FullScreen>

                <p className="subpage-text-bold mb-2 mt-6">Things I'm Currently Reading</p>
                <p className='subpage-text mb-4 email-link'><ul>
                    <li><a href="https://ieeexplore.ieee.org/document/6392916" target="_blank" rel="noopener noreferrer">
                        A Wireless Magnetoresistive Sensing System for an Intraoral Tongue-Computer Interface

                    </a></li>
                    <li><a href="https://pubmed.ncbi.nlm.nih.gov/31283486/" target="_blank" rel="noopener noreferrer">
                        A Stand-Alone Intraoral Tongue-Controlled Computer Interface for People With Tetraplegia

                    </a></li>
                    <li><a href="https://www.mdpi.com/1424-8220/14/11/21565" target="_blank" rel="noopener noreferrer">
                        An Arch-Shaped Intraoral Tongue Drive System with Built-in Tongue-Computer Interfacing SoC
                    </a></li>
                    <li>
                        <a href="https://onlinelibrary.wiley.com/doi/full/10.1002/EXP.20220106" target="_blank" rel="noopener noreferrer">
                            A Study on Wireless Power Transfer for Implantable Medical Devices
                        </a>
                    </li>
                    <li>
                        <a href="https://ieeexplore.ieee.org/document/6418503" target="_blank" rel="noopener noreferrer">
                            Intraoral tongue drive system demonstration
                        </a>
                    </li>
                </ul></p>

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
                <p className="subpage-text mb-4 mt-0">Target completion: July 5</p>

                <p className="subpage-text-bold mb-1">Latest Update</p>
                <p className="subpage-text-date mb-1">June 8th— </p>
                <p className='subpage-text'>
                    <ul>
                        <li>I've already purchased all the components I need to build this project</li>
                        <li>Did a crash course in PCB design and designed my first PCB as a flexible PCB (ensures the device can fit comfortably inside your mouth)</li>
                        <li>Custom PCB is currently being manufactured + all SMD components are being assembled. I should have the board by June 24th</li>
                        <li>Did some research on biocompatible materials and figured out how to make the PCB non-toxic by adding conformal coating + overmolding the device in food-grade silicone</li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default OrangeSubpage;
