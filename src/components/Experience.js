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
  FaFigma,
  FaCss3
} from "react-icons/fa";
import { SiCplusplus, SiR, SiMysql, SiAssemblyscript, SiFastapi, SiC, SiTypescript} from "react-icons/si";

// Content component handles each bullet point or description within a position
const Content = ({ text, link }) => {
  return (
    <div>
      <p className="bg-primary font-poppins font-normal text-[14px] text-white mt-4">
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
      <div className="flex flex-row items-center mb-8 text-white relative">
        <img
          src={props.logo}
          alt={props.organisation}
          className="w-[45px] h-[45px] rounded-full z-[4] mt-2" // Reduced top margin
        />
        <h4 className="font-poppins font-semibold text-[20px] text-gradient leading-[32px] ml-4">
          {props.organisation}
        </h4>
      </div>


      <ol className="relative border-l border-gray-200 dark:border-gray-700 pr-2"> {/* Adjusted left padding */}
        {props.positions.map((position, index) => (
          <li
            key={index}
            className={`relative ${
              index === props.positions.length - 1 ? "mb-5" : "mb-6"
            } pl-6`} // Adjusted padding
          >
            <div className="relative flex items-left">
              {/* <span className="w-3 h-3 bg-gray-200 rounded-full mt-1.5 mr-4 border dark:border-gray-900 dark:bg-gray-700"></span> */}
              <div>
                <h3 className="text-lg font-semibold text-white dark:text-white">
                  {position.title}
                </h3>
                <time className="mb-3 text-sm font-normal leading-none text-white dark:text-gray-500">
                  {position.duration}
                </time>
                {position.content.map((info, index) => (
                  <Content key={index} text={info.text} link={info.link} />
                ))}
              </div>
            </div>
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
      organisation: "Gateway Private Markets",
      logo: '/assets/gateway.jpeg',
      positions: [
        {
          title: "Software Developer",
          duration: "2025 - Present",
          content: [
            {
              text: "Contributing to the development of integrated, intelligent chatbots using Azure AI tools, along with overseeing the design and implementation of matching rules.",
            },
            {
              text: "Working on conducting blockchain analysis on the secondary market."
            },
          ],
        },
      ],
    },
    {
      organisation: "Hong Kong Science and Technology Parks",
      logo: '/assets/hkstp.jpeg',
      positions: [
        {
          title: "Digital Marketing Intern",
          duration: "2025 - Present",
          content: [
            {
              text: "Working as a Digital Marketing Intern at GL.iNet for their Astrowarp drop; using Python to webscrape data from KOLs.",
            },
          ],
        },
        {
          title: "Software Developer",
          duration: "2024 - Present",
          content: [
            {
              text: "Currently working as a Software Developer at HKSTP to build an intelligent chatbot to manage referral data using n8n, PostmanAPI, Supabase, and Gemini.",
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
                <FaCss3 className="text-4xl" />
                <p>CSS</p>
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
              <div className="flex flex-col items-center">
                <SiTypescript className="text-4xl" />
                <p>TypeScript</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gradient">Frameworks and Software</h3>
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
                <SiFastapi className="text-4xl" />
                <p>FastAPI</p>
              </div>
              <div className="flex flex-col items-center">
                <FaFigma className="text-4xl" />
                <p>Figma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
