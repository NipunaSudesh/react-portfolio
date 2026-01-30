import React from 'react'
import AboutDetails from './AboutDetails'
import {motion} from 'framer-motion';

export default function Education() {
  const container =(delay)=>({
    hidden:{x:-100,opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{durarion:0.5,delay:delay},
    },
}); 
  return (

    

    <motion.div initial={{opacity:0}} animate={{opacity:1 , transition:{duration:.5}}} className="container mx-auto  ">
      <div className="w-full flex flex-col gap-2 lgl:grid lgl:grid-cols-2 lgl:gap-2">
        {/* <AboutDetails title="2006-2016"
        des="Kg/Mw/Mayurapadha National School"
        />
        <AboutDetails title="2017-2020"
        des="Kg/St mary's collage"
        /> */}
        {/* <AboutDetails title="2021-Current"
        des="Bachelor of Science (Hons)
in Software Engineering (UG)"

        /> */}
        
    <motion.div 
    variants={container(0)}
    initial="hidden"
    animate="visible"
    className=' flex flex-col w-auto justify-center items-center bg-gray-200 rounded-lg p-2'>
        <h1 className='text-xl font-bold text-center '>BSc (Hons) Software Engineering (UG)</h1>
        <p className='text-gray-700 text-base'>University Of Kelaniya </p>
        <p className='text-gray-700 text-base'>2022 - Present </p>
    </motion.div>
    <motion.div 
    variants={container(0.25)}
    initial="hidden"
    animate="visible"
    className=' flex flex-col w-auto justify-center items-center bg-gray-200 rounded-lg p-2'>
        <h1 className='text-xl font-bold text-center '>G.C.E. A/L (2020) - 2484193</h1>
        <p className='text-gray-700 text-base'>Combined Mathematics - A</p>
        <p className='text-gray-700 text-base'>Chemistry - B </p>
        <p className='text-gray-700 text-base'>Physics - B</p>
        <p className='text-gray-700 text-base'>Z-Score - 1.5348</p>

    </motion.div>
        </div>
      </motion.div>


  )
}
