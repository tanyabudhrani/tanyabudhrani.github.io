import {
  nitk,
  cluboard,
  cash_flow,
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  publiclab,
  zulip,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiMicrosoftazure
} from "react-icons/si";

import {
  FaHardHat,
  FaRust
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";

import {
  FaGolang
} from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1vkxyMDB5_KpMwt4QXFgT2aqdRizr8Czh/view?usp=sharing";
export const repoLink = "https://github.com/mittal-parth/personal-portfolio";

export const callToAction = "https://www.linkedin.com/in/mittal-parth";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "writing",
    title: "Writing",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: nitk,
    title: "Hong Kong Polytechnic University",
    degree: "BSc in Computer Science",
    duration: "August 2022 - August 2026",
    content1: "Major: Computer Science",
    content2: "Minor: Linguistics",
  }
];


export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-3",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-6",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-7",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-8",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-9",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-10",
        icon: SiJavascript,
        name: "JavaScript",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiDjango,
        name: "Django",
      },
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-7",
        icon: SiGraphql,
        name: "GraphQL",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiMicrosoftazure,
        name: "Azure",
      },
      {
        id: "t-2",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-4",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-7",
        icon: AiOutlineGitlab,
        name: "Gitlab",
      },
      {
        id: "t-8",
        icon: SiNetlify,
        name: "Netlify",
      },
    ],
  },
];

export const experiences = [
  {
    organisation: "University of British Columbia",
    logo: oracle,
    link: "https://www.oracle.com/in/",
    positions: [
      {
        title: "Mitacs Globalink Intern",
        duration: "2024 - Present",
        content: [
          {
            text: "Performed meticulous research on the interaction of Software Practitioners using Large Language Models to aid in software programming.",
            link: "",
          },
          {
            text: "Conducted literature reviews and data analysis to deliver a scientific report, using Python for data visualization, Latex, Angular, and Wireshark.",
            link: "",
          },
        ],
      }
    ],
  },
  {
    organisation: "Hong Kong Polytechnic University",
    logo: averlon,
    link: "https://averlon.ai/",
    positions: [
      {
        title: "Generative AI Researcher",
        duration: "2024 - Present",
        content: [
          {
            text: "Performed extensive research on generative AI models and tools at the Industrial Lab of PolyU to create an intelligent chatbot, using Azure, AWS services, and Python.",
            link: ""
          }
        ],
      },
    ],
  },
  {
    organisation: "Polk Audio",
    logo: iris,
    link: "https://iris.nitk.ac.in/about_us",
    positions: [
      {
        title: "Researcher and Web Developer",
        duration: "2021 - 2022",
        content: [
          {
            text: "Spearheaded the design and development of their website using HTML, ensuring a visually appealing and user-friendly online presence.",
            link: "",
          },
          {
            text: "Conducted research on Polk Audio's product line, staying up-to-date with the latest industry trends and market demands, to author informative posts and enhance product awareness.",
            link: "",
          },
        ],
      }
    ],
  },
  {
    organisation: "Lokal",
    logo: iris,
    link: "https://iris.nitk.ac.in/about_us",
    positions: [
      {
        title: "Head Writer and Researcher",
        duration: "2020 - 2021",
        content: [
          {
            text: "Led the research department, authoring informationalarticles and conducting extensive research on thelatest technological products.",
            link: "",
          },
          {
            text: "Employed a testing, research, and experimentationapproach to drive innovation and enhance marketingstrategies, contributing to successful client campaignsand optimized product launches.",
            link: "",
          },
        ],
      }
    ],
  }
];

