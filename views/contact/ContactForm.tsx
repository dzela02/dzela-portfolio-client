import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { ArrowPathIcon } from "@heroicons/react/24/solid";

import http from "../../http-client/http";

interface Inputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Props {
  setSubmittedState: Dispatch<SetStateAction<boolean>>;
}

const ContactForm: FC<Props> = ({ setSubmittedState }) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const [submitting, setSubmitting] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    setSubmitting(true);
    const { status: ResponseStatus } = await http.post(
      "/api/sendEmail",
      JSON.stringify(formData)
    );

    if (ResponseStatus === 200) {
      setSubmittedState(false);
    } else {
      alert(
        "There was an error with sending your email please try again later!"
      );
    }
  };
  return (
    <form
      className="flex flex-col space-y-2 w-fit mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex space-y-2 justify-center flex-col md:flex-row md:space-x-2 md:space-y-0">
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
        className="flex items-center justify-center bg-[#3f51b5] py-2 md:py-5 px-10 disabled:bg-[#3f51b5]/20  rounded-md text-white font-bold text-lg transition-all duration-300 ease-in"
        type="submit"
        disabled={submitting}
      >
        {!submitting ? (
          "Submit"
        ) : (
          <ArrowPathIcon className="h-7 w-7 animate-spin" />
        )}
      </button>
    </form>
  );
};

export default ContactForm;
