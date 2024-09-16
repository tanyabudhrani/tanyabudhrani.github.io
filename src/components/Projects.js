import React from 'react';
import Slider from "react-slick";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { FaReact, FaNodeJs, FaJava, FaPython, FaCss3 } from "react-icons/fa";
import { SiC } from "react-icons/si";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";

const Project = (props) => {
  return (
    <div className="px-10 py-10 transition-colors duration-300 transform border rounded-xl hover:border-transparent group dark:border-gray-700 dark:hover:border-transparent feature-card max-w-lg mx-auto"> {/* Center the card, make it longer */}
      <div className="flex flex-col sm:flex-row">
        <img className="flex-shrink-0 object-cover w-32 h-32 rounded-full sm:mx-4 ring-4 ring-gray-300" src={props.image} alt={props.title} /> {/* Larger image */}
        <div className="mt-4 sm:mx-4 sm:mt-0">
          <h1 className="text-2xl font-semibold text-gray-700 capitalize md:text-3xl group-hover:text-white text-gradient">{props.title}</h1> {/* Larger title */}
          <p className="font-poppins font-normal text-dimWhite mt-3">Tech Stack</p>
          <div className="flex sm:flex-row mt-2">
            {props.stack.map((tech, index) => (
              <div key={index} className="text-dimWhite mr-5 text-[20px] hover:text-teal-200">
                {React.createElement(tech.icon)}
                <span className="tooltiptext">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-8 text-gray-500 dark:text-gray-300 group-hover:text-gray-300">{props.content}</p> {/* Adjusted content size */}
      <div className="flex mt-4 -mx-2">
        {props.github && (
          <a href={props.github} target="_blank" rel="noopener noreferrer">
            <AiFillGithub size="2rem" className="text-white mr-1 hover:text-teal-200" />
          </a>
        )}
        {props.link && (
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <BsLink45Deg size="2rem" className="text-white hover:text-teal-200" />
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,  // Show only one card at a time
    slidesToScroll: 1, // Scroll one card at a time
    centerMode: true,  // Center the card
    variableWidth: true, // Disable variable width for full-screen fit
    arrows: true,
    centerPadding: '50px', // Remove extra padding around cards
  };

  const projects = [
    {
      title: "Task Manager",
      image: "/assets/task.jpg",
      stack: [
        { name: "React", icon: FaReact },
        { name: "Node.js", icon: FaNodeJs },
        { name: "Java", icon: FaJava },
      ],
      content: "Task Management System: a comprehensive Java-based application designed to facilitate the efficient management of tasks within a project or organizational context.",
      github: "https://github.com/tanyabudhrani/Task-Management-System.git",
      link: "",
    },
    {
      title: "Line Scheduler",
      image: "/assets/line.jpg",
      stack: [
        { name: "React", icon: FaReact },
        { name: "Node.js", icon: FaNodeJs },
        { name: "C", icon: SiC },
      ],
      content: "This Production Line Scheduling (PLS) machine is specifically designed to enhance production planning and maximize the utilization of the three plants of a medium-sized steel manufacturer.",
      github: "https://github.com/tanyabudhrani/Line-Scheduler.git",
      link: "",
    },
    {
      title: "Multi-thread Web Server",
      image: "/assets/Threads.png",
      stack: [
        { name: "React", icon: FaReact },
        { name: "Node.js", icon: FaNodeJs },
        { name: "Python", icon: FaPython },
      ],
      content: "This project is a multi-threaded web server implemented in Python, designed to handle concurrent connections efficiently.",
      github: "https://github.com/tanyabudhrani/Multi-thread-Web-Server.git",
      link: "",
    },
    {
      title: "Personal Perfolio",
      image: "/assets/main.png",
      stack: [
        { name: "React", icon: FaReact },
        { name: "Tailwind", icon: RiTailwindCssFill },
        { name: "JavaScript", icon: IoLogoJavascript },
        { name: "CSS", icon: FaCss3 }
      ],
      content: "This project showcases my skills using React, Tailwind, CSS, Javascript, and Figma. It includes a brief introduction about me, my tech and research-based projects, the technologies I've worked with, and my experience. Made with React, Tailwind, Javascript, CSS, and HTML. Deployed with Netlify.",
      github: "https://github.com/tanyabudhrani/tanyabudhrani.github.io.git",
      link: "",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-dark-800 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index}>
              <Project {...project} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;