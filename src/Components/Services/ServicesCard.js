import React from 'react'
import { FaArrowRight } from "react-icons/fa";

export default function ServicesCard({title,des,icon}) {
  return (
    <div className='w-full px-12 h-auto py-10 rounded-1g shadow-shadowOne flex flex-col
    bg-gradient-to-r from-bodyColor to-[#330080] group hover:bg-gradient-to-b
    hover: from-black, hover:to-[#1e2024] transition-colors duration-100 group'>

     <div className='flex h-77  overflow-y-hidden '>

    <div className='flex h-full flex-col gap-6 translate-y-10 group-hover:translate-y-0 transform-opacity duration-500'>
    <div>
        <span className='text-5xl text-designColor'>{icon}</span>
       </div>
       <div className='flex flex-col gap-6'>
       <h2 className='text-white font-normal'>{title}</h2>
       <p className='text-base text-sm tracking-wide mt-3 hover:text-gray-100 duration-300'>{des}</p>
       <span className='text-2xl text-designColor'>
        <FaArrowRight/>
       </span>
       </div>
     </div>
    </div>
    </div>
  )
}
