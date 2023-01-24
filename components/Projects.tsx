import React from "react";
import { motion } from "framer-motion";
import UFIT from "./Experiences/ufit";
import Infotech from "./Experiences/infotech";
import UFITIntern from "./Experiences/ufitIntern";
import InfotechQual from "./Experiences/infotechQual";
import CityTraffic from "./Experiences/cityTraffic";
import IFAS from "./Experiences/ifas";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

type Props = {};

export default function Projects({}: Props) {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ x: 0, opacity: 1 }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <Swiper
        slidesPerView={2}
        grabCursor={true}
        loop={true}
        spaceBetween={150}
        className="mySwiper mx-auto p-4 flex flex-col justify-center  text-white"
      >
        <SwiperSlide>
          <UFIT />
        </SwiperSlide>
        <SwiperSlide>
          <UFITIntern />
        </SwiperSlide>
        <SwiperSlide>
          <Infotech />
        </SwiperSlide>
        <SwiperSlide>
          <InfotechQual />
        </SwiperSlide>
        <SwiperSlide>
          <CityTraffic />
        </SwiperSlide>
        <SwiperSlide>
          <IFAS />
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
}
