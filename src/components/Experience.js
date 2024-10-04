import React from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaAngular,
  FaDocker,
  FaReact,
  FaTerminal,
  FaVuejs
} from "react-icons/fa";
import { SiCplusplus, SiR, SiLatex, SiMysql, SiAssemblyscript, SiPytorch, SiTensorflow, SiC, SiCss3} from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";

// Content component handles each bullet point or description within a position
const Content = ({ text, link }) => {
  return (
    <div>
      <p className="bg-primary font-poppins font-normal text-[14px] text-dimWhite mt-4">
        {text}{" "}
        {link && (
          <a href={link} target="_blank" rel="noreferrer" className="hover:text-teal-200">
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
      <div className="flex flex-row items-center mb-8 text-white relative"> {/* Increased bottom margin for spacing */}
        <img
          src={props.logo}
          alt={props.organisation}
          className="w-[45px] h-[45px] rounded-full z-[4] mt-5"
        />
        <h4 className="font-poppins font-semibold text-[20px] text-gradient leading-[32px] ml-4"> {/* Added more spacing to the left */}
          {props.organisation}
        </h4>
      </div>
      <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-8"> {/* Added more left margin */}
        {props.positions.map((position, index) => (
          <li
            key={index}
            className={`${
              index === props.positions.length - 1 ? "mb-0" : "mb-6" // Added more bottom margin between positions
            } ml-4`}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {position.title}
            </h3>
            <time className="mb-3 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"> {/* Increased bottom margin */}
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

// Main Experience component that contains all experiences and skills
const Experience = () => {
  const experiences = [
    {
      organisation: "Microsoft",
      logo: '/assets/micro.png',
      positions: [
        {
          title: "Technical Community Builder",
          duration: "2024 - Present",
          content: [
            {
              text: "Works as a student ambassador for Microsoft to share and teach content on Microsoft services, such as Azure Fundamentals, AI and Machine Learning, CoPilot for MSFT, etc.",
            },
          ],
        },
      ],
    },
    {
      organisation: "Hong Kong Trade Development Council",
      logo: '/assets/hktdc.png',
      positions: [
        {
          title: "TAP Student Ambassador",
          duration: "2024 - Present",
          content: [
            {
              text: "I was recently accepted into the 24-25 Cohort of HKTDC Student Ambassadors to be tasked with driving business innovation using technology and computer science.",
            },
          ],
        },
      ],
    },
    {
      organisation: "The Hong Kong Polytechnic University",
      logo: '/assets/polyu.png',
      positions: [
        {
          title: "Generatative AI Researcher",
          duration: "2024 - 2024",
          content: [
            {
              text: "Performed extensive research on generative AI models and tools at the Industrial Lab of PolyU to create an intelligent chatbot.",
            },
          ],
        },
      ],
    },
    {
      organisation: "Mitacs Globalink Intern",
      logo: '/assets/ubc.jpeg',
      positions: [
        {
          title: "ML and NLP Researcher",
          duration: "2024 - 2024",
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
      organisation: "Polk Audio",
      logo: '/assets/polk.png',
      positions: [
        {
          title: "Product Researcher and Web Developer",
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
    {
      organisation: "Lokal",
      logo: '/assets/lokal.png',
      positions: [
        {
          title: "Product Researcher",
          duration: "2020 - 2021",
          content: [
            {
              text: "Led the research department, authoring informationalarticles and conducting extensive research on thelatest technological products.",
            },
            {
              text: "Employed a testing, research, and experimentationapproach to drive innovation and enhance marketingstrategies, contributing to successful client campaignsand optimized product launches."
            }
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
          <h1 className="text-4xl font-bold mb-12">Experience</h1> {/* Added more bottom margin */}
          <motion.div className="flex flex-1 items-center justify-start flex-col">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </motion.div>
        </div>

        {/* Right: Skills Section */}
        <div className="flex-1 flex flex-col items-center justify-center mt-16 md:mt-0 text-white"> {/* Increased top margin */}
          <div className="mb-12"> {/* Increased bottom margin */}
            <h3 className="text-xl font-semibold text-gradient">Programming Languages</h3>
            <div className="grid grid-cols-4 gap-8 mt-6"> {/* Increased grid gap and top margin */}
              <div className="flex flex-col items-center">
                <FaPython className="text-4xl" />
                <p>Python</p>
              </div>
              <div className="flex flex-col items-center">
                <SiR className="text-4xl" />
                <p>R</p>
              </div>
              <div className="flex flex-col items-center">
                <SiCplusplus className="text-4xl" />
                <p>C++</p>
              </div>
              <div className="flex flex-col items-center">
                <FaJs className="text-4xl" />
                <p>JavaScript+</p>
              </div>
              <div className="flex flex-col items-center">
                <SiC className="text-4xl" />
                <p>C</p>
              </div>
              <div className="flex flex-col items-center">
                <FaJava className="text-4xl" />
                <p>Java</p>
              </div>
              <div className="flex flex-col items-center">
                <FaHtml5 className="text-4xl" />
                <p>HTML5</p>
              </div>
              <div className="flex flex-col items-center">
                <SiCss3 className="text-4xl" />
                <p>CSS</p>
              </div>
              <div className="flex flex-col items-center">
                <SiLatex className="text-4xl" />
                <p>Latex</p>
              </div>
              <div className="flex flex-col items-center">
                <SiMysql className="text-4xl" />
                <p>SQL</p>
              </div>
              <div className="flex flex-col items-center">
                <SiAssemblyscript className="text-4xl" />
                <p>Assembly</p>
              </div>
              <div className="flex flex-col items-center">
                <FaTerminal className="text-4xl" />
                <p>Bash</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gradient">Tools & Frameworks</h3>
            <div className="grid grid-cols-4 gap-8 mt-6"> {/* Increased grid gap and top margin */}
              <div className="flex flex-col items-center">
                <FaNodeJs className="text-4xl" />
                <p>Node.js</p>
              </div>
              <div className="flex flex-col items-center">
                <FaAngular className="text-4xl" />
                <p>Angular</p>
              </div>
              <div className="flex flex-col items-center">
                <FaDocker className="text-4xl" />
                <p>Docker</p>
              </div>
              <div className="flex flex-col items-center">
                <FaGitAlt className="text-4xl" />
                <p>Git</p>
              </div>
              <div className="flex flex-col items-center">
                <FaGithub className="text-4xl" />
                <p>GitHub</p>
              </div>
              <div className="flex flex-col items-center">
                <FaReact className="text-4xl" />
                <p>React</p>
              </div>
              <div className="flex flex-col items-center">
                <SiPytorch className="text-4xl" />
                <p>PyTorch</p>
              </div>
              <div className="flex flex-col items-center">
                <SiTensorflow className="text-4xl" />
                <p>Tensorflow</p>
              </div>
              <div className="flex flex-col items-center">
                <TbBrandThreejs className="text-4xl" />
                <p>Three.js</p>
              </div>
              <div className="flex flex-col items-center">
                <FaVuejs className="text-4xl" />
                <p>Vue.js</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
