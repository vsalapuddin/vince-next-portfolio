import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <header className="p-5 flex items-start justify-between ">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="flex flex-col relative h-screen md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      >
        <h3 className="absolute top-24 uppercase tracking-[15px] md:tracking-[15px] text-gray-500 text-xl md:text-2xl">
          About Me
        </h3>
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="/about.jpeg"
          className=" mt-20 -mb-10 md:mt-0 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[400px] xl:h-[400px]"
        />
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-10 px-0 md:px-10 w-full"
        >
          <p className="text-sm md:text-lg font-sans md:leading-loose ">
            Hello, my name is Vince Salapuddin and I am a highly motivated
            computer science graduate from the University of Florida. I am
            currently working as a software developer for the University of
            Florida, working in an agile environment, creating features for the
            student portal and developing a mobile application. With my passion
            for development, capacity to learn quickly, and ability to excel in
            dynamic environments, I am confident that I would be a valuable
            member to any team and am excited for new opportunities to improve
            my craft.
          </p>
        </motion.div>
      </motion.div>
    </header>
  );
}
