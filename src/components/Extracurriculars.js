import React, { useRef, useEffect, useState } from "react";
import { BsLink45Deg } from "react-icons/bs";
import { motion, useInView } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Extracurriculars = () => {
  const [showTypewriter, setShowTypewriter] = useState(false);
  const titleRef = useRef();
  const isInView = useInView(titleRef, { once: true });

  useEffect(() => {
    if (isInView) setShowTypewriter(true);
  }, [isInView]);

  const extracurriculars = [
    {
      organisation: "Microsoft",
      title: "Technical Community Builder",
      duration: "2024 - Present",
      content: [
        {
          text: "Works as a student ambassador for Microsoft to share and teach content on Microsoft services, such as Azure Fundamentals, AI and Machine Learning, CoPilot for MSFT, etc.",
        },
      ],
    },
    {
      organisation: "Hong Kong Computer Society",
      title: "Member and Student Ambassador",
      duration: "2024 - Present",
      content: [
        {
          text: "Working with the HKCS to raise awareness amongst university students in Computer Science.",
        },
      ],
    },
    {
      organisation: "Association for Computing Machinery",
      title: "Member and Student Ambassador",
      duration: "2024 - Present",
      content: [
        {
          text: "Working with the ACM-W to support and advocate for Women in Computing.",
        },
      ],
    },
    {
      organisation: "Cybersify",
      title: "Founder and Executive Director",
      duration: "2019 - Present",
      content: [
        {
          text: "Established an online educational platform dedicated to fostering digital literacy and promoting cybersecurity awareness.",
          link: "https://www.instagram.com/cybersifyph/",
        },
      ],
    },
    {
      organisation: "Millenium Fellowship",
      title: "Millenium Fellow",
      duration: "2025 - Present",
      content: [
        {
          text: "I was recently accepted into the 2025 cohort of Millenium Fellows, with a 4% acceptance rate, to drive social impact.",
        },
      ],
    },
    {
      organisation: "Hong Kong Institute of Engineers",
      title: "Member",
      duration: "2024 - Present",
      content: [{ text: "Active member participating in engineering events." }],
    },
    {
      organisation: "PolyU Robotics Club",
      title: "Member",
      duration: "2024 - Present",
      content: [{ text: "Collaborating with robotics enthusiasts to build projects." }],
    },
    {
      organisation: "Inscribe",
      title: "Editor-in-Chief",
      duration: "2023 - Present",
      content: [
        {
          text: "Contributed as a dedicated editor for Inscribe, the esteemed school journal.",
          link: "https://elc.polyu.edu.hk/inscribe/",
        },
      ],
    },
    {
      organisation: "Talang Dalisay",
      title: "Head Writer",
      duration: "2020 - 2022",
      content: [
        {
          text: "Contributed as a dedicated editor for Inscribe, facilitating the production of high-quality articles.",
          link: "https://www.talangdalisay.org/",
        },
      ],
    },
    {
      organisation: "Google Developer Student Club",
      title: "Lead",
      duration: "2022 - 2023",
      content: [
        {
          text: "Hosted a multitude of events on Arduino use, machine learning, cybersecurity, etc.",
        },
      ],
    },
    {
      organisation: "International Student Association",
      title: "Head",
      duration: "2023 - 2024",
      content: [{ text: "Led a variety of student activities and events." }],
    },
  ];

  return (
    <section
      id="extracurriculars"
      className="py-20 bg-primary text-white"
      style={{
        backgroundImage: `url('/assets/bg2.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto">
        <h2
          ref={titleRef}
          className="text-5xl font-poppins font-semibold text-white mb-8"
        >
          {showTypewriter && (
            <Typewriter
              words={["Extracurricular Activities"]}
              typeSpeed={70}
              cursor
              cursorStyle="|"
            />
          )}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {extracurriculars.map((extra, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-between px-6 py-6 rounded-[20px] bg-primary max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 transition-colors duration-300 transform border border-gray-500 hover:border-transparent shadow-xl hover:shadow-2xl"
              whileInView={{ x: [-40, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-row">
                <div className="flex flex-col ml-4">
                  <h4 className="font-poppins font-semibold text-[20px] text-gradient leading-[32px]">
                    {extra.organisation}
                  </h4>
                  <p className="font-poppins font-normal text-[16px] text-white my-1 leading-[24px]">
                    {extra.title}
                  </p>
                  <p className="font-poppins italic font-normal text-[14px] text-dimWhite my-1">
                    {extra.duration}
                  </p>
                </div>
              </div>

              <div className="mt-4">
                {extra.content.map((info, i) => (
                  <div key={i}>
                    <p className="font-poppins font-normal text-[14px] text-dimWhite my-4 leading-[32px]">
                      ● {info.text}{" "}
                      {info.link && (
                        <a href={info.link} target="_blank" rel="noopener noreferrer">
                          <BsLink45Deg size="1rem" className="inline" />
                        </a>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurriculars;
