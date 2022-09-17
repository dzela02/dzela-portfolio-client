import React from "react";

import { motion } from "framer-motion";

const ExperienceCard = () => {
  return (
    <article className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://media-exp1.licdn.com/dms/image/C4E0BAQFZP78UoLEQfQ/company-logo_200_200/0/1616775061491?e=1671667200&v=beta&t=eb597eTo8YSV6naEZEihDGg9wZBylGyr3-CsJO7s9s4"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Fronted Developer</h4>
        <p className="font-bold text-2xl mt-1">Neotech Solutions</p>

        <div className="flex space-x-2 my-2">
          <motion.img
            className="h-10 w-10"
            src="https://logosdownload.com/logo/javascript-logo-big.png"
          />
          <motion.img
            className="h-10 w-10"
            src="https://logosdownload.com/logo/javascript-logo-big.png"
          />
          <motion.img
            className="h-10 w-10"
            src="https://logosdownload.com/logo/javascript-logo-big.png"
          />
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
