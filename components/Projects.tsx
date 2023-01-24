import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

type Props = {};

function Projects({}: Props) {
  return (
    <motion.div className="h-screen ">
      <div className="max-w-screen-log mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl text-center">
          Projects
        </h3>
      </div>
    </motion.div>
  );
}

export default Projects;
