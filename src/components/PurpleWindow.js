import React from 'react';

const PurpleWindow = () => (
    <div style={{ backgroundColor: 'rgb(161, 184, 248)' }} className="p-2 rounded-lg border-8 border-white shadow-lg"> {/* Reduced padding from p-4 to p-2 */}
        <div style={{ backgroundColor: 'rgb(161, 184, 248)' }} className="p-2 rounded-lg"> {/* Reduced padding from p-4 to p-2 */}
            <h2 className="text-black title-font text-xl text-center">On Skin Interfaces</h2> {/* Reduced font size from text-2xl to text-xl */}
            <p className="body-text mt-2 text-black text-center">This one's still cooking...</p> {/* Reduced margin top from mt-4 to mt-2 */}
        </div>
    </div>
);

export default PurpleWindow;