import React from 'react'
import { logo } from '../assets/index'
import { navLinksdata } from '../Constants'


export default function NavBar() {
  return (
 <div className='flex w-full h-20 mx-auto justify-between items-center'>
  <div>
    <img src={logo} alt='logo' width="70" height="70" className='rounded-full logo'/>
  </div>
  <div>
    <ul className='flex items-center gap-10'>
      {navLinksdata.map(({_id, title, link}) => ( 
        <li className='text-base font-normal text-blue-500 tracking-wide cursor-pointer hover:underline hover:text-designColor duration-300' key={_id}>
          {title}
        </li>
      ))}
    </ul>
  </div>
</div> 

  );
}
