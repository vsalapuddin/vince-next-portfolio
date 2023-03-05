import React from "react";

type Props = {};

export default function ufit({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 snap-center p-10 overflow-hidden">
      <img
        className="w-24 h-24 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
        src="/Experience/city-traffic.jpeg"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">City Traffic</h4>
        <p className="font-bold mt-1">Back-End Developer</p>
        <div className="flex space-x-2 my-2">
          <img className="h-8 w-8" src="/iconSkills/react.png" />
          <img className="h-8 w-8" src="/iconSkills/git.png" />
          <img className="h-8 w-8" src="/iconSkills/python.png" />
        </div>
        <p className="uppercase text-gray-300">Jan 2020 - May 2020</p>
        <ul className="text-m text-gray-400">
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
