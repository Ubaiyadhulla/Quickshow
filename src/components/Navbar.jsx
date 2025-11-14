import React from 'react'
import {assets} from "../assets/assets.js"
import {Link} from "react-router-dom"
import { IoSearch } from "react-icons/io5";
import {  useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { FaShoppingBasket } from "react-icons/fa";



const Navbar = () => {
  const {user} = useUser()
  const {openSignIn} = useClerk()
  return (
    <div className='w-full fixed top-0 left-0 z-50 flex items-center justify-between px-6 md:px-16 lg:px-36 py-5 '>
      <div>
        <img src={assets.logo} alt="" />
      </div>
      
     
      {/* navbar middle */}
      <div className='flex font-bold gap-8 px-4 py-4   backdrop-blur bg-black/70 rounded-full md:bg-white/10 '>
        <Link to='/'>Home</Link>
        <Link to='/movies'>Movies</Link>
        <Link to='/'>Theaters</Link>
        <Link to='/favorite'>Favorite</Link>
      </div>

      <div className='flex gap-8 items-center'>
        <span><IoSearch color='white' size={30} /></span>
       {!user ?(<button onClick={()=>openSignIn()} className='bg-primary px-5 md:px-8 lg:px-9 py-4 rounded-full text-xl hover:bg-primary-dull'>Login</button>):(
        <UserButton className='w-4'>
          <UserButton.MenuItems>
            <UserButton.Link label='My Booking' labelIcon={<FaShoppingBasket />} href='/my-booking' >
            </UserButton.Link>
          </UserButton.MenuItems>
        </UserButton>
       )}
      </div>
    </div> 
  )
}

export default Navbar