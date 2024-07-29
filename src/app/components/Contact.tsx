"use client";
import { useState } from "react";

const Contact: React.FC = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const data = {
      email: (e.target as HTMLFormElement).email.value,
      subject: (e.target as HTMLFormElement).subject.value,
      message: (e.target as HTMLFormElement).message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    console.log("resData", resData);

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="Contact."
      className="project-section sm:h-screen grid place-items-center"
    >
      <div className="w-full sm:w-4/5">
        <h1>Contact Page</h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-customLightGray block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-white border border-textBoxBorder active:border-white placeholder-[#9CA2A9] text-customGray text-sm rounded-lg block w-full p-2.5"
              placeholder="sample@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-customLightGray block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-white border border-textBoxBorder placeholder-[#9CA2A9] text-customGray text-sm rounded-lg block w-full p-2.5"
              placeholder="Hello, Taeko!"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-customLightGray block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-white border border-textBoxBorder placeholder-[#9CA2A9] text-customGray text-sm rounded-lg block w-full p-2.5"
              placeholder="I would like to know more about your projects."
            />
          </div>
          <button
            type="submit"
            className="bg-btnBlue hover:opacity-85 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
