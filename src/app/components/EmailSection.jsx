import React from "react";
import GithubIcon from "../../../public/icons/GitHubIcon.svg";
import LinkedinIcon from "../../../public/icons/LinkedInIcon.svg";
import LeetCodeIcon from "../../../public/icons/LeetCodeIcon.svg"
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/EmailSection.module.css"; // Import your CSS file

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center my-12 py-24 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-1/2 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10 text-center">
        <h5 className={`text-xl font-bold ${styles.textWhite} my-2`}>Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md mx-auto">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-4 justify-center">
          <Link href="https://github.com/abhiobourne" target="_blank" rel="noopener noreferrer">
            <Image src={GithubIcon} alt="GitHub Icon" width={32} height={32} className="text-white" />
          </Link>
          <Link href="https://www.linkedin.com/in/jatin-jadon-8a54b8207" target="_blank" rel="noopener noreferrer">
            <Image src={LinkedinIcon} alt="LinkedIn Icon" width={32} height={32} className="text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
