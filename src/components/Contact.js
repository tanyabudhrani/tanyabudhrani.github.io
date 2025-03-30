import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { Typewriter } from 'react-simple-typewriter';

function Contact() {
  const titleRef = useRef();
  const isInView = useInView(titleRef, { once: true });
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    if (isInView) setShowTypewriter(true);
  }, [isInView]);

  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto text-center">
        {/* Typing "Contact Me" */}
        <h2
          ref={titleRef}
          className="text-4xl font-bold mb-6"
        >
          {showTypewriter && (
            <Typewriter
              words={["Contact Me"]}
              typeSpeed={70}
              cursor
              cursorStyle="|"
            />
          )}
        </h2>

        {/* Subtext */}
        <motion.p
          className="text-xl"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.75, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          Let’s get in touch:
        </motion.p>

        {/* Icons */}
        <div className="mt-6 space-x-4 flex justify-center">
          <motion.a
            href="mailto:tanyabudhrani04@gmail.com"
            className="p-4 border border-white text-white rounded-full bg-transparent hover:bg-teal-500 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <AiOutlineMail size="2.5rem" />
          </motion.a>

          <motion.a
            href="https://github.com/tanyabudhrani"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border border-white text-white rounded-full bg-transparent hover:bg-teal-500 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <AiFillGithub size="2.5rem" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/tanya-budhrani/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border border-white text-white rounded-full bg-transparent hover:bg-teal-500 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <AiFillLinkedin size="2.5rem" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
