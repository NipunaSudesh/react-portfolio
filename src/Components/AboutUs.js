import React from 'react'
import { my } from '../assets'

export default function AboutUs() {
  return (
    <section id="AboutUs" className='w-full h-[750px] pt-20 pb-20 flex border-b-[2px] border-b-black'>

    <div className='w-1/3 bg-dark'>
      <img className='bject-cover w-full h-full' alt='myProfile' src={my}/>
    </div>
    <div className='w-2/3 bg-white'></div>

  </section>
  )
}
