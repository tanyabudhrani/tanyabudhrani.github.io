import React from 'react';

function Extracurriculars() {
  const extracurriculars = [
    {
      organisation: "Cybersify",
      title: "Founder and Executive Director",
      duration: "2019 - 2022",
      description: "Established an online educational platform dedicated to fostering digital literacy and promoting cybersecurity awareness.",
      link: "https://www.instagram.com/cybersifyph/",
    },
    {
      organisation: "Talang Dalisay",
      title: "Head Writer",
      duration: "2020 - 2022",
      description: "Contributed as a dedicated editor for Inscribe, facilitating the production of high-quality articles.",
      link: "https://www.talangdalisay.org/",
    },
    {
        organisation: "Google Developer Student Club",
        title: "Lead",
        duration: "2022 - 2023",
        description: "Hosted a multitude of events on Arduino use, machine learning, cybersecurity, etc.",
        link: "",
    },
    {
        organisation: "Inscribe",
        title: "Editor-in-Chief",
        duration: "2023 - Present",
        description: "Contributed as a dedicated editor for Inscribe, the esteemed school journal, facilitating the production of high-quality articles.",
        link: "https://elc.polyu.edu.hk/inscribe/",
    },
    {
        organisation: "International Student Association",
        title: "Head",
        duration: "2023 - 2024",
        description: "",
        link: "",
    },
    {
        organisation: "Hong Kong Institute of Engineers",
        title: "Member",
        duration: "2024 - Present",
        description: "",
        link: "",
    },
    {
        organisation: "PolyU Robotics Club",
        title: "Member",
        duration: "2024 - Present",
        description: "",
        link: "",
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">Extracurricular Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {extracurriculars.map((extra, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-2xl font-bold">{extra.title}</h3>
              <p className="text-gray-400">{extra.organisation} | {extra.duration}</p>
              <p className="mt-4">{extra.description}</p>
              <a href={extra.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 inline-block">More Info</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Extracurriculars;
