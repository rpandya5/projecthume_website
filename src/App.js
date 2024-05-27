import React from 'react';
import './index.css';
import humanFigure from './assets/human-figure.png';
//import Typing from 'react-typing-effect';
import { Typewriter } from 'react-simple-typewriter';


function App() {
  return (
    <div className="min-h-screen bg-background text-subtext pt-[6rem] px-[8rem]">
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
        <div className="mt-8">
          <img src={humanFigure} alt="Human Figure" />
        </div>
      </main>
    </div>
  );
};

export default App;

