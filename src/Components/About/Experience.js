import React from 'react'
import AboutDetails from './AboutDetails'
import {motion} from 'framer-motion';

export default function Experience() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1 , transition:{duration:.5}}} className="container mx-auto">
      <div className="w-full grid grid-cols-2 gap-2">
        <AboutDetails title="2021-Current"
        des="undergraduate student at university of kelaniya"
        />
        </div>
      </motion.div>
  )
}
