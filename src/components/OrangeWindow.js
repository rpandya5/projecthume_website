import React from 'react';

const OrangeWindow = () => (
    <div className="bg-orange-500 p-4 rounded-lg border-8 border-white w-[160%] h-[78%]">
        <h2 className="text-black title-font text-center text-3xl">Intraoral Interfaces</h2>
        <div className="embed-responsive embed-responsive-16by9 mt-2">
            <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                allowFullScreen
                style={{ width: '100%', height: '200px' }}
            ></iframe>
        </div>
        <p className="text-black body-text text-lg mt-2">Project One liner: Controlling my computer with my tongue</p>
        <a href="https://github.com/rpandya5" target="_blank" rel="noopener noreferrer" className="text-black body-text-bold text-base mt-2 block text-center">
            Github
        </a>
        <div className="flex justify-center mt-2">
            <button className="bg-white text-black border border-black py-0.8 px-4 rounded-full body-text-bold text-lg">
                Here's how I did it!
            </button>
        </div>
    </div>
);

export default OrangeWindow;
