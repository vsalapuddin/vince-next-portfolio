import React from "react";
import { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header({}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  return (
    <header className="sticky top-0 p-1 flex items-start justify-between max-w-5xl mx-auto z-20 xl:items-center rounded-lg bg-[#181717]">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://twitter.com/VinceSalapuddin"
          target="_blank"
          fgColor={isHovered ? "#b69eff" : "gray"}
          bgColor="transparent"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="transition-colors duration-200 ease-in-out"
        ></SocialIcon>
        <SocialIcon
          url="https://github.com/vsalapuddin"
          target="_blank"
          fgColor={isHovered2 ? "#b69eff" : "gray"}
          bgColor="transparent"
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
          className="transition-colors duration-200 ease-in-out"
        ></SocialIcon>
        <SocialIcon
          url="https://www.linkedin.com/in/vincesalapuddin/"
          target="_blank"
          fgColor={isHovered3 ? "#b69eff" : "gray"}
          bgColor="transparent"
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}
          className="transition-colors duration-200 ease-in-out"
        ></SocialIcon>
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row"
      >
        <Link
          href="/VinceSalapuddinResume.pdf"
          target="_blank"
          className="px-6 py-3 border-[#242424] rounded-full uppercase tracking-widest
     text-gray-400 transition-all hover:text-[#b69eff]"
          download
        >
          résumé
        </Link>
      </motion.div>
    </header>
  );
}
