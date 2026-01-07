import React from "react";
import { motion, useInView } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaReact,
  FaTerminal,
  FaFigma,
  FaCss3
} from "react-icons/fa";
import { LiaAdobe } from "react-icons/lia";
import { VscAzure } from "react-icons/vsc";
import { SiCplusplus, SiR, SiMysql, SiAssemblyscript, SiFastapi, SiC, SiTypescript} from "react-icons/si";
import { Typewriter } from 'react-simple-typewriter';
import { useRef, useEffect, useState } from 'react';

// Content component handles each bullet point or description within a position
const Content = ({ text, link }) => (
  <p className="bg-primary font-poppins font-normal text-[14px] text-white mt-4">
    {text}{" "}
    {link && (
      <a href={link} target="_blank" rel="noreferrer" className="hover:text-teal-200">
        <span className="inline hover:text-teal-200">🔗</span>
      </a>
    )}
  </p>
);

// ExperienceCard component for each job experience
const ExperienceCard = ({ organisation, logo, positions }) => (
  <motion.div
    whileInView={{ y: [-20, 0], opacity: [0, 1] }}
    transition={{ duration: 1 }}
  >
    <div className="flex flex-row items-center mb-8 text-white relative">
      <img
        src={logo}
        alt={organisation}
        className="w-[45px] h-[45px] rounded-full z-[4] mt-2"
      />
      <h4 className="font-poppins font-semibold text-[20px] text-gradient leading-[32px] ml-4">
        {organisation}
      </h4>
    </div>

    <ol className="relative border-l border-gray-200 dark:border-gray-700 pr-2">
      {positions.map((position, i) => (
        <li key={i} className={`relative ${i === positions.length - 1 ? "mb-5" : "mb-6"} pl-6`}>
          <div className="relative flex items-left">
            <div>
              <h3 className="text-lg font-semibold text-white">{position.title}</h3>
              <time className="mb-3 text-sm font-normal leading-none text-white">
                {position.duration}
              </time>
              {position.content.map((item, j) => (
                <Content key={j} text={item.text} link={item.link} />
              ))}
            </div>
          </div>
        </li>
      ))}
    </ol>
  </motion.div>
);

// Main Experience component that contains all experiences and skills
const Experience = () => {
  const titleRef = useRef();
  const isInView = useInView(titleRef, { once: true });
  const [showTypewriter, setShowTypewriter] = useState(false);
  useEffect(() => {
    if (isInView) setShowTypewriter(true);
  }, [isInView]);
  const experiences = [
    {
      organisation: "Odoo",
      logo: '/assets/odoo.png',
      positions: [
        {
          title: "Technical Consulting Intern",
          duration: "Jan 2026 - June 2026",
          content: [
            {
              text: "Implementing localization features for Odoo modules, pushing Git commits to enhance software adaptability, and collaborating with cross-functional teams to ensure seamless integration of new functionalities.",
            },
          ],
        },
      ],
    },
    {
      organisation: "Invesco",
      logo: '/assets/invesco.jpg',
      positions: [
        {
          title: "Digital Analytics Intern",
          duration: "Jun 2025 - Aug 2025",
          content: [
            {
              text: "Leverage Power BI and Adobe Analytics to monitor client engagement patterns across global digital platforms, identifying key drop-off points and high-performing content.",
            },
            {
              text: "Present strategic recommendations based on data trends, contributing to a 15% improvement in regional campaign click-through rates and 10% increase in client retention through enhanced personalization.",
            },
          ],
        },
      ],
    },
    {
      organisation: "The University of British Columbia",
      logo: '/assets/ubc.jpeg',
      positions: [
        {
          title: "NLP Researcher",
          duration: "May 2024 - Aug 2024",
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
  ];

  return (
    <section id="experience" className="py-24 bg-primary text-white"> {/* Increased padding for top and bottom */}
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Left: Experience Section */}
        <div className="flex-1 md:mr-10"> {/* Increased right margin */}
        <h1 ref={titleRef} className="text-6xl font-bold mb-12">
          {showTypewriter && (
            <Typewriter
              words={['Experience']}
              typeSpeed={70}
              delaySpeed={3000}
              cursor
              cursorStyle="|"
            />
          )}
        </h1>
          <motion.div className="flex flex-1 items-center justify-start flex-col">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </motion.div>
        </div>

        {/* Right: Skills Section */}
        <div className="flex-1 flex flex-col items-center justify-center mt-16 md:mt-0 text-white">
          <div className="mb-12">
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl font-semibold text-gradient"
            >
              Programming Languages
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="grid grid-cols-4 gap-8 mt-6"
            >
              {[ 
                { icon: <FaPython />, label: "Python" },
                { icon: <SiR />, label: "R" },
                { icon: <SiCplusplus />, label: "C++" },
                { icon: <FaJs />, label: "JavaScript+" },
                { icon: <SiC />, label: "C" },
                { icon: <FaJava />, label: "Java" },
                { icon: <FaHtml5 />, label: "HTML5" },
                { icon: <FaCss3 />, label: "CSS" },
                { icon: <SiMysql />, label: "SQL" },
                { icon: <SiAssemblyscript />, label: "Assembly" },
                { icon: <FaTerminal />, label: "Bash" },
                { icon: <SiTypescript />, label: "TypeScript" }
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex flex-col items-center transition-all duration-300 hover:text-teal-400"
                >
                  <div className="text-4xl">{skill.icon}</div>
                  <p className="mt-1">{skill.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl font-semibold text-gradient"
            >
              Frameworks and Software
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="grid grid-cols-4 gap-8 mt-6"
            >
              {[
                { icon: <FaNodeJs />, label: "Node.js" },
                { icon: <VscAzure />, label: "Azure" },
                { icon: <LiaAdobe />, label: "Adobe Analytics" },
                { icon: <FaGitAlt />, label: "Git" },
                { icon: <FaGithub />, label: "GitHub" },
                { icon: <FaReact />, label: "React" },
                { icon: <SiFastapi />, label: "FastAPI" },
                { icon: <FaFigma />, label: "Figma" }
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex flex-col items-center transition-all duration-300 hover:text-teal-400"
                >
                  <div className="text-4xl">{skill.icon}</div>
                  <p className="mt-1">{skill.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
