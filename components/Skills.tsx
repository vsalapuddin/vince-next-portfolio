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
    count: 55,
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
  {
    src: "vue",
    count: 55,
    title: "Vue",
  },
  {
    src: "postman",
    count: 70,
    title: "Postman",
  },
  {
    src: "python",
    count: 45,
    title: "Python",
  },
  {
    src: "javascript",
    count: 85,
    title: "Javascript",
  },
  {
    src: "java",
    count: 35,
    title: "Java",
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
      <div className="max-w-screen-md mx-auto p-4 flex flex-col justify-center h-full text-gray-500">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl text-center">
          Skills
        </h3>
        <div className="mt-8 grid grid-cols-5 flex-wrap">
          {skills?.map((skill, i) => (
            <div key={i} className="text-center">
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                transition={{ duration: 1.6 }}
                whileInView={{ opacity: 1, x: 0 }}
                style={{
                  background: `conic-gradient(rgb(50,205,50) ${skill.count}%, transparent ${skill.count}%)`,
                }}
                className="w-24 h-24 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center">
                  <motion.img
                    initial={{ x: -200, opacity: 0 }}
                    transition={{ duration: 1 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    src={`/iconSkills/${skill.src}.png`}
                    alt="skills"
                  />
                </div>
              </motion.div>
              <p className="mt-3">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
