import React from 'react'
import vdobg from '../assets/vdobg.mp4'

const VideoBackground = () => {
  return (
    <div className='relative -pt-10 m-0 p-0 flex justify-center items-center py-8 w-screen h-screen -z-20 '>
        <video 
        className="fixed left-0 top-0 w-full h-full min-h-full min-w-full aspect-video object-cover md:object-fill"
        src={vdobg}
        autoPlay loop muted/>
    </div>
  )
}

export default VideoBackground