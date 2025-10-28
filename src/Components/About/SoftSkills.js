import React from 'react'
import AboutDetails from './AboutDetails'
import {motion} from 'framer-motion';

export default function SoftSkills() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1 , transition:{duration:.5}}} className="container mx-auto">
      <div className="w-full flex flex-col gap-2 lgl:grid lgl:grid-cols-2 lgl:gap-2">
        {/* <AboutDetails title="BSc (Hons) Software Engineering(UG)"
        des="University Of Kelaniya"
        /> */}
        <AboutDetails des="Teamwork and collaboration"/>
        <AboutDetails des="Problem-solving and analytical thinking"/>
        <AboutDetails des="Time management and organization"/>
        <AboutDetails des="Adaptability and willingness to learn"/>
        <AboutDetails des="Creativity and innovation"/>
        <AboutDetails des="Critical thinking and attention to detail"/>
        <AboutDetails des="Professional ethics and responsibility"/>
        </div>
      </motion.div>
  )
}
