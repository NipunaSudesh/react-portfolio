import React from 'react'
import {contactImg} from "../assets/index";
import {FaInstagram,FaLinkedin, FaFacebook} from "react-icons/fa";

export default function ContectMe() {
  return (
    <section id="ContectMe" className='w-full h-[900px] pt-10 pb-10 border-b-[2px] border-b-black gap-4'>
      <div className='w-full'>
      <h1 className='flex justify-center items-center mt-10 text-6xl font-bold text-white'>Contect With Me</h1>
      </div>

      <div className='w-full pt-10'>
        <div className='w-full h-[700px] flex justify-betweeen gap-4'>
          <div className='bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 w-[35%] h-full rounded-[5%]'>
            <img src={contactImg}
             className='rounded-[5%] w-full h-64 object-cover shadow-shadowOne'
              alt='contactImg'></img>
              <div className='flex flex-col gap-1'>
                <h3 className='text-3xl font-bold text-white mt-2'>Nipuna Sudesh</h3>
                <p className='text-lg font-normal text-gray-400'>MERN Stack Developer</p>
                <p className='text-base tracking-wide text-gray-400 '>Software undergraduate passionate about innovative solutions. Currently honing skills in MERN Stack, web development, and data science</p>
                <p className='text-base text-gray-400 flex items-center gap-2'>Phone : <span className='text-lightText hover:underline duration-300'>+94 766521915</span></p>
                <p className=' text-base text-gray-400 flex items-center gap-2'>Email : <span className='text-lightText hover:underline'>nipunasudesh2000@gmail.com</span></p>
              </div>
              <div>
            <h2 className=' text-white text-base uppercase font-titleFont mb-2'>Find Me In</h2>
            <div className='flex gap-4'>
                <span className='bannerIcon'>
                    <FaFacebook/>
                </span>    
                <span className='bannerIcon'>
                    <FaInstagram/>
                </span>    
                <span className='bannerIcon'>
                    <FaLinkedin />
                </span>   
            </div>      
        </div>
          </div>
        
      <div className='w-[60%] bg-dark h-full flex flex-col justify-betweeen rounded-[5%]'></div>
      </div>
      </div>
    </section>
  )
}
