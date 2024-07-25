import React from 'react'
import { FaGithub, FaGlobe } from "react-icons/fa";

export default function ProjectCard({ title, des, src, git }) {
  return (
    <div className='h-auto px-12 py-10 shadow-shadowOne flex flex-col
    bg-gradient-to-r from-bodyColor to-[#330080] group hover:bg-gradient-to-b
    hover:from-gray-900 hover:to-gray-900 transition-colors duration-1000 rounded-[5%]'>
      <div className='w-full h-[70%] overflow-hidden rounded-lg'>
        <img className='w-full h-60 object-cover group-hover:scale-110 duration-300' 
             src={src} alt='Project' />
      </div>
      <div className='w-full mt-5 flex gap-6'>
        <div className='flex items-center justify-between'>
          <h3 className='font-normal text-designColor text-2xl'>{title}</h3>
        </div>
        <div className='flex gap-2'>
          <a href={git} className=' text-lg w-10 h-10 rounded-full bg-black inline-flex
              justify-center items-center cursor-pointer text-gray-400
              hover:text-designColor duration-300' target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          {/* <span className='text-lg w-10 h-10 rounded-full bg-black inline-flex
              justify-center items-center cursor-pointer text-gray-400
              hover:text-designColor duration-300'>
            <FaGlobe />
          </span> */}
        </div>
      </div>
      <div>
        <p className='text-sm tracking-wide mt-3 hover:text-gray-100 duration-300'>{des}</p>
      </div>
    </div>
  )
}
