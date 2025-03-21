import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/vikas.png";
import WIN from "src/assets/WIN.png";
import Deloitte from "../assets/Deloitte.png";
import UNH from "../assets/UNH.png";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pd-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              className="pb-20 lg:mt-20 text-6xl lg:text-4xl tracking-tight bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-transparent bg-clip-text"
            >
              <TypeAnimation
                sequence={[
                  "Hi, I'm Vikas.",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1.5em', display: 'inline-block' }}
                repeat={0}
              />
            </motion.h1>
            <motion.span
              variants={container(0)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              drag="x"
              dragConstraints={{ left: 0, right: 1 }}
              className="font-thin text-1xl tracking-tight"
            >
              <TypeAnimation
                sequence={[
                  "I'm a Business Intelligence Analyst.",
                  1000,
                  "A Business Analytics Graduate.",
                  1000,
                  "A problem solver.",
                  1000,
                  "An innovative thinker.",
                  1000,
                  "A...cool guy?",
                  1000,
                  "OK..I'm running out of ideas...",
                  1000,
                  "Uhh....you can scroll down to learn more about me.",
                  2000,
                  "You're uh... still here?",
                  1000,
                  "Ok, this has been fun now, I'm gonna restart the loop now...",
                  2000,
                  "See ya! :)",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}
              />
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify"
            >
              {HERO_CONTENT}
            </motion.p>
            <div className="flex space-x-4">
              <motion.img
                whileHover={{ scale: 1.2 }}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                src={WIN}
                alt="WIN Logo"
                className="h-20 w-30 rounded-lg"
              />
              <motion.img
                whileHover={{ scale: 1.2 }}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                src={Deloitte}
                alt="Deloitte Logo"
                className="h-20 w-30 rounded-lg"
              />
              <motion.img
                whileHover={{ scale: 1.2 }}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                src={UNH}
                alt="UNH Logo"
                className="h-20 w-30 rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 mt-8 lg:mt-0">
          <div className="flex justify-center">
            <motion.img
              whileHover={{ scale: 1.2 }}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0 }}
              src={profilePic}
              alt="Sree Vikas Sabbani"
              className="h-90 w-80 rounded-lg"
            />
          </div>    
        </div>
      </div>
    </div>
  );
};

export default Hero;
