import React from 'react';
import Navber from './../Navber/Navber';
import HeroLayout from '../Hero/HeroLayout/HeroLayout';
import Abouts from '../About/Abouts';



const MainLayOut = () => {
    return (
        <div className='bg-[var(--primary-color)] min-h-screen  mx-auto' >
            <Navber></Navber>
            <HeroLayout></HeroLayout>
            <Abouts></Abouts>
        </div>
    );
};

export default MainLayOut;