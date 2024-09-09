import React from "react";
import Lottie from "react-lottie-player";
import animationData from "../lotties/person-coding.json";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between py-16 px-6 bg-gradient-to-r from-blue-500 via-teal-400 to-indigo-600"
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
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/tanya-budhrani/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
          >
            LinkedIn
          </a>

          {/* Email */}
          <a
            href="mailto:tanyabudhrani04@gmail.com"
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
          >
            Email Me
          </a>

          {/* GitHub */}
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

      {/* Right: Lottie Animation */}
      <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
        <div className="w-80 h-80">
          <Lottie loop play animationData={animationData} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
