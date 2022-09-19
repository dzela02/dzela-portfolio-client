import React, { FC } from "react";
import { Skill } from "../../@types/typing";

import SkillButton from "./Skill";
import ViewHeading from "../../components/ViewHeading";
import { useTypewriter, Cursor } from "react-simple-typewriter";

interface SkillsProps {
  skills: Skill[];
}

const Skills: FC<SkillsProps> = ({ skills }) => {
  const [text] = useTypewriter({
    words: ["Besides React here are some more skills!"],
    loop: true,
  });
  const skillHalf = Math.floor(skills.length / 2);

  return (
    <div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center overflow-hidden">
      <ViewHeading text="skills" />
      <h3 className="absolute top-24 text-xl font-mono md:hidden">
        {text}
        <Cursor cursorColor="#3f51b5" />
      </h3>

      <h3 className="hidden md:inline-block absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
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

      <h3 className="md:hidden absolute bottom-12 uppercase tracking-[3px] text-gray-500 text-sm">
        Click on a skill for current proficiency
      </h3>
    </div>
  );
};

export default Skills;
