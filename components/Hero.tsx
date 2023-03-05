import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

type Props = {};

export default function Hero({}: Props) {
  const [isAnimating, setIsAnimating] = useState(true);

  return (
    <motion.div
      initial={{ y: -500, opacity: 0, scale: 1 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col space-y-8 items-center justify-center"
    >
      <div className="flex flex-col h-screen items-center justify-between">
        <div></div>
        <div>
          <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[5px] md:tracking-[15px] lg:tracking-[15px] text-center mb-4">
            Software Developer
          </h2>
          <h1 className="text-4xl lg:text-6xl font-semibold text-center">
            Vince Salapuddin
          </h1>
          <div className="pt-5 text-center">
            <a
              href="/"
              onClick={(e) => {
                let hero = document.getElementById("about");
                e.preventDefault();
                hero && hero.scrollIntoView({ behavior: "smooth" });
              }}
              className="heroButton"
            >
              About
            </a>
            <a
              href="/"
              onClick={(e) => {
                let hero = document.getElementById("experience");
                e.preventDefault();
                hero && hero.scrollIntoView({ behavior: "smooth" });
              }}
              className="heroButton"
            >
              Experience
            </a>
            <a
              href="/"
              onClick={(e) => {
                let hero = document.getElementById("skills");
                e.preventDefault();
                hero && hero.scrollIntoView({ behavior: "smooth" });
              }}
              className="heroButton"
            >
              Skills
            </a>
            <a
              href="/"
              onClick={(e) => {
                let hero = document.getElementById("projects");
                e.preventDefault();
                hero && hero.scrollIntoView({ behavior: "smooth" });
              }}
              className="heroButton"
            >
              Projects
            </a>
          </div>
        </div>
        <div>
          <div className="relative w-8 h-12">
            <Link href="#about">
              <div
                className={`absolute inset-0 rounded-full bg-[#32CD32] ${
                  isAnimating ? "animate-bounce" : ""
                }`}
              ></div>
              <div className="absolute inset-0 flex items-center">
                <img
                  src="arrow.png"
                  className={`text-gray-500 text-2xl ${"animate-bounce"}`}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
