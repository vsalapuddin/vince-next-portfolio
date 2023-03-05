import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function Projects({}) {
  const projects = [
    {
      name: "Web3 Kahoot",
      desc: `Developed an application implementing the concept of Kahoot style quizzes using Web3 technologies.`,
    },
    {
      name: "Crypto Site",
      desc: "Developed a website that allows users to compare bitcoin price to other sets of data and analyze the relationship.",
    },
    {
      name: "Minesweeper",
      desc: "C++ with Simple and Fast Multimedia Library (SFML) to create a standard minesweeper game. ",
    },
    {
      name: "File I/O Quality Checker ",
      desc: "Developed a file I/O program using C++ to quality check excel files for errors (created to increase job efficiency for myself and other workers at my place of work).",
      github_link: "https://github.com/vsalapuddin/Quality-Checker",
    },
    {
      name: "Trader Gator",
      desc: "Informational website teaching users how to trade options in the stock market. (HTML and CSS)",
      github_link: "https://github.com/vsalapuddin/vsalapuddin.github.io",
    },
  ];
  return (
    <header className="">
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex flex-col relative h-screen justify-center mx-auto items-center"
      >
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl text-center mb-8">
          Personal Projects
        </h3>
        <div className="flex max-w-xs md:max-w-3xl gap-6 mx-auto items-center relative bg-[#292929]">
          <div className="max-w-xl rounded-lg">
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              pagination={{
                clickable: true,
              }}
              loop={true}
              modules={[Pagination, Autoplay]}
            >
              {projects.map((project_info, i) => (
                <SwiperSlide
                  key={i}
                  className="mb-10 flex-row flex items-center"
                >
                  <div>
                    <img className="h-16 w-32 m-2" src="/phone.png" />
                  </div>
                  <div className="h-48 p-4 rounded-xl position-absolute ">
                    <h3 className="text-xl my-0 md:my-4">
                      {project_info.name}
                    </h3>
                    <p className="text-m text-gray-400">{project_info.desc}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
