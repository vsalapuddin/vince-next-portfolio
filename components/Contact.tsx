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

function Contact({}) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.open(
      `mailto:vsalapuddin@ufl.edu?subject= ${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`,
      "_blank"
    );
  };
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-15">
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center p-10">
            <EnvelopeIcon className="text-[#32CD32] h-7 w-7 animate-pulse" />
            <p className="text-2xl">vsalapuddin@ufl.edu</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#32CD32] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
