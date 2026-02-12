import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { FaReact, FaNodeJs, FaJava, FaPython, FaFigma } from "react-icons/fa";
import { SiC, SiVite, SiTypescript, SiHtml5, SiCss3 } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion, useInView } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Project = (props) => {
  return (
    <div
      className="
        w-full
        max-w-xl
        mx-auto
        p-6
        border
        rounded-xl
        bg-dark
        overflow-hidden
        break-words
        transition-all
        duration-300
      "
    >
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start">
        <img
          className="
            w-28 h-28
            sm:w-36 sm:h-36
            object-cover
            rounded-full
            ring-4
            ring-gray-400
            flex-shrink-0
          "
          src={props.image}
          alt={props.title}
        />

        <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left w-full">
          <h2 className="text-xl sm:text-2xl font-semibold text-cyan-400">
            {props.title}
          </h2>

          <p className="text-sm text-gray-400 mt-3">Tech Stack</p>

          <div className="flex justify-center sm:justify-start flex-wrap gap-4 mt-2">
            {props.stack.map((tech, index) => (
              <div
                key={index}
                className="text-gray-300 text-lg hover:text-teal-300 transition"
              >
                {React.createElement(tech.icon)}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Description */}
      <p
        className="
          mt-6
          text-gray-300
          text-sm
          sm:text-base
          leading-relaxed
          break-words
        "
      >
        {props.content}
      </p>

      {/* Links */}
      <div className="flex mt-6 gap-4">
        {props.github && (
          <a
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-300 transition"
          >
            <AiFillGithub size="1.8rem" />
          </a>
        )}

        {props.link && (
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-300 transition"
          >
            <BsLink45Deg size="1.8rem" />
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const titleRef = useRef();
  const isInView = useInView(titleRef, { once: true });
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    if (isInView) {
      setShowTypewriter(true);
    }
  }, [isInView]);

  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: true,   // <-- KEEP THIS TRUE
      },
    },
  ],
};


  const projects = [
    {
      title: "Covid Tracker",
      image: "/assets/demoMap.png",
      stack: [
        { name: "React", icon: FaReact },
        { name: "TypeScript", icon: SiTypescript },
        { name: "TailWind", icon: RiTailwindCssFill },
      ],
      content: "COVID-19 Tracker is a web application built using React and TypeScript that provides real-time global and country-specific statistics on COVID-19 cases, deaths, recoveries, and active cases.",
      github: "https://github.com/tanyabudhrani/covid-tracker.git",
      link: "",
    },
    {
      title: "Pōwehi",
      image: "/assets/landing.png",
      stack: [
        { name: "React", icon: FaReact },
        { name: "Figma", icon: FaFigma },
        { name: "Python", icon: FaPython },
      ],
      content: "Powehi is an immersive web application where you explore the universe (through stunning images captured by the James Webb Space Telescope), accompanied by algorithmically generated audios.",
      github: "https://github.com/jyotsna-venkatesan/Powehi.git",
      link: "",
    },
    {
      title: "Garbage Collection",
      image: "/assets/trash.jpg",
      stack: [
        { name: "Python", icon: FaPython },
      ],
      content: "This project implements an image-based garbage classification system using Histogram of Oriented Gradients (HOG) for feature extraction and Support Vector Machines (SVM) for classification.",
      github: "https://github.com/tanyabudhrani/Garbage-Collection.git",
      link: "",
    },
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
      content: "This project is a multi-threaded web server implemented in Python, designed to handle concurrent connections efficiently. This project is built primarily using Python and has corresponding documentation.",
      github: "https://github.com/tanyabudhrani/Multi-thread-Web-Server.git",
      link: "",
    },
    {
      title: "Personal Perfolio",
      image: "/assets/main.png",
      stack: [
        { name: "React", icon: FaReact },
        { name: "Tailwind", icon: RiTailwindCssFill },
      ],
      content: "This project showcases my skills using React, Tailwind, CSS, and Javascript. It includes a brief introduction about me, my tech and research-based projects, and my experience.",
      github: "https://github.com/tanyabudhrani/tanyabudhrani.github.io.git",
      link: "https://tanyabudhrani.netlify.app/",
    },
    {
      title: "Cybersify",
      image: "/assets/c.png",
      stack: [
        { name: "React", icon: FaReact },
        { name: "Tailwind", icon: RiTailwindCssFill },
        { name: "Vite", icon: SiVite },
      ],
      content: "Cybersifyph is an online educational organization whose goal is to spread internet literacy among the youth with educational posts and projects.",
      github: "https://github.com/tanyabudhrani/cybersifyph",
      link: "https://cybersifyph.netlify.app/",
    },
    {
      title: "Progressive Web App",
      image: "/assets/demo.png",
      stack: [
        { name: "React", icon: FaReact },
        { name: "Tailwind", icon: RiTailwindCssFill },
        { name: "Figma", icon: FaFigma },
      ],
      content: "This is a project I created to lessen the wait times at the Communal Student Canteen by allowing for concurrent ordering on a Progressive Web App (PWA).",
      github: "https://github.com/tanyabudhrani/Ordering-System",
      link: "",
    },
    {
      title: "SkyByte",
      image: "/assets/cathay.png",
      stack: [
        { name: "React", icon: FaReact },
        { name: "Tailwind", icon: RiTailwindCssFill },
        { name: "Figma", icon: FaFigma },
      ],
      content: "Luxury, redefined, reimagined, refined.​ ​SkyByte™brings premium travel to everyone, one bite-sized component at a time. Got us to the finals for the Cathay 2024 Hackathon.",
      github: "https://github.com/tanyabudhrani/SkyByte",
      link: "",
    },
    {
      title: "Monopoly Game",
      image: "/assets/monopoly.jpeg",
      stack: [
        { name: "Java", icon: FaJava }
      ],
      content: "A command-line Monopoly game implementing core gameplay mechanics, board customization, and error handling. Made for COMP3211.",
      github: "https://github.com/tanyabudhrani/Monopoly-Game",
      link: "",
    },
    {
      title: "YOLOV5 Fine-Tuning and Evaluation",
      image: "/assets/cv.png",
      stack: [
        { name: "Python", icon: FaPython }
      ],
      content: "This project explores a dual-pipeline approach in computer vision, combining image-to-image translation using GANs and object detection using YOLOv5.",
      github: "https://github.com/tanyabudhrani/YOLOV5-Fine-Tuning-and-Evaluation",
      link: "",
    },
    {
      title: "Tanya's thoughts",
      image: "/assets/tt.png",
      stack: [
        { name: "JS", icon: FaNodeJs },
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: SiCss3 }
      ],
      content: "An amalgamation of my inner thoughts and most academic articles. Made out of my love for writing and literature-- well, that, along with HTML, JS, and CSS",
      github: "https://github.com/tanyabudhrani/tanyasthoughts",
      link: "https://tanyasthoughts.netlify.app/",
    },
    {
      title: "Layered Fraud Credit Checker",
      image: "/assets/fraud.jpeg",
      stack: [
        { name: "Python", icon: FaPython },
      ],
      content: "A multi-layer, risk-adaptive fraud detection system built on the Kaggle Credit Card Fraud Dataset, that automatically tunes itself while minimizing computational cost",
      github: "https://github.com/tanyabudhrani/Layered-Fraud-Credit-Checker/tree/main",
      link: "",
    },
    {
      title: "Dont Overfit Kaggle Challenge",
      image: "/assets/k.png",
      stack: [
        { name: "Python", icon: FaPython },
      ],
      content: "A methodologically sound reimplementation of the classic “Don’t Overfit!” Kaggle competition, focusing on generalization under extreme overfitting risk (250 samples, 300 features).",
      github: "https://github.com/tanyabudhrani/Dont-Overfit-Kaggle-Challenge",
      link: "",
    },
  ];


return (
    <section id="projects" className="py-20 bg-dark text-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <h1
          ref={titleRef}
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-bold
            mb-12
          "
        >
          {showTypewriter && (
            <Typewriter
              words={["Projects"]}
              typeSpeed={70}
              delaySpeed={3000}
              cursor
              cursorStyle="|"
            />
          )}
        </h1>

        <Slider {...settings}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="px-3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Project {...project} />
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;