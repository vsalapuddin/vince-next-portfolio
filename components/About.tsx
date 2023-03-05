import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="flex flex-col h-screen justify-center items-center"
    >
      <h3 className="uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-2xl mb-8">
        About Me
      </h3>
      <div className="border p-4 rounded-lg">
        <div className="grid grid-rows-3 gap-4 max-w-xl">
          <div className="border p-4 rounded-lg">
            <div className="flex flex-row">
              <img className="h-16 w-16 m-2" src="/monitor.png" />
              <div>
                <h2 className="text-lg font-bold mb-2">Software Development</h2>{" "}
                <p className="text-gray-500">
                  Experienced in both functional and OOP: C++, JavaScript,
                  TypeScript.
                </p>
              </div>
            </div>
          </div>
          <div className="border p-4 rounded-lg">
            <div className="flex flex-row">
              <img className="h-16 w-16 m-2" src="/iconSkills/react.png" />
              <div>
                <h2 className="text-lg font-bold mb-2">
                  Frontend Dev React, NextJS
                </h2>
                <p className="text-gray-500">
                  Passionate about UI/UX. Experience in HTML, CSS, JS, React and
                  NextJS frameworks.
                </p>
              </div>
            </div>
          </div>
          <div className="border p-4 rounded-lg">
            <div className="flex flex-row">
              <img className="h-16 w-16 m-2" src="/phone.png" />
              <div>
                <h2 className="text-lg font-bold mb-2">
                  React Native Dev Android, iOS
                </h2>
                <p className="text-gray-500">
                  Skilled in developing hybrid mobile apps and cross-platform
                  solutions using the React Native framework.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
