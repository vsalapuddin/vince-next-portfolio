import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
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
          fgColor="gray"
          bgColor="transparent"
        ></SocialIcon>
        <SocialIcon
          url="https://github.com/vsalapuddin"
          fgColor="gray"
          bgColor="transparent"
        ></SocialIcon>
        <SocialIcon
          url="https://www.linkedin.com/in/vincesalapuddin/"
          fgColor="gray"
          bgColor="transparent"
        ></SocialIcon>
      </motion.div>
      <div className="flex">
        <button className="text-gray-500 font-bold py-2 px-4 rounded-full inline-flex">
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <a href="/VinceSalapuddinResume.pdf" download>
            Resume
          </a>
        </button>
        <Link href="#contact" legacyBehavior>
          <motion.div
            initial={{ x: 500, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-row items-center text-gray-300 cursor-pointer"
          >
            <SocialIcon
              className="cursor-pointer"
              network="email"
              fgColor="gray"
              bgColor="transparent"
            />
          </motion.div>
        </Link>
      </div>
    </header>
  );
}
