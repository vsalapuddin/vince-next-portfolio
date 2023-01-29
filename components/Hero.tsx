import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

export default function Hero({}: Props) {
  return (
    <motion.div
      initial={{ y: -500, opacity: 0, scale: 1 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col space-y-8 items-center justify-center"
    >
      <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
        Software Developer
      </h2>
      <h1 className="text-5xl lg:text-6xl font-semibold -px-10">
        Vince Salapuddin
      </h1>
      {/* implement smooth scrolling */}
      <div className="pt-5">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#experience">
          <button className="heroButton">Experience</button>
        </Link>
        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="heroButton">Projects</button>
        </Link>
      </div>
    </motion.div>
  );
}
