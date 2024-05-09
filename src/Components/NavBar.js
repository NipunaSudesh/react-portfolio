import React from 'react';
import { logo } from '../assets/index';

export default function NavBar() {
  return (
 <div className='flex w-full h-20 mx-auto justify-between items-center font-titleFont'>
  <div>
    <img src={logo} alt='logo' width="70" height="70" className='rounded-full logo'/>
  </div>
  <div  className="nav-links">
    <ul className='flex items-center gap-10'>
          <li><a className='text-base font-normal text-blue-500 tracking-wide cursor-pointer hover:underline hover:text-designColor duration-300' href="#Home">Home</a></li>
          <li><a className='text-base font-normal text-blue-500 tracking-wide cursor-pointer hover:underline hover:text-designColor duration-300' href="#AboutUs">About</a></li>
          <li><a className='text-base font-normal text-blue-500 tracking-wide cursor-pointer hover:underline hover:text-designColor duration-300' href="#Projects">Projects</a></li>
          <li><a className='text-base font-normal text-blue-500 tracking-wide cursor-pointer hover:underline hover:text-designColor duration-300' href="#Resume">Resume</a></li>
          <li><a className='text-base font-normal text-blue-500 tracking-wide cursor-pointer hover:underline hover:text-designColor duration-300' href="#ContactMe">Contact</a></li>
    </ul>
  </div>
</div> 

  );
}
  