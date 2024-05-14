import React, { useEffect, useState } from 'react';
import { logo } from '../assets/index';

export default function NavBar() {
  const [activeLink, setActiveLink] = useState('Home');


  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('Home');
      const aboutSection = document.getElementById('AboutUs');
      const servicesSection = document.getElementById('MyServices');
      const projectsSection = document.getElementById('Projects');
      const contactSection = document.getElementById('ContectMe');

      const scrollPosition = window.scrollY + 200;

      if (
        scrollPosition < aboutSection.offsetTop &&
        scrollPosition >= homeSection.offsetTop
      ) {
        setActiveLink('Home');
      } else if (
        scrollPosition < servicesSection.offsetTop &&
        scrollPosition >= aboutSection.offsetTop
      ) {
        setActiveLink('AboutUs');
      } else if (
        scrollPosition < projectsSection.offsetTop &&
        scrollPosition >= servicesSection.offsetTop
      ) {
        setActiveLink('MyServices');
      } else if (
        scrollPosition < contactSection.offsetTop &&
        scrollPosition >= projectsSection.offsetTop
      ) {
        setActiveLink('Projects');
      } else {
        setActiveLink('ContectMe');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='shadow sticky top-0 z-50 bg-bodyColor border-b-[2px] border-b-black flex w-full h-20 mx-auto justify-between items-center font-titleFont'>
      <div>
        <img src={logo} alt='logo' width="70" height="70" className='rounded-full logo'/>
      </div>
      <div className="nav-links">
        <ul className='flex items-center gap-10'>
          <li>
            <a
              className={`text-base text-xl tracking-wide cursor-pointer hover:text-designColor duration-300 ${activeLink === 'Home' ? 'text-red-500 underline' : 'text-blue-500'}`}
              href="#Home"
              onClick={() => setActiveLink('Home')}
            >
              Home
            </a>
          </li>

          <li>
            <a
              className={`text-base text-xl tracking-wide cursor-pointer hover:text-designColor duration-300 ${activeLink === 'AboutUs' ? 'text-red-500 underline' : 'text-blue-500'}`}
              href="#AboutUs"
              onClick={() => setActiveLink('AboutUs')}
            >
              About
            </a>
          </li>

          <li>
            <a
              className={`text-base text-xl tracking-wide cursor-pointer hover:text-designColor duration-300 ${activeLink === 'MyServices' ? 'text-red-500 underline' : 'text-blue-500'}`}
              href="#MyServices"
              onClick={() => setActiveLink('MyServices')}
            >
              My Services
            </a>
          </li>

          <li>
            <a
              className={`text-base text-xl tracking-wide cursor-pointer hover:text-designColor duration-300 ${activeLink === 'Projects' ? 'text-red-500 underline' : 'text-blue-500'}`}
              href="#Projects"
              onClick={() => setActiveLink('Projects')}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              className={`text-base text-xl tracking-wide cursor-pointer hover:text-designColor duration-300 ${activeLink === 'ContectMe' ? 'text-red-500 underline' : 'text-blue-500'}`}
              href="#ContectMe"
              onClick={() => setActiveLink('ContectMe')}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
