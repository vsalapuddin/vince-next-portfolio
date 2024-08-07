import React from "react";
import { motion } from "framer-motion";
import UFIT from "./Experiences/ufit";
import Infotech from "./Experiences/infotech";
import UFITIntern from "./Experiences/ufitIntern";
import InfotechQual from "./Experiences/infotechQual";
import CityTraffic from "./Experiences/cityTraffic";
import IFAS from "./Experiences/ifas";
import LexisNexis from "./Experiences/lexisnexis";
import ScaleAI from "./Experiences/scaleAi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

export default function Experience({}) {
  return (
    <header className="">
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        className="h-screen flex flex-col justify-center items-center"
      >
        <h3 className="uppercase tracking-[15px] md:tracking-[20px] text-gray-400 text-xl md:text-2xl text-center mb-8">
          Experience
        </h3>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1 }}
          className="flex border-t-8 bg-[#181717] border-[#b69eff] rounded-lg max-w-xs md:max-w-xl"
        >
          <Swiper
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
              bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`,
            }}
            modules={[Pagination, Autoplay]}
          >
            <SwiperSlide>
              <ScaleAI />
            </SwiperSlide>
            <SwiperSlide>
              <LexisNexis />
            </SwiperSlide>
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
      </motion.div>
    </header>
  );
}
