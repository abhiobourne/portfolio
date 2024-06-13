"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 my-4">
      <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
        <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
          <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            Hello, I&apos;m{" "}
          </span>{" "}
          <br />
          <TypeAnimation
            sequence={[
              "Jatin",
              1000,
              "Web Developer",
              1000,
              "Mobile Designer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-[#ADB7BE] mb-6 textl-lg lg:text-xl">
        Undergraduate Computer Engineering student at Chandigarh University, Punjab.
        </p>
        <div>
          <a href="mailto:jatinjadonjj@gmail.com">
            <button className="bg-gradient-to-br from-primary-500  to-secondary-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4">
              Hire Me
            </button>
          </a>
          <a href="resume/resume.pdf" target="_blank" rel="noopener noreferrer" download>
            <button className="m-4 bg-gradient-to-br from-primary-500  to-secondary-500 px-1 py-1 text-white rounded-full">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </a>
        </div>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative overflow-hidden">
          <Image
            src="/images/hero-img.jpg"
            alt="hero image"
            className="object-cover"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;



/*rafce*/