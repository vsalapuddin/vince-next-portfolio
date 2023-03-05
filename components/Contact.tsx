import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
const EmailButton = () => {
  window.open("mailto:vsalapuddin@ufl.edu", "_blank");
};
function Contact({}) {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <button
        className="border border-gray-500 text-gray-500 font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-gray-500 hover:text-white hover:border-gray-700"
        onClick={EmailButton}
      >
        Email me
      </button>
    </motion.div>
  );
}

export default Contact;
