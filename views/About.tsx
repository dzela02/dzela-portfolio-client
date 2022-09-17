import React from "react";

import { motion } from "framer-motion";

import AboutPic from "../assets/AboutPic.jpeg";

const About = () => {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200 }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        src="https://cvws.icloud-content.com/B/AVLQF239JByw71Ski6WK68HQoL2HAZ_IOqFxsWvdAzPn9O_RY_GMB__f/Slika+za+portfoliooo.JPG?o=AiD-cgEEQGq4VPjXaYFt_IkKdsgDDiJBzTUPjyFKsMdP&v=1&x=3&a=CAogDLMD9Ltiu4kDWvRo_T_zZYIOY3o3VVQq8QjnjwvPxiASbxCb7cnktDAYm8ql5rQwIgEAUgTQoL2HWgSMB__faidaw0ABN9U7RcOpNB-J_mi9WOFOT0KpddPEnEpuKoCAkJ47uSVWHZZyJ35F9HS5yo4x6FCGdC8hy3L5zViYeMI98lZ6nsrqxY4XpYccFCLmLw&e=1663440610&fl=&r=30a6f45c-59c8-41ea-b487-e8184092a529-1&k=2X92HtSaYnDDsnxy_vABTg&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=54&s=zSGAN_tImVIkTF_OOeGMU_P9LGU&cd=i"
      />
    </div>
  );
};

export default About;
