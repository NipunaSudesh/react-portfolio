import React from 'react'
import ProjectCard from './ProjectCard'
import { pickMatch, tt, user, petShop, mobile,weather } from '../../assets/index'
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id='Projects' className='w-full border-b-[2px] border-b-black mb-10'>
      <div>
        <h1 className='flex justify-center items-center mt-10 text-6xl font-bold text-white'>My Projects</h1>
      </div>
      <div className='mt-10 grid-cols-1 lgl:grid-cols-2 grid xl:grid-cols-3 gap-6 xl:gap-20'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <ProjectCard 
            title="Mobile Store Management System"
            des="Developed a full-stack e-commerce app using the MERN
stack, incorporating JWT authentication, CRUD operations,
and a responsive admin panel for managing products and
users."

            src={mobile}
          
            git='https://github.com/NipunaSudesh/Mobile-Store-Management-System'
          
            tech={['React', 'Express', 'Node.js', 'MongoDB']}

            
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <ProjectCard 
            title="Weather App"
            des="Built a weather app using React, Vite, and Tailwind CSS, leveraging the OpenWeather API for real-time weather data and 4-day forecasts. Deployed on Vercel"
            src={weather}
            git='https://github.com/NipunaSudesh/Weather-App'
            vercel={'https://weather-app-kohl-two-41.vercel.app/'}
            tech={['React', 'Tailwind CSS','OpenWeather API']}

            
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <ProjectCard 
            title="Pet Equipment Store"
            des="A full-stack e-commerce web application featuring robust functionality for browsing, purchasing, product management, and user authentication. Designed for a seamless shopping experience with an intuitive interface."
            src={petShop}
            git='https://github.com/bhashana99/petShop'
            tech={['React', 'Spring boot','PostgreSQL']}
          
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <ProjectCard 
            title="Table Tennis Equipment Store"
            des="Developed an e-commerce platform for a table tennis equipment store, featuring user login and registration, a user-friendly interface for browsing and purchasing products, and efficient order management."
            src={tt}
            git='https://github.com/NipunaSudesh/table-tennis-equipment-store'

            tech={['HTML', 'CSS', 'JavaScript.js', 'PHP','Mysql']}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
        >
          <ProjectCard 
            title="User Management System"
            des="Full-stack web application with ReactJS, Spring Boot, and
PostgreSQL. Implemented CRUD operations for efficient user
content management"
            src={user}
            git='https://github.com/NipunaSudesh/UserManagementSystem-backend'

            tech={['React', 'Spring boot', 'PostgreSQL']}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.6, ease: "easeOut" }}
        >
          <ProjectCard 
            title="PickMatch"
            des="E-commerce website with user login and registration, shopping cart, admin panel, dummy card payment, user review."
            src={pickMatch}
            tech={['HTML', 'CSS', 'JavaScript.js', 'PHP','Mysql']}
          />
        </motion.div>
      </div>
    </section>
  )
}
