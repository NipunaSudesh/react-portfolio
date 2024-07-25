import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FaPhp } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";

export default function Technolohies() {
  return (
    <section id="Technolohies" className='w-full pb-20  border-b-[2px] border-b-black'>
      <div  className='flex flex-col gap-14'>
    <div>
      <h1 className='flex justify-center items-center mt-10 text-6xl font-bold text-white'>Technologies</h1>
    </div>
    <div className='flex flex-wrap items-center justify-center gap-4 '>
        <div className='border-neutral-800 p-4 rounded-2xl border-4'>
            <FaReact className='text-6xl text-cyan-400'/>
        </div>
        <div className='border-neutral-800 p-4 rounded-2xl border-4'>
            <FaNode className='text-6xl text-green-500'/>
        </div>
        <div className='border-neutral-800 p-4 rounded-2xl border-4'>
            <SiExpress className='text-6xl text-white'/>
        </div>
        <div className='border-neutral-800 p-4 rounded-2xl border-4'>
            <SiMongodb className='text-6xl text-green-400'/>
        </div>
        <div className='border-neutral-800 p-4 rounded-2xl border-4'>
            <FaJava className='text-6xl text-cyan-400'/>
        </div>
        <div className='border-neutral-800 p-4 rounded-2xl border-4'>
            <FaPhp className='text-6xl text-blue-400'/>
        </div>
        <div className='border-neutral-800 p-4 rounded-2xl border-4'>
            <FaHtml5 className='text-6xl text-cyan-400'/>
        </div>
        <div className='border-neutral-800 p-4 rounded-2xl border-4'>
            <FaCss3 className='text-6xl text-orange-400'/>
        </div>
        <div className='border-neutral-800 p-4 rounded-2xl border-4'>
            <AiOutlineJavaScript className='text-6xl text-black bg-yellow-300'/>
        </div>
        <div className='border-neutral-800 p-4 rounded-2xl border-4'>
            <FaBootstrap className='text-6xl text-red-400'/>
        </div>
        <div className='border-neutral-800 p-4 rounded-2xl border-4'>
            <RiTailwindCssFill className='text-6xl text-cyan-300 bg-slate-200'/>
        </div>
        <div className='border-neutral-800 p-4 rounded-2xl border-4'>
            <SiMysql className='text-6xl text-white'/>
        </div>
        <div className='border-neutral-800 p-4 rounded-2xl border-4'>
            <BiLogoPostgresql className='text-6xl text-cyan-300'/>
        </div>
    </div>
    </div>
    </section>
  )
}
