import React, { useState } from "react";
import { motion, useMotionValue, transform, useSpring } from "framer-motion";

type Props = {};

const skills = [
  {
    src: "react",
    count: 85,
    title: "React",
  },
  {
    src: "javascript",
    count: 85,
    title: "Javascript",
  },
  {
    src: "c++",
    count: 85,
    title: "C++",
  },
  {
    src: "git",
    count: 85,
    title: "Git",
  },
  {
    src: "html",
    count: 75,
    title: "HTML",
  },
  {
    src: "css",
    count: 70,
    title: "CSS",
  },
  {
    src: "matui",
    count: 70,
    title: "Material Ui",
  },
  {
    src: "postman",
    count: 70,
    title: "Postman",
  },
  {
    src: "sql",
    count: 60,
    title: "SQL",
  },
  {
    src: "node",
    count: 55,
    title: "Node",
  },
  {
    src: "vue",
    count: 55,
    title: "Vue",
  },
  {
    src: "python",
    count: 45,
    title: "Python",
  },
];

function Skills({}: Props) {
  const x = useSpring(0);
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      transition={{ duration: 1.6 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="h-screen"
    >
      <div className="max-w-screen-md mx-auto p-4 items-center flex flex-col justify-center h-full text-gray-500">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl text-center">
          Skills
        </h3>
        <div className="mt-8 grid grid-cols-4 flex-wrap">
          {skills?.map((skill, i) => (
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              key={i}
              className="text-center mx-4 my-1"
            >
              <motion.div
                initial={{
                  background: `conic-gradient(rgb(50,205,50) 0%, transparent 0%)`,
                }}
                transition={{ duration: 1.6 }}
                whileInView={{
                  background: `conic-gradient(rgb(50,205,50) ${skill.count}%, transparent ${skill.count}%)`,
                }}
                className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl p-2 md:p-1.5 w-12 h-12 md:w-20 md:h-20 bg-gray-900 rounded-full flex items-center justify-center">
                  <motion.img
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1 }}
                    src={`/iconSkills/${skill.src}.png`}
                    alt="skills"
                  />
                </div>
              </motion.div>
              <p className="mt-3 text-sm md:text-lg">{skill.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
