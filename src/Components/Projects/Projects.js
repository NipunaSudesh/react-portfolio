import React from 'react'
import ProjectCard from './ProjectCard'
import { eCom } from '../../assets/index'

export default function Projects() {
  return (
    <section id='Projects' className='w-full border-b-[2px] boder-b-black mb-10'>
      <div >
      <h1 className='flex justify-center items-center mt-10 text-6xl font-bold text-white'>My Projects</h1>
      </div>
        <div className='mt-10 grid grid-cols-1 mdl:grid-cols-2 xl:grid-cols-3 lgl:flex xl:gap-20 gap-14 '>
          <ProjectCard 
          title="E-Commerce WebSite"
          des=" Lorem Ipsum text in a React application, you can either use a Lorem Ipsum generator library or create a simple function to t"
          src={eCom}
          />
          <ProjectCard 
          title="E-Commerce WebSite"
          des=" Lorem Ipsum text in a React application, you can either use a Lorem Ipsum generator library or create a simple function to generate Lorem Ipsum text. Here's an example of a simple function that generates Lorem Ipsum text"
          src={eCom}
          />
          <ProjectCard 
          title="E-Commerce WebSite"
          des=" Lorem Ipsum text in a React application, you can either use a Lorem Ipsum generator library or create a simple function to generate Lorem Ipsum text. Here's an example of a simple function that generates Lorem Ipsum text"
          src={eCom}
          />


        </div>
    </section>
  )
} 
