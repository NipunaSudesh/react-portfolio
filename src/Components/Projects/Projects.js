import React from "react";
import ProjectCard from "./ProjectCard";
import {
  skinora,
  tt,
  user,
  petShop,
  mobile,
  weather,
} from "../../assets";
import { motion } from "framer-motion";

const projects = [
  {
  title: "Comparative Study on Front-End Frameworks",
  des: "Conducted an in-depth comparative research study on modern front-end frameworks, evaluating performance, security, development complexity, scalability, and carbon efficiency in client-side web applications. The study is supported by a full-stack implementation featuring a Node.js and Express.js backend, MongoDB database for data persistence, and Cloudinary for efficient media and file storage. A live demo was developed to validate findings using real-world usage and performance metrics.",
  src: skinora,
  git: "https://github.com/NipunaSudesh/SkinOra-React",
  live: "https://skinora-react.netlify.app",
  tech: [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Cloudinary",
    // "Performance Analysis",
    // "Web Sustainability",
    // "Research"
  ],
},
  {
    title: "Mobile Store Management System",
    des: "Designed and developed a full-stack MERN e-commerce platform featuring JWT-based authentication, role-based admin dashboard, secure REST APIs, and complete CRUD operations for products and users. Focused on scalability, clean architecture, and responsive UI design.",
    src: mobile,
    git: "https://github.com/NipunaSudesh/Mobile-Store-Management-System",
    live: "https://skinora-react.netlify.app",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    title: "Weather App",
    des: "Built a responsive weather application using React, Vite, and Tailwind CSS. Integrated the OpenWeather API to deliver real-time weather data, city-based search, and multi-day forecasts with optimized performance and clean UI.",
    src: weather,
    git: "https://github.com/NipunaSudesh/Weather-App",
    live: "https://weather-app-kohl-two-41.vercel.app/",
    tech: ["React", "Vite", "Tailwind CSS", "OpenWeather API"],
  },
  {
    title: "Pet Equipment Store",
    des: "Developed a full-stack e-commerce system with secure RESTful APIs, user authentication, and PostgreSQL database integration. Implemented product management, order handling, and a user-friendly shopping experience.",
    src: petShop,
    git: "https://github.com/bhashana99/petShop",
    tech: ["React", "Spring Boot", "PostgreSQL"],
  },
  {
    title: "Table Tennis Equipment Store",
    des: "Created a PHP-based e-commerce platform with user authentication, shopping cart functionality, order processing, and MySQL database integration. Emphasized backend logic, data consistency, and usability.",
    src: tt,
    git: "https://github.com/NipunaSudesh/table-tennis-equipment-store",
    tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "User Management System",
    des: "Implemented a full-stack CRUD-based user management system using React and Spring Boot. Designed REST APIs for efficient data handling and integrated PostgreSQL for persistent storage.",
    src: user,
    git: "https://github.com/NipunaSudesh/UserManagementSystem-backend",
    tech: ["React", "Spring Boot", "PostgreSQL"],
  },


];


export default function Projects() {
  return (
    <section id="Projects" className="w-full py-16">
      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-white">
          Software Engineering Projects
        </h2>
        <p className="text-gray-400 text-sm mt-3 max-w-2xl mx-auto">
          Practical projects demonstrating full-stack development,
          authentication, APIs, and modern frameworks.
        </p>
      </div>

<div className="flex flex-wrap gap-8 justify-center w-full">
  {projects.map((project, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="w-full sm:w-[370px] lg:w-[400px]"
    >
      <ProjectCard {...project} />
    </motion.div>
  ))}
</div>

    </section>
  );
}
