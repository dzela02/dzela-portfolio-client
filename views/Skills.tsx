import React, { FC } from "react";
import { Skill } from "../@types/typing";

import SkillButton from "../components/Skill";

interface SkillsProps {
  skills: Skill[];
}

const Skills: FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center overflow-hidden">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-3">
        {skills.map((skill) => (
          <SkillButton skill={skill} key={skill._id} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
