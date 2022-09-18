import React from "react";

import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

interface Inputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) =>
    (window.location.href = `mailto:dzelanovi@gmail.com?message=${formData}`);

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Leave a message
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold ">
          Do I have what you need?{" "}
          <span className="underline decoration-[#3f51b5]">
            Let&apos;s talk!
          </span>{" "}
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#3f51b5] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+381605512776</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#3f51b5] h-7 w-7 animate-pulse" />
            <p className="text-2xl">dzelanovi@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#3f51b5] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Nis, Serbia</p>
          </div>
        </div>

        <form
          className="flex flex-col space-y-2 w-fit mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              className="contact-input"
              type="text"
              placeholder="Name"
            />
            <input
              {...register("email")}
              className="contact-input"
              type="email"
              placeholder="Email"
            />
          </div>

          <input
            {...register("subject")}
            className="contact-input"
            type="text"
            placeholder="Subject"
          />

          <textarea
            {...register("message")}
            className="contact-input"
            placeholder="Message..."
          />
          <button
            className="bg-[#3f51b5] py-5 px-10 rounded-md text-white font-bold text-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
