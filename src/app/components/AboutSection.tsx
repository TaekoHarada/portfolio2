import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faBriefcase,
  faGraduationCap,
  faAward,
} from "@fortawesome/free-solid-svg-icons";

const AboutSection: React.FC = () => {
  return (
    <section
      id="About."
      className="about-section sm:h-screen grid place-items-center"
    >
      <div>
        <h2 className="text-xl w-full text-center my-10">About me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="bg-white rounded-lg shadow p-10 col-span-7 lg:mr-5">
            <div className="flex items-center">
              <div className="w-5 mr-2 text-gray-800">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <div className="text-lg">Experiences</div>
            </div>
            <ul className="mt-5 ml-7">
              <li className="mb-2">Math Tutor (May 2011 - Dec 2011)</li>
              <li className="mb-2">
                System Administrator (Feb 2009 - Feb 2011)
              </li>
              <li className="mb-2">
                Flash ActionScript Coder (Oct 2007 - Jan 2009)
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow p-10 col-span-5 mt-5 lg:mt-0">
            <div className="flex items-center">
              <div className="w-6 mr-2 text-gray-800">
                <FontAwesomeIcon icon={faCode} />
              </div>
              <div className="text-lg">Skills</div>
            </div>
            <ul className="mt-5 ml-7">
              <li className="mb-2">JavaScript, TypeScript (React, Next.js)</li>
              <li className="mb-2">CSS (Tailwind, Bootstrap)</li>
              <li className="mb-2">Python, C#, Java</li>
              <li className="mb-2">Kotlin</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 mt-5">
          <div className="bg-white rounded-lg shadow p-10 col-span-7 lg:mr-5">
            <div className="flex items-center">
              <div className="w-6 mr-2 text-gray-800">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <div className="text-lg">Education</div>
            </div>
            <ul className="mt-5 ml-7">
              <li className="mb-2">
                <p>Software Development:</p>
                <p className="pl-8">2-year Diploma at SAIT</p>
              </li>
              <li className="mb-2">
                <p>Applied Mathematics:</p>
                <p className="pl-8">
                  Bachelor of Science at Osaka Women&apos;s University
                </p>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow p-10 col-span-5 mt-5 lg:mt-0">
            <div className="flex items-center">
              <div className="w-5 mr-2 text-gray-800">
                <FontAwesomeIcon icon={faAward} />
              </div>
              <div className="text-lg">Certifications</div>
            </div>
            <ul className="mt-5 ml-7">
              <li className="mb-2">AWS Cloud Practitioner (2024)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
