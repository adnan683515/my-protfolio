import React from 'react';

const Navber = () => {
    return (
        <div className='w-[98%] mx-auto '>
            <div className="navbar w-full  shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className=" lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>About me</a></li>
                            <li><a>Contact</a></li>
                            <li><a>Projects</a></li>
                        </ul>
                    </div>
                    <div className=" hidden sm:block text-xl">Logo</div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>About me</a></li>
                        <li><a>Contact</a></li>
                        <li><a>Projects</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="bg-[var(--secondary-color)]  px-4 py-2 rounded-sm text-[var(--text-color)]">Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Navber;