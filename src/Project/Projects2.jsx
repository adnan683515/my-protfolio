import React from 'react';
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import ProjectSlider from './ProjectSlider';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si'
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { motion } from "framer-motion";


const Projects2 = () => {
    return (
        <div className="flex w-[98%] mx-auto flex-col md:flex-row-reverse gap-6 justify-around p-6 text-white bg-black">

            {/* Left: Education Info */}
            <motion.div
                // initial={{ opacity: 0, x: -100 }}
                // whileInView={{ opacity: 1, x: 0 }}
                // viewport={{ once: true }}
                // transition={{ duration: 1 }}

                className="flex justify-center  items-center w-full md:w-1/2">
                <NeonGradientCard
                    className="bg-black border "
                    gradient="linear-gradient(135deg, #ff8c00, #e4e4e4, #ffffff)"
                >
                    <div className="p-6 bg-black  w-full h-full rounded-xl grid grid-cols-2 gap-2">

                        <div className='hover:scale-90 transition duration-700'>
                            <img src="https://i.ibb.co/wq4g9HR/Screenshot-2025-06-29-212029.png" alt="" />
                        </div>

                        <div className='hover:scale-90 transition duration-700'>
                            <img src="https://i.ibb.co/xSjbtThR/Screenshot-2025-06-29-212109.png" alt="" />
                        </div>
                        <div className='hover:scale-90 transition duration-700'>
                            <img src="https://i.ibb.co/VYfN47hv/Screenshot-2025-06-29-212139.png" alt="" />
                        </div>

                        <div className='hover:scale-90 transition duration-700'>
                            <img src="https://i.ibb.co/DP0sT6JQ/Screenshot-2025-06-29-212151.png" alt="" />
                        </div>

                    </div>
                </NeonGradientCard>
            </motion.div>

            {/* Right: Skills & Journey */}

            <motion.div
                // initial={{ opacity: 0, x: 100 }}
                // whileInView={{ opacity: 1, x: 0 }}
                // viewport={{ once: true }}
                // transition={{ duration: 1 }}
                className="flex justify-center items-center w-full md:w-1/2">
                <NeonGradientCard
                    className="bg-black"
                    gradient="linear-gradient(135deg, #ff8c00, #e4e4e4, #ffffff)"
                >
                    <div className="p-6 bg-black rounded-xl text-white space-y-4">

                        {/* Title */}
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            🛒 B2B Wholesale Marketplace
                        </h2>

                        {/* Features */}
                        <div>
                            <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">✨ Features:</h3>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>📦 Browse products by various categories</li>
                                <li>🔍 Filter products category-wise</li>
                                <li>🛍️ Purchase products directly</li>
                                <li>🧾 View purchased items in "My Cart"</li>
                            </ul>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">📝 Description:</h3>
                            <p className="text-sm">
                                A B2B platform where users can explore, filter, and buy wholesale products by category. A seamless shopping experience tailored for businesses.
                            </p>
                        </div>

                        {/* Technologies */}
                        <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">🛠️ Technology Used:</h3>
                        <div className='flex gap-3'>

                            {/* Frontend */}
                            <div>
                                <p className="mb-1 font-semibold text-orange-400">Frontend:</p>
                                <div className="flex gap-4 text-xl mb-3">
                                    <FaHtml5 title="HTML" className="text-orange-500" />
                                    <FaCss3Alt title="CSS" className="text-blue-500" />
                                    <SiTailwindcss title="Tailwind CSS" className="text-cyan-400" />
                                    <FaReact title="React JS" className="text-blue-400" />
                                </div>
                            </div>

                            {/* Backend */}
                            <div>
                                <p className="mb-1 font-semibold text-orange-400">Backend:</p>
                                <div className="flex gap-4 text-xl">
                                    <SiMongodb title="MongoDB" className="text-green-500" />
                                    <SiExpress title="Express JS" className="text-gray-300" />
                                    <FaNodeJs title="Node JS" className="text-green-600" />
                                </div>
                            </div>
                        </div>

                        {/* Buttons */}

                        {/*https://github.com/adnan683515/b2b-clinet-side */}
                        <div className="flex flex-wrap gap-2">
                            <a href="https://b2b-market-place-6c30f.web.app/ ">
                                <ShimmerButton className='p-1 sm:p-3'>
                                    <button className='bg-[var(--secondary-color)] px-2 py-1 w-full rounded-full text-sm'>Live Link</button>
                                </ShimmerButton>
                            </a>
                            <a href="https://github.com/adnan683515/b2b-clinet-side">
                                <ShimmerButton className='p-1 sm:p-3'>
                                    <button className='bg-[var(--secondary-color)] px-2 py-1 w-full rounded-full'>Frontend</button>
                                </ShimmerButton>
                            </a>
                            <ShimmerButton className='p-1 sm:p-3'>
                                <button className='bg-[var(--secondary-color)] px-2 py-1 w-full rounded-full'>Server</button>
                            </ShimmerButton>
                        </div>

                    </div>
                </NeonGradientCard>
            </motion.div>


        </div>
    );
};

export default Projects2;
