import React from 'react';

const BlueWindow = () => (
    <div style={{ backgroundColor: 'rgb(101, 182, 221)' }} className="green-spage p-2 rounded-lg border-8 border-white shadow-lg">
        <div style={{ backgroundColor: 'rgb(101, 182, 221)' }} className="p-2 rounded-lg">
            <h2 className="text-black title-font text-xl text-center">Muskuloskeletal Interfaces</h2>
            <p className="body-text-bold mt-2 text-black text-left">
                Status: <span className="body-text">Not started yet</span>
            </p>
            <button className="expand-btn body-text-bold mt-2 text-black text-center">[ expand ]</button>
        </div>
    </div>
);

export default BlueWindow;
