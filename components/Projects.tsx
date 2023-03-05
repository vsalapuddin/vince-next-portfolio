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
      desc: `Developed a time-entry application for employees for faster, more accurate timesheets. Utilized Vue as well as multiple API integrations for a clean and efficient user experience.`,
    },
    {
      name: "OpenAir Project",
      desc: `Developed a time-entry application for employees for faster, more accurate timesheets. Utilized Vue as well as multiple API integrations for a clean and efficient user experience.`,
    },
    {
      name: "UF Directory App",
      desc: "Developed a directory app using the MERN (MongoDB, Express, Angular, Node.js) stack. Utilized git as version control for this full-stack web app.",
    },
    {
      name: "Minesweeper",
      desc: "C++ with Simple and Fast Multimedia Library to create a standard minesweeper game. ",
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
    <header className="p-5 flex items-start justify-between ">
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex flex-col relative h-screen max-w-7xl  justify-evenly mx-auto items-center"
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center">
          Projects
        </h3>
        <div className="flex max-w-xs md:max-w-3xl gap-6 mx-auto items-center relative">
          <div className="w-full">
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              pagination={{
                clickable: true,
              }}
              loop={true}
              autoplay={{
                delay: 3000,
              }}
              modules={[Pagination, Autoplay]}
            >
              {projects.map((project_info, i) => (
                <SwiperSlide key={i} className="mb-10">
                  <div className="h-48 p-4 bg-[#292929] rounded-xl position-absolute">
                    <h3 className="text-xl my-0 md:my-4">
                      {project_info.name}
                    </h3>
                    <p>{project_info.desc}</p>
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
