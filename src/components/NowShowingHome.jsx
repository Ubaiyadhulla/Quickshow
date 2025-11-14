import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import BlurCircle from './BlurCircle';
import MovieCards from  './MovieCards';
import { dummyShowsData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const NowShowingHome = () => {
  const navigate = useNavigate();
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden ' >
        <div className=' relative flex items-center justify-between pt-20 pb-10'>
           <p>Now Showing</p>
           <p className='flex items-center gap-2 group'>View All <span className='group-hover:translate-x-0.5'><FaArrowCircleRight /></span></p>
           <BlurCircle top='0' right='-80px'/>
        </div>
        <div className='flex flex-wrap gap-4'>{dummyShowsData.slice(0,8).map((show,index)=>(
          <MovieCards key={index} movie={show}/>
        ))}</div>
       
        <div onClick={()=>{navigate('/movies'); scrollTo(0,0)}} className='flex justify-center items-center my-16'><button className='font-bold bg-red-500 rounded-2xl md:w-32 lg:w-44 py-4' >Show More</button></div> 
    </div>
    
  )
}

export default NowShowingHome