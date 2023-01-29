import React from "react";

type Props = {};

export default function ufit({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 snap-center bg-[#292929] p-10 overflow-hidden">
      <img
        className="w-24 h-24 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
        src="/Experience/ufit.png"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">UF Information Technology</h4>
        <p className="font-bold mt-1">Application Developer Intern</p>
        <div className="flex space-x-2 my-2">
          <img className="h-8 w-8 rounded-full" src="/iconSkills/sql.png" />
          <img className="h-8 w-8 rounded-full" src="/iconSkills/psoft.jpeg" />
          <img className="h-8 w-8 rounded-full" src="/iconSkills/postman.png" />
        </div>
        <p className="uppercase text-gray-300">Jan 2022 - Jul 2022</p>
        <ul className="list-disc ml-5 text-sm">
          <li>
            Worked within an enterprise system to develop solutions for UF’s
            database architecture.
          </li>
          <li>
            Researched and designed an application for delivering on-demand tax
            forms to students.
          </li>
        </ul>
      </div>
    </article>
  );
}
