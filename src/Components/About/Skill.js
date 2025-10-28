import React from 'react'
import AboutDetails from './AboutDetails'
import {motion} from 'framer-motion';

export default function Skill() {
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
      <AboutDetails title="Programming Languages" des="Java,PHP and JavaScript"/>
      <AboutDetails title="web Development" des="HTML, CSS, React, Node.js"/>
      <AboutDetails title="Database Management" des="PostgreSQL, MySQL and MongoDB"/>
      <AboutDetails title="Version Control" des="GitHub "/>
        </div>
      </motion.div>
  )
}
