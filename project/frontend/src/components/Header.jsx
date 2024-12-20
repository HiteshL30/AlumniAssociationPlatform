import React from 'react'
import { Link } from 'react-router'

function Header() {
   
  return (
 <div className='flex items-center justify-around bottom-solid border-white '>
    <div className='text-2xl font-semibold dark:text-zinc-200'><Link to="/" className='text-3xl flex font-bold tracking-tight text-blue-500'>AlumaMeter</Link></div>
    <div>
        <div className='md:hidden'>
         mobileNav
        </div>
        <div className='hidden md:block'>
            <ul className='flex items-center gap-5 text-xl font-semibold dark:text-zinc-200'>
            <li className='list-none'><Link to="/home">Home</Link></li>
            <li className='list-none'><Link to="/about">About</Link></li>
            <li className='list-none'><Link to="/alumni">Alumni</Link></li>
            <li className='list-none'><Link to="/student">Student</Link></li>git
            <li className='list-none'><Link to="/events">Events</Link></li>
            </ul>
        </div>
    </div>
    <div className='text-2xl font-semibold dark:text-zinc-200'>Get Started</div>

 </div>
  )
}

export default Header