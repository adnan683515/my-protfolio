import React from 'react';

const MyPhoto = () => {
    return (
        <div>
            <div className="relative md:w-[80%]    overflow-hidden">
                {/* Image */}
                <img
                    className="w-full h-auto sm:h-full object-cover border-2"
                    src="https://i.ibb.co/PZWMxVRd/475664867-629872126390266-6867168703155774116-n-1-Picsart-Ai-Image-Enhancer-removebg-preview.png"
                    alt="Profile"
                />

                {/* Top-left corner border */}
                <div className="absolute top-0 left-0 w-[30%] h-[15%] sm:w-[40%] sm:h-[20vh] border-t-4 sm:border-t-8 border-l-4 sm:border-l-8 border-[var(--secondary-color)]"></div>

                {/* Bottom-right corner border */}
                <div className="absolute bottom-0 right-0 w-[30%] h-[15%] sm:w-[40%] sm:h-[20vh] border-b-4 sm:border-b-8 border-r-4 sm:border-r-8 border-[var(--secondary-color)]"></div>
            </div>
        </div>
    );
};

export default MyPhoto;
