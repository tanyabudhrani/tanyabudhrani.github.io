import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary text-white">
      <div className="container mx-auto text-right">
        <h1 className="text-6xl font-bold mb-6">About Me</h1>

        <div className="flex flex-col md:flex-row items-right md:items-start">
          <img
            src="/assets/profile.jpeg"
            alt="Tanya Budhrani"
            className="w-48 h-48 rounded-full mb-6 md:mb-0 md:mr-12 transform transition-transform duration-300 hover:scale-105 shadow-lg"
          />
          <div className="md:ml-20 text-left">
            <p className="text-xl md:text-2xl mb-4 hover:text-gradient transition-colors duration-200 text-right">
              Hello there, I'm <strong>Tans</strong>
            </p>
            <p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-200 text-right">
              I am a third-year Computer Science and Linguistics student at the
              Hong Kong Polytechnic University with a keen interest in Natural
              Language Processing and Machine Learning.
            </p>

            <hr className="border-gradient mb-6" />

            <div>
              <p className="text-lg md:text-xl mb-4 text-gradient text-right">
                I am currently involved in:
              </p>
              <ul className="list-none ml-5 text-lg md:text-lg space-y-3">
                <li className="flex items-start">
                  <span className="text-gradient mr-2">•</span>
                  <span>
                    Working on a paper to examine the{" "}
                    <strong>behavioral pattern of software practitioners</strong>{" "}
                    when using AI-based code generation tools.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gradient mr-2">•</span>
                  <span>
                    Working with <strong>Microsoft</strong> as a community
                    builder for students.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gradient mr-2">•</span>
                  <span>
                    Working with the <strong>ACM-W</strong> to support and
                    advocate for women in computing.
                  </span>
                </li>
              </ul>
            </div>
            <a
              href="https://drive.google.com/file/d/1_Djkp0_x8UF9px_c_ZSTFrG_5hTHPo76/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="items-right inline-block mt-6 px-8 py-4 bg-gradient text-white rounded-lg text-lg font-semibold tracking-wide hover:from-teal-500 hover:to-teal-700 transition-transform transform hover:scale-105 shadow-lg border-2 border-teal-500"
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
