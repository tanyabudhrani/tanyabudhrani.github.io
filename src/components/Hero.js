import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-b"
      style={{
        backgroundImage: `url('/assets/bg1.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Centered Text Section */}
      <div className="text-center text-white space-y-6">
        <motion.h1
          className="text-4xl sm:text-10xl font-bold"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Hello, World!
        </motion.h1>

        <motion.h2
          className="text-3xl sm:text-7xl font-bold text-gradient"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          I'm Tanya
        </motion.h2>

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
