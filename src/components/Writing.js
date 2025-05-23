// import React, { useState, useRef, useEffect } from "react";
// import { motion, useInView } from "framer-motion";
// import { Typewriter } from "react-simple-typewriter";

// const WritingBlock = ({ title, organisation, link, image, index }) => {
//   return (
//     <motion.a
//       href={link}
//       target="_blank"
//       rel="noopener noreferrer"
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       viewport={{ once: true, amount: 0.2 }}
//       whileHover={{ scale: 1.015 }}
//       className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/10 p-6 border border-white/10 backdrop-blur-lg hover:border-teal-400 transition-all duration-300 cursor-pointer"
//     >
//       <div className="flex items-center gap-4">
//         <img
//           src={image}
//           alt={title}
//           className="w-16 h-16 object-cover rounded-lg border border-white/20"
//         />
//         <div>
//           <h3 className="text-white font-semibold text-lg group-hover:text-teal-300 transition-colors duration-200">
//             {title}
//           </h3>
//           <p className="text-sm text-white/60 italic">{organisation}</p>
//         </div>
//       </div>
//       <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
//     </motion.a>
//   );
// };

// const Writing = () => {
//   const writings = [
//     {
//       title: "Garbage Classification using Histogram of Oriented Gradients (HOG)",
//       organisation: "Publication",
//       link: "https://docs.google.com/document/d/1qFV6vtIO1fCoeZwsbRuv598TYKwv2aW2bjWfwkxBBio/edit?usp=sharing",
//       image: "/assets/polyu.png",
//     },
//     {
//       title: "Cracking the Code: Developer Trust and Usage Patterns in AI-Based Code Generators",
//       organisation: "Publication",
//       link: "https://drive.google.com/file/d/1IDn1GRWl8jlTrcsFrYYHGJmabulAOSMK/view?usp=sharing",
//       image: "/assets/ubc.jpeg",
//     },
//     {
//       title: "Buzzfeed Quizzes: the Windows to our Souls",
//       organisation: "Writing",
//       link: "https://docs.google.com/document/d/1lgwJIVZutmwt-OpFSR3Fnh4VWcMNXyQf95tHL21PNO8/edit?usp=drive_link",
//       image: "/assets/buzz.png",
//     },
//     {
//       title: "The Pragmatics behind Pride and Prejudice",
//       organisation: "Writing",
//       link: "https://docs.google.com/document/d/1Wv3XuBHCUQVYR_CvDFK-tXFvyqHSKuOLlfNu4A70k1o/edit?usp=sharing",
//       image: "/assets/prag.jpeg",
//     },
//     {
//       title: "Data Analytics",
//       organisation: "Notes",
//       link: "https://github.com/tanyabudhrani/Data-Analytics.git",
//       image: "/assets/dataanalytics.jpeg",
//     },
//     {
//       title: "Operating Systems",
//       organisation: "Notes",
//       link: "https://github.com/tanyabudhrani/Operating-Systems.git",
//       image: "/assets/os.jpeg",
//     },
//     {
//       title: "Data Structures",
//       organisation: "Notes",
//       link: "https://github.com/tanyabudhrani/Data-Structures.git",
//       image: "/assets/ds.jpeg",
//     },
//     {
//       title: "The Devil's Advocate",
//       organisation: "Writing",
//       link: "https://drive.google.com/drive/folders/1UweUc8euIhfRU6ncMwU9IwPHjllBB3vN?usp=sharing",
//       image: "/assets/eng.jpeg",
//     },
//     {
//       title: "Human Computer Interaction",
//       organisation: "Notes",
//       link: "https://github.com/tanyabudhrani/Human-Computer-Interaction.git",
//       image: "/assets/hci.jpeg",
//     },
//     {
//       title: "Software Engineering",
//       organisation: "Notes",
//       link: "https://github.com/tanyabudhrani/Software-Engineering.git",
//       image: "/assets/software.jpg",
//     },
//   ];

//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const filteredWritings =
//     selectedCategory === "All"
//       ? writings
//       : writings.filter((writing) =>
//           writing.organisation.includes(selectedCategory)
//         );

//   const categories = ["All", "Publication", "Notes", "Writing"];

//   const titleRef = useRef();
//   const isInView = useInView(titleRef, { once: true });
//   const [showTypewriter, setShowTypewriter] = useState(false);

//   useEffect(() => {
//     if (isInView) setShowTypewriter(true);
//   }, [isInView]);

//   return (
//     <section className="py-20 bg-dark-900 text-white">
//       <div className="container mx-auto px-4">
//         <h2 ref={titleRef} className="text-6xl font-bold mb-10 text-center">
//           {showTypewriter && (
//             <Typewriter
//               words={["Writings & Notes"]}
//               typeSpeed={70}
//               delaySpeed={1000}
//               cursor
//               cursorStyle="|"
//             />
//           )}
//         </h2>

//         <div className="flex justify-center mb-8 flex-wrap gap-2">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                 selectedCategory === category
//                   ? "bg-teal-500 text-white shadow-md"
//                   : "bg-white/5 text-white/80 hover:bg-teal-600/30"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
//           {filteredWritings.map((writing, index) => (
//             <WritingBlock key={index} index={index} {...writing} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Writing;

import React, { useRef, useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "framer-motion";

const Writing = () => {
  const titleRef = useRef();
  const isInView = useInView(titleRef, { once: true });
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    if (isInView) setShowTypewriter(true);
  }, [isInView]);

  return (
    <section className="py-20 bg-dark-900 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="text-6xl font-bold mb-10">
          {showTypewriter && (
            <Typewriter
              words={["Writings & Essays"]}
              typeSpeed={70}
              delaySpeed={1000}
              cursor
              cursorStyle="|"
            />
          )}
        </h2>

        <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
          Explore my thoughts, essays, and experiments in writing on my blog.
        </p>

        <a
          href="https://tanyasthoughts.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-6 text-white transition-colors duration-300 transform border rounded-xl hover: text-gradient border-transparent group dark:border-gray-700 dark:hover:border-transparent feature-card"
        >
          Visit My Blog →
        </a>
      </div>
    </section>
  );
};

export default Writing;
