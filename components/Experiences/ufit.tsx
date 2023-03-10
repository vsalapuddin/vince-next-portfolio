import React from "react";

export default function ufit() {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 snap-center p-10 overflow-hidden">
      <img
        className="w-24 h-24 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
        src="/Experience/ufit.png"
        alt="UFIT"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">UF Information Technology</h4>
        <p className="font-bold mt-1">Software Developer</p>
        <div className="flex space-x-2 my-2">
          <img className="h-8 w-8" src="/iconSkills/react.png" alt={"react"} />
          <img className="h-8 w-8" src="/iconSkills/node.png" alt={"node"} />
          <img className="h-8 w-8" src="/iconSkills/matui.png" alt={"matui"} />
          <img className="h-8 w-8" src="/iconSkills/git.png" alt={"git"} />
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
