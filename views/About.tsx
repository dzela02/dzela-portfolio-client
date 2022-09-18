import React, { FC, ReactElement } from "react";

import { motion } from "framer-motion";
import { PageInfo } from "../@types/typing";
import { urlFor } from "../sanity";
import ViewHeading from "../components/ViewHeading";
import UnderlinedText from "../components/UnderlinedText";

interface AboutProps {
  pageInfo: PageInfo;
}

const About: FC<AboutProps> = ({ pageInfo }): ReactElement => {
  const url = urlFor(pageInfo.profilePic);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row justify-evenly mx-auto items-center max-w-7xl px-10  "
    >
      <ViewHeading text="about" />

      <motion.img
        initial={{ x: -200 }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        src={url}
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a <UnderlinedText text="little" /> background
        </h4>
        <p className="text-base">{pageInfo.backgroundInformation}</p>
      </div>
    </motion.div>
  );
};

export default About;
