import React from 'react';
import MyPhoto from '../MyPhoto/MyPhoto';
import Intro from '../Intro/Intro';


const HeroLayout = () => {
    return (
        <div className='sm:w-[90%]  mx-auto  mt-2 px-5 py-10'>

            <div className='flex  justify-between'>
                <Intro></Intro>

                <MyPhoto></MyPhoto>
            </div>


        </div>
    );
};

export default HeroLayout;