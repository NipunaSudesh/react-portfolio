import React from 'react'
import ServicesCard from './ServicesCard'
import { FaFacebook, FaMobile } from 'react-icons/fa'

export default function MyServices() {
  return (
    <section id="MyServices" className='w-full pb-20  border-b-[2px] border-b-black'>
      <div  className='flex flex-col gap-14'>
    <div>
      <h1 className='flex justify-center items-center mt-10 text-6xl font-bold text-white'>My Services</h1>
    </div>
    <div className='mt-10 grid-cols-1 md:grid-3 grid xl:grid-cols-3 gap-6 lgl:flex xl:gap-20'>
    <ServicesCard 
      title="App Development"
      des="Lorem Ipsum text in a React application, you can either use a Lorem Ipsum generator library or create a simple function to generate "
      icon={<FaFacebook/>}
      />
    <ServicesCard 
      title="App Development"
      des="Lorem Ipsum text in a React application, you can either use a Lorem Ipsum generator library or create a simple function to generate Lorem Ipsum text. Here's an example of a simple function that generates Lorem Ipsum text"
      icon={<FaMobile/>}
      />
    <ServicesCard 
      title="App Development"
      des="Lorem Ipsum text in a React application, you can either use a Lorem Ipsum generator library or create a simple function to generate Lorem Ipsum text. Here's an example of a simple function that generates Lorem Ipsum text"
      icon={<FaMobile/>}
      />


    </div>
    </div>
  </section>
  )
}
