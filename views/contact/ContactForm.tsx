import React, { Dispatch, FC, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
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

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
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
  );
};

export default ContactForm;
