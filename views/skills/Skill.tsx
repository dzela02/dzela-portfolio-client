import React, { FC } from "react";

import { motion } from "framer-motion";
import { Skill } from "../../@types/typing";
import { urlFor } from "../../sanity";

interface SkillProps {
  skill: Skill;
  directionLeft?: boolean;
}

const Skill: FC<SkillProps> = ({ directionLeft = false, skill }) => {
  return (
    <div className="group relative flex cursor-pointer ">
      <motion.img
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill.image)}
        alt=""
        className="rounded-full border border-gray-500 w-20 h-20 md:w-24 md:h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out "
      />
      <div className="absolute opacity-0 hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 xl:w-32 xl:h-32 md:w-24 md:h-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl md:text-3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
