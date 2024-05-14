import React from 'react'
import {contactImg,cv} from "../assets/index";
import {FaInstagram,FaLinkedin, FaFacebook} from "react-icons/fa";

export default function ContectMe() {
  return (
    <section id="ContectMe" className='w-full h-[920px] pt-10 pb-10 border-b-[2px] border-b-black gap-4'>


      <div className='w-full pt-10'>
        <div className='w-full h-[720px] flex justify-betweeen gap-4'>
          <div className='bg-gradient-to-r from-[#1e2024] to-[#414951] p-8 w-[35%] h-full rounded-[5%]'>
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
                <span className=' w-10 h-10 bannerIcon'>
                    <FaFacebook/>
                </span>    
                <span className='w-10 h-10 bannerIcon'>
                    <FaInstagram/>
                </span>    
                <span className='w-10 h-10 bannerIcon'>
                    <FaLinkedin />
                </span>   
            </div>  
            <div className='w-full mt-4 mb-3 flex items-center justify-center '>
            <a href={cv}  className="btn btn-outline-primary shadow-shadowOne hover:bg-opacity-40 hover:translate-y-1 
         transition-all cursor-pointer duration-300 text-white">Download CV</a>
              </div>    
        </div>
          </div>


        
      <div className='w-[60%] bg-dark h-full flex flex-col gap-5 justify-betweeen rounded-[5%] bg-gradient-to-r from-[#484c56] to-[#23272b] shadow-shadowOne'>

        <form className='w-[95%] mx-2 flex flex-col gap-2 py-2'>
        <div className='w-full'>
      <h1 className='flex justify-center items-center mt-5 text-6xl font-bold text-white'>Contect With Me</h1>
      </div>
          <div className='w-full mt-5 flex gap-10'>

         <div className='w-1/2 flex flex-col'>
          <label className='text-sm text-gray-400 uppercase tracking-wide'>Your Name</label>
          <input type='text' 
          className='inputText'
          placeholder='Enter Your Name'
          />
            </div>
         <div className='w-1/2 flex flex-col'>
          <label className='text-sm text-gray-400 uppercase tracking-wide'>Your Phone Number</label>
          <input type='text' required
          className='inputText'
          placeholder='Enter Phone Number'
          />
            </div>

         </div>
         <div >
          <label className='text-sm text-gray-400 uppercase tracking-wide'>Your Phone Email</label>
          <input type='email' required
          className='inputText'
          placeholder='Enter Phone Email'
          />
            </div>
         <div>
          <label className='text-sm text-gray-400 uppercase tracking-wide'>Subject</label>
          <input type='text' 
          className='inputText'
          placeholder='Enter Subject'
          />
            </div>
         <div>
          <label className='text-sm text-gray-400 uppercase tracking-wide'>Massage</label>
          <textarea cols="30" rows="15" type='text' 
          className='inputText'
          placeholder='Enter Your Massage'
          ></textarea>
            </div>
            <div className='w-full mt-4 mb-3 flex items-center justify-center '>
              <button  className="btn btn-outline-primary shadow-shadowOne hover:bg-opacity-40 hover:translate-y-1 
         transition-all cursor-pointer duration-300 text-white mx-4">Send Massage</button>
            </div>
        </form>
      </div>
      </div>
      </div>
    </section>
  )
}
