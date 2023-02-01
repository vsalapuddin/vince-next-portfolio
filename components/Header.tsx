import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

export default function Header({}) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://twitter.com/VinceSalapuddin"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        ></SocialIcon>
        <SocialIcon
          url="https://github.com/vsalapuddin"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        ></SocialIcon>
        <SocialIcon
          url="https://www.linkedin.com/in/vincesalapuddin/"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        ></SocialIcon>
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row"
      >
        <button
          className="px-6 py-2 border-[#242424] rounded-full uppercase tracking-widest
     text-gray-500 transition-all hover:text-[#32CD32]"
        >
          <a href="/VinceSalapuddinResume.pdf" download>
            RESUME
          </a>
        </button>
      </motion.div>
    </header>
  );
}
