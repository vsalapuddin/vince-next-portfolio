import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

export default function Projects({}) {
  const [isHovered, setIsHovered] = useState(false);
  const projects = [
    {
      name: "Web3 Kahoot",
      desc: `A software solution developed using Rust and React that leverages the power of Web3 technologies on the Solana blockchain. It is designed to provide an exceptional user experience through the implementation of Kahoot-style quizzes, offering an engaging and interactive platform for users. Notably, users can earn cryptocurrency as they participate in quizzes.`,
      icon: "/web3.png",
    },
    {
      name: "Crypto Site",
      desc: "A web-based application that facilitates data analysis of Bitcoin price trends against other data sets. It enables users to make comparisons between Bitcoin prices and other metrics, thereby providing valuable insights into the cryptocurrency market. The platform allows users to visualize the relationship between Bitcoin price trends and other data sets, providing an informative user experience.",
      github_link: "https://github.com/vsalapuddin/CryptoSite",
      icon: "/crypto.png",
    },
    {
      name: "Minesweeper",
      desc: "This project is a Minesweeper game created using C++ programming language and the Simple and Fast Multimedia Library (SFML). The use of C++ and SFML ensures excellent performance and smooth gameplay, enhancing the overall user experience. ",
      icon: "/mine.png",
    },
    {
      name: "File I/O Quality Checker ",
      desc: "C++ program designed to perform automated quality checks on Excel files, leveraging file input/output functionality. It offers a robust solution for identifying and rectifying errors in Excel files, thereby reducing the risk of data loss and inaccuracies. The program employs advanced error detection algorithms to identify errors efficiently and accurately, minimizing the need for manual intervention.",
      github_link: "https://github.com/vsalapuddin/Quality-Checker",
      icon: "/file.png",
    },
    {
      name: "Trader Gator",
      desc: "An educational website that provides users with comprehensive guidance on trading options in the stock market. The website employs a user-friendly interface and intuitive navigation, allowing users to access relevant information quickly and easily. The content is presented in a clear and concise manner, leveraging modern instructional design principles to facilitate effective learning.",
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
        <h3 className="uppercase tracking-[20px] text-gray-400 text-2xl text-center mb-8">
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
                  <Image
                      className="h-36 w-48 m-2"
                      src={`${project_info.icon}`}
                      
                      width={"999"}
height={"999"}
                      alt={"project image"}
                    />
                  
                  <div className="h-64 p-4 rounded-xl position-absolute">
                    <h3 className="text-xl my-0 md:my-4">
                      {project_info.name}
                    </h3>
                    <p className="text-sm md:text-lg  text-gray-200">{project_info.desc}</p>
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
