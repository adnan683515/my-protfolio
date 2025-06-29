import React, { useRef } from 'react';
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { motion } from "framer-motion";
import {
    SiPython,
    SiC,
    SiCplusplus,
    SiJavascript,
    SiLeetcode,
} from "react-icons/si";
import { Meteors } from "@/components/magicui/meteors";
const BasicSkills = () => {
    const containerRef = useRef(null);
    const toRef = useRef(null);

    const fromRefs = {
        c: useRef(null),
        cpp: useRef(null),
        python: useRef(null),
        js: useRef(null),
    };

    return (
        <motion.div

            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            ref={containerRef}
            className="relative min-h-screen bg-black text-white flex items-center justify-center"
        >
            {/* Central LeetCode Icon */}

            <div
                ref={toRef}
                className="z-10 bg-white text-black p-6 rounded-full shadow-xl"
            >
                <SiLeetcode size={30} className="text-orange-400" />
            </div>

            <Meteors number={100}></Meteors>

            {/* Outer Skill Icons */}
            <div className="absolute top-[10%] left-[10%]" ref={fromRefs.c}>
                <SiC size={35} className="text-blue-300" />
            </div>

            <div className="absolute top-[10%] right-[10%]" ref={fromRefs.cpp}>
                <SiCplusplus size={35} className="text-blue-500" />
            </div>

            <div className="absolute bottom-[15%] left-[20%]" ref={fromRefs.python}>
                <SiPython size={35} className="text-yellow-400" />
            </div>

            <div className="absolute bottom-[15%] right-[20%]" ref={fromRefs.js}>
                <SiJavascript size={35} className="text-yellow-300" />
            </div>

            {/* Animated Beams */}
            {Object.values(fromRefs).map((ref, index) => (
                <AnimatedBeam
                    key={index}
                    containerRef={containerRef}
                    fromRef={ref}
                    toRef={toRef}
                    className="text-orange-400"
                />
            ))}
        </motion.div>
    );
};

export default BasicSkills;
