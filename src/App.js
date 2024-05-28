import React, { useState } from 'react';
import './index.css';
import humanFigure from './assets/human-figure.png';
import { Typewriter } from 'react-simple-typewriter';
import PinkWindow from './components/PinkWindow';
import GreenWindow from './components/GreenWindow';
import OrangeWindow from './components/OrangeWindow';
import BlueWindow from './components/BlueWindow';
import PurpleWindow from './components/PurpleWindow';
import RedWindow from './components/RedWindow';
import YellowWindow from './components/YellowWindow';

function App() {
  const [hoveredArea, setHoveredArea] = useState(null);
  const [isWindowHovered, setIsWindowHovered] = useState(false);

  const areas = [
    { color: 'pink', top: '-2%', left: '42%', width: '16%', height: '16%', windowTop: '7%', windowLeft: '71%', content: 'Pink area content' },
    { color: 'green', top: '14%', left: '27%', width: '20%', height: '11%', windowTop: '20%', windowLeft: '5%', content: 'Green area content' },
    { color: 'orange', top: '14%', left: '53%', width: '20%', height: '11%', windowTop: '20%', windowLeft: '85%', content: 'Orange area content' },
    { color: 'red', top: '25%', left: '23%', width: '24%', height: '12%', windowTop: '40%', windowLeft: '5%', content: 'Red area content' },
    { color: 'purple', top: '25%', left: '53%', width: '24%', height: '12%', windowTop: '40%', windowLeft: '80%', content: 'Purple area content' },
    { color: 'blue', top: '37%', left: '21%', width: '26%', height: '10%', windowTop: '50%', windowLeft: '5%', content: 'Blue area content' },
    { color: 'yellow', top: '37%', left: '53%', width: '26%', height: '10%', windowTop: '50%', windowLeft: '80%', content: 'Yellow area content' },
  ];

  const circles = [
    { color: 'pink', top: '4%', left: '50%' },
    { color: 'green', top: '18%', left: '38%' },
    { color: 'orange', top: '18%', left: '62%' },
    { color: 'red', top: '29%', left: '34%' },
    { color: 'purple', top: '29%', left: '66%' },
    { color: 'blue', top: '42%', left: '31%' },
    { color: 'yellow', top: '42%', left: '69%' },
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

  const handleWindowMouseEnter = () => {
    setIsWindowHovered(true);
  };

  const handleWindowMouseLeave = () => {
    setIsWindowHovered(false);
    setHoveredArea(null);
  };

  return (
    <div className="min-h-screen bg-background text-subtext pt-[6rem] px-[8rem] relative">
      <header className="flex justify-between items-start mb-8">
        <h1 className="text-6xl title-font text-primary whitespace-nowrap">
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
        <nav className="mt-[-4rem] w-full flex justify-end">
          <ul className="flex justify-end">
            <li className="mr-8">
              <a href="https://x.com/_richapandya" className="twitter-link" target="_blank" rel="noopener noreferrer">
                Twitter Updates
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <p className="text-2xl mb-8 body-text">
          Hi! I’m Richa, and I’m building a project to interface with every part of your body.
        </p>
        <p className="mb-2 text-xl">
          <span className="body-text-bold">Currently working on:</span> <span className="body-text">Visual interfaces</span>
        </p>
        <p className="text-xl">
          <span className="body-text-bold">Last updated:</span> <span className="body-text">May 28, 2024</span>
        </p>
        <div className="mt-16 flex justify-center relative">
          <img src={humanFigure} alt="Human Figure" className="human-figure" />
          {areas.map((area, index) => (
            <div
              key={index}
              className="absolute"
              style={{
                top: area.top,
                left: area.left,
                width: area.width,
                height: area.height,
                backgroundColor: 'rgba(0, 0, 0, .4)', // Make the areas semi-transparent for now
              }}
              onMouseEnter={() => handleMouseEnter(area.color)}
              onMouseLeave={() => handleMouseLeave()}
            ></div>
          ))}
          {hoveredArea && (
            <div
              className="absolute"
              style={{
                top: areas.find(area => area.color === hoveredArea).windowTop,
                left: areas.find(area => area.color === hoveredArea).windowLeft,
                width: '30%',
                height: '40%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                padding: '10px',
                borderRadius: '5px',
                pointerEvents: 'auto', // Allow pointer events on the window
              }}
              onMouseEnter={handleWindowMouseEnter}
              onMouseLeave={handleWindowMouseLeave}
            >
              {renderWindow()}
            </div>
          )}
          {circles.map((circle, index) => (
            <div
              key={index}
              className={`absolute bg-${circle.color}-500 rounded-full`}
              style={{
                top: circle.top,
                left: circle.left,
                width: '10px',
                height: '10px',
                transform: 'translate(-50%, -50%)',
              }}
            ></div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
