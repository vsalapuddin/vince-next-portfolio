import React from "react";
import Image from "next/image";

export default function scaleai() {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-4 md:space-y-7 snap-center p-5 md:p-10 overflow-hidden">
      <Image
        className="w-24 h-24 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
        src="/Experience/scaleai.png"
        alt="Scale Ai"
        width={"999"}
        height={"999"}
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light text-[#b69eff] text-center">
          Scale AI
        </h4>
        <p className="font-bold mt-1 italic text-center">
          Software Engineer for AI Training
        </p>
        <div className="flex space-x-2 my-2">
          <span
            className={`inline-flex items-center rounded bg-[#b69eff] px-2 py-1 text-sm font-medium `}
          >
            Python
          </span>
          <span
            className={`inline-flex items-center rounded bg-[#b69eff] px-2 py-1 text-sm font-medium `}
          >
            JavaScript
          </span>
        </div>
        <p className="uppercase text-gray-300">Apr 2024 - Present</p>
        <ul className="text-m text-gray-200">
          <li>
            Conducting code corrections and detailed analysis on 500+ tasks,
            enhancing AI training data quality.
          </li>
          <li>
            Resolving complex coding problems, developed functional code, and
            implemented comprehensive test cases.
          </li>
        </ul>
      </div>
    </article>
  );
}
