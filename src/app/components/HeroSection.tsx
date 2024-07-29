import React from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";

// interface HeroSectionProps {
//   title: string;
//   subtitle: string;
// }

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section sm:h-screen grid place-items-center">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-customGray text-2xl sm:text-3xl lg:text-4xl mb-5 font-semibold">
            Hi, I'm Taeko.
          </h1>
          <p className="text-customGray text-lg lg:text-xl sm:mt-8 sm:mb-12">
            I’m excited about <b>mobile development</b> and keen to enhance my
            app-building skills. As a Software Development student in Calgary, I
            bring experience from Japan as a system admin, web designer, Flash
            developer, and system architect.
          </p>
          <div className="flex flex-wrap  items-center mt-5">
            <div className="mr-5">
              <button className="bg-btnBlue hover:opacity-85 text-white px-5 py-2 rounded-lg">
                Download Resume
              </button>
            </div>
            <div className="flex mt-3 sm:mt-0">
              <div className="w-8 mr-2 text-gray-800 hover:opacity-70">
                <Link href="/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </div>
              <div className="w-8 mr-2 text-gray-800 hover:opacity-70">
                <Link href="/">
                  <FontAwesomeIcon icon={faSquareGithub} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5 place-self-center m-10 lg:m-0">
          <div className="rounded-full bg-[#eef9ff] p-2">
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
