import React from 'react';
import musc_img from '../assets/musc_img.png'; // Make sure to have the appropriate image

const BlueSubpage = ({ onClose }) => (
    <div className="side-panel">
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="subpage-content">
            <h2 className="subpage-title mb-6 mt-8 text-center">Muskuloskeletal Interfaces</h2>
            <div className="progress-bar">
                <div className="incomplete-progress-bar">0%</div>
            </div>
            <p className="subpage-subtitle mt-6 mb-5 text-center">This project is coming soon!</p>
            <p className="subpage-text-bold">Current Ideas and Research</p>
            <p className="subpage-text mb-4">
                Traditional prosthetics/ exoskeletons are have challenges revolving around poor adaptability, suboptimal control and limited functionality. I want to create a prosthetic/ exoskeleton that is highly dextrous and integrates reinforcement learning to optimize functionality + user interaction.
            </p>
            <p className="subpage-text mb-4">
                Past work in this space has involved exploring bio-inspired designs - using tendon-driven actuation systems that are similar to how human tendons and muscles operate. Integrating sensors (electromyography sensors for detecting muscle activity + inertial measurement units for tracking limb movement) has also been explored to provide real time data to the system to make the movement more natural. My goal is to design a <u>exoskeleton/ prosthetic that's cost-effective, highly adaptable and can offer precise control</u> to the user.
            </p>
            <p className="subpage-text">
                <u>Things to read:</u>
            </p>
            <p className='subpage-text mb-4 email-link'><ul>
                <li><a href="https://jneuroengrehab.biomedcentral.com/articles/10.1186/s12984-023-01147-2" target="_blank" rel="noopener noreferrer">
                    Robust walking control of a lower limb rehabilitation exoskeleton coupled with a musculoskeletal model via deep reinforcement learning
                </a></li>
                <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10884274/" target="_blank" rel="noopener noreferrer">
                    AI-based methodologies for exoskeleton-assisted rehabilitation of the lower limb: a review

                </a></li>
                <li><a href="https://arxiv.org/html/2402.00135v1" target="_blank" rel="noopener noreferrer">
                    A Reinforcement Learning Based Controller to Minimize Forces on the Crutches of a Lower-Limb Exoskeleton
                </a></li>
                <li>
                    <a href="https://www.cambridge.org/core/journals/robotica/article/abs/modelfree-deep-reinforcement-learning-approach-for-control-of-exoskeleton-gait-patterns/D9AF53D472E086D62C302559F445BAEE" target="_blank" rel="noopener noreferrer">
                        A model-free deep reinforcement learning approach for control of exoskeleton gait patterns

                    </a>
                </li>
                <li>
                    <a href="https://pubmed.ncbi.nlm.nih.gov/30872237/" target="_blank" rel="noopener noreferrer">
                        Design of a Low Profile, Unpowered Ankle Exoskeleton That Fits Under Clothes: Overcoming Practical Barriers to Widespread Societal Adoption

                    </a>
                </li>
            </ul></p>
            <p className="subpage-text">
                <u>Questions:</u>
            </p>
            <p className='subpage-text mb-8'><ul>
                <li>What is the output of the RL model and how would you translate this into mechanical movements on the device?</li>
            </ul></p>
            <p className="subpage-text mb-6">
                Have any suggestions or ideas? <a href="mailto:richapandya273@gmail.com" className="email-link">Shoot me an email.</a>
            </p>
            <img src={musc_img} alt="Muskuloskeletal Interfaces" className="neural-img" />
        </div>
    </div>
);

export default BlueSubpage;
