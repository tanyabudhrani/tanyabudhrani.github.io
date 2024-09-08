import React from "react";
import { motion } from "framer-motion";

// Content component handles each bullet point or description within a position
const Content = ({ text, link }) => {
  return (
    <div>
      <p className="font-poppins font-normal text-[14px] text-dimWhite mt-4">
        {text}{" "}
        {link && (
          <a href={link} target="_blank" className="hover:text-teal-200">
            <span className="inline hover:text-teal-200">🔗</span>
          </a>
        )}
      </p>
    </div>
  );
};

// ExperienceCard component for each job experience
const ExperienceCard = (props) => {
  return (
    <motion.div
      whileInView={{ y: [-20, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-row items-center mb-6">
        <img
          src={props.logo}
          alt={props.organisation}
          className="w-[52px] h-[52px] rounded-full z-[2]"
        />
        <h4 className="font-poppins font-semibold text-[20px] text-gradient leading-[32px] ml-2">
          {props.organisation}
        </h4>
      </div>
      <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-6">
        {props.positions.map((position, index) => (
          <li
            key={index}
            className={`${
              index === props.positions.length - 1 ? "mb-0" : "mb-4"
            } ml-4`}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {position.title}
            </h3>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {position.duration}
            </time>
            {position.content.map((info, index) => (
              <Content key={index} text={info.text} link={info.link} />
            ))}
          </li>
        ))}
      </ol>
    </motion.div>
  );
};

// Main Experience component that contains all experiences
const Experience = () => {
  // Experience data defined directly inside the component
  const experiences = [
    {
      organisation: "Mitacs Globalink Intern",
      logo: "/path-to-logo/mitacs.png", // Path to company logo
      positions: [
        {
          title: "Intern",
          duration: "2024 - Present",
          content: [
            {
              text: "Performed meticulous research on LLMs to aid in software programming.",
            },
            {
              text: "Conducted literature reviews and data analysis to deliver scientific reports using Python, Latex, and more.",
            },
          ],
        },
      ],
    },
    {
      organisation: "Generative AI Researcher",
      logo: "/path-to-logo/polyu.png", // Path to company logo
      positions: [
        {
          title: "Researcher",
          duration: "2024 - Present",
          content: [
            {
              text: "Performed extensive research on generative AI models and tools at the Industrial Lab of PolyU to create an intelligent chatbot.",
            },
          ],
        },
      ],
    },
    {
      organisation: "Polk Audio",
      logo: "/path-to-logo/polk-audio.png",
      positions: [
        {
          title: "Researcher and Web Developer",
          duration: "2021 - 2022",
          content: [
            {
              text: "Spearheaded the design and development of their website using HTML, ensuring a visually appealing and user-friendly online presence.",
            },
            {
              text: "Conducted research on Polk Audio's product line, staying up-to-date with the latest industry trends and market demands, to author informative posts and enhance product awareness.",
            },
          ],
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-5xl font-extrabold text-secondary tracking-wide mb-6">
          Experience
        </h2>

        <motion.div className="flex flex-1 items-center justify-start flex-col">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
