import React, { useEffect, useState ,useRef} from 'react'
import BlurCircle from './BlurCircle'
import ReactPlayer from 'react-player'
import { dummyTrailers } from '../assets/assets.js'

const VideoPlayer = (movie) => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])
  const [playing,setPlaying ]= useState(false)

  const playerRef = useRef(null) // ✅ to watch the video div

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        setPlaying(entry.isIntersecting) // play when visible, pause when hidden
      },
      { threshold: 0.5 } // 50% visible
    )

    if (playerRef.current) {
      observer.observe(playerRef.current) // ✅ correct element
    }

    return () => observer.disconnect()
  }, [currentTrailer])

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44  mb-16 '>
      <h4 className='font-bold text-2xl py-5'>Trailers</h4>
      <div className=' px-20' ref={playerRef}>
       <div className='absolute'>
        <BlurCircle  right='-100px' top='-100px' />
        </div> 
        <ReactPlayer className='flex px-19 py-4 rounded-2xl'
          src={currentTrailer.videoUrl}
          controls={false}
          playing={playing}
          width='960px'
          height='540px'
          config={{
            youtube: {
              playerVars: {
                modestbranding: 1, 
                rel: 0,           
                showinfo: 0,       
                controls: 1,       
                disablekb: 1,     
      },
    },
  }}
        />
         <div className='flex  justify-center gap-3  overflow-hidden  '>
         {dummyTrailers.slice(0,6).map((trailer,index)=>(
           <img onClick={()=>setCurrentTrailer(trailer)} className='w-52 h-40 py-5 gap-4  hover:translate-0.5 object-cover rounded-2xl ' src={trailer.image} key={index} />
         ))}
      </div>
      </div>
     
    </div>
  )
}

export default VideoPlayer
