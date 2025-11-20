import React from 'react'
import { useParams } from 'react-router-dom'
import { dummyShowsData } from '../assets/assets'
import { FaStar } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import {dummyCastsData} from "../assets/assets.js"
import { movieDates } from '../assets/assets';

const Details = () => {
  const {id} = useParams()
  const movie = dummyShowsData.find((show)=> show.id === parseInt(id))
  
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44  mb-16'>
      <div className='flex gap-4 h-96 mx-10 my-42'>
        <img className='rounded-2xl  max-w-70' src={movie.poster_path} alt="" />
        {/* movie details */}
        <div className='flex-2 flex flex-col gap-5'>
          <p className='text-4xl font-black'>{movie.title}</p>
          <p className='flex items-center font-semibold text-xl '><span><FaStar color='red' size={24} /></span>{movie.vote_average} IMDB Rating</p>
          <p>{movie.overview}</p>
          <h5>{movie.runtime}min . {movie.genres.map((movie)=>movie.name).join(' | ')} . {movie.release_date}</h5>
          <div className=' flex gap-5 justify-start items-center'>
            <button className='flex items-center gap-2  bg-gray-800 px-5 py-4 rounded-2xl'><span><FaRegCirclePlay  size={22}/></span>Watch Trailer</button>
            <button className='bg-red-500 rounded-2xl px-5 py-4'> Buy Tickets</button>           
          </div>
        </div>
      </div>

      {/* cast */}
      <div>
        <h3 className='font-semibold py-4 text-2xl'>Your Favorite Caste</h3>
        <div className='flex gap-7'>
        {
          dummyCastsData.slice(0,8).map((cast,index)=>(
            <div key={index} className='flex flex-col'>
              <img className='w-30 h-30 rounded-full' src={cast.profile_path} alt="" />
               <h4>{cast.name}</h4>           
            </div>
          ))
        }
        </div>
       
      </div>

    </div>
  )
}

export default Details