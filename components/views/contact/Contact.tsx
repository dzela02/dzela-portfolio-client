import React from "react";

import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
import ContactForm from "./ContactForm";

import { motion } from "framer-motion";
import ViewHeading from "../../ViewHeading";
import UnderlinedText from "../../UnderlinedText";
import { PageInfo } from "../../../typing";

interface ContactProps {
  pageInfo: PageInfo;
}

const Contact = ({ pageInfo }: ContactProps) => {
  const [showContact, setShowContact] = React.useState(true);

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <ViewHeading text="contact me" />

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold ">
          Do I have what you need? <UnderlinedText text="Let's talk" />
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#3f51b5] h-7 w-7 animate-pulse" />
            <p className="text-2xl">{pageInfo.phone}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#3f51b5] h-7 w-7 animate-pulse" />
            <p className="text-2xl">{pageInfo.email}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#3f51b5] h-7 w-7 animate-pulse" />
            <p className="text-2xl">{pageInfo.location}</p>
          </div>
        </div>

        {showContact ? (
          <ContactForm setSubmittedState={setShowContact} />
        ) : (
          <motion.div
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 justify-center flex-col"
          >
            <CheckCircleIcon className="text-green-400 h-12 w-12 animate-bounce" />
            <p className="text-3xl font-semibold">
              Thanks for <UnderlinedText text="reaching out" />!
            </p>
            <p className="text-xl font-mono"> I&apos;ll update you shortly</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Contact;
