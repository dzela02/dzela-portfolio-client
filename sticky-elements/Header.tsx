import React, { FC, ReactElement } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../@types/typing";

interface HeaderProps {
  socials: Social[];
}

const Header: FC<HeaderProps> = ({ socials }): ReactElement => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 p-5">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300"
      >
        <Link href="#contact">
          <div className="cursor-pointer">
            <SocialIcon network="email" fgColor="gray" bgColor="transparent" />

            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
              Get in touch
            </p>
          </div>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
