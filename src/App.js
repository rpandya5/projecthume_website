import React, { useState, useEffect } from 'react';
import './index.css';
import humanFigure from './assets/human-figure.png';
import PinkWindow from './components/PinkWindow';
import GreenWindow from './components/GreenWindow';
import OrangeWindow from './components/OrangeWindow';
import BlueWindow from './components/BlueWindow';
import PurpleWindow from './components/PurpleWindow';
import RedWindow from './components/RedWindow';
import YellowWindow from './components/YellowWindow';
import PinkSubpage from './components/PinkSubpage';
import GreenSubpage from './components/GreenSubpage';
import OrangeSubpage from './components/OrangeSubpage';
import BlueSubpage from './components/BlueSubpage';
import PurpleSubpage from './components/PurpleSubpage';
import RedSubpage from './components/RedSubpage';
import YellowSubpage from './components/YellowSubpage';
import { Typewriter } from 'react-simple-typewriter';

function App() {
  const [hoveredArea, setHoveredArea] = useState(null);
  const [isWindowHovered, setIsWindowHovered] = useState(false);
  const [isAreaHovered, setIsAreaHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSubpage, setCurrentSubpage] = useState(null);

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isAreaHovered || isWindowHovered) {
      setHoveredArea(prev => prev); // Keep the current hovered area
    } else {
      setHoveredArea(null);
    }
  }, [isAreaHovered, isWindowHovered]);

  const handleCircleClick = (color) => {
    if (isMobile) {
      setCurrentSubpage(color);
    } else {
      handleMouseEnterArea(color);
    }
  };

  const handleExpand = (color) => {
    setCurrentSubpage(color);
  };

  const handleMouseEnterArea = (color) => {
    setIsAreaHovered(true);
    setHoveredArea(color);
  };

  const handleMouseLeaveArea = () => {
    setIsAreaHovered(false);
  };

  const handleMouseEnterWindow = () => {
    setIsWindowHovered(true);
  };

  const handleMouseLeaveWindow = () => {
    setIsWindowHovered(false);
  };

  const renderWindow = () => {
    switch (hoveredArea) {
      case 'pink':
        return <PinkWindow onExpand={() => handleExpand('pink')} />;
      case 'green':
        return <GreenWindow onExpand={() => handleExpand('green')} />;
      case 'orange':
        return <OrangeWindow onExpand={() => handleExpand('orange')} />;
      case 'red':
        return <RedWindow onExpand={() => handleExpand('red')} />;
      case 'purple':
        return <PurpleWindow onExpand={() => handleExpand('purple')} />;
      case 'blue':
        return <BlueWindow onExpand={() => handleExpand('blue')} />;
      case 'yellow':
        return <YellowWindow onExpand={() => handleExpand('yellow')} />;
      default:
        return null;
    }
  };

  const renderSubpage = () => {
    switch (currentSubpage) {
      case 'pink':
        return <PinkSubpage onClose={() => setCurrentSubpage(null)} />;
      case 'green':
        return <GreenSubpage onClose={() => setCurrentSubpage(null)} />;
      case 'orange':
        return <OrangeSubpage onClose={() => setCurrentSubpage(null)} />;
      case 'red':
        return <RedSubpage onClose={() => setCurrentSubpage(null)} />;
      case 'purple':
        return <PurpleSubpage onClose={() => setCurrentSubpage(null)} />;
      case 'blue':
        return <BlueSubpage onClose={() => setCurrentSubpage(null)} />;
      case 'yellow':
        return <YellowSubpage onClose={() => setCurrentSubpage(null)} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background text-subtext pt-24 px-8 relative">
      {currentSubpage && (
        <div className="subpage-overlay">
          {renderSubpage()}
        </div>
      )}
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
            {hoveredArea && !isMobile && (
              <div
                className={`popup-window popup-window-${hoveredArea} popup-window-custom`}
                onMouseEnter={handleMouseEnterWindow}
                onMouseLeave={handleMouseLeaveWindow}
              >
                {renderWindow()}
              </div>
            )}
          </div>
          {areas.map((area, index) => (
            <div
              key={index}
              className={`absolute ${area.className}`}
              onClick={() => handleCircleClick(area.color)}
              onMouseEnter={() => handleMouseEnterArea(area.color)}
              onMouseLeave={handleMouseLeaveArea}
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
