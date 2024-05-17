import React from 'react'
import ants from '../assets/ants.jpeg'
const About = () => {
  return (
    <div className='pt-[10%] px-10 flex'>
      <div>
        <img src={ants} alt="userIcon" />
      </div>
      <div>
        <p>
        Focused and enthusiastic developer with a keen interest in software development and artificial intelligence. By comprehensive exposure to the underlying concepts and applying them vividly to various projects, my love for these domains came into being. I am a passionate individual who thrives to build and apply algorithms to solve real-world industry problems.
        </p>
      </div>
    </div>
  )
}

export default About