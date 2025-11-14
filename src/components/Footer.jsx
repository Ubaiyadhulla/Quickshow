import React from 'react'
import {assets} from '../assets/assets.js'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44  '>
      {/* ----------top footer-------- */}
      <div className='flex'>
        {/* -------topFooter1-------- */}
        <div className='flex-[2]'>
          <img className='py-3' src={assets.logo} alt="" />
          <p className='text-gray-50 font-medium max-w-[500px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex pariatur dolore expedita. Excepturi minus laborum inventore expedita temporibus .</p>
          <div className='flex gap-2 '>
            <img src={assets.googlePlay} alt="" />
            <img src={assets.appStore} alt="" />
          </div>
        </div>


        {/* --------topFooter2-------- */}
        <div className='flex-[1]'> 
          <h5 className='font-semibold py-3'>Company</h5>
          <p>Home</p>
          <p>About us</p>
          <p>Contact us</p>
          <p>Privacy Policy</p>
        </div>


        {/* --------topFooter3 */}
        <div className='flex-[1]'>
          <h5 className='font-semibold py-3'>Get in touch</h5>
          <p>+1-234-456-789</p>
          <p>contact@gmail.com</p>
        </div>
      </div>


      {/* -------------bottom footer-------- */}
      <hr className='mt-4 '/>
      <p className='flex justify-center items-center p-3'>Copyright 2025 &Copy; Ubaiyadhulla .All right Reserved</p>
    </div>
  )
}

export default Footer