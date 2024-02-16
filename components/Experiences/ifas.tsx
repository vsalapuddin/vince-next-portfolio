import React from "react";
import Image from "next/image";
export default function ifas() {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-4 md:space-y-7 snap-center p-5 md:p-10 overflow-hidden">
      <Image
        className="w-24 h-24 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
        src="/Experience/fnp.jpeg"
        alt="Family Nutrition Program"
        width={"999"}
        height={"999"}
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light text-[#b69eff] text-center">
          IFAS Family Nutrition Program{" "}
        </h4>
        <p className="font-bold mt-1 italic text-center">
          Data Entry Specialist
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
            src="/iconSkills/excel.png"
            alt={"excel"}
          />
        </div>
        <p className="uppercase text-gray-300">May 2019 - May 2020</p>
        <ul className="text-m text-gray-200">
          <li>
            Collaborated with a small team to ensure data is inputted correctly
            and efficiently.
          </li>
          <li>
            Communicated with counties in order to ensure quality data was
            submitted to be analyzed.
          </li>
        </ul>
      </div>
    </article>
  );
}
