// import React from 'react';

// function Projects() {
//   return (
//     <section id="projects" className="py-20 bg-gray-800 text-white">
//       <div className="container mx-auto">
//         <h2 className="text-4xl font-bold mb-6">Projects</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-gradient-radial p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
//             <img src="src/assets/task.jpg" alt="Project 1" className="mb-4 w-full h-48 object-cover" />
//             <h3 className="text-xl font-bold">Task Manager</h3>
//             <p className="mt-2">A comprehensive Java-based task management system for efficient task handling.</p>
//             <a href="https://github.com/tanyabudhrani/Task-Management-System.git" className="text-blue-500 hover:underline mt-2 inline-block">
//               View on GitHub
//             </a>
//           </div>
//           <div className="bg-gradient-radial p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
//             <img src="src/assets/line.jpg" alt="Project 1" className="mb-4 w-full h-48 object-cover" />
//             <h3 className="text-xl font-bold">Line Scheduler</h3>
//             <p className="mt-2">This Production Line Scheduling (PLS) machine is specifically designed to enhance production planning and maximize the utilization of the three plants of a medium-sized steel manufacturer.</p>
//             <a href="https://github.com/tanyabudhrani/Line-Scheduler.git" className="text-blue-500 hover:underline mt-2 inline-block">
//               View on GitHub
//             </a>
//           </div>
//           <div className="bg-gradient-radial p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
//             <img src="src/assets/Threads.png" alt="Project 1" className="mb-4 w-full h-48 object-cover" />
//             <h3 className="text-xl font-bold">Multi-thread Web Server</h3>
//             <p className="mt-2">This project is a multi-threaded web server implemented in Python, designed to handle concurrent connections efficiently. It leverages Python's socket and threading modules to manage and serve HTTP requests.</p>
//             <a href="https://github.com/tanyabudhrani/Multi-thread-Web-Server.git" className="text-blue-500 hover:underline mt-2 inline-block">
//               View on GitHub
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;

import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { FaReact, FaNodeJs } from "react-icons/fa"; // Import tech icons
import { SiMongodb } from "react-icons/si"; // Example of MongoDB icon
import { motion } from "framer-motion";

// Project component
const Project = (props) => {
  return (
    <motion.div
      className="px-12 py-8 transition-colors duration-300 transform border rounded-xl hover:border-transparent group dark:border-gray-700 dark:hover:border-transparent feature-card"
      whileInView={{ y: [-30, 0], opacity: [0, 1] }}
      transition={{ duration: 0.75 }}
    >
      <div className="flex flex-col sm:flex-row">
        {/* Project Image */}
        <img
          className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
          src={props.image}
          alt={props.title}
        />

        <div className="mt-4 sm:mx-4 sm:mt-0">
          <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl group-hover:text-white text-gradient">
            {props.title}
          </h1>
          <p className="font-poppins font-normal text-dimWhite mt-3">
            Tech Stack
          </p>
          <div className="flex sm:flex-row mt-2">
            {props.stack.map((tech, index) => (
              <div
                key={index}
                className="text-dimWhite mr-5 text-[20px] hover:text-teal-200 tooltip"
              >
                {React.createElement(tech.icon)}
                <span className="tooltiptext">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-8 text-gray-500 dark:text-gray-300 group-hover:text-gray-300">
        {props.content}
      </p>

      {/* Links to GitHub and Live Project */}
      <div className="flex mt-4 -mx-2">
        {props.github && (
          <a href={props.github} target="_blank" rel="noopener noreferrer">
            <AiFillGithub
              size="2rem"
              className="text-white mr-1 hover:text-teal-200"
            />
          </a>
        )}
        {props.link && (
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <BsLink45Deg
              size="2rem"
              className="text-white hover:text-teal-200"
            />
          </a>
        )}
      </div>
    </motion.div>
  );
};

// Projects component
const Projects = () => {
  // Define the project data directly in this file
  const projects = [
    {
      title: "Task Manager",
      image: "path/to/image/task.jpg", // Replace with actual image path
      stack: [
        { name: "React", icon: FaReact },
        { name: "Node.js", icon: FaNodeJs },
        { name: "MongoDB", icon: SiMongodb },
      ],
      content: "A comprehensive Java-based task management system for efficient task handling.",
      github: "https://github.com/tanyabudhrani/Task-Management-System.git",
      link: "", // Add live link if available
    },
    {
      title: "Line Scheduler",
      image: "path/to/image/line.jpg", // Replace with actual image path
      stack: [
        { name: "React", icon: FaReact },
        { name: "Node.js", icon: FaNodeJs },
      ],
      content:
        "This Production Line Scheduling (PLS) tool is specifically designed to enhance production planning.",
      github: "https://github.com/tanyabudhrani/Line-Scheduler.git",
      link: "", // Add live link if available
    },
    {
      title: "Multi-thread Web Server",
      image: "path/to/image/threads.png", // Replace with actual image path
      stack: [
        { name: "React", icon: FaReact },
        { name: "Node.js", icon: FaNodeJs },
      ],
      content:
        "A multi-threaded web server implemented in Python to handle concurrent connections efficiently.",
      github: "https://github.com/tanyabudhrani/Multi-thread-Web-Server.git",
      link: "", // Add live link if available
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
