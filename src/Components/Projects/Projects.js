import React from 'react'
import ProjectCard from './ProjectCard'
import { eCom, tt, user, petShop } from '../../assets/index'
import { motion } from 'framer-motion'

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
          transition={{ duration: 2 }}
        >
          <ProjectCard 
            title="Mobile Store Management System"
            des="  e-commerce web app using the MERN stack with
            JWT authentication, CRUD operations for products, Implemented a
            responsive UI for seamless usability and applied data security protocols to
            ensure a user-friendly and reliable application"
            src={eCom}
            git='https://github.com/NipunaSudesh/Mobile-Store-Management-System'
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5 }}
        >
          <ProjectCard 
            title="Pet Equipment Store"
            des=" A full-stack E-commerce web application using ReactJS for the frontend,
            Java Spring Boot for the backend, and PostgreSQL for the database.
            Standout features include browsing, purchasing, product management,
            and user authentication."
            src={petShop}
            git='https://github.com/bhashana99/petShop'
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
        >
          <ProjectCard 
            title="Table Tennis Equipment Store"
            des=" full-featured e-commerce web application utilizing HTML, CSS,
            JavaScript, PHP, and MySQL. Designed to enable seamless browsing,
            purchasing, and product management, the application integrates PHP for
            server-side logic, MySQL for database management, and HTML, CSS, and
            JavaScript for building the user interface."
            src={tt}
            git='https://github.com/NipunaSudesh/table-tennis-equipment-store'
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3.5 }}
        >
          <ProjectCard 
            title="User Management System"
            des=" Developed an individual full-stack web application with a comprehensive
            CRUD operation system, utilizing ReactJS and Spring Boot; achieved
            efficient data management and scalability with PostgreSQL for reliable
            user content handling"
            src={user}
            git='https://github.com/NipunaSudesh/UserManagementSystem-backend'
          />
        </motion.div>
      </div>
    </section>
  )
}
