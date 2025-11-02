import React from 'react'
import {FaInstagram,FaLinkedin, FaFacebook, FaReact, FaNodeJs} from "react-icons/fa";
import { SiMongodb,SiExpress } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { myProfile} from '../assets/index';
import { motion } from "framer-motion"

export default function Home() {

    const iconVariants =(duration)=>({
        initial:{y:-10},
        animate:{
            y:[10,-10],
            transition:{
                duration:duration,
                ease:"linear",
                repeat:Infinity,
                repeatType:"reverse"
            }
        },
    });

const container =(delay)=>({
    hidden:{x:-100,opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{durarion:0.5,delay:delay},
    },
}); 

  return (
  <section id="Home" className='w-full flex-col lgl:flex-row xl:gap-0 lgl:gap-4 pt-10 b-20 pb-24 flex border-b-[2px] border-b-black '>
    <div className='w-full lgl:w-1/2 flex flex-col gap-16'>
        <div className='flex flex-col gap-3'>
            {/* <h4 className=' font-normal mt-4'>Welcome To My Portfolio</h4> */}
            <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
             className='text-6xl font-bold text-white'>Hi, I'm <br/> 
                <span className='text-designColor capitalize'>Nipuna Sudesh</span>
            </motion.h1>
            <motion.h2
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
            >Software Engineering (UG)</motion.h2>
            <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
            className='text-white'> Final-year Software Engineering undergraduate at the University of Kelaniya, passionate about designing and maintaining scalable software solutions. Experienced as an Intern Software Engineer at Prime Technologies Global (Pvt) Ltd, where I contributed to developing, testing, and improving software applications. Skilled in the MERN stack, with interests in web development and data science. I value teamwork, innovation, and continuous learning. </motion.p>
            {/* <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
            className='text-white'> A 3rd-year Software Engineering undergraduate at the University of Kelaniya, passionate about building innovative software solutions. I am currently honing my skills in the MERN stack, with a keen interest in web development and data science. You can explore some of my projects on GitHub, and I am always open to collaboration and learning opportunities. </motion.p> */}
        </div >
        <div className='flex justify-between flex-col xl:flex-row gap-6 lgl:gap-0'>
        <motion.div
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:-100}}
              transition={{duration:1}}
        >
        <h2 className='text-white text-base uppercase font-titleFont mb-2'>Find Me In</h2>
        <div className='flex gap-4'>

            <motion.div
                    variants={iconVariants(1.5)}
                    initial="initial"
                    animate="animate"
            className='bannerIcon'>
                <a href='https://github.com/NipunaSudesh'>
                <FaGithub className='text-white'/></a>
            </motion.div>
            <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
            className='bannerIcon'>
                <a href='https://www.linkedin.com/in/nipuna-sudesh-27a1a8253/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BlrJGSoIkQ%2B%2BTVScw3NZvKQ%3D%3D'>
                <FaLinkedin className=' text-blue-500'/></a>
            </motion.div>
            <motion.div
            
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate" className='bannerIcon'>
                <a href='https://www.facebook.com/nipuna.sudesh/52'>
                <FaFacebook className='text-red-400'/></a>
            </motion.div>
        </div>
        </motion.div>
        <motion.div
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:100}}
              transition={{duration:1}}
        >
            <h2 className='mx-6 text-white text-base uppercase font-titleFont mb-2 m:mt-4 sm:mb-4'>Best Skill On</h2>
            <div className='flex gap-4'>
                <motion.span
                
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                className='bannerIcon text-blue-500'>
                    <FaReact/>
                </motion.span>    
                <motion.span
                        variants={iconVariants(2)}
                        initial="initial"
                        animate="animate"
                className='bannerIcon text-yellow-400'>
                    <FaNodeJs/>
                </motion.span>    
                <motion.span
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                className='bannerIcon'>
                    <SiExpress />
                </motion.span>
                <motion.span
                        variants={iconVariants(3)}
                        initial="initial"
                        animate="animate"
                className='bannerIcon text-green-400'>
                    <SiMongodb/>
                </motion.span>    
            </div>      
        </motion.div>
        </div>
    </div>


    <div className='w-full lgl:w-1/2 flex justify-center items-center relative '>
        <motion.img src={myProfile}
            initial={{x:100,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1,delay:1.2}}
        alt='myphoto'
        className='w-[200px] h-[300px] sm:mt-4 lgl:w-[400px] lgl:h-[580px] z-10 rounded-2xl '   />


    </div>

  </section>
  )
}
