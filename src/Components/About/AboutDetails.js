import React from 'react'

export default function AboutDetails({title,des}) {
  return (
    <div className='flex flex-col justify-center items-center bg-gray-200 rounded-lg shadow-md'>
        <h2 className='text-xl font-bold'>{title}</h2>
        <p className='text-gray-700 text-base'> {des}</p>
    </div>
  )
}
