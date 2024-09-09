import React from "react";

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

      {/* Right: Giphy Embed */}
      <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
        <div
          style={{
            width: "100%",
            height: 0,
            paddingBottom: "67%",
            position: "relative",
          }}
        >
          <iframe
            src="https://giphy.com/embed/u2wg2uXJbHzkXkPphr/video"
            width="100%"
            height="100%"
            style={{ position: "absolute" }}
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Hero;
