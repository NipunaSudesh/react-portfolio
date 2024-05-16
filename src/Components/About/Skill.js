import React from 'react'
import AboutDetails from './AboutDetails'
import {motion} from 'framer-motion';

export default function Skill() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1 , transition:{duration:.5}}} className="container mx-auto  ">
      <div className="w-full flex flex-col gap-2 lgl:grid lgl:grid-cols-2 lgl:gap-2">
      <AboutDetails title="UI/UX" des="Designing web/App interface"/>
      <AboutDetails title="web Development" des="Web App development"/>
      <AboutDetails title="App Development" des="App Development"/>
      <AboutDetails title="UI/UX" des="Designing web/App interface"/>
        </div>
      </motion.div>
  )
}
