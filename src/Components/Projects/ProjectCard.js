import React from 'react'
import { FaGithub,FaGlobe } from "react-icons/fa";


export default function ProjectCard({title,des,src}) {
  return (
    <div className='w-full px-12 h-auto py-10 rounded-1g shadow-shadowOne flex flex-col
    bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b
    hover: from-gray-900, hover:gray-900 transition-colors duration-1000'>
        <div className='w-full h-[80%] overflow-hidden rounded-lg'>
            <img className='w-full h-60 object-cover group-hover:scale-110 duration-300' 
             src={src} alt='src'/>
        </div>
        <div className='w-full mt-5 flex flex-cols gap-6'>
             <div className='flex items-center justify-between'>
             <h3 className=' font-normal text-designColor text-2xl '>{title}</h3>

             </div>
             <div className='flex gap-2'>
                <span className='text-1g w-10 h-10 rounded-full bg-black inline-flex
                 justify-center items-center cursor-pointer text-gray-400
                  hover:text-designColor duration-300'>
                        <FaGithub/>
                </span>
                <span className='text-1g w-10 h-10 rounded-full bg-black inline-flex
                 justify-center items-center cursor-pointer text-gray-400
                  hover:text-designColor duration-300'>
                        <FaGlobe />
                </span>
             </div>
        </div>
        <div>
            <p className='text-sm tracking-wide mt-3 hover:text-gray-100 duration-300'>{des}</p>
        </div>
    </div>
  )
}
