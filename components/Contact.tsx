import React from "react";
import { motion } from "framer-motion";

const EmailButton = () => {
  window.open("mailto:vsalapuddin@ufl.edu", "_blank");
};
function Contact({}) {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="h-screen flex flex-col justify-center mx-auto items-center text-center max-w-sm"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl mb-8">
        Get In Touch
      </h3>
      <p className="text-m text-gray-400 mb-8">
        My inbox is always open. Whether you have a question or just want to
        create your next idea together!
      </p>
      <button
        className="border border-[#b69eff] text-[#b69eff] font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:text-[#ffffff] hover:bg-[#b69eff]"
        onClick={EmailButton}
      >
        Say Hello
      </button>
    </motion.div>
  );
}

export default Contact;
