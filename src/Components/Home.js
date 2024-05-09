import React from 'react'
import {FaInstagram,FaLinkedin, FaFacebook} from "react-icons/fa";

export default function Home() {
  return (
  <section id="Home" className='w-full pt-10 h-[800px] pb-24 flex border-b-[1px] border-b-black'>
    <div className='w-1/2 flex flex-col gap-20'>
        <div className='flex flex-col gap-3'>
            <h4 className='mt-4 font-normal'>Welcome To My Portfolio</h4>
            <h1 className='text-6xl font-bold text-white'>Hi, I'm <br/> 
                <span className='text-designColor capitalize'>Nipuna Sudesh</span>
            </h1>
            <h2>A Software Engineer.</h2>
            <p className='text-white'>A software undergraduate student passionate about building innovative software solutions. Currently honing my skills in MERN Stack, with a keen interest in web development and Data science. You can find some of my projects here on GitHub, and I'm always open to collaboration and learning opportunities. </p>
        </div >
        <div>
        <h2 className='text-white text-base uppercase font-titleFont mb-4'>Find Me In</h2>
        <div className='flex gap-4'>
            <div className='bannerIcon'>
                <FaFacebook/>
            </div>
            <div className='bannerIcon'>
                <FaInstagram/>
            </div>
            <div className='bannerIcon'>
                <FaLinkedin/>
            </div>
        </div>
        </div>
    </div>
    <div className='w-1/2'>

    </div>

  </section>
  )
}
