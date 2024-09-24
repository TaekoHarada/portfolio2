import React from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";

const HeroSection: React.FC = () => {
  return (
    <section
      id="Hero."
      className="hero-section sm:h-screen grid place-items-center pt-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12  px-10 sm:px-20">
        <div className="col-span-7 place-self-center">
          <h1 className="text-customGray text-2xl sm:text-3xl lg:text-4xl mb-5 font-semibold fadeLeft">
            I am Taeko, an AI Enthusiast.
          </h1>
          <p className="text-customGray text-lg lg:text-xl sm:mt-8 sm:mb-12 fadeLeft">
            I have experience as a system and application administrator, web
            designer, and system architect in Japan. <br />
            Currently pursuing a Software Development diploma at SAIT in
            Calgary.
            <br />I have discovered a passion for{" "}
            <span className="font-semibold">
              Generative AI capabilities
            </span>{" "}
            and keen to enhance my ability for test automation (Selenium),
            mobile development (Kotlin), and web development (React,
            TypeScript).
          </p>
          <div className="flex flex-wrap  items-center mt-5 fadeLeft">
            <div className="mr-5">
              <Link
                href="./docs/Resume-Taeko-Harada.pdf"
                target="_blank"
                rel="Resume-Taeko-Harada"
              >
                <div className="bg-btnBlue hover:opacity-85 text-white px-5 py-2 rounded-lg border flex">
                  <p className="pr-3">Resume</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <div className="flex mt-3 sm:mt-0">
              <div className="mr-2 text-gray-800 hover:opacity-70">
                <Link
                  href="https://www.linkedin.com/in/taeko-harada/"
                  target="_blank"
                  rel="LindedIn Taeko Harada"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </Link>
              </div>
              <div className="mr-2 text-gray-800 hover:opacity-70">
                <Link
                  href="https://github.com/TaekoHarada"
                  target="_blank"
                  rel="GitHub Taeko Harada"
                >
                  <FontAwesomeIcon icon={faSquareGithub} size="2x" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5 place-self-center m-10 lg:m-0 fadeIn">
          <div className="rounded-full bg-[#e1f0ff] bg-opacity-70 p-3">
            <img
              src="/images/portrait.png"
              alt="My portrait"
              className="w-[115px] h-[115px] sm:w-[200px] sm:h-[200px] rounded-full "
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
