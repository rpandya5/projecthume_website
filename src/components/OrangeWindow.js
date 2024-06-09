import React from 'react';

const OrangeWindow = () => (
    <div style={{ backgroundColor: 'rgb(242, 123, 24)' }} className="green-spage p-2 rounded-lg border-8 border-white shadow-lg"> {/* Reduced padding from p-4 to p-2 */}
        <div style={{ backgroundColor: 'rgb(242, 123, 24)' }} className="p-2 rounded-lg"> {/* Reduced padding from p-4 to p-2 */}
            <h2 className="text-black title-font text-xl text-center">Intraoral Interfaces</h2> {/* Reduced font size from text-2xl to text-xl */}
            <p className="body-text-bold mt-2 text-black text-left">
                Status: <span className="body-text">In progress</span>
            </p>
            <p className="body-text mt-2 text-black text-left">
                A smart retainer to control my computer without my hands.
            </p>
            <button className="expand-btn body-text-bold mt-2 text-black text-center">[ expand ]</button>
        </div>
    </div>
);

export default OrangeWindow;