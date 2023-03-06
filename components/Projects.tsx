import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { SocialIcon } from "react-social-icons";
import "swiper/css";
import "swiper/css/pagination";

export default function Projects({}) {
  const [isHovered, setIsHovered] = useState(false);
  const projects = [
    {
      name: "Web3 Kahoot",
      desc: `An application implementing the concept of Kahoot style quizzes using Web3 technologies.`,
      icon: "/web3.png",
    },
    {
      name: "Crypto Site",
      desc: "A website that allows users to compare bitcoin price to other sets of data and analyze the relationship.",
      github_link: "https://github.com/vsalapuddin/CryptoSite",
      icon: "/crypto.png",
    },
    {
      name: "Minesweeper",
      desc: "A standard minesweeper game created with C++ and Simple and Fast Multimedia Library (SFML). ",
      icon: "/mine.png",
    },
    {
      name: "File I/O Quality Checker ",
      desc: "A C++ file I/O program created to quality check excel files for errors.",
      github_link: "https://github.com/vsalapuddin/Quality-Checker",
      icon: "/file.png",
    },
    {
      name: "Trader Gator",
      desc: "Informational website teaching users how to trade options in the stock market.",
      github_link: "https://github.com/vsalapuddin/vsalapuddin.github.io",
      icon: "/trader.png",
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
        <div className="flex max-w-xs md:max-w-3xl gap-6 mx-auto items-center relative border bg-[#253237] border-[#b69eff] rounded-lg p-2">
          <div className="max-w-xs md:max-w-3xl rounded-lg">
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
                  className="mb-10 flex-col md:flex-row flex items-center"
                >
                  <div>
                    <img
                      className="h-36 w-48 m-2"
                      src={`${project_info.icon}`}
                      style={{ width: "128px", height: "128px" }}
                    />
                  </div>
                  <div className="h-48 p-4 rounded-xl position-absolute ">
                    <h3 className="text-xl my-0 md:my-4">
                      {project_info.name}
                    </h3>
                    <p className="text-m text-gray-400">{project_info.desc}</p>
                    {project_info.github_link ? (
                      <SocialIcon
                        url={project_info.github_link}
                        target="_blank"
                        fgColor={isHovered ? "#b69eff" : "gray"}
                        bgColor="transparent"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="transition-colors duration-200 ease-in-out"
                        style={{ transform: "translateX(-10px)" }}
                      />
                    ) : (
                      <></>
                    )}
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
