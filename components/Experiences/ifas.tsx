import React from "react";

type Props = {};

export default function ifas({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 snap-center bg-[#292929] p-10 overflow-hidden">
      <img
        className="w-24 h-24 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
        src="/Experience/fnp.jpeg"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">IFAS Family Nutrition Program </h4>
        <p className="font-bold mt-1">Data Entry Specialist</p>
        <div className="flex space-x-2 my-2">
          <img className="h-8 w-8" src="/iconSkills/c++.png" />
          <img className="h-8 w-8" src="/iconSkills/excel.png" />
        </div>
        <p className="uppercase text-gray-300">May 2019 - May 2020</p>
        <ul className="text-m text-gray-400">
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
