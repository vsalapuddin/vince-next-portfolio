import React from "react";
import { motion } from "framer-motion";

type Props = {};

const skills = [
  {
    id: 1,
    src: "react",
    title: "React",
    style: "shadow-blue-500",
  },
  {
    id: 2,
    src: "node",
    title: "Node",
    style: "shadow-green-500",
  },
  {
    id: 3,
    src: "matui",
    title: "Material Ui",
    style: "shadow-blue-500",
  },
  {
    id: 4,
    src: "git",
    title: "Git",
    style: "shadow-orange-500",
  },
  {
    id: 5,
    src: "c++",
    title: "C++",
    style: "shadow-blue-500",
  },
  {
    id: 6,
    src: "git",
    title: "Git",
    style: "shadow-orange-500",
  },
];

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-log mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl text-center">
          Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img
                src={`/iconSkills/${src}.png`}
                alt="skills"
                className="w-20 mx-auto"
              />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
