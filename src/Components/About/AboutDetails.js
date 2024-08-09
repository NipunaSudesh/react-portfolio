import React from 'react'
import {motion} from 'framer-motion';

export default function AboutDetails(props) {
  const container =(delay)=>({
    hidden:{x:-100,opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{durarion:0.5,delay:delay},
    },
}); 



  return (
    <motion.div 
    variants={container(0)}
    initial="hidden"
    animate="visible"
    className=' flex flex-col w-auto justify-center items-center bg-gray-200 rounded-lg'>
        <h1 className='text-xl font-bold text-center'>{props.title}</h1>
        <p className='text-gray-700 text-base p-1 sm:p-2'> {props.des}</p>
    </motion.div>

  )
}
