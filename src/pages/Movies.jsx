import React from 'react'
import { dummyShowsData }  from '../assets/assets'
import MovieCards from '../components/MovieCards'

const Movies = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44  mb-16 flex flex-wrap gap-4 pt-32 '>
      {dummyShowsData.map((movie,index)=>(
        <div><MovieCards  key={index} movie={movie} /></div>
      ))}
    </div>
  )
}

export default Movies