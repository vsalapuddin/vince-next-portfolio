import React from "react";
import { motion } from "framer-motion";
import ExperienceCarousel from "./ExperienceCarousel";

type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <ExperienceCarousel />
        <ExperienceCarousel />
        <ExperienceCarousel />
        <ExperienceCarousel />
      </div>
    </motion.div>
  );
}
