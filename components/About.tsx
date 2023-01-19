import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <header className="p-5 flex items-start justify-between ">
      <div className="flex flex-col relative h-screen text-cennter md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          About Me
        </h3>
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 0.8 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="/aiphoto.jpeg"
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]"
        />
        <div className="space-y-10 px-0 md:px-10">
          <p className="text-sm">
            I am a highly motivated and skilled computer science graduate from
            the University of Florida. My background in computer science, paired
            with my minor in Real Estate, gives me a unique perspective and
            skill set in the tech industry. I have experience working as a web
            developer for the University of Florida's student portal, One.UF,
            where I have honed my skills in technologies such as React.js,
            Node.js, and MaterialUI. I have a strong passion for coding and am
            constantly seeking new ways to improve my skills and knowledge. I am
            a fast learner and thrive in a dynamic and challenging environment.
            I am confident that I would be an asset to any tech company and am
            excited for the opportunity to interview for a position.
          </p>
        </div>
      </div>
    </header>
  );
}
