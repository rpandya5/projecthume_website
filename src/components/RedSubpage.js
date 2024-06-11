import React from 'react';
import voiceImg from '../assets/voice_img.png'; // Make sure to have the appropriate image

const RedSubpage = ({ onClose }) => (
    <div className="side-panel">
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="subpage-content">
            <h2 className="subpage-title mb-6 mt-8 text-center">Voice Interfaces</h2>
            <div className="progress-bar">
                <div className="incomplete-progress-bar">0%</div>
            </div>
            <p className="subpage-subtitle mt-6 mb-5 text-center">This project is coming soon!</p>
            <p className="subpage-text-bold">Current Ideas and Research</p>
            <p className="subpage-text mb-2">
                Regardless of whether this is due to speech/hearing impairments, privacy requirements, or loud environments - many individuals in the world face challenges in producing audible speech. My goal with this project is to develop a voice interface that is able to recognize and interact with silent speech.
            </p>
            <p className='subpage-text mb-2'>Past work has revolved around: </p>
            <p className='subpage-text mb-2'><ul>
                <li>Interpreting <u>neuromuscular signals/brain activity</u> relating to the cognitive processes underlying speech production</li>
                <li>Using sensors to detect <u>subtle movements/vibrations associated with speech production</u> - such as those from articulatory muscles, vocal cord vibrations, or facial gestures.
                </li></ul></p>
            <p className="subpage-text mb-4">
                I'm more curious about using <u>ML to decode/ interpret these subtle movements and vibrations to create a silent speech recognition system.</u>
            </p>
            <p className="subpage-text">
                <u>Things to read:</u>
            </p>
            <p className='subpage-text mb-4 email-link'><ul>
                <li><a href="https://www.researchgate.net/publication/221489429_Non-audible_murmur_NAM_speech_recognition_using_a_stethoscopic_NAM_microphone" target="_blank" rel="noopener noreferrer">
                    Non-audible murmur (NAM) speech recognition using a stethoscopic NAM microphone
                </a></li>
                <li><a href="https://www.nature.com/articles/s41467-024-45915-7" target="_blank" rel="noopener noreferrer">
                    Speaking without vocal folds using a machine-learning-assisted wearable sensing-actuation system
                </a></li>
                <li><a href="https://www.media.mit.edu/projects/alterego/overview/" target="_blank" rel="noopener noreferrer">
                    MIT Media Lab - AlterEgo
                </a></li>
                <li>
                    <a href="https://otc.georgetown.edu/wearable-vibrotactile-speech-aid/" target="_blank" rel="noopener noreferrer">
                        Wearable Vibrotactile Speech Aid
                    </a>
                </li>
                <li>
                    <a href="https://www.nature.com/articles/s42256-023-00616-6" target="_blank" rel="noopener noreferrer">
                        Mixed-modality speech recognition and interaction using a wearable artificial throat
                    </a>
                </li>
            </ul></p>

            <p className="subpage-text">
                <u>Questions:</u>
            </p>
            <p className='subpage-text mb-8'><ul>
                <li>What kinds of data would I need for this? How would I get it?</li>
            </ul></p>
            <p className="subpage-text mb-6">
                Have any suggestions or ideas? <a href="mailto:richapandya273@gmail.com" className="email-link">Shoot me an email.</a>
            </p>
            <img src={voiceImg} alt="Voice Interfaces" className="neural-img" />
        </div>
    </div>
);

export default RedSubpage;
