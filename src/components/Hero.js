import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import Scramble from 'react-scramble-text';

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-b"
      style={{
        backgroundImage: `url('/assets/1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Centered Text Section */}
      <div className="text-center text-white space-y-6">
        <h1 className="text-4xl sm:text-10xl font-bold">Hello, World!</h1>
        <h2 className="text-3xl sm:text-7xl font-bold text-gradient">
        <Scramble
          autoStart
          text="I'm Tanya"
          speed={0.5}
          steps={10}
          revealSpeed={200}
          scramble="abcdefghijklmnopqrstuvwxyz"
        />
      </h2>
        {/* Call to Action Buttons */}
        <div className="flex justify-center space-x-4 mt-6">
          <a
            href="https://www.linkedin.com/in/tanya-budhrani/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-3 border border-white text-white rounded-lg bg-transparent hover:bg-teal-500 hover:text-white transition-all duration-300"
          >
            LinkedIn
          </a>

          <a
            href="mailto:tanyabudhrani04@gmail.com"
            className="px-10 py-3 border border-white text-white rounded-lg bg-transparent hover:bg-teal-500 hover:text-white transition-all duration-300"
          >
            Email Me
          </a>

          <a
            href="https://github.com/tanyabudhrani"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-3 border border-white text-white rounded-lg bg-transparent hover:bg-teal-500 hover:text-white transition-all duration-300"

          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
