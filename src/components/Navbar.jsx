import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {motion} from "framer-motion";


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

