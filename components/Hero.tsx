import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function Hero() {
  const [isAnimating, setIsAnimating] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="h-screen flex flex-col space-y-8 items-center justify-center"
    >
      <div className="flex flex-col h-screen items-center justify-between">
        <div></div>
        <div>
          <h2 className="text-sm uppercase text-gray-400 pb-2 tracking-[5px] md:tracking-[15px] lg:tracking-[15px] text-center mb-4">
            Software Engineer
          </h2>

          <h1 className="text-4xl lg:text-6xl font-semibold text-center animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
            <Typewriter
              options={{
                strings: ["Vince Salapuddin"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="pt-5 text-center">
            <Link
              href="/"
              onClick={(e) => {
                let hero = document.getElementById("about");
                e.preventDefault();
                hero && hero.scrollIntoView({ behavior: "smooth" });
              }}
              className="heroButton"
            >
              About
            </Link>
            <Link
              href="/"
              onClick={(e) => {
                let hero = document.getElementById("experience");
                e.preventDefault();
                hero && hero.scrollIntoView({ behavior: "smooth" });
              }}
              className="heroButton"
            >
              Experience
            </Link>
            <Link
              href="/"
              onClick={(e) => {
                let hero = document.getElementById("skills");
                e.preventDefault();
                hero && hero.scrollIntoView({ behavior: "smooth" });
              }}
              className="heroButton"
            >
              Skills
            </Link>
            <Link
              href="/"
              onClick={(e) => {
                let hero = document.getElementById("projects");
                e.preventDefault();
                hero && hero.scrollIntoView({ behavior: "smooth" });
              }}
              className="heroButton"
            >
              Projects
            </Link>
          </div>
        </div>
        <div>
          <div className="relative w-8 h-12">
            <Link
              href="/"
              onClick={(e) => {
                let hero = document.getElementById("about");
                e.preventDefault();
                hero && hero.scrollIntoView({ behavior: "smooth" });
              }}
              aria-label={"Continue to about screen"}
            >
              <div
                className={`absolute inset-0 rounded-full bg-[#b69eff] ${
                  isAnimating ? "animate-bounce" : ""
                }`}
              ></div>
              <div className="absolute inset-0 flex items-center">
                <Image
                  src="/arrow.png"
                  className={`text-gray-400 text-2xl ${"animate-bounce"}`}
                  alt={"down arrow"}
                  width={"999"}
                  height={"999"}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
