import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
type Props = {};
export default function About({}: Props) {
  return (
    <header className="p-5 flex items-start justify-between ">
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        className="flex flex-col relative h-screen md:text-left md:flex-row px-0 max-w-5xl md:px-10 justify-center mx-auto items-center"
      >
        <h3 className="absolute top-24 md:top-36 uppercase tracking-[15px] md:tracking-[15px] text-gray-400 text-xl md:text-2xl">
          About Me
        </h3>

        <Image
          src="/about.jpeg"
          className=" mt-20 mb-10 md:mt-0 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover  md:w-64 md:h-64 xl:w-[400px] xl:h-[400px] ring-8 ring-[#b69eff]"
          width={"999"}
          height={"999"}
          alt="Vince Salapuddin"
          priority
        />
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1 }}
          className="space-y-10 px-0 md:px-10 w-full"
        >
          <p className="text-md md:text-lg font-sans md:leading-loose ">
            Hello! My name is Vince Salapuddin and I am a highly motivated
            Software Engineer as well as a computer science graduate from the
            University of Florida. I am currently working as a Software Engineer
            for LexisNexis, developing HPCC software and migrating existing
            applications to a cloud-based environment. With my passion for
            development, capacity to learn quickly, and ability to excel in
            dynamic environments, I am confident that I would be a valuable
            member to any team and am excited for new opportunities to improve
            my craft.
          </p>
        </motion.div>
      </motion.div>
    </header>
  );
}
