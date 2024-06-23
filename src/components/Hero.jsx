import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/vikas.png";
import Deloitte from "../assets/Deloitte.png";
import UNH from "../assets/UNH.png";
import { motion } from "framer-motion";

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
              variants={container(0)}
              initial="hidden"
              animate="visible"
              whileHover={{scale:1.2}}
              whileTap={{scale:1.1}}
              drag="x"
              dragConstraints={{left:0,right:1}}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Sree Vikas Sabbani
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              whileHover={{scale:1.2}}
              whileTap={{scale:1.1}}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Business Intelligence Analyst
            </motion.span>
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
                src={Deloitte}
                alt="Deloitte Logo"
                className="h-20 w-40 rounded-lg"
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
              whileHover={{scale:1.2}}
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