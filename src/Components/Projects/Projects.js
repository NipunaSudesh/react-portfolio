import React from 'react'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id='Projects' className='w-full border-b-[2px] boder-b-black'>
      <div>
      <h1 className='flex justify-center items-center mt-10 text-6xl font-bold text-white'>My Projects</h1>
      </div>
        <div className='mt-10 grid grid-cols-3 gap-14'>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </div>
    </section>
  )
} 
