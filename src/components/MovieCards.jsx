import React from 'react'
import { IoIosStar } from "react-icons/io";
import {useNavigate} from 'react-router-dom'

const MovieCards = ({movie}) => {
  const navigate = useNavigate()
  return (
    <div className=' flex flex-col gap-3 rounded-2xl px-3 py-3 max-w-70 backdrop-blur-2xl bg-gray-900/50  hover:translate-y-0.5'>
      <img onClick={()=>{navigate(`/movies/${movie._id}`);scrollTo(0,0)}} className='w-60 h-50  object-center ' src={movie.backdrop_path} alt="" />   
      <h4  className='font-semibold text-2xl'>{movie.title}</h4>
      <p className='text-gray-50 font-normal '>{new Date(movie.release_date).getFullYear()}.{movie.genres.slice(0,2).map(genre => genre.name).join("|")}.{movie.runtime}min</p>
      <div className='flex justify-between items-center'>
        <button  onClick={()=>{navigate(`/movies/${movie._id}`);scrollTo(0,0)}} className='px-4 py-2 rounded-2xl bg-red-500 flex justify-center '>Buy Ticket</button>
        <p className='flex justify-between items-center'> <span><IoIosStar color='red' /></span>4.5</p>
      </div>
    </div>
  )
}

export default MovieCards
