import React, { FC, ReactElement } from "react";
import { motion } from "framer-motion";
import ExperienceCard from "../components/ExperienceCard";
import { Experience } from "../@types/typing";

interface ExperienceProps {
  experiences: Experience[];
}

const Experience: FC<ExperienceProps> = ({ experiences }): ReactElement => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 snap-x snap-mandatory overflow-x-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#3f51b5]/80">
        {experiences.map((experience) => (
          <ExperienceCard experience={experience} key={experience._id} />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
