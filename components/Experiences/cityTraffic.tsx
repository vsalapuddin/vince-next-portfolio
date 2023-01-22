import React from "react";

type Props = {};

export default function ufit({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <img
        className="w-24 h-24 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
        src="/Experience/cityTraffic.jpeg"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">City Traffic</h4>
        <p className="font-bold mt-1">Back-End Developer</p>
        <div className="flex space-x-2 my-2">
          <img className="h-8 w-8 rounded-full" src="/iconSkills/python.png" />
        </div>
        <p className="uppercase text-gray-300">Jan 2020 - May 2020</p>
        <ul className="list-disc ml-5 text-sm">
          <li>
            Developed an application to handle real-time data information for
            motor vehicle accidents.
          </li>
          <li>
            Worked with a small development team to build all the desired
            features for the client.
          </li>
        </ul>
      </div>
    </article>
  );
}
