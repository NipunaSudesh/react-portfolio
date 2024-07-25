import React, { useState } from 'react'
import {contactImg,cv} from "../assets/index";
import {FaInstagram,FaLinkedin, FaFacebook} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";


export default function ContectMe() {

  const [name,setName]=useState("");
  const [number,setNumber]=useState("");
  const [Email,setEmail]=useState("");
  const [subject,setSubject]=useState("");
  const [massage,setMassage]=useState("");
  const [errorMsg,setErrorMsg]=useState("");
  const [successMsg,setSuccessMsg]=useState("");

  const emailValidation = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const HandleSend=(e)=>{
    e.preventDefault()
      if(name===""){
        setErrorMsg("Name is Required!");
        }else if(number===""){
          setErrorMsg("Number is Required!");
        }else if(Email===""){
          setErrorMsg("Email is Required!");
        }else if(!emailValidation(Email)){
          setErrorMsg("Email is not valid!");
        }else if(subject===""){
          setErrorMsg("subject is Required!");
        }else if(massage===""){
          setErrorMsg("massage is Required!");
        }else{
            setSuccessMsg(`Thank You ${name}, Your Massage Send Succesfully!`);
            setName("");
            setNumber("");
            setEmail("");
            setSubject("");
            setMassage("");
            console.log(name,number,Email,subject,massage)
        }

      
      }

  return (
    <section id="ContectMe" className='w-full h-auto pt-10 pb-10 border-b-[2px] border-b-black gap-4'>
              <div 
               
              className='w-full'>
      <h1 className=' flex justify-center items-center mt-5 text-6xl font-bold text-white'>Contect With Me</h1>
      </div>

      <div className='w-full pt-10 lgl:flex-rows flex gap-4'>
        <div
       
        className='w-full flex-col lgl:flex-row xl:gap-4 lgl:gap-10 flex justify-betweeen gap-8'>
          <motion.div
           whileInView={{opacity:1,x:0}}
           initial={{opacity:0,x:-100}}
           transition={{duration:0.5}}
          className='w-full bg-gradient-to-r from-[#1e2024] to-[#414951] p-4 lgl:p-8 lgl:w-[35%] h-full rounded-[5%]'>
            <img src={contactImg}
             className='rounded-[5%] w-full h-64 object-cover shadow-shadowOne'
              alt='contactImg'></img>
              <div className='flex flex-col gap-1'>
                <h3 className='text-3xl font-bold text-white mt-2'>Nipuna Sudesh</h3>
                <p className='text-lg font-normal text-gray-400'>MERN Stack Developer</p>
                <p className='text-base tracking-wide text-gray-400 '>Software undergraduate passionate about innovative solutions. Currently honing skills in MERN Stack, web development, and data science</p>
                <p className='text-base text-gray-400 flex items-center gap-2'>Phone : <span className='text-lightText hover:underline duration-300'>+94 766521915</span></p>
                <p className=' text-base text-gray-400 flex items-center gap-2'>Email : <span className='text-lightText hover:underline'>nipunasudesh2000@gmail.com</span></p>
              </div>
              <div>
            <h2 className=' text-white text-base uppercase font-titleFont mb-2'>Find Me In</h2>
            <div className='flex gap-4 w-full justify-center'>
            <div className='flex gap-4'>

<div className='bannerIcon'>
    <a href='https://github.com/NipunaSudesh'>
    <FaGithub/></a>
</div>
<div className='bannerIcon'>
    <a href='https://www.linkedin.com/in/nipuna-sudesh-27a1a8253/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BlrJGSoIkQ%2B%2BTVScw3NZvKQ%3D%3D'>
    <FaLinkedin/></a>
</div>
<div className='bannerIcon'>
    <a href='https://www.facebook.com/nipuna.sudesh/52'>
    <FaFacebook/></a>
</div>
</div>  
            </div>  
            <div className='w-full mt-4 mb-3 flex items-center justify-center '>
            <a href={cv}  className="btn btn-outline-primary shadow-shadowOne hover:bg-opacity-40 hover:translate-y-1 
         transition-all cursor-pointer duration-300 text-white">Download CV</a>
              </div>    
        </div>
          </motion.div>

      <motion.div 
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:100}}
      transition={{duration:0.5}}
      className='w-full lgl:w-[60%] p-4 lgl:p-8 bg-dark h-full flex flex-col gap-5 justify-betweeen rounded-[5%] bg-gradient-to-r from-[#484c56] to-[#23272b] shadow-shadowOne'>
        
        <form className='w-[95%] mx-2 flex flex-col gap-2 py-2'>
      {
        errorMsg && <p className=' rounded-[8px] py-3 mt-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-designColor text-base tracking-wide animate-bounce'
        >{errorMsg}</p>
      }
      {
        successMsg && <p className='rounded-[8px] pt-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-[#08e605] text-base tracking-wide animate-bounce'
        >{successMsg}</p>
      }
      
          <div className='w-full mt-5 lgl:flex gap-10'>

         <div className='w-full lgl:w-1/2 flex-row lgl:flex-col'>
          <label className='text-sm text-gray-400 uppercase tracking-wide'>Your Name</label>
          <input type='text' 
          onChange={(e)=>setName(e.target.value)}
          value={name}
          className={`${errorMsg==="Name is Required!" &&
            "outline-designColor"
          } inputText `}
          placeholder='Enter Your Name'
          />
            </div>
         <div className='w-full lgl:w-1/2 flex-row lgl:flex-col'>
          <label className='text-sm text-gray-400 uppercase tracking-wide'>Your Phone Number</label>
          <input type='text' required
                    onChange={(e)=>setNumber(e.target.value)}
                    value={number}
                    className={`${errorMsg==="Number is Required!" &&
            "outline-designColor"
          } inputText `}
          placeholder='Enter Phone Number'
          />
            </div>

         </div>
         <div >
          <label className='text-sm text-gray-400 uppercase tracking-wide'>Your Phone Email</label>
          <input type='email' required
                    onChange={(e)=>setEmail(e.target.value)}
                    value={Email}
                    className={`${errorMsg==="Email is Required!" ||
                     errorMsg==="Email is not valid!" 
                    &&
            "outline-designColor"
          } inputText `}
          placeholder='Enter Phone Email'
          />
            </div>
         <div>
          <label className='text-sm text-gray-400 uppercase tracking-wide'>Subject</label>
          <input type='text' 
                    onChange={(e)=>setSubject(e.target.value)}
                    value={subject}
                    className={`${errorMsg==="Subject is Required!" &&
            "outline-designColor"
          } inputText `}
          placeholder='Enter Subject'
          />
            </div>
         <div>
          <label className='text-sm text-gray-400 uppercase tracking-wide'>Massage</label>
          <textarea cols="30" rows="15" type='text' 
                    className={`${errorMsg==="Massage is Required!" &&
                    "outline-designColor"
                  } inputText `}
          onChange={(e)=>setMassage(e.target.value)}
          value={massage}
          placeholder='Enter Your Massage'
          ></textarea>
            </div>
            <div className='w-full mt-4 mb-3 flex items-center justify-center '>
              <button onClick={HandleSend} className="btn btn-outline-primary shadow-shadowOne hover:bg-opacity-40 hover:translate-y-1 
         transition-all cursor-pointer duration-300 text-white mx-4">Send Massage</button>
            </div>
        </form>
      </motion.div>
      </div>
      </div>
    </section>
  )
}
