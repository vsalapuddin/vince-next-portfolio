import React from "react";

type Props = {};

export default function ufit({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <img
        className="w-24 h-24 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
        src="/Experience/UFIT.png"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">UF Information Technology</h4>
        <p className="font-bold mt-1">Software Developer</p>
        <div className="flex space-x-2 my-2">
          <img className="h-8 w-8 rounded-full" src="/iconSkills/react.png" />
          <img className="h-8 w-8 rounded-full" src="/iconSkills/node.png" />
          <img className="h-8 w-8 rounded-full" src="/iconSkills/matui.png" />
          <img className="h-8 w-8 rounded-full" src="/iconSkills/git.png" />
        </div>
        <p className="uppercase text-gray-300">Jul 2022 - Present</p>
        <ul className="list-disc ml-5 text-sm">
          <li>
            Collaborating in an efficient agile environment to design, develop,
            and deploy new features and resolve bugs for a web application with
            a significant user base.
          </li>
          <li>
            Designing and implementing a mobile application from the ground up,
            catering to the needs of students, with a focus on user experience.
          </li>
        </ul>
      </div>
    </article>
  );
}