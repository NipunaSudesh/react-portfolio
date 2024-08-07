import React, { useState } from 'react'
import {contactImg,cv} from "../assets/index";
import {FaInstagram,FaLinkedin, FaFacebook} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import SendEmail from './SendEmail';


export default function ContectMe() {



  const iconVariants =(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    },
});



  return (
    <section id="ContectMe" className='w-full h-auto pt-10 pb-10 border-b-[2px] border-b-black gap-4'>
              <div 
               
              className='w-full'>
      <h1 className=' flex justify-center items-center mt-5 text-6xl font-bold text-white'>contact With Me</h1>
      </div>

      <div className='w-full pt-10 lgl:flex-rows flex gap-4'>
        <div
       
        className='w-full flex-col lgl:flex-row xl:gap-4 lgl:gap-10 flex justify-betweeen gap-8'>
          <motion.div
           whileInView={{opacity:1,x:0}}
           initial={{opacity:0,x:-100}}
           transition={{duration:0.5}}
          className='w-full bg-gradient-to-r from-[#1e2024] to-[#414951] p-4 lgl:p-8 lgl:w-[35%] h-full rounded-[5%]'>
            <img src={contactImg}
             className='rounded-[5%] w-full h-64 object-cover shadow-shadowOne'
              alt='contactImg'></img>
              <div className='flex flex-col gap-1'>
                <h3 className='text-3xl font-bold text-white mt-2'>Nipuna Sudesh</h3>
                <p className='text-lg font-normal text-gray-400'> Software Engineer</p>
                <p className='text-base tracking-wide text-gray-400 '>Software undergraduate passionate about innovative solutions. Currently honing skills in MERN Stack, web development, and data science</p>
                <p className='text-base text-gray-400 flex items-center gap-2'>Phone : <span className='text-lightText hover:underline duration-300'>+94 766521915</span></p>
                <p className=' text-base text-gray-400 flex items-center gap-2'>Email : <span className='text-lightText hover:underline'>nipunasudesh2000@gmail.com</span></p>
              </div>
              <div>
            <h2 className=' text-white text-base uppercase font-titleFont mb-2'>Find Me In</h2>
            <div className='flex gap-4 w-full justify-center'>
            <div className='flex gap-4'>

<motion.div
variants={iconVariants(1.5)}
initial="initial"
animate="animate"
className='bannerIcon'>
    <a href='https://github.com/NipunaSudesh'>
    <FaGithub className='text-white'/></a>
</motion.div>
<motion.div
variants={iconVariants(2)}
initial="initial"
animate="animate"
className='bannerIcon'>
    <a href='https://www.linkedin.com/in/nipuna-sudesh-27a1a8253/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BlrJGSoIkQ%2B%2BTVScw3NZvKQ%3D%3D'>
    <FaLinkedin className='text-blue-400'/></a>
</motion.div>
<motion.div
variants={iconVariants(2.5)}
initial="initial"
animate="animate"
className='bannerIcon'>
    <a href='https://www.facebook.com/nipuna.sudesh/52'>
    <FaFacebook className='text-red-400'/></a>
</motion.div>
</div>  
            </div>  
            <div className='w-full mt-4 mb-3 flex items-center justify-center '>
            <a href={cv}  className="btn btn-outline-primary shadow-shadowOne hover:bg-opacity-40 hover:translate-y-1 
         transition-all cursor-pointer duration-300 text-white">Download CV</a>
              </div>    
        </div>
          </motion.div>
<SendEmail />

      </div>
      </div>
    </section>
  )
}
