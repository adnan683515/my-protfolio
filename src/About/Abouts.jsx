import React from 'react';
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { motion } from "framer-motion";
const Abouts = () => {
    return (
        <div className="flex relative overflow-hidden w-[98%] mx-auto flex-col md:flex-row gap-6 justify-around p-6 text-white bg-black">

            {/* Left: Education Info */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="flex justify-center items-center w-full md:w-1/2">
                <NeonGradientCard
                    className="bg-black"
                    gradient="linear-gradient(135deg, #ff8c00, #e4e4e4, #ffffff)"
                >
                    <div className="p-6 h-full bg-black rounded-xl ">
                        <h2 className="text-2xl font-bold mb-2">🎓 Education</h2>
                        <p className="mb-1">👋 I am <span className="font-semibold text-orange-400">Addnan</span></p>
                        <p className="mb-1">📚 Studying at Feni Computer Institute</p>
                        <p className="mb-1">💻 Diploma in Computer Science</p>
                        <p className="mb-1">📍 Department: Computer Science</p>
                    </div>
                </NeonGradientCard>
            </motion.div>

            {/* Right: Skills & Journey */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="flex justify-center items-center w-full md:w-1/2">
                <NeonGradientCard
                    className="bg-black"
                    gradient="linear-gradient(135deg, #ff8c00, #facc15, #22d3ee)"
                >
                    <div className="p-6 bg-black rounded-xl text-white">
                        <h2 className="text-2xl font-bold mb-2">🚀 My Journey</h2>
                        <p className="mb-1">🌐 I am creating responsive websites</p>
                        <p className="mb-1">📖 I love self-learning</p>
                        <p className="mb-1">🧩 Recently learning problem solving</p>
                        <p className="mb-1">🧠 Sometimes solving with JavaScript</p>
                        <p className="mb-1">💡 I solve problems on <span className="text-yellow-400 font-medium">LeetCode</span></p>
                        <p className="mb-1">⏰ I'm a regular coder</p>
                    </div>
                </NeonGradientCard>
            </motion.div>

        </div>
    );
};

export default Abouts;
