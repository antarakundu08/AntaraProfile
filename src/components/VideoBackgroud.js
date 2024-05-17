import React from 'react'
import vdobg from '../assets/vdobg.mp4'

const VideoBackground = () => {
  return (
    <div className='fixed -z-10'>
        <video 
        className='h-screen object-cover md:object-none md:h-max'
        src={vdobg}
        autoPlay loop muted/>
    </div>
  )
}

export default VideoBackground