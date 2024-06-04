import React, { useState } from 'react';
import './index.css';
import humanFigure from './assets/human-figure.png';
import PinkWindow from './components/PinkWindow';
import GreenWindow from './components/GreenWindow';
import OrangeWindow from './components/OrangeWindow';
import BlueWindow from './components/BlueWindow';
import PurpleWindow from './components/PurpleWindow';
import RedWindow from './components/RedWindow';
import YellowWindow from './components/YellowWindow';
import { Typewriter } from 'react-simple-typewriter';

function App() {
  const [hoveredArea, setHoveredArea] = useState(null);
  const [isWindowHovered, setIsWindowHovered] = useState(false);

  const areas = [
    { color: 'pink', className: 'area-pink' },
    { color: 'green', className: 'area-green' },
    { color: 'orange', className: 'area-orange' },
    { color: 'red', className: 'area-red' },
    { color: 'purple', className: 'area-purple' },
    { color: 'blue', className: 'area-blue' },
    { color: 'yellow', className: 'area-yellow' },
  ];

  const circles = [
    { color: 'pink', className: 'circle-pink' },
    { color: 'green', className: 'circle-green' },
    { color: 'orange', className: 'circle-orange' },
    { color: 'red', className: 'circle-red' },
    { color: 'purple', className: 'circle-purple' },
    { color: 'blue', className: 'circle-blue' },
    { color: 'yellow', className: 'circle-yellow' },
  ];

  const renderWindow = () => {
    switch (hoveredArea) {
      case 'pink':
        return <PinkWindow />;
      case 'green':
        return <GreenWindow />;
      case 'orange':
        return <OrangeWindow />;
      case 'red':
        return <RedWindow />;
      case 'purple':
        return <PurpleWindow />;
      case 'blue':
        return <BlueWindow />;
      case 'yellow':
        return <YellowWindow />;
      default:
        return null;
    }
  };


  const handleMouseEnter = (color) => {
    setHoveredArea(color);
  };

  const handleMouseLeave = () => {
    if (!isWindowHovered) {
      setHoveredArea(null);
    }
  };

  return (
    <div className="min-h-screen bg-background text-subtext pt-24 px-8 relative">
      <header className="flex flex-col md:flex-col md:justify-between items-start mb-8">
        <nav className="md:order-1 w-full md:w-auto flex justify-end mb-4 md:mb-0 md:mb-8">
          <ul className="flex justify-end">
            <li className="mr-8">
              <a href="https://x.com/_richapandya" className="twitter-link" target="_blank" rel="noopener noreferrer">
                Twitter Updates
              </a>
            </li>
          </ul>
        </nav>
        <h1 className="text-4xl md:text-6xl title-font text-primary whitespace-nowrap mb-4 md:mb-0 md:pl-16">
          <Typewriter
            words={['Project Hume']}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={() => {
              setTimeout(() => {
                const cursorElement = document.querySelector('.simple-typewriter__cursor');
                if (cursorElement) {
                  cursorElement.style.visibility = 'hidden';
                }
              }, 100); // delay to ensure typing is done
            }}
          />
        </h1>
      </header>

      <main className="md:pl-16">
        <p className="text-xl md:text-2xl mb-8 body-text">
          Hi! I’m Richa, and I’m building a project to interface with every part of your body.
        </p>
        <p className="mb-2 text-lg md:text-xl">
          <span className="body-text-bold">Currently working on:</span> <span className="body-text">Visual interfaces</span>
        </p>
        <p className="text-lg md:text-xl">
          <span className="body-text-bold">Last updated:</span> <span className="body-text">June 3, 2024</span>
        </p>
        <div className="mt-16 flex justify-center relative">
          <img src={humanFigure} alt="Human Figure" className="human-figure" />
          <div className="popup-window-container">
            {hoveredArea && (
              <div
                className={`popup-window popup-window-${hoveredArea} popup-window-custom`}
                onMouseEnter={() => setIsWindowHovered(true)}
                onMouseLeave={() => {
                  setIsWindowHovered(false);
                  handleMouseLeave();
                }}
              >
                {renderWindow()}
              </div>
            )}
          </div>
          {areas.map((area, index) => (
            <div
              key={index}
              className={`absolute ${area.className}`}
              onMouseEnter={() => handleMouseEnter(area.color)}
              onMouseLeave={() => handleMouseLeave()}
            ></div>
          ))}
          {circles.map((circle, index) => (
            <div key={index} className={`circle ${circle.className}`}></div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
