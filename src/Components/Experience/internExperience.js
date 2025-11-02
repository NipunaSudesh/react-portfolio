// import React  from 'react';
// import primelogo from '../../assets/images/primelogo.svg';
// import { FaBriefcase } from "react-icons/fa";

// export default function internExperience() {

//   return (
//     <section id="internExperience" className='w-full pt-20 pb-20 flex-col lgl:flex lgl:flex-row xl:gap-4 lgl:gap-4 border-b-[2px] border-b-black gap-4'>
// <div>
//     <div className='w-full flex flex-col  bg-dark p-10 lg:rounded-[40px] rounded-[5%] bg-gradient-to-r from-[#484c56] to-[#23272b] shadow-shadowOne '>
//     <h1 className='flex justify-center items-center mt-10 text-6xl font-bold text-white mb-16'>Experience</h1>
//     <h2 className='flex justify-start items-center text-3xl font-bold text-white'>Intern Software Engineer</h2>
//     <h4 className='flex justify-start items-center  text-[18px] lg:text-xl font-bold text-white'>Prime Technologies Global (Pvt) Ltd — Nov 2024 – May 2025
//  Colombo, Sri Lanka</h4>
// <h4 className="flex items-center justify-center gap-2 text-white mt-4 text-xl">
//   <FaBriefcase className="text-yellow-400 text-2xl" />
//   Key Responsibilities & Achievements
// </h4>


// <ul className="list-disc list-inside space-y-2 mt-6 ">
//   <li className='hover:text-gray-100 duration-300'>Developed, tested, and maintained software applications using modern programming languages and frameworks.</li>
//   <li className='hover:text-gray-100 duration-300'>Participated in code reviews, improving code quality and performance.</li>
//   <li className='hover:text-gray-100 duration-300'>Researched and integrated new technologies to optimize development practices.</li>
//   <li className='hover:text-gray-100 duration-300'>Created and maintained detailed project documentation for clear technical communication.</li>
//   <li className='hover:text-gray-100 duration-300'>Conducted testing and debugging to ensure software reliability and efficiency.</li>
//   <li className='hover:text-gray-100 duration-300'>Supported and enhanced existing applications through troubleshooting and updates.</li>
//   <li className='hover:text-gray-100 duration-300'>Demonstrated strong analytical thinking, adaptability, and teamwork in a dynamic development environment.</li>
// </ul>
  
// </div>
// </div>
// <div className="flex justify-center items-center lg:rounded-[40px] rounded-[5%] shadow-shadowOne ">
//   <img
//     className=" rounded-[5%] mt-10 lg:mt-0 lgl:w-[580px] lgl:h-[150px] z-10"
//     alt="primelogo"
//     src={primelogo}
//   />
// </div>

//     </section>
//   )
// }
import React from 'react';
import primelogo from '../../assets/images/primelogo.svg';
import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

export default function internExperience() {
  return (
    <section
      id="internExperience"
      className="w-full pt-20 pb-20 flex-col lgl:flex lgl:flex-row xl:gap-4 lgl:gap-4 border-b-[2px] border-b-black gap-4"
    >
      {/* Left side (text) */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="w-full flex flex-col bg-dark p-10 lg:rounded-[40px] rounded-[5%] bg-gradient-to-r from-[#484c56] to-[#23272b] shadow-shadowOne"
      >
        <h1 className="flex justify-center items-center mt-10 text-6xl font-bold text-white mb-16">
          Experience
        </h1>
        <h2 className="flex justify-start items-center text-3xl font-bold text-white">
          Intern Software Engineer
        </h2>
        <h4 className="flex justify-start items-center text-[18px] lg:text-xl font-bold text-white">
          Prime Technologies Global (Pvt) Ltd — Nov 2024 – May 2025 Colombo, Sri Lanka
        </h4>

        <h4 className="flex items-center justify-center gap-2 text-white mt-4 text-xl">
          <FaBriefcase className="text-yellow-400 text-2xl" />
          Key Responsibilities & Achievements
        </h4>

        <ul className="list-disc list-inside space-y-2 mt-6">
          <li className="hover:text-gray-100 duration-300">
            Developed, tested, and maintained software applications using modern programming languages and frameworks.
          </li>
          <li className="hover:text-gray-100 duration-300">
            Participated in code reviews, improving code quality and performance.
          </li>
          <li className="hover:text-gray-100 duration-300">
            Researched and integrated new technologies to optimize development practices.
          </li>
          <li className="hover:text-gray-100 duration-300">
            Created and maintained detailed project documentation for clear technical communication.
          </li>
          <li className="hover:text-gray-100 duration-300">
            Conducted testing and debugging to ensure software reliability and efficiency.
          </li>
          <li className="hover:text-gray-100 duration-300">
            Supported and enhanced existing applications through troubleshooting and updates.
          </li>
          <li className="hover:text-gray-100 duration-300">
            Demonstrated strong analytical thinking, adaptability, and teamwork in a dynamic development environment.
          </li>
        </ul>
      </motion.div>

      {/* Right side (image) */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center lg:rounded-[40px] rounded-[5%] shadow-shadowOne"
      >
        <img
          className="rounded-[5%] mt-10 lg:mt-0 lgl:w-[580px] lgl:h-[150px] z-10"
          alt="primelogo"
          src={primelogo}
        />
      </motion.div>
    </section>
  );
}
