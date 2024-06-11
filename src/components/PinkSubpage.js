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
            <p className="subpage-text-bold">Current Ideas and Research</p>
            <p className="subpage-text mb-2">
                Neural implants (and generally most implantable medical devices) face challenges with maintaining reliable power sources. Batteries are limited by size, lifespan, and the need for surgical replacement, which creates a barrier to both the functionality and adoption of these devices.
            </p>
            <p className="subpage-text mb-4">
                Most past work in this space with wireless power transfer involves using one or a combination of near-field electromagnetic methods (inductive/capacitive coupling, metamaterials), ultrasound (high frequency sound waves), or optical methods (near-infrared light). I'd be curious to see if I could create a <u> wearable head device (as miniaturized as possible) that can wirelessly transfer power to neural implants non-invasively and reliably.</u>
            </p>
            <p className="subpage-text">
                <u>Things to read:</u>
            </p>
            <p className='subpage-text mb-4 email-link'><ul>
                <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10825050/" target="_blank" rel="noopener noreferrer">
                    Comparative analysis of energy transfer mechanisms for neural implants
                </a></li>
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/37267144/" target="_blank" rel="noopener noreferrer">
                    A Study on Ultrasonic Wireless Power Transfer With Phased Array for Biomedical Implants
                </a></li>
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/11442295/#:~:text=A%20novel%20power%20supply%20for,directly%20powering%20an%20implanted%20device." target="_blank" rel="noopener noreferrer">
                    An implantable power supply with an optically rechargeable lithium battery
                </a></li>
                <li>
                    <a href="https://onlinelibrary.wiley.com/doi/full/10.1002/EXP.20220106" target="_blank" rel="noopener noreferrer">
                        A Study on Wireless Power Transfer for Implantable Medical Devices
                    </a>
                </li>
                <li>
                    <a href="https://www.researchgate.net/publication/375705748_Implantable_Medical_Devices_for_Wireless_Optical_Neuromodulation_and_Neural_Recording_Energy-Efficient_Integrated_Circuit_and_System_Design" target="_blank" rel="noopener noreferrer">
                        Implantable Medical Devices for Wireless Optical Neuromodulation and Neural Recording: Energy-Efficient Integrated Circuit and System Design
                    </a>
                </li>
            </ul></p>

            <p className="subpage-text">
                <u>Questions:</u>
            </p>
            <p className='subpage-text mb-8'><ul>
                <li>How could I reliably test this out?</li>
                <li>What would the receiver side (on the implant) look like? How drastic would this change be (in terms of form factor) for currently proposed implants?</li>
                <li>Pacemaker charging</li>
            </ul></p>
            <p className="subpage-text mb-6">
                Have any suggestions or ideas? <a href="mailto:richapandya273@gmail.com" className="email-link">Shoot me an email.</a>
            </p>
            <img src={neuralImg} alt="Neural Interfaces" className="neural-img" />
        </div>
    </div>
);

export default PinkSubpage;
