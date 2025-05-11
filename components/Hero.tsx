import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function Hero() {
  const [isArrowVisible, setIsArrowVisible] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    setIsArrowVisible(isInView);
  }, [isInView]);

  const handleArrowClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsArrowVisible(false);
    const hero = document.getElementById("about");
    hero && hero.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      ref={ref}
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
            <Link href="/" onClick={handleArrowClick} className="heroButton">
              About
            </Link>
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                const hero = document.getElementById("experience");
                hero && hero.scrollIntoView({ behavior: "smooth" });
              }}
              className="heroButton"
            >
              Experience
            </Link>
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                const hero = document.getElementById("skills");
                hero && hero.scrollIntoView({ behavior: "smooth" });
              }}
              className="heroButton"
            >
              Skills
            </Link>
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                const hero = document.getElementById("projects");
                hero && hero.scrollIntoView({ behavior: "smooth" });
              }}
              className="heroButton"
            >
              Projects
            </Link>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isArrowVisible ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-8 h-12">
            <Link
              href="/"
              onClick={handleArrowClick}
              aria-label="Continue to about screen"
            >
              <div className="absolute inset-0 rounded-full bg-[#b69eff] animate-bounce"></div>
              <div className="absolute inset-0 flex items-center">
                <Image
                  src="/arrow.png"
                  className="text-gray-400 text-2xl animate-bounce"
                  alt="down arrow"
                  width={999}
                  height={999}
                />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
