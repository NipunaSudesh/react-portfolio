import React from 'react'
import {FaInstagram,FaLinkedin, FaFacebook, FaReact, FaNodeJs} from "react-icons/fa";
import { SiMongodb,SiExpress } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { profile} from '../assets/index';

export default function Home() {
  return (
  <section id="Home" className='w-full flex-col lgl:flex-row xl:gap-0 lgl:gap-4 pt-10 b-20 pb-24 flex border-b-[2px] border-b-black'>
    <div className='w-full lgl:w-1/2 flex flex-col gap-16'>
        <div className='flex flex-col gap-3'>
            <h4 className=' font-normal mt-4'>Welcome To My Portfolio</h4>
            <h1 className='text-6xl font-bold text-white'>Hi, I'm <br/> 
                <span className='text-designColor capitalize'>Nipuna Sudesh</span>
            </h1>
            <h2>A Software Engineer.</h2>
            <p className='text-white'>A software undergraduate student passionate about building innovative software solutions. Currently honing my skills in MERN Stack, with a keen interest in web development and Data science. You can find some of my projects here on GitHub, and I'm always open to collaboration and learning opportunities. </p>
        </div >
        <div className='flex justify-between flex-col xl:flex-row gap-6 lgl:gap-0'>
        <div>
        <h2 className='text-white text-base uppercase font-titleFont mb-2'>Find Me In</h2>
        <div className='flex gap-4'>

            <div className='bannerIcon'>
                <a href='https://github.com/NipunaSudesh'>
                <FaGithub/></a>
            </div>
            <div className='bannerIcon'>
                <a href='https://www.linkedin.com/in/nipuna-sudesh-27a1a8253/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BlrJGSoIkQ%2B%2BTVScw3NZvKQ%3D%3D'>
                <FaLinkedin/></a>
            </div>
            <div className='bannerIcon'>
                <a href='https://www.facebook.com/nipuna.sudesh/52'>
                <FaFacebook/></a>
            </div>
        </div>
        </div>
        <div>
            <h2 className='mx-6 text-white text-base uppercase font-titleFont mb-2'>Best Skill On</h2>
            <div className='flex gap-4'>
                <span className='bannerIcon'>
                    <FaReact/>
                </span>    
                <span className='bannerIcon'>
                    <FaNodeJs/>
                </span>    
                <span className='bannerIcon'>
                    <SiExpress />
                </span>
                <span className='bannerIcon'>
                    <SiMongodb/>
                </span>    
            </div>      
        </div>
        </div>
    </div>


    <div className='w-full lgl:w-1/2 flex justify-center items-center relative '>
        <img src={profile}
        alt='myphoto'
        className='w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10' />

        <div className='absolute bottom-0 w-[300px] h-[380px] lgl:w-[500px] lgl:h-[680px] bg-gradient-to-r from-[#2d313a] to-[#0e1114]
        shadow-shadowOne flex justify-center items-center rounded-[8%]'></div>
    </div>

  </section>
  )
}
