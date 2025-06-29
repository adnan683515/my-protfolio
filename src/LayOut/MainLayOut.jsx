import React from 'react';

import Navber from './../Navber/Navber';
import HeroLayout from '../Hero/HeroLayout/HeroLayout';
import Abouts from '../About/Abouts';
import Skills from '../Skills/Skills';
import BasicSkills from '../Skills/BasicSkills';


import { Meteors } from "@/components/magicui/meteors";
import Project from '../Project/Project';
import ProjectSlider from '../Project/ProjectSlider';
import Projects2 from './../Project/Projects2';
import Projects3 from '../Project/Projects3';
import Contact from '../Contact/Contact';



const MainLayOut = () => {
    return (
        <div className='bg-[var(--primary-color)] relative overflow-hidden min-h-screen  mx-auto' >
            <Navber ></Navber>



            <div className='sm:mt-30 mt-20  z-[60] '>
                <HeroLayout></HeroLayout>
            </div>

            <Meteors number={100} />




            <div className='sm:my-10  text-white '>
                <h1 className='text-center sm:text-5xl mt-5 mb-3 font-semibold text-white'>About Me</h1>

                <Abouts></Abouts>
            </div>



            <div className='sm:my-20'>
                <h1 className='text-center sm:text-5xl mt-5  font-semibold text-white'>Comfortable Skills</h1>
                <Skills></Skills>
            </div>



            <div className='sm:py-10'>
                <h1 className='text-center sm:text-5xl mt-5  font-semibold text-white'>Basic Skills</h1>
                <BasicSkills></BasicSkills>
            </div>
            <div className='sm:py-10'>
                <h1 className='text-center sm:text-5xl mt-5  font-semibold text-white'>My Projects</h1>
                <Project></Project>

                <Projects2></Projects2>

                <Projects3></Projects3>
            </div>


            <div className='sm:py-10'>
                <h1 className='text-center sm:text-5xl mt-5  font-semibold text-white'>Contact Me</h1>
                <Contact></Contact>
            </div>









        </div>
    );
};

export default MainLayOut;


