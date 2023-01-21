import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <header className="p-5 flex items-start justify-between ">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.6 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="flex flex-col relative h-screen text-cennter md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          About Me
        </h3>
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="/about.jpeg"
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]"
        />
        <motion.div
          initial={{ x: 600, opacity: 0 }}
          transition={{ duration: 0.8 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-10 px-0 md:px-10"
        >
          <p className="text-md font-sans leading-loose">
            As a highly motivated computer science graduate from the University
            of Florida, I bring a diverse range of skill sets which I acquired
            from my experiences. My experience as a web developer for the
            University of Florida's student portal and mobile application has
            allowed me to master technologies such as React.js, React Native,
            Node.js and MaterialUI. With my passion for coding, quick learning
            ability and ability to excel in dynamic environments, I am confident
            that I would be a valuable asset to any tech company and am excited
            for the opportunity to interview and discuss how I can contribute to
            your team.
          </p>
        </motion.div>
      </motion.div>
    </header>
  );
}
