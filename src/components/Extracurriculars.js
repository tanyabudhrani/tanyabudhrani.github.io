import React from "react";
import { BsLink45Deg } from "react-icons/bs";
import { motion } from "framer-motion";

const Content = ({ text, link }) => {
  return (
    <div>
      <p className="font-poppins font-normal text-[14px] text-dimWhite my-4 leading-[32px]">
        ● {text}{" "}
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="color-whitw hover:text-teal-200">
            <BsLink45Deg size="1rem" className="inline" />
          </a>
        ) : (
          ""
        )}
      </p>
    </div>
  );
};

const ExtraCurricularCard = (props) => {
  return (
    <motion.div
      className="flex flex-col justify-between px-6 py-6 rounded-[20px] bg-primary max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 transition-colors duration-300 transform border border-gray-500 hover:border-transparent shadow-xl hover:shadow-2xl"
      whileInView={{ x: [-40, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex flex-row">
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] text-gradient leading-[32px]">
            {props.organisation}
          </h4>
          <p className="font-poppins font-normal text-[16px] text-white my-1 leading-[24px]">
            {props.title}
          </p>
          <p className="font-poppins italic font-normal text-[14px] text-dimWhite my-1">
            {props.duration}
          </p>
        </div>
      </div>

      <div className="mt-4">
        {props.content.map((info, index) => (
          <Content key={index} text={info.text} link={info.link} />
        ))}
      </div>
    </motion.div>
  );
};

const Extracurriculars = () => {
  const extracurriculars = [
    {
      organisation: "Cybersify",
      title: "Founder and Executive Director",
      duration: "2019 - 2022",
      content: [
        {
          text: "Established an online educational platform dedicated to fostering digital literacy and promoting cybersecurity awareness.",
          link: "https://www.instagram.com/cybersifyph/",
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
      organisation: "International Student Association",
      title: "Head",
      duration: "2023 - 2024",
      content: [{ text: "Led a variety of student activities and events." }],
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
  ];

  return (
    <section id="extracurriculars" className="py-20 bg-primary text-white">
      <div className="container mx-auto">
        <h2 className="text-5xl font-poppins font-semibold text-white mb-8">
          Extracurricular Activities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {extracurriculars.map((extra, index) => (
            <ExtraCurricularCard key={index} {...extra} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurriculars;
