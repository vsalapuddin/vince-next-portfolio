import React from "react";
import Image from "next/image";

export default function ufit() {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-4 md:space-y-7 snap-center p-5 md:p-10 overflow-hidden">
      <Image
        className="w-24 h-24 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
        src="/Experience/uf.png"
        alt="UFIT"
        width={"999"}
        height={"999"}
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">UF Information Technology</h4>
        <p className="font-bold mt-1">Application Developer I</p>
        <div className="flex space-x-2 my-2">
          <Image
            width={"999"}
            height={"999"}
            className="h-8 w-8"
            src="/iconSkills/react.png"
            alt={"react"}
          />
          <Image
            width={"999"}
            height={"999"}
            className="h-8 w-8"
            src="/iconSkills/node.png"
            alt={"node"}
          />
          <Image
            width={"999"}
            height={"999"}
            className="h-8 w-8"
            src="/iconSkills/matui.png"
            alt={"matui"}
          />
          <Image
            width={"999"}
            height={"999"}
            className="h-8 w-8"
            src="/iconSkills/git.png"
            alt={"git"}
          />
        </div>
        <p className="uppercase text-gray-300">Jul 2022 - Present</p>
        <ul className="text-m text-gray-200">
          <li>
            Collaborating in an agile environment to design and develop new
            features for the student portal.
          </li>
          <li>
            Designing and implementing a mobile application using React Native
            with Expo.
          </li>
        </ul>
      </div>
    </article>
  );
}
