import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

type Props = {};

export default function Projects({}: Props) {
  const projects = [
    {
      name: "OpenAir Project",
      desc: `Developed a time-entry application for employees for faster, more accurate timesheets. Utilized Vue as well as multiple API integrations for a clean and efficient user experience.`,
      github_link: "https://github.com/Sridhar-C-25",
      live_link: "https://myreactflix.netlify.app",
    },
    {
      name: "UF Directory App",
      desc: "Developed a directory app using the MERN (MongoDB, Express, Angular, Node.js) stack. Utilized git as version control for this full-stack web app.",
      github_link: "https://github.com/Sridhar-C-25/jobsearchapp",
      live_link: "https://myjobsearch.netlify.app",
    },
    {
      name: "Minesweeper",
      desc: "C++ with Simple and Fast Multimedia Library to create a standard minesweeper game. ",
      github_link: "https://github.com/Sridhar-C-25/highking",
      live_link: "https://highking01.netlify.app",
    },
    {
      name: "File I/O Quality Checker ",
      desc: "Developed a file I/O program using C++ to quality check excel files for errors (created to increase job efficiency for myself and other workers at my place of work).",
      github_link:
        "https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown",
      live_link: "https://reacttailwindnavbar.netlify.app",
    },
    {
      name: "Trader Gator",
      desc: "Informational website teaching users how to trade options in the stock market. (HTML and CSS)",
      github_link: "https://github.com/Sridhar-C-25",
      live_link: "https://vuecountry05.netlify.app",
    },
  ];
  return (
    <div className="h-screen py-10 text-white">
      <div className="max-w-screen-log mx-auto p-4 flex flex-col justify-center w-full h-full text-white-500">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl text-center">
          Projects
        </h3>
        <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
          <div className="w-full">
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              autoplay={{
                delay: 3000,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
            >
              {projects.map((project_info, i) => (
                <SwiperSlide key={i}>
                  <div className="h-fit w-full p-4 bg-[#292929] rounded-xl">
                    <h3 className="text-xl my-4">{project_info.name}</h3>
                    <p>{project_info.desc}</p>
                    <div className="flex gap-3">
                      <a
                        href={project_info.github_link}
                        target="_blank"
                        className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      >
                        Github
                      </a>
                      <a
                        href={project_info.live_link}
                        target="_blank"
                        className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
