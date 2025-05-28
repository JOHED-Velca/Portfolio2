import { image } from "framer-motion/client";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    bbva,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    threejs,
    python,
    java,
    Login,
    weatherapp,
    springboot,
    mysql,
    questionMark,
    fortran,
    extrahopLogo,
    easyaLogo,
    MovieApp,
    CycleBuddy,
    mobileDev,
    Web3,
    extrahop,
    easya,
    // jobHunting,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web2 Developer",
      icon: web,
    },
    {
      title: "Web3 Developer",
      icon: Web3,
    },
    {
      title: "Mobile Developer",
      icon: mobileDev,
    },
    {
      title: "Java Developer",
      icon: java,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Freelancer",
      icon: creator,
    },
    
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "springboot",
      icon: springboot,
    },
    {
      name: "mysql",
      icon: mysql,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer intern",
      company_name: "BBVA",
      icon: bbva,
      iconBg: "#383E56",
      date: "January 2020 - December 2020",
      points: [
        "Maintained and optimized Java-based legacy systems, improving performance by 20% and reducing incidents by 15%, ensuring stability for core banking operations.",
        "Refactored and integrated Spring Boot microservices into legacy systems, enabling new banking features and reducing system response times by 30%.",
        "Optimized MySQL queries and indexing, cutting query execution time by 40%, which improved transaction processing speeds and system efficiency.",
        "Developed automated logging and testing tools, reducing debugging time by 10+ hours per month and increasing code coverage from 60% to 85% with JUnit test cases.",
      ],
      image: "",
    },
    {
      title: "Electrical Assembler Technician",
      company_name: "Fortran Traffic Systems",
      icon: fortran,
      iconBg: "#383E56",
      date: "July 2023 - Present",
      points: [
        "Utilized a local RAG Llama 2 LLM as an assistant for testing and diagnosing cabinet functionality, improving efficiency in identifying wiring issues.",
        "Assembled and wired traffic control cabinets used in Toronto's traffic system, ensuring compliance with electrical schematics and safety standards.",
        "Installed and connected power supplies, relays, circuit breakers, and controllers within the cabinets to meet municipal specifications.",
        "Followed quality control procedures to ensure all components were properly secured and met industry regulations.",
        "Read and interpreted technical drawings and wiring diagrams, collaborating with engineers and supervisors to resolve assembly challenges.",
      ],
      image: "",
    },
    {
      title: "🏆1st Place Winner ExtraHop Hackathon",
      company_name: "ExtraHop",
      icon: extrahopLogo,
      iconBg: "#383E56",
      date: "April 23-2025",
      points: [
        "A hands-on cybersecurity competition testing threat detection and response skills. I took 1st place! The challenge was both intense and rewarding, reinforcing my passion for cybersecurity and the power of real-time network defense tools like ExtraHop’s platform. ",
      ],
      image: extrahop,
    },
    {
      title: "🏆1st Place Winner EasyA Hackathon",
      company_name: "EasyA",
      icon: easyaLogo,
      iconBg: "#383E56",
      date: "May 14-2025",
      points: [
        "EasyAConsensus, a blockchain/crypto hackathon! We built a Web3 DApp that empowers women to track their menstrual cycles while retaining full ownership of their data. Even cooler? Users earn crypto rewards for contributing anonymized data to research.",
        "My Role: Led the team as a Project Manager & Blockchain Developer",
        "Learned & implemented Rust for smart contracts",
        "Built the front end with Vite + React for a smooth user experience",
      ],
      image: easya,
    },
    {
      title: "Job Hunting!",
      company_name: "",
      icon: questionMark,
      iconBg: "#383E56",
      date: "Present",
      points: [
        "",
      ],
      image: "",
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Movie Mobile app",
      description:
        "A react native mobile application that allows users to search and view movies, providing a seamless experience for movie enthusiasts.",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "External API",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: MovieApp,
      source_code_link: "https://github.com/JOHED-Velca/mobile_movie_app",
    },
    {
      name: "Cycle Buddy",
      description:
        "a Web3 DApp that empowers women to track their menstrual cycles while retaining full ownership of their data. Even cooler? Users earn crypto rewards for contributing anonymized data to research.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: CycleBuddy,
      source_code_link: "https://github.com/Bra-AM/CycleBuddy-stellar",
    },
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/JOHED-Velca/CarRental",
    },
    {
      name: "Login GUI",
      description:
        "A Login application that validates login credentials and registers new users using MySQL.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
      ],
      image: Login,
      source_code_link: "https://github.com/JOHED-Velca/Login",
    },
    {
      name: "Weather App",
      description:
        "A weather application that fetches data from an external API, process it and shows it back to the user.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
      ],
      image: weatherapp,
      source_code_link: "https://github.com/JOHED-Velca/WeatherApp-Java",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };