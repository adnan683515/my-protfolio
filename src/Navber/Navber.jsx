import React from 'react';

import Download from '../Icons/Download';

import { ArrowDownToLine } from 'lucide-react';


function handleDownload() {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


import { ShimmerButton } from "@/components/magicui/shimmer-button";
const Navber = () => {
    return (
        <div className='w-[100%]   bg-[var(--secondary-color)]  z-[600] fixed overflow-hidden text-white'>
            <div className="navbar w-full  shadow-sm">
                <div className="navbar-start">

                    <h1 className=''>Logo</h1>
                </div>
                <div className="navbar-center  lg:flex">

                    <div className='flex gap-1 sm:gap-4 cursor-pointer'>
                        <h1>About</h1>
                        <h1>Contact</h1>
                        <h1>Projects</h1>
                    </div>
                   
                </div>
                <div className="navbar-end   ">

                    <ShimmerButton className='p-1 w-[80%] sm:w-[20%] sm:mx-0' shimmerColor={'#ffffff'}>
                        <button
                            onClick={handleDownload}
                            className="bg-[var(--secondary-color)]  relative flex items-center gap-1 text-sm sm:px-4 px-1 sm:py-1 py-1 rounded-sm sm:text-xl text-[var(--text-color)] hover:opacity-90">
                            Resume
                            <ArrowDownToLine className="sm:w-5 sm:h-5" />
                        </button>
                    </ShimmerButton>

                </div>
            </div>
        </div>
    );
};

export default Navber;