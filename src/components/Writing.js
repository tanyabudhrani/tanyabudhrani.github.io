import React from 'react';

function Writing() {
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
    }
  ];

  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">My Writings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {writings.map((writing, index) => (
            <div key={index} className="bg-gray-900 p-4 rounded-lg">
              <h3 className="text-2xl font-bold">{writing.title}</h3>
              <p className="text-gray-400">{writing.organisation}</p>
              <a href={writing.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-4 inline-block">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Writing;
