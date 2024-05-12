import React from 'react'
import { my } from '../../assets'
import AboutDetails from './AboutDetails';

export default function AboutUs() {
  return (
    <section id="AboutUs" className='w-full h-[750px] pt-20 pb-20 flex border-b-[2px] border-b-black'>

    <div className='w-1/3 '>
      <img className='object-cover w-full h-full rounded-[5%]' alt='myProfile' src={my}/>
    </div>
    <div className='w-2/3 bg-dark p-10'>
    <div className='flex flex-col gap-7'>
      <h1 className='flex justify-center items-center mt-10 text-6xl font-bold text-white'>About Us</h1>
      <p className='text-l tracking-wide mt-3 hover:text-gray-100 duration-300'>I'm Nipuna Sudesh, a passionate and driven Software Engineering undergraduate student at the University of Kelaniya. I welcome you to explore my portfolio, where I showcase my journey, skills, and projects in the world of software development.</p>
      </div>
      <div>
        <ul className='w-full grid grid-cols-4 gap-4 text-2xl text-white'>
          <li className='aboutList'>Education</li>
          <li className='aboutList'>Professional Skills</li>
          <li className='aboutList'>Experience</li>
        </ul>
      </div>
      <div class="container mx-auto px-2 py-2 ">
      <div class="flex flex-col gap-2">
      <AboutDetails title="UI/UX" des="Designing web/App interface"/>
      <AboutDetails title="web Development" des="Web App development"/>
      <AboutDetails title="App Development" des="App Development"/>
      <AboutDetails title="UI/UX" des="Designing web/App interface"/>
        </div>
      </div>
    </div>

  </section>
  )
}
