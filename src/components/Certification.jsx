import { motion, AnimatePresence } from "framer-motion";
import spot from "../assets/Spot Award.jpg";
import powerbi from "../assets/powerbi.jpg";
import aws from "../assets/aws.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { FreeMode, Pagination } from 'swiper/modules';
import { RxArrowTopRight } from "react-icons/rx";

const Certification = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Certifications and Awards
      </motion.h1>
      <div className="flex flex-wrap">
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8 mb-4"
        >
          <div className="flex items-center justify-center">
            <a
              target="_blank"
              href="https://www.credly.com/badges/70765209-8acd-4dd6-bae9-b0461e253425/public_url"
              rel="noreferrer"
            >
              <img className="rounded-2xl" src={aws} alt="AWS Data Engineer" style={{ height: '345px' }} />
            </a>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8 mb-4"
        >
          <div className="flex items-center justify-center">
            <a
              target="_blank"
              href="https://learn.microsoft.com/en-us/users/sreevikassabbani-7045/credentials/dd6b49c1d487b474?ref=https%3A%2F%2Fwww.linkedin.com%2F"
              rel="noreferrer"
            >
              <img className="rounded-2xl" src={powerbi} alt="Power BI" />
            </a>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}  
          className="w-full lg:w-1/2 lg:p-8 mb-4"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={spot} alt="Spot Award" />
          </div>
        </motion.div>
        <AnimatePresence>
            {(
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
              />)}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Certification;
