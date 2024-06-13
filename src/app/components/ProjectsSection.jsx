"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "My Portfolio",
    image: "/images/projects/porto.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Angular Social Media Project",
    description: "Social Media App ",
    image: "/images/projects/angular.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/abhiobourne/AngularSocialMediaProject",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Advance authentication system in NextJS",
    description: "JWT Auth and OAuth",
    image: "/images/projects/auth.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/abhiobourne/next14-auth",
    previewUrl: "https://next14-auth-one.vercel.app/",
  },
  {
    id: 4,
    title: "Breathing Exercise Chrome Extension",
    description: "Chrome Extension",
    image: "/images/projects/breath.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/abhiobourne/Breathing-Exercise-Chrome-Extension",
    previewUrl: "https://breathing-exercise-chrome-extension.vercel.app/",
  },
  {
    id: 5,
    title: "Tic-Tac-Toe game",
    description: "Game made in ReactJS",
    image: "/images/projects/tic.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/abhiobourne/TicTacToe-in-React",
    previewUrl: "https://tic-tac-toe-in-react.vercel.app/",
  },
  {
    id: 6,
    title: "Ios Calculator",
    description: "Basic calculator made in ReactJS",
    image: "/images/projects/calc.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/abhiobourne/iOS-Calculator-in-React",
    previewUrl: "https://vercel.com/jatin-jadons-projects/ios-calculator-in-react",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;