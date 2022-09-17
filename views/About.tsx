import React from "react";

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row justify-evenly mx-auto items-center max-w-7xl px-10  "
    >
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

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#3f51b5]">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here, content here, making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for lorem ipsum will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
    </motion.div>
  );
};

export default About;
