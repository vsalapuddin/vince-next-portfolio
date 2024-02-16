import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

interface Status {
  submitted: boolean;
  submitting: boolean;
  info: { error: boolean; msg: string | null };
}

interface Inputs {
  email: string;
  message: string;
}

export default function Contact(): JSX.Element {
  const [status, setStatus] = useState<Status>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState<Inputs>({
    email: "",
    message: "",
  });

  const handleServerResponse = (ok: boolean, msg: string) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      });
      setInputs({
        email: "",
        message: "",
      });
    }
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/mlekpbzp",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted!"
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex flex-col justify-center mx-auto items-center text-center max-w-sm"
    >
      <h3 className="uppercase tracking-[15px] text-gray-400 text-xl md:text-2xl mb-8 text-center mx-auto">
        Say Hello
      </h3>
      <form onSubmit={handleOnSubmit} className="w-full max-w-md">
        <div className="mb-4 px-4">
          <label htmlFor="email" className="block text-gray-400 font-bold mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="_replyto"
            onChange={handleOnChange}
            required
            value={inputs.email}
            className="appearance-none bg-[#181717] border rounded w-full py-2 px-3 text-white border-[#b69eff] leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6 px-4">
          <label
            htmlFor="message"
            className="block  text-gray-400 font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            onChange={handleOnChange}
            required
            value={inputs.message}
            className="bg-[#181717] appearance-none border border-[#b69eff] rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          disabled={status.submitting}
          className="bg-[#b69eff] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {!status.submitting
            ? !status.submitted
              ? "Submit"
              : "Submitted"
            : "Submitting..."}
        </button>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && (
        <p className="pt-4">{status.info.msg}</p>
      )}
    </motion.div>
  );
}
