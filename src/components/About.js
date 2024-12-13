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
              <p className="text-lg md:text-xl mb-4 text-gradient text-center">
                I am currently involved in:
              </p>
              <ul className="list-none ml-5 text-lg md:text-lg space-y-3">
                <li className="flex items-start">
                  <span className="text-gradient mr-2">•</span>
                  <span>
                    Working at the Hong Kong Science and Technology Parks 
                    as a <strong>Software Developer Intern.</strong>
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
                <li className="flex items-start">
                  <span className="text-gradient mr-2">•</span>
                  <span>
                    Working with the <strong>HKCS</strong> to empower 
                    Hong Kong students wanting to learn Computer Science.
                  </span>
                </li>
              </ul>

              {/* Center the button underneath "I am currently involved in" */}
              <div className="flex justify-center mt-6">
                <a
                  href="https://drive.google.com/file/d/1_Djkp0_x8UF9px_c_ZSTFrG_5hTHPo76/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 text-white transition-colors duration-300 transform border rounded-xl hover: text-gradient border-transparent group dark:border-gray-700 dark:hover:border-transparent feature-card"
                >
                  Download My Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
