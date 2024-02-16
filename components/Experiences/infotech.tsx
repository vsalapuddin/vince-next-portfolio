import React from "react";
import Image from "next/image";
export default function infotech() {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-4 md:space-y-7 snap-center p-5 md:p-10 overflow-hidden">
      <Image
        width={"999"}
        height={"999"}
        className="w-24 h-24 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
        src="/Experience/infotech.png"
        alt="Infotech"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light text-[#b69eff] text-center">
          Infotech
        </h4>
        <p className="font-bold mt-1 italic text-center">
          Software Engineer Intern
        </p>
        <div className="flex space-x-2 my-2">
          <Image
            width={"999"}
            height={"999"}
            className="h-8 w-8"
            src="/iconSkills/c++.png"
            alt={"c++"}
          />
          <Image
            width={"999"}
            height={"999"}
            className="h-8 w-8"
            src="/iconSkills/vue.png"
            alt={"vue"}
          />
          <Image
            width={"999"}
            height={"999"}
            className="h-8 w-8"
            src="/iconSkills/git.png"
            alt={"git"}
          />
        </div>
        <p className="uppercase text-gray-300">May 2021 - Sept 2021</p>
        <ul className="text-m text-gray-200">
          <li>
            Developed a time-entry application for employees for faster, more
            accurate timesheets.
          </li>
          <li>
            Created solutions to optimize the testing process as well as
            migrating company software packages.
          </li>
        </ul>
      </div>
    </article>
  );
}
