import React from 'react';

const YellowWindow = () => (
    <div className="bg-yellow-500 p-4 rounded-lg border-2 border-white w-full h-full">
        <h2 className="text-black title-font text-2xl text-center">Intraoral Interfaces</h2>
        <div className="embed-responsive embed-responsive-16by9">
            <iframe
                className="embed-responsive-item w-full h-40 md:h-60 lg:h-72"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                allowFullScreen
            ></iframe>
        </div>
        <p className="body-text mt-4 text-black text-center">Project One liner: Controlling my computer with my tongue</p>
        <a
            href="https://github.com/rpandya5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black body-text-bold text-center block"
        >
            Github
        </a>
        <button className="mt-4 bg-white text-black border border-black py-1 px-2 rounded-full mx-auto block">
            Here's how I did it!
        </button>
    </div>
);

export default YellowWindow;

/* INCOMPLETE PROJECT CODE 

import React from 'react';

const PinkWindow = () => (
    <div className="bg-pink-500 p-2 rounded-lg border-8 border-white shadow-lg">
        <div className="bg-pink-500 p-2 rounded-lg pink-window-content">
            <h2 className="text-black title-font text-xl text-center pink-window-title">Intraoral Interfaces</h2>
            <p className="body-text mt-2 text-black text-center pink-window-text">This one's still cooking...</p>
        </div>
    </div>
);

export default PinkWindow;
*/