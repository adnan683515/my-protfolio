import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const HeroText = () => {
    return (
        <div className="flex justify-center items-center  bg-black">
            <div className="sm:space-y-4 space-y-2 ">
                {/* Heading */}
                <h1 className="text-sm sm:text-6xl font-bold text-[var(--text-color)]">
                    Golam <span className="text-[var(--secondary-color)]">Faruk</span> Adnan
                </h1>

                {/* Subtitles */}
                <h2 className="sm:text-2xl  sm:font-semibold text-[var(--text-color)]">
                    <span className="text-[var(--secondary-color)]">MERN</span> Stack Developer
                </h2>
                <p className="text-[var(--text-color)] sm:font-semibold w-[90%] sm:w-[75%]">
                    Web developer from <span className="text-[var(--secondary-color)]">Bangladesh</span>, building modern web application.
                </p>


                {/* Social Icons */}
                <div className="flex gap-3 text-2xl">
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] hover:scale-110 transition ">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#1877F2] hover:scale-110 transition">
                        <FaFacebookF />
                    </a>
                    <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:scale-110 transition">
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HeroText;
