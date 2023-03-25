import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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
    src: "python",
    count: 45,
    title: "Python",
  },
];

function Skills() {
  return (
    <header className="p-5 flex items-start justify-between">
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex flex-col relative h-screen max-w-7xl  justify-center mx-auto items-center"
      >
        <h3 className="uppercase tracking-[20px] text-gray-400 text-2xl text-center mb-8">
          Skills
        </h3>
        <div className="mt-8 grid grid-cols-4 items-center text-center justify-items-center justify-content-center">
          {skills?.map((skill, i) => (
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              key={i}
              className="text-center mx-4 my-1 items-center"
            >
              <motion.div
                initial={{
                  background: `conic-gradient(rgb(182, 158, 255) 0%, transparent 0%)`,
                }}
                transition={{ duration: 1.5 }}
                whileInView={{
                  background: `conic-gradient(rgb(182, 158, 255) ${skill.count}%, transparent ${skill.count}%)`,
                }}
                className="w-14 h-14 md:w-24 md:h-24 flex items-center justify-center rounded-full"
              >
                <div className="p-2 w-12 h-12 md:w-20 md:h-20 bg-gray-900 rounded-full flex items-center justify-center">
                  <Image
                    width={"999"}
                    height={"999"}
                    src={`/iconSkills/${skill.src}.png`}
                    alt="skills"
                    style={{
                      color: "white",
                    }}
                  />
                </div>
              </motion.div>
              <p className="mt-3 text-sm md:text-lg text-center">
                {skill.title}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </header>
  );
}

export default Skills;
