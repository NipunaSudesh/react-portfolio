import React, { useEffect, useState } from 'react';
import { logo } from '../assets/index';
import {FiMenu} from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import {FaInstagram,FaLinkedin, FaFacebook} from "react-icons/fa";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState('Home');

  const[showMenu,setShowMenu]=useState(false);


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
    <div className='shadow sticky top-0 z-50 bg-bodyColor border-b-[2px] border-b-black flex w-full h-20 mx-auto justify-between items-center font-normal'>
      <div>
        <img src={logo} alt='logo' width="70" height="70" className='rounded-full logo'/>
      </div>
      <div className="nav-links">
        <ul className='items-center gap-10 hidden mdl:inline-flex'>
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
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-32 rounded-full" src={logo} alt="logo" />
                <p className="text-sm text-gray-400 mt-2">A software undergraduate student passionate about building innovative software solutions. Currently honing my skills in MERN Stack, with a keen interest in web development and Data science. You can find some of my projects here on GitHub, and I'm always open to collaboration and learning opportunities.
                </p>
              </div>

              <ul className='items-center gap-10 flex flex-col mdl:hidden'>
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
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <span className="bannerIcon">
                    <FaFacebook />
                  </span>
                  <span className="bannerIcon">
                    <FaInstagram />
                  </span>
                  <span className="bannerIcon">
                    <FaLinkedin />
                  </span>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <IoMdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
