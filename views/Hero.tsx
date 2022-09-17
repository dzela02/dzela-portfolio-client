import React from "react";

import BackgroundCircles from "../components/BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

import { Cursor, useTypewriter } from "react-simple-typewriter";

import ProfilePicture from "../assets/MarkoProfilna.jpeg";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["Developer", "Engineer", "Coffee Lover"],
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
          src={ProfilePicture}
          alt="Profile picture of me!"
        />
      </div>

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span> <Cursor cursorColor="#3f51b5" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton"></button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
