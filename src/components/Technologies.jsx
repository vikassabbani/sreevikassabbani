import { FaPython } from "react-icons/fa";
import { SiPowerbi } from "react-icons/si";
import { IoLogoTableau } from "react-icons/io5";
import { IoLogoDocker } from "react-icons/io5";
import { SiApacheairflow } from "react-icons/si";
import { SiApachespark } from "react-icons/si";
import { SiJirasoftware } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { animate, motion, transform } from "framer-motion";

const iconVariants = (duration) => ({
    initial:{y: -10},
    animate:{
    y:[10,-10],
    transition:{
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType:"reverse"
    }
},
});

const Technologies = () => {
    return (<div className="border-b border-neutral-800 pb-24">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <motion.h1 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl">
            Skills
        </motion.h1>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}

        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPowerbi className="text-7xl text-yellow-500"/>
            </motion.div>
            <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoTableau className="text-7xl text-white"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(1)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl text-gray"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoDocker className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(1)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaAws className="text-7xl text-yellow"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiApacheairflow className="text-7xl text-blue-900"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiApachespark className="text-7xl text-red-800"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiJirasoftware className="text-7xl text-blue-600"/>
            </motion.div>
        </motion.div>
    </div>
    );
};

export default Technologies;