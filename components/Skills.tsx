import React from "react";
import { motion } from "framer-motion";

type Props = {};

const skills = [
  {
    src: "react",
    count: 75,
    title: "React",
  },
  {
    src: "node",
    count: 45,
    title: "Node",
  },
  {
    src: "matui",
    count: 75,
    title: "Material Ui",
  },
  {
    src: "git",
    count: 85,
    title: "Git",
  },
  {
    src: "c++",
    count: 85,
    title: "C++",
  },
  {
    src: "sql",
    count: 60,
    title: "SQL",
  },
];

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      transition={{ duration: 1.6 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="h-screen"
    >
      <div className="max-w-screen-log mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-500">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl text-center">
          Skills
        </h3>
        <div className="flex items-center justify-center mt-8 gap-6 flex-wrap">
          {skills?.map((skill, i) => (
            <div key={i} className="text-center">
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                transition={{ duration: 1.6 }}
                whileInView={{ opacity: 1, x: 0 }}
                style={{
                  background: `conic-gradient(rgb(50,205,50) ${skill.count}%, transparent ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center">
                  <motion.img
                    initial={{ x: -200, opacity: 0 }}
                    transition={{ duration: 1 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    src={`/iconSkills/${skill.src}.png`}
                    alt="skills"
                    className="w-20 mx-auto"
                  />
                </div>
              </motion.div>
              <p className="text-xl mt-3">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
