import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projectPic = [
    "/c++.png",
    "/c++.png",
    "/c++.png",
    "/c++.png",
    "/c++.png",
  ];
  const projects = ["Quality Checker", "Git", "ProjectZ", "Zed", "WOW"];
  const projectDesc = ["HELLOOO", "2", "3", "4", "5"];
  return (
    <motion.div
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly
    mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-thumb-[#32CD32]">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{ x: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, x: 0 }}
              src={projectPic[i]}
              className="h-64 w-64"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                {projects[i]}
              </h4>
              <p>{projectDesc[i]}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
