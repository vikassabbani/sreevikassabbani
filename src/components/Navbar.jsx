import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {motion} from "framer-motion";
import Headroom from "react-headroom";

const Navbar = () => {
    return (
        
        <nav className="mb-20 flex items-center justify-between py-6">
            <motion.div
            
            whileHover={{scale:1.2}}
            whileTap={{scale:1.1}}
            className="flex flex-shrink-0 items-center">
                <img className="mx-4 w-20" src={logo} alt="logo"/>
            </motion.div>

            <motion.div 
            whileHover={{scale:1.2}}
            whileTap={{scale:1.1}}
            className=" app text-center flex justify-center space-x-10">
                <motion.h1 
                whileHover={{scale:1.5}}
                whileTap={{scale:1.1}}
                ><a href="#about-me">About Me</a></motion.h1>
                <motion.h1
                 whileHover={{scale:1.5}}
                 whileTap={{scale:1.1}}
                 ><a href="#experience">Experiences</a></motion.h1>
                <motion.h1
                 whileHover={{scale:1.5}}
                 whileTap={{scale:1.1}}
                 ><a href="#projects">Projects</a></motion.h1>
                <motion.h1
                 whileHover={{scale:1.5}}
                 whileTap={{scale:1.1}}
                 ><a href="#contact">Contact</a></motion.h1>
            </motion.div>
            
            <motion.div 
            whileHover={{scale:1.2}}
            whileTap={{scale:1.1}}
            className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/vsabbani" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/vikassabbani" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/vikas_sabbani_/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </motion.div>
        </nav>
    );
};

export default Navbar;

<Headroom>
           <header>
        <nav className="bg-white bg-opacity-5 mb-20 flex items-center justify-between py-6">
            <motion.div
            
            whileHover={{scale:1.2}}
            whileTap={{scale:1.1}}
            className="flex flex-shrink-0 items-center">
                <img className="mx-4 w-20" src={logo} alt="logo"/>
            </motion.div>
            <div className=" app text-center flex justify-center space-x-10">
                <h1>About Me</h1>
                <h1>Experience</h1>
                <h1>Projects</h1>
                <h1>Contact</h1>
            </div>
            <motion.div 
            whileHover={{scale:1.2}}
            whileTap={{scale:1.1}}
            className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/vsabbani" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/vikassabbani" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/vikas_sabbani_/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </motion.div>
        
        </nav>
        </header>
        </Headroom>