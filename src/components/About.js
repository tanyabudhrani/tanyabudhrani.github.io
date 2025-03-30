import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

const About = () => {
  const titleRef = useRef();
  const isInView = useInView(titleRef, { once: true });
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    if (isInView) {
      setShowTypewriter(true);
    }
  }, [isInView]);

  return (
    <section id="about" className="py-20 bg-primary text-white relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto"
      >
        <h1 ref={titleRef} className="text-6xl font-bold mb-6 text-right">
          {showTypewriter && (
            <Typewriter
              words={['About Me']}
              typeSpeed={70}
              cursor
              cursorStyle="|"
            />
          )}
        </h1>

        <div className="flex flex-col md:flex-row items-end md:items-start">
          <img
            src="/assets/profile.jpeg"
            alt="Tanya Budhrani"
            className="w-48 h-48 rounded-full mb-6 md:mb-0 md:mr-12 transform transition-transform duration-300 hover:scale-105 shadow-lg"
          />
          <div className="md:ml-20 text-right">
            <p className="text-xl md:text-2xl mb-4 hover:text-gradient transition-colors duration-200">
              Hello there, I'm <strong>Tans</strong>
            </p>
            <p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-200">
              I am a third-year Computer Science and Linguistics student at the
              Hong Kong Polytechnic University with a keen interest in Natural
              Language Processing and Machine Learning.
            </p>

            <hr className="border-gradient mb-6" />

            <div>
              <p className="text-lg md:text-xl mb-4 text-gradient text-center">
                I am currently involved in:
              </p>
              <ul className="list-none ml-5 text-lg md:text-lg space-y-3 text-left">
                {[
                  "Working at Gateway Private Markets as a Software Developer Intern.",
                  "Working with Microsoft as a community builder for students.",
                  "Working with the ACM-W to support and advocate for women in computing.",
                  "Working with the HKCS to empower Hong Kong students wanting to learn Computer Science.",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-gradient mr-2">•</span>
                    <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                  </motion.li>
                ))}
              </ul>

              <div className="flex justify-center mt-6">
                <a
                  href="https://drive.google.com/file/d/1wQBLQMZyU5b92i1nYc3sr2EkAkgIl9l9/view?usp=sharing"
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
      </motion.div>
    </section>
  );
};

export default About;
