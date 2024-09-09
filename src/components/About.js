import React from "react";
import profilePic from "./assets/profile.jpeg"; // Ensure you have a similar stylized profile picture.

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-6xl font-bold mb-6">About Me</h1>

        <div className="flex flex-col md:flex-row items-center justify-center">
          <img
            src={profilePic}
            alt="Tanya Budhrani"
            className="w-48 h-48 rounded-full mb-6 md:mb-0 md:mr-12"
          />
          <div>
            <p className="text-xl md:text-2xl mb-4">
              Hello there, I'm <strong>Tans</strong>
            </p>
            <p className="text-md md:text-lg mb-4">
              A final-year Computer Science and Linguistics student at the Hong Kong Polytechnic University with a keen interest in Natural Language Processing and Machine Learning.
            </p>
            <p className="text-md md:text-lg">
              When I'm not coding or studying languages, you can find me involved in various campus groups, from tech clubs to language exchange programs, pushing the boundaries of what we can achieve with technology and communication.
            </p>
            <a
              href="https://drive.google.com/file/d/15LZ11bRZXB91_zkGCiLQoVu17GRVcqWE/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-white text-black rounded px-6 py-3 text-lg hover:bg-gray-900 transition-all"
            >
              Download My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
