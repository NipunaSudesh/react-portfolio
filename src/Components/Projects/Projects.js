import React from 'react'
import ProjectCard from './ProjectCard'
import { eCom } from '../../assets/index'
import { tt } from '../../assets/index'
import { user } from '../../assets/index'
import { petShop } from '../../assets/index'

export default function Projects() {
  return (
    <section id='Projects' className='w-full border-b-[2px] boder-b-black mb-10'>
      <div >
      <h1 className='flex justify-center items-center mt-10 text-6xl font-bold text-white'>My Projects</h1>
      </div>
        <div className='mt-10 grid-cols-1 mdl:grid-cols-2 grid xl:grid-cols-3 gap-6 lgl:flex xl:gap-20 '>
          <ProjectCard 
          title="Mobile Store Management System"
          des="  e-commerce web app using the MERN stack with
JWT authentication, CRUD operations for products, Implemented a
responsive UI for seamless usability and applied data security protocols to
ensure a user-friendly and reliable application"
          src={eCom}
            git='https://github.com/NipunaSudesh/Mobile-Store-Management-System'
          />
          <ProjectCard 
          title="Pet Equipment Store"
          des=" A full-stack E-commerce web application using ReactJS for the frontend,
Java Spring Boot for the backend, and PostgreSQL for the database.
Standout features include browsing, purchasing, product management,
and user authentication."
          src={petShop}
          git='https://github.com/bhashana99/petShop'
          />
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
          <ProjectCard 
          title="User Management System"
          des=" Developed an individual full-stack web application with a comprehensive
CRUD operation system, utilizing ReactJS and Spring Boot; achieved
efficient data management and scalability with PostgreSQL for reliable
user content handling"
          src={user}
          git='https://github.com/NipunaSudesh/UserManagementSystem-backend'
          />


        </div>
    </section>
  )
} 
