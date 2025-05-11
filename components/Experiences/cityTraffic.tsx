import React from "react";
import Image from "next/image";
export default function ufit() {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-4 md:space-y-7 snap-center p-5 md:p-10 overflow-hidden">
      <Image
        width={"999"}
        height={"999"}
        className="w-24 h-24 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
        src="/Experience/city-traffic.jpeg"
        alt="City Traffic"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light text-[#b69eff] text-center">
          City Traffic
        </h4>
        <p className="font-bold mt-1 italic text-center">Back-End Developer</p>
        <div className="flex space-x-2 my-2">
          <span
            className={`inline-flex items-center rounded bg-[#b69eff] px-2 py-1 text-sm font-medium `}
          >
            React
          </span>
          <span
            className={`inline-flex items-center rounded bg-[#b69eff] px-2 py-1 text-sm font-medium `}
          >
            Node
          </span>
          <span
            className={`inline-flex items-center rounded bg-[#b69eff] px-2 py-1 text-sm font-medium `}
          >
            Python
          </span>
        </div>
        <p className="uppercase text-gray-300">Jan 2020 - May 2020</p>
        <ul className="text-m text-gray-200">
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
