import React from 'react';

const GreenWindow = ({ onExpand }) => (
    <div style={{ backgroundColor: 'rgb(131, 209, 205)' }} className="green-spage p-2 rounded-lg border-8 border-white shadow-lg">
        <div style={{ backgroundColor: 'rgb(131, 209, 205)' }} className="p-2 rounded-lg">
            <h2 className="text-black title-font text-xl text-center">Visual Interfaces</h2>
            <p className="body-text-bold mt-2 text-black text-left">
                Status: <span className="body-text">In progress</span>
            </p>
            <p className="body-text mt-2 text-black text-left">
                Building AR glasses from scratch with voice control + visual image capabilities
            </p>
            <button className="expand-btn body-text-bold mt-2 text-black text-center" onClick={onExpand}>
                [ expand ]
            </button>
        </div>
    </div>
);

export default GreenWindow;
