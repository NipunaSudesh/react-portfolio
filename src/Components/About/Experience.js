import React from 'react'
import AboutDetails from './AboutDetails'
import {motion} from 'framer-motion';

export default function Experience() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1 , transition:{duration:.5}}} className="container mx-auto">
      <div className="w-full flex flex-col gap-2 lgl:grid lgl:grid-cols-2 lgl:gap-2">
        <AboutDetails title="Bachelor of Science (Hons)
        in Software Engineering (UG)"
        des="university of kelaniya"
        />
        </div>
      </motion.div>
  )
}
