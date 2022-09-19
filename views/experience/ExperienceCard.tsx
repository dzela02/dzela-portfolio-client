import React, { FC } from "react";

import { motion } from "framer-motion";
import { Experience } from "../../@types/typing";
import { urlFor } from "../../sanity";
import { generateDateRange } from "../../utils/dates";

interface Props {
  experience: Experience;
}

const ExperienceCard: FC<Props> = ({ experience }) => {
  const {
    companyImage,
    technologies,
    jobTitle,
    company,
    points,
    startDate,
    endDate,
  } = experience;

  const companyImageURL = urlFor(companyImage);
  const dateRange = generateDateRange(startDate, endDate);

  return (
    <article className="flex flex-col h-[550px] md:h-auto rounded-l items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-20 h-20 md:w-32 md:h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={companyImageURL}
      />

      <div className="px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl font-light">{jobTitle}</h4>
        <p className="font-bold text-xl md:text-2xl mt-1">{company}</p>

        <div className="flex space-x-2 my-2 overflow-x-scroll scrollbar">
          {technologies.map((technology) => (
            <motion.img
              key={`tech-${technology._id}`}
              className="h-6 w-6 md:h-10 md:w-10"
              src={urlFor(technology.image)}
            />
          ))}
        </div>

        <p className=" py-5 text-gray-300 ">{dateRange}</p>

        <ul className="space-y-2 text-base md:text-lg h-60 scrollbar">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
