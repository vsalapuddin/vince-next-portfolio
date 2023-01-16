import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <div className="flex flex-row items-center">
        <SocialIcon
          url="https://twitter.com/VinceSalapuddin"
          fgColor="gray"
          bgColor="transparent"
        ></SocialIcon>
        <SocialIcon
          url="https://github.com/vsalapuddin"
          fgColor="gray"
          bgColor="transparent"
        ></SocialIcon>
        <SocialIcon
          url="https://www.linkedin.com/in/vincesalapuddin/"
          fgColor="gray"
          bgColor="transparent"
        ></SocialIcon>
      </div>

      <div className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-4">
          Contact Me
        </p>
      </div>
    </header>
  );
}
