import React from "react";
import Image from "next/image";

export default function lexisnexis() {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-4 md:space-y-7 snap-center p-5 md:p-10 overflow-hidden">
      <Image
        className="w-24 h-24 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
        src="/Experience/lexis.png"
        alt="UFIT"
        width={"999"}
        height={"999"}
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light text-[#b69eff] text-center">
          LexisNexis
        </h4>
        <p className="font-bold mt-1 italic text-center">Software Engineer I</p>
        <div className="flex space-x-2 my-2">
          <Image
            width={"999"}
            height={"999"}
            className="h-8 w-8"
            src="/iconSkills/azure.png"
            alt={"react"}
          />
        </div>
        <p className="uppercase text-gray-300">Jan 2024 - Present</p>
        <ul className="text-m text-gray-200">
          <li>
            Developing and modifying existing HPCC software to load and
            manipulate databases and database management systems.
          </li>
          <li>
            Actively migrating existing processes and applications to a
            cloud-based environment.
          </li>
        </ul>
      </div>
    </article>
  );
}
