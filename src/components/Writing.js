import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tilt } from 'react-tilt';


const WritingItem = (props) => {
  return (
    <Tilt
    options={{
      max: 35,
      scale: 1.05,
      speed: 500,
      perspective: 1000,
    }}
    className="transition-transform"
  >
    <motion.div
      className="flex flex-col justify-between px-6 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 transition-transform duration-300 transform border border-gray-700 bg-dark-800 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(13,255,202,0.2)]"
      whileInView={{ x: [-40, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <img
        src={props.image}
        alt={props.title}
        className="object-cover w-full h-40 rounded-lg"
      />
      <div className="flex flex-row mt-4">
        <div className="flex flex-col ml-4">
          <a
            className="font-poppins font-bold text-[17px] text-gradient my-1 leading-[24px] hover:text-teal-500"
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.title}
          </a>
          <p className="font-poppins italic font-normal text-[15px] text-white my-1">
            {props.organisation}
          </p>
        </div>
      </div>
    </motion.div>
  </Tilt>

  );
};

const Writing = () => {
  const writings = [
    {
      title: "Garbage Classification using Histogram of Oriented Gradients (HOG)",
      organisation: "Publication",
      link: "https://docs.google.com/document/d/1qFV6vtIO1fCoeZwsbRuv598TYKwv2aW2bjWfwkxBBio/edit?usp=sharing",
      image: "/assets/polyu.png", // Replace with your actual image paths
    },
    {
      title: "Cracking the Code: Developer Trust and Usage Patterns in AI-Based Code Generators",
      organisation: "Publication",
      link: "https://drive.google.com/file/d/1oDX_l60n4EGd8x16vLN_ZwMTbYGDdQQb/view?usp=sharing",
      image: "/assets/ubc.jpeg", // Replace with your actual image paths
    },
    {
      title: "Data Analytics",
      organisation: "Notes",
      link: "https://github.com/tanyabudhrani/Data-Analytics.git",
      image: "/assets/dataanalytics.jpeg",
    },
    {
      title: "Operating Systems",
      organisation: "Notes",
      link: "https://github.com/tanyabudhrani/Operating-Systems.git",
      image: "/assets/os.jpeg",
    },
    {
      title: "Computer Networking",
      organisation: "Notes",
      link: "https://github.com/tanyabudhrani/Computer-Networking.git",
      image: "/assets/networking.jpeg",
    },
    {
      title: "Data Structures",
      organisation: "Notes",
      link: "https://github.com/tanyabudhrani/Data-Structures.git",
      image: "/assets/ds.jpeg",
    },
    {
      title: "The Devil's Advocate",
      organisation: "Writing",
      link: "https://drive.google.com/drive/folders/1UweUc8euIhfRU6ncMwU9IwPHjllBB3vN?usp=sharing",
      image: "/assets/eng.jpeg",
    },
    {
      title: "Human Computer Interaction",
      organisation: "Notes",
      link: "https://github.com/tanyabudhrani/Human-Computer-Interaction.git",
      image: "/assets/hci.jpeg", // Replace with your actual image paths
    },
    {
      title: "Software Engineering",
      organisation: "Notes",
      link: "https://github.com/tanyabudhrani/Software-Engineering.git",
      image: "/assets/software.jpg", // Replace with your actual image paths
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredWritings = selectedCategory === "All" ? writings : writings.filter(writing => writing.organisation.includes(selectedCategory));

  const categories = ["All", "Publication", "Notes", "Writing"];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0f172a] via-[#0b1c30] to-[#020617] text-white"> {/* Updated background color */}
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">My Writings</h2>
        <div className="mb-4 flex justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-3 m-1 rounded ${selectedCategory === category ? 'bg-teal-500 text-white' : 'bg-dark-700 text-white'}`} // Updated button styling
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {filteredWritings.map((writing, index) => (
            <WritingItem key={index} {...writing} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writing;
