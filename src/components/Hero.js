

import React from "react";

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
        <h1 className="text-4xl sm:text-6xl font-bold">Hello, World!</h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-gradient">I'm Tanya</h2>

        {/* Call to Action Buttons */}
        <div className="flex justify-center space-x-4 mt-6">
          <a
            href="https://www.linkedin.com/in/tanya-budhrani/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient text-white rounded-lg border-gray-500 hover:bg-teal-500 hover:text-black transition-all border-2 shadow-xl hover:shadow-2xl border-transparent"
          >
            LinkedIn
          </a>

          <a
            href="mailto:tanyabudhrani04@gmail.com"
            className="px-6 py-3 bg-gradient text-white rounded-lg border-gray-500 hover:bg-teal-500 hover:text-black transition-all border-2 shadow-xl hover:shadow-2xl border-transparent"
          >
            Email Me
          </a>

          <a
            href="https://github.com/tanyabudhrani"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient text-white rounded-lg border-gray-500 hover:bg-teal-500 hover:text-black transition-all border-2 shadow-xl hover:shadow-2xl border-transparent"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
