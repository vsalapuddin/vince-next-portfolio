import React from "react";
import { motion } from "framer-motion";
import UFIT from "./Experiences/ufit";
import Infotech from "./Experiences/infotech";
import UFITIntern from "./Experiences/ufitIntern";
import InfotechQual from "./Experiences/infotechQual";
import CityTraffic from "./Experiences/cityTraffic";
import IFAS from "./Experiences/ifas";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

type Props = {};

export default function Experience({}: Props) {
  return (
    <div className="h-screen flex flex-col justify-center">
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl text-center mb-8">
        Experience
      </h3>
      <div className="flex">
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
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
      </div>
    </div>
  );
}
