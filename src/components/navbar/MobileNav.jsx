import React from 'react'
import './Header.css'
import {IoClose} from 'react-icons/io5'
import { Link } from 'react-router-dom'


const MobileNav = ( {setNavMobile }) => {
  return (
    <nav className='lg:hidden bg-black text-gray-300 w-full h-full'>
      
      <IoClose onClick={()=> setNavMobile(false)} className='text-3xl absolute right-6 top-6 cursor-pointer ' />

      <ul className='flex flex-col justify-center space-y-8 h-full items-center capitalize font-secondary'>
        
          <Link to='/cart'> <li className='text-md'>home</li></Link>
        
          <li className='text-md'>clothes</li>
          <li className='text-md'>electronics</li>
          <li className='text-md'>furniture</li>
          <li className='text-md'>shoes</li>
          <li className='text-md'>others</li>
        </ul> 


    </nav>
  )
}

export default MobileNav