import React, { useState } from 'react';
import { my } from '../../assets';
import Education from './Education';
import Experience from './SoftSkills';
import Skill from './Skill';
import { motion } from "framer-motion"

export default function AboutUs() {

  const [educationData, setEducationData] = useState(true);
  const [skillsData, setSkillsData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [activeLink, setActiveLink] = useState('education');

  return (
    <section id="AboutUs" className='w-full pt-20 pb-20 flex-col lgl:flex lgl:flex-row xl:gap-4 lgl:gap-4 border-b-[2px] border-b-black gap-4'>

      <motion.div 
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:0.5}}
      className='w-full lgl:w-1/3 flex flex-col gap-16 pb-4'>
        <img className='mx-auto object-cover rounded-[5%] w-[300px] h-[400px] lgl:w-[500px] lgl:h-[600px] z-10' alt='myProfile' src={my}/>
      </motion.div>

      <motion.div 
       whileInView={{opacity:1,x:0}}
       initial={{opacity:0,x:100}}
       transition={{duration:0.5}}
      className='w-full lgl:w-2/3 flex flex-col gap-4 bg-dark p-10 rounded-[5%] bg-gradient-to-r from-[#484c56] to-[#23272b] shadow-shadowOne'>
        <div className='flex flex-col gap-7'>
          <h1 className='flex justify-center items-center mt-10 text-6xl font-bold text-white'>About Me</h1>
          <p className='text-l tracking-wide hover:text-gray-100 duration-300 text-blue-200'>  I’m Nipuna Sudesh, a passionate Software Engineering undergraduate at the University of Kelaniya.
  I enjoy building modern, responsive web applications and exploring new technologies.
  This portfolio highlights my skills, projects, and growth as a developer.</p>
        </div>
        <div className='flex flex-col gap-4'>
          <ul className='w-full flex flex-col  md:grid md:grid-cols-3 md-gap-2 lgl:grid lgl:grid-cols-3 gap-4 text-2xl text-white '>
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
              Soft Skills
            </li>
          </ul>
        </div>

        {educationData && <Education />}
        {skillsData && <Skill />}
        {experienceData && <Experience />}
      </motion.div>

    </section>
  )
}
