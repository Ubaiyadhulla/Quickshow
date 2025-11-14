import React from 'react'
import Hero from '../components/Hero'
import NowShowingHome from '../components/NowShowingHome'
import VideoPlayer from '../components/VideoPlayer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <NowShowingHome/>
      <VideoPlayer/>
      
    </div>
  )
}

export default Home