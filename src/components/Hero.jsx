import React from 'react'
import { assets } from '../assets/assets'
import { IoIosCalendar } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className='bg-[url("/backgroundImage.png")]  h-screen flex flex-col justify-center gap-4  bg-center bg-cover bg-no-repeat'>
      <div className='w-auto flex flex-col  px-6 md:px-16 lg:px-32 gap-4 ' >
         <img className='md:w-50' src={assets.marvelLogo} alt="" />
      <h1 className='text-7xl'>Guardians</h1>
      <h1 className='text-7xl'>of the Galaxy</h1>
      <div className='flex w-1/3 justify-self-start gap-5 font-bold'>
        <p>Action | Adventure | Sci-Fi</p>
        <div className='flex gap-2 items-center'>
             <IoIosCalendar />
             <p>2018</p>
        </div>
        <div className='flex gap-2 items-center'>
            <FaRegClock />
            <p>2h 8m</p>
        </div>
      </div>

      <p className='w-1/3 font-bold text-xl'>In a post-apocalyptic world where cities ride on wheels and consume each other to survive, two people meet in London and try to stop a conspiracy.</p>
      <button className='w-50 bg-red-600 flex items-center rounded-2xl justify-center gap-3 py-3 font-bold'>Explore Movies <span><FaArrowRight /></span></button>
      </div>
      
    </div>
  )
}

export default Hero