export const writing = [
  {
    id: "os-1",
    organisation: "UBC",
    logo: publiclab,
    repo: "Publication",
    title: "Cracking the Code: Developer Trust and Usage Patterns in AI-Based Code Generators",
    link: "https://drive.google.com/file/d/1oDX_l60n4EGd8x16vLN_ZwMTbYGDdQQb/view?usp=sharing",
  },
  {
    id: "os-2",
    organisation: "PolyU",
    logo: publiclab,
    repo: "Notes",
    title: "Data Analytics",
    link: "https://github.com/tanyabudhrani/Data-Analytics.git",
  },
  {
    id: "os-3",
    organisation: "PolyU",
    logo: publiclab,
    repo: "Notes",
    title: "Operating Systems",
    link: "https://github.com/tanyabudhrani/Operating-Systems.git",
  },
  {
    id: "os-4",
    organisation: "PolyU",
    logo: publiclab,
    repo: "Notes",
    title: "Computer Networking",
    link: "https://github.com/tanyabudhrani/Computer-Networking.git",
  },
  {
    id: "os-5",
    organisation: "PolyU",
    logo: publiclab,
    repo: "Notes",
    title: "Computer Organization",
    link: "https://github.com/tanyabudhrani/Computer-Organization.git",
  },
  {
    id: "os-6",
    organisation: "PolyU",
    logo: publiclab,
    repo: "Writing",
    title: "The Devil's Advocate",
    link: "https://drive.google.com/drive/folders/1UweUc8euIhfRU6ncMwU9IwPHjllBB3vN?usp=sharing",
  },
  {
    id: "os-6",
    organisation: "PolyU",
    logo: publiclab,
    repo: "Notes",
    title: "Data Structures",
    link: "https://github.com/tanyabudhrani/Data-Structures.git",
  },
];

export const projects = [
  {
    id: "project-1",
    title: "Task Manager",
    github: "https://github.com/tanyabudhrani/Task-Management-System.git",
    image: comicify_ai,
    content:
      "Task Management System: a comprehensive Java-based application designed to facilitate the efficient management of tasks within a project or organizational context",
  },
  {
    id: "project-2",
    title: "Line Scheduler",
    github: "https://github.com/tanyabudhrani/Line-Scheduler.git",
    image: greentrust,
    content:
      "This Production Line Scheduling (PLS) machine is specifically designed to enhance production planning and maximize the utilization of the three plants of a medium-sized steel manufacturer.",
  },
  {
    id: "project-3",
    title: "Multi-thread Web Server",
    github: "https://github.com/tanyabudhrani/Multi-thread-Web-Server.git",
    image: chargeswap,
    content:
      "This project is a multi-threaded web server implemented in Python, designed to handle concurrent connections efficiently. It leverages Python's socket and threading modules to manage and serve HTTP requests.",
  }
];

export const extraCurricular = [
  {
    organisation: "Cybersify",
    title: "Founder and Executive Director",
    duration: "2019 - 2022",
    content: [
      {
        text: "Established an online educational platform dedicated to fostering digital literacy and promoting cybersecurity awareness.",
        link: "https://www.instagram.com/cybersifyph/",
      }
    ],
    logo: devfolio,
  },
  {
    organisation: "Talang Dalisay",
    title: "Head Writer",
    duration: "2020 - 2022",
    content: [
      {
        text: "Contributed as a dedicated editor for Inscribe, the esteemed school journal, facilitating the production of high-quality articles.",
        link: "https://www.talangdalisay.org/",
      }
    ],
    logo: gdsc,
  },
  {
    organisation: "Google Developer Student Club",
    title: "Lead",
    duration: "2022 - 2023",
    content: [
      {
        text: "Hosted a multitude of events on Arduino use, machine learning, cybersecurity, etc.",
        link: "",
      }
    ],
    logo: gdsc,
  },
  {
    organisation: "Inscribe",
    title: "Editor-in-Chief",
    duration: "2023 - Present",
    content: [
      {
        text: "Contributed as a dedicated editor for Inscribe, the esteemed school journal, facilitating the production of high-quality articles.",
        link: "https://elc.polyu.edu.hk/inscribe/",
      },
    ],
    logo: iris,
  },
  {
    organisation: "International Student Association",
    title: "Head",
    duration: "2023 - 2024",
    content: [
      {
        text: "",
        link: "",
      }
    ],
    logo: ecell,
  },
  {
    organisation: "Hong Kong Institute of Engineers",
    title: "Member",
    duration: "2024 - Present",
    content: [
      {
        text: "",
        link: "",
      }
    ],
    logo: ecell,
  },
  {
    organisation: "PolyU Robotics Club",
    title: "Member",
    duration: "2024 - Present",
    content: [
      {
        text: "",
        link: "",
      }
    ],
    logo: ecell,
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/tanya-budhrani/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/tanyabudhrani",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:tanyabudhrani04@gmail.com",
  }
];

export const aboutMe = {
    name: "Tanya Budhrani",
    tagLine: "ML Researcher | Computer Scientist | Linguist",
    intro: "As a passionate computer science student witha keen interest in Natural Language Processingand Large Language Models, I bring over fiveyears of hands-on programming experience,aiming to leverage my skills in deliveringinnovative solutions to problems unexplored."
}
