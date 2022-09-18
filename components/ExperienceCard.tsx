import React, { FC } from "react";

import { motion } from "framer-motion";
import { Experience } from "../@types/typing";
import { urlFor } from "../sanity";

interface Props {
  experience: Experience;
}

const ExperienceCard: FC<Props> = ({ experience }) => {
  const companyImage = urlFor(experience.companyImage);

  return (
    <article className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={companyImage}
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>

        <div className="flex space-x-2 my-2 overflow-x-scroll scrollbar">
          {experience.technologies.map((technology) => (
            <motion.img
              key={`tech-${technology._id}`}
              className="h-10 w-10"
              src={urlFor(technology.image)}
            />
          ))}
        </div>

        <p className="uppercase py-5 text-gray-300 ">Started... - Ended ...</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary</li>
          <li>Test</li>
          <li>Da da</li>
          <li>Milan</li>
          <li>Dragan</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
