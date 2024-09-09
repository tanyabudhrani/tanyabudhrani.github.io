import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-b"
    >
      {/* Centered Text Section */}
      <div className="text-center text-white space-y-6">
        <h1 className="text-2xl sm:text-6xl font-bold">
          Hi, I'm Tanya Budhrani,
        </h1>
        <h2 className="text-xl sm:text-5xl font-bold text-gradient">
          Computer Scientist & Linguist
        </h2>
        <p className="max-w-md mx-auto text-lg sm:text-xl">
          As a passionate computer science student with a keen interest in Natural Language Processing and Large Language Models, I bring over five years of hands-on programming experience. I aim to leverage my skills in delivering innovative solutions to problems unexplored.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex justify-center space-x-4 mt-6">
          <a
            href="https://www.linkedin.com/in/tanya-budhrani/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-black rounded-lg hover:bg-grey-900 transition-all"
          >
            LinkedIn
          </a>

          <a
            href="mailto:tanyabudhrani04@gmail.com"
            className="px-6 py-3 bg-white text-black rounded-lg hover:bg-grey-900 transition-all"
          >
            Email Me
          </a>

          <a
            href="https://github.com/tanyabudhrani"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r(#35d3e4, #4a80ec) text-black rounded-lg hover:bg-grey-900 transition-all"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
