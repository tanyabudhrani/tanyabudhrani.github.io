import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary text-white">
      <div className="container mx-auto text-right">
        <h1 className="text-6xl font-bold mb-6">About Me</h1>

        <div className="flex flex-col md:flex-row items-center right-center">
          <img
            src="/assets/profile.jpeg"
            alt="Tanya Budhrani"
            className="w-48 h-48 rounded-full mb-6 md:mb-0 md:mr-12"
          />
          <div className="ml-auto mr-auto md:ml-20">
            <p className="text-xl md:text-2xl mb-4 hover:bubble">
              Hello there, I'm <strong>Tans</strong>
            </p>
            <p className="text-lg md:text-lg mb-4 hover:bubble">
              I am a third-year Computer Science and Linguistics student at the Hong Kong Polytechnic University with a keen interest in Natural Language Processing and Machine Learning.
            </p>
            <div>
              <p className="text-lg md:text-lg mb-4 hover:bubble">
                I am currently:
              </p>
              <ul className="list-none ml-5 text-lg md:text-lg">
                <li>Working on a paper to examine the <strong>behavioral pattern of software practitioners</strong> when using AI-based code generation tools.</li>
                <li>Working with<strong>Microsoft</strong> as a community builder for students.</li>
                <li>Working with the <strong>ACM-W</strong> to support and advocate for women in computing.</li>
              </ul>
            </div>
            <a
              href="https://drive.google.com/file/d/1_Djkp0_x8UF9px_c_ZSTFrG_5hTHPo76/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 mt-4 inline-block bg-gradient text-white rounded-lg text-lg hover:bg-teal transition-all border-2 border-teal-500"
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
