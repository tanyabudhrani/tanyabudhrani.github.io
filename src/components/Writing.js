
import React, { useState } from "react";
import { motion } from "framer-motion";

const WritingItem = (props) => {
  return (
    <motion.div
      className="flex flex-col justify-between px-6 py-6 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 transition-colors duration-300 transform border hover:border-transparent dark:border-gray-700 dark:hover:border-transparent"
      whileInView={{ x: [-40, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-row">
        <div className="flex flex-col ml-4">
          <a
            className="font-poppins font-normal text-[16px] text-white my-1 leading-[24px] hover:text-teal-200"
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.title}
          </a>
          <p className="font-poppins italic font-normal text-[14px] text-dimWhite my-1">
            {props.organisation}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Writing = () => {
  const writings = [
    {
      title: "Cracking the Code: Developer Trust and Usage Patterns in AI-Based Code Generators",
      organisation: "UBC - Publication",
      link: "https://drive.google.com/file/d/1oDX_l60n4EGd8x16vLN_ZwMTbYGDdQQb/view?usp=sharing",
    },
    {
      title: "Data Analytics",
      organisation: "PolyU - Notes",
      link: "https://github.com/tanyabudhrani/Data-Analytics.git",
    },
    {
      title: "Operating Systems",
      organisation: "PolyU - Notes",
      link: "https://github.com/tanyabudhrani/Operating-Systems.git",
    },
    {
      title: "Computer Networking",
      organisation: "PolyU - Notes",
      link: "https://github.com/tanyabudhrani/Computer-Networking.git",
    },
    {
      title: "Data Structures",
      organisation: "PolyU - Notes",
      link: "https://github.com/tanyabudhrani/Data-Structures.git",
    },
    {
      title: "The Devil's Advocate",
      organisation: "PolyU - Writing",
      link: "https://drive.google.com/drive/folders/1UweUc8euIhfRU6ncMwU9IwPHjllBB3vN?usp=sharing",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredWritings = selectedCategory === "All" ? writings : writings.filter(writing => writing.organisation.includes(selectedCategory));

  const categories = ["All", "UBC - Publication", "PolyU - Notes", "PolyU - Writing"];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">My Writings</h2>
        <div className="mb-4 flex justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 m-1 rounded ${selectedCategory === category ? 'bg-teal-500 text-white' : 'bg-white text-primary'}`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredWritings.map((writing, index) => (
            <WritingItem key={index} {...writing} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writing;
