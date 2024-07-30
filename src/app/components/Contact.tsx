"use client";
import { useEffect, useState } from "react";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Contact: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const confirm = window.confirm(
      "Are you sure you want to send this message?"
    );
    if (!confirm) {
      setSubmitMessage("");
      return;
    }

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
    try {
      setIsLoading(true);
      const response = await fetch(endpoint, options);
      const resData = await response.json();
      console.log("resData", resData);

      if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
        setIsSubmit(true);
        setSubmitMessage("Message sent successfully!");
      } else {
        setSubmitMessage("Failed to send message. Please try again.");
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitMessage("An error occurred. Please try again.");
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReload = () => {
    setSubmitMessage("");
    setIsSubmit(false);
    window.location.reload();
  };

  useEffect(() => {
    setIsSubmit(false);
  }, []);

  return (
    <section
      id="Contact."
      className="project-section sm:h-screen grid place-items-center"
    >
      <div className="w-full sm:w-4/5">
        <h2 className="text-xl w-full text-center my-10">Contact</h2>
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
              disabled={isSubmit}
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
              disabled={isSubmit}
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
              disabled={isSubmit}
            />
          </div>
          <button
            type="submit"
            className={`font-medium py-2.5 px-5 rounded-lg w-full ${
              isSubmit
                ? "bg-gray-300 text-white cursor-not-allowed"
                : "bg-btnBlue hover:opacity-85 text-white"
            }`}
            disabled={isSubmit}
          >
            Send Message
          </button>
          {isLoading && (
            <div className="text-center mt-5">
              <ClipLoader color="#888888" />
            </div>
          )}
          {submitMessage && (
            <>
              <div className="text-blue-700 text-lg mt-5 text-center">
                {submitMessage}
              </div>
              <button
                onClick={handleReload}
                className="underline mt-4 font-medium py-2 px-4 rounded"
              >
                Send another message.
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
