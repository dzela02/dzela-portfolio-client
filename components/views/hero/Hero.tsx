import React from "react";

import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";

import { Cursor, useTypewriter } from "react-simple-typewriter";

import { PageInfo } from "../../../typing";
import { urlFor } from "../../../sanity";
import HeroButtons from "./HeroButtons";

interface HeroProps {
  pageInfo: PageInfo;
}

const Hero = ({ pageInfo }: HeroProps) => {
  const { text } = useTypewriter({
    words: pageInfo.writtenText,
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative mx-auto object-cover">
        <Image
          width={128}
          height={128}
          className="rounded-full"
          src={urlFor(pageInfo.heroImage)}
          alt="Profile picture of me!"
        />
      </div>

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-2">{text}</span> <Cursor cursorStyle="#3f51b5" />
        </h1>

        <HeroButtons />
      </div>
    </div>
  );
};

export default Hero;
