"use client"
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import styles from "../styles/AboutSection.module.css"; // Updated import path

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 text-lg md:text-xl"> {/* Adjust font size */}
        <li>React</li>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
        <li>Express</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 text-lg md:text-xl"> {/* Adjust font size */}
        <li>Secondary: St. Fidelis Sr. Sec. School, Aligarh (2020-2022)</li>
        <li>BE-CSE: Chandigarh University, Punjab (2022-2026)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 text-lg md:text-xl"> {/* Adjust font size */}
        <li>NPTEL Cloud Computing</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
        <div className="relative w-full h-auto max-w-md mx-auto md:mx-0">
          <div className={styles.imageContainer}>
            <Image
              src="/images/laptop-2.jpg"
              alt="Laptop"
              layout="responsive"
              width={500}
              height={500}
              objectFit="cover"
              className={styles.image}
            />
          </div>
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2> {/* Increased font size */}
          <p className="text-lg md:text-xl text-white"> {/* Adjusted font size */}
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, Next.js, React, Redux, Node.js, Express, Tailwind,
            HTML and CSS. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8 space-x-4">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
              className="text-lg md:text-xl py-2 px-6 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-bold transition duration-300"
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
              className="text-lg md:text-xl py-2 px-6 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-bold transition duration-300"
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
              className="text-lg md:text-xl py-2 px-6 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-bold transition duration-300"
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8 text-lg md:text-xl"> {/* Adjusted font size */}
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
