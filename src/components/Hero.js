import React from "react";
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
  FaTerminal
} from "react-icons/fa";
import { SiCplusplus, SiR, SiLatex, SiMysql, SiAssemblyscript, SiPytorch, SiTensorflow, SiThreeDotJs, SiVueDotJs, SiC, SiCss3} from "react-icons/si";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between py-16 px-6 bg-gradient-to-b from-blue-500 via-teal-400 to-black-600"
    >
      {/* Left: Text Section */}
      <div className="flex-1 flex flex-col items-start justify-center text-white space-y-6">
        <h1 className="text-4xl sm:text-6xl font-bold">
          Hi, I'm Tanya Budhrani,
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-gradient">
          Computer Scientist & Linguist
        </h2>
        <p className="max-w-md text-lg sm:text-xl">
          I specialize in Natural Language Processing and Machine Learning. 
          With a passion for coding and data, I’m here to innovate and solve complex challenges.
        </p>

        {/* Call to Action Buttons (LetsConnect) */}
        <div className="flex space-x-4 mt-6">
          <a
            href="https://www.linkedin.com/in/tanya-budhrani/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
          >
            LinkedIn
          </a>

          <a
            href="mailto:tanyabudhrani04@gmail.com"
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
          >
            Email Me
          </a>

          <a
            href="https://github.com/tanyabudhrani"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Right: Skills Section */}
      <div className="flex-1 flex flex-col items-center justify-center mt-10 md:mt-0 text-white">
        <div className="mb-8">
          <h3 className="text-2xl font-bold">Programming Languages</h3>
          <div className="grid grid-cols-4 gap-6 mt-4">
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
          <h3 className="text-2xl font-bold">Tools & Frameworks</h3>
          <div className="grid grid-cols-4 gap-6 mt-4">
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
              <SiThreeDotJs className="text-4xl" />
              <p>Three.js</p>
            </div>
            <div className="flex flex-col items-center">
              <SiVueDotJs className="text-4xl" />
              <p>Vue.js</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
