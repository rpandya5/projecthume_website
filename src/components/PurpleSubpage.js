import React from 'react';
import skinImg from '../assets/skin_img.png'; // Make sure to have the appropriate image

const PurpleSubpage = ({ onClose }) => (
    <div className="side-panel">
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="subpage-content">
            <h2 className="subpage-title mb-6 mt-8 text-center">On Skin Interfaces</h2>
            <div className="progress-bar">
                <div className="incomplete-progress-bar">0%</div>
            </div>
            <p className="subpage-subtitle mt-6 mb-5 text-center">This project is coming soon!</p>
            <p className="subpage-text-bold">Current Ideas and Research
            </p>
            <p className="subpage-text mb-4">
                The goal of on skin interfaces is to turn your skin into the input/output for the device. I came across a paper from
                <a href="https://www.hcii.cmu.edu/" target="_blank" rel="noopener noreferrer" className="email-link"> Carnegie Mellon's Human Computer Interaction Institute </a> where they developed something called
                <a href="https://chrisharrison.net/index.php/Research/LumiWatch" target="_blank" rel="noopener noreferrer" className="email-link"> Lumiwatch</a>:
                it displays an interactive surface on your skin + incorporates a touch sensing mechanism to detect user input. This idea essentially turns your tiny smartwatch screen into a much larger one, allowing for more meaningful use cases.
            </p>


            <p className="subpage-text mb-4">
                My goal is to create my own version of this project that <u>turns your skin into an interactive surface</u> like the LumiWatch, but also has multitouch capabilities, better resolution, and more advanced gesture recognition. I'd also like to expand on the applications for this - possibly with health tracking or education, but I'm still figuring it out.
            </p>
            <p className="subpage-text">
                <u>Things to read:</u>
            </p>
            <p className='subpage-text mb-4 email-link'><ul>
                <li><a href="https://dl.acm.org/doi/10.1145/3173574.3173669" target="_blank" rel="noopener noreferrer">
                    LumiWatch: On-Arm Projected Graphics and Touch Input
                </a></li>
                <li><a href="https://www.microsoft.com/en-us/research/project/sidesight/" target="_blank" rel="noopener noreferrer">
                    Microsoft Research: SideSight

                </a></li>
                <li><a href="https://dl.acm.org/doi/10.1145/2735711.2735830" target="_blank" rel="noopener noreferrer">
                    SkinWatch: skin gesture interaction for smart watch
                </a></li>
                <li>
                    <a href="https://lclab.org/wp-content/uploads/2018/10/uist2013_senskin.pdf" target="_blank" rel="noopener noreferrer">
                        SenSkin: Adapting Skin as a Soft Interface

                    </a>
                </li>
            </ul></p>
            <p className="subpage-text">
                <u>Questions:</u>
            </p>
            <p className='subpage-text mb-8'><ul>
                <li>Why did most previous versions of on-skin interfaces fail?</li>
            </ul></p>
            <p className="subpage-text mb-6">
                Have any suggestions or ideas? <a href="mailto:richapandya273@gmail.com" className="email-link">Shoot me an email.</a>
            </p>
            <img src={skinImg} alt="On Skin Interfaces" className="neural-img" />
        </div>
    </div>
);

export default PurpleSubpage;
