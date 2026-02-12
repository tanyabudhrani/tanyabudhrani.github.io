import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-b"
      style={{
        backgroundImage: `url('/assets/bg1.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center text-white max-w-2xl space-y-6">
        {/* Main Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Hello, World!
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gradient"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          I'm Tanya
        </motion.h2>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <a
            href="https://www.linkedin.com/in/tanya-budhrani/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-sm sm:text-base border border-white text-white rounded-lg hover:bg-teal-500 transition-all duration-300"
          >
            LinkedIn
          </a>

          <a
            href="mailto:tanyabudhrani04@gmail.com"
            className="px-6 py-3 text-sm sm:text-base border border-white text-white rounded-lg hover:bg-teal-500 transition-all duration-300"
          >
            Email Me
          </a>

          <a
            href="https://github.com/tanyabudhrani"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-sm sm:text-base border border-white text-white rounded-lg hover:bg-teal-500 transition-all duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
