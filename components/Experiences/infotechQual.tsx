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
        <h4 className="text-3xl font-light">Infotech</h4>
        <p className="font-bold mt-1">Software Quality Assurance / Intern</p>
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
            src="/iconSkills/python.png"
            alt={"python"}
          />
        </div>
        <p className="uppercase text-gray-300">May 2020 - May 2021</p>
        <ul className="text-m text-gray-200">
          <li>
            Created UI and API tests for Infotech while streamlining the test
            checking process.
          </li>
          <li>
            Tested the accessibility for Infotech sites using accessibility
            insights for web.
          </li>
        </ul>
      </div>
    </article>
  );
}
