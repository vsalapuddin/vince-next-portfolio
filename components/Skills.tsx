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
    src: "typescript",
    count: 80,
    title: "TypeScript",
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
    src: "tailwind",
    count: 65,
    title: "Tailwind CSS",
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
    <header className="p-5 flex items-start justify-between ">
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex flex-col relative h-screen max-w-7xl  justify-evenly mx-auto items-center"
      >
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl text-center">
          Skills
        </h3>
        <div className="mt-8 grid grid-cols-4">
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
                transition={{ duration: 1.5 }}
                whileInView={{
                  background: `conic-gradient(rgb(50,205,50) ${skill.count}%, transparent ${skill.count}%)`,
                }}
                className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-full"
              >
                <div className="p-2 md:p-1.5 w-12 h-12 md:w-20 md:h-20 bg-gray-900 rounded-full flex items-center justify-center">
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
      </motion.div>
    </header>
  );
}

export default Skills;
