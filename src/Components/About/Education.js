import React from 'react'
import AboutDetails from './AboutDetails'
import {motion} from 'framer-motion';

export default function Education() {
  return (

    <motion.div initial={{opacity:0}} animate={{opacity:1 , transition:{duration:.5}}} className="container mx-auto  ">
      <div className="w-full grid grid-cols-2 gap-2">
        <AboutDetails title="2006-2016"
        des="Ke/Mw/Mayurapadha National School"
        />
        <AboutDetails title="2017-2020"
        des="Ke/St mary's collage"
        />
        <AboutDetails title="2021-Current"
        des="undergraduate student at university of kelaniya"
        />
        </div>
      </motion.div>


  )
}
