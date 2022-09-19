import React from "react";
import { Skill } from "../../../typing";

import SkillButton from "./Skill";
import ViewHeading from "../../ViewHeading";

interface SkillsProps {
  skills: Skill[];
}

const Skills = ({ skills }: SkillsProps) => {
  const skillHalf = Math.floor(skills.length / 2);

  return (
    <div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center overflow-hidden">
      <ViewHeading text="skills" />

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-2 xl:pt-12">
        {skills.map((skill, index) => (
          <SkillButton
            skill={skill}
            key={skill._id}
            directionLeft={index + 1 <= skillHalf}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
