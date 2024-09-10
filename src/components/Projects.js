
import React from 'react';
import Slider from "react-slick";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiC } from "react-icons/si";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Project = (props) => {
  return (
    <div className="px-12 py-8 transition-colors duration-300 transform border rounded-xl hover:border-transparent group dark:border-gray-700 dark:hover:border-transparent feature-card">
      <div className="flex flex-col sm:flex-row">
        <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src={props.image} alt={props.title} />
        <div className="mt-4 sm:mx-4 sm:mt-0">
          <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl group-hover:text-white text-gradient">{props.title}</h1>
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
      <p className="mt-8 text-gray-500 dark:text-gray-300 group-hover:text-gray-300">{props.content}</p>
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
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    arrows: true,
    centerPadding: '60px',
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
      content: "A comprehensive Java-based task management system for efficient task handling.",
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
      content: "This Production Line Scheduling (PLS) tool is specifically designed to enhance production planning.",
      github: "https://github.com/tanyabudhrani/Line-Scheduler.git",
      link: "",
    },
    {
      title: "Multi-thread Web Server",
      image: "/assets/Threads.png",
      stack: [
        { name: "React", icon: FaReact },
        { name: "Node.js", icon: FaNodeJs },
      ],
      content: "A multi-threaded web server implemented in Python to handle concurrent connections efficiently.",
      github: "https://github.com/tanyabudhrani/Multi-thread-Web-Server.git",
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
