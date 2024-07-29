import React from 'react'
import {motion} from 'framer-motion';

export default function AboutDetails(props) {
  return (
    <div className=' flex flex-col w-auto justify-center items-center bg-gray-200 rounded-lg'>
        <h2 className='text-xl font-bold'>{props.title}</h2>
        <p className='text-gray-700 text-base p-1'> {props.des}</p>
    </div>

  )
}
