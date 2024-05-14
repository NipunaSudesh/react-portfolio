import React, { useState } from 'react';
import { my } from '../../assets';
import AboutDetails from './AboutDetails';
import Education from './Education';
import Experience from './Experience';
import Skill from './Skill';

export default function AboutUs() {

  const [educationData, setEducationData] = useState(true);
  const [skillsData, setSkillsData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [activeLink, setActiveLink] = useState('education');

  return (
    <section id="AboutUs" className='w-full h-[750px] pt-20 pb-20 flex border-b-[2px] border-b-black gap-4'>

      <div className='w-1/3 '>
        <img className='object-cover w-full h-full rounded-[5%]' alt='myProfile' src={my}/>
      </div>

      <div className='w-2/3 bg-dark p-10 rounded-[5%] bg-gradient-to-r from-[#484c56] to-[#23272b] shadow-shadowOne'>
        <div className='flex flex-col gap-7'>
          <h1 className='flex justify-center items-center mt-10 text-6xl font-bold text-white'>About Us</h1>
          <p className='text-l tracking-wide mt-3 hover:text-gray-100 duration-300'>I'm Nipuna Sudesh, a passionate and driven Software Engineering undergraduate student at the University of Kelaniya. I welcome you to explore my portfolio, where I showcase my journey, skills, and projects in the world of software development.</p>
        </div>
        <div className='flex flex-col gap-4'>
          <ul className='w-full grid grid-cols-4 gap-4 text-2xl text-white '>
            <li onClick={() => { setEducationData(true); setSkillsData(false); setExperienceData(false); setActiveLink('education'); }}
              className={`cursor-pointer hover:text-designColor ${activeLink === 'education' ? 'underline text-designColor' : ''}`}>
              Education
            </li>

            <li onClick={() => { setEducationData(false); setSkillsData(true); setExperienceData(false); setActiveLink('skills'); }}
              className={`cursor-pointer hover:text-designColor ${activeLink === 'skills' ? 'underline text-designColor' : ''}`}>
              Professional Skills
            </li>

            <li onClick={() => { setEducationData(false); setSkillsData(false); setExperienceData(true); setActiveLink('experience'); }}
              className={`cursor-pointer hover:text-designColor ${activeLink === 'experience' ? 'underline text-designColor' : ''}`}>
              Experience
            </li>
          </ul>
        </div>

        {educationData && <Education />}
        {skillsData && <Skill />}
        {experienceData && <Experience />}
      </div>

    </section>
  )
}
