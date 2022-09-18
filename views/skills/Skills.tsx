import React, { FC } from "react";
import { Skill } from "../../@types/typing";

import SkillButton from "./Skill";
import ViewHeading from "../../components/ViewHeading";

interface SkillsProps {
  skills: Skill[];
}

const Skills: FC<SkillsProps> = ({ skills }) => {
  const skillHalf = Math.floor(skills.length / 2);

  return (
    <div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center overflow-hidden">
      <ViewHeading text="skills" />

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-2">
        {skills.map((skill, index) => (
          <SkillButton
            skill={skill}
            key={skill._id}
            directionLeft={index <= skillHalf}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
