import React from "react";

// interface HeroSectionProps {
//   title: string;
//   subtitle: string;
// }

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-customGray text-2xl sm:text-3xl lg:text-4xl mb-5 font-semibold">
            Hi, I'm Taeko.
          </h1>
          <p className="text-customGray text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            quae sequi aut architecto minima fuga libero? Minus eum sed magni
            soluta molestias aspernatur aliquam harum quos pariatur,
            repudiandae, in blanditiis.
          </p>
          <div>
            <button className="bg-btnBlue hover:opacity-85 text-white px-5 py-2 rounded-lg mt-5">
              Download Resume
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center m-0">
          <div className="rounded-full bg-[#eef9ff] p-2 mt-5">
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
