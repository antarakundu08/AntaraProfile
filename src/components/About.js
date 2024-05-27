import React from 'react'
import ant from '../assets/ant.jpeg'
import Header from './Header'
const About = () => {
  return (
    <div>
      <Header />
    <div className='pt-[23%] md:pt-[10%]'>
      <div className="flex justify-center">
        <p className='pr-1 font-bold text-cyan-950 -mt-1 text-3xl md:text-5xl'>KNOW WHO </p>
        <p className='pr-1 font-bold text-cyan-500 -mt-1 text-3xl md:text-5xl ml-2'>  I'M</p>
      </div>
    <div className='pt-8 md:px-10 md:flex'>
      <div className='md:w-1/3'>
        <img 
          className='w-2/3 mx-auto md:float-right md:mr-10 rounded-full border-4 border-cyan-500'
          src={ant} alt="userIcon" />
      </div>
      <div className='mx-5 md:w-2/3'>
        <p className='align-justify pt-8 text-cyan-950 mb-16'>
            Hi Everyone, I am <span className="text-cyan-500 font-semibold">Antara Kundu </span>
            from <span className="text-cyan-500 font-semibold"> Jabalpur, India.</span> I am currently employed as a software engineer at Persistent Systems.
            I have completed Bachelor's of Technology in Computer Science and Engineering at Jabalpur Engineering College, Jabalpur.
            <br />
            <br />
            I enjoy problem-solving and coding. Always strive to bring 100% to the work I do. I have worked on technologies like Python, ReactJs, Javascript, Terraform,  Django, Flask, MySQL, PostgreSQL,  HTML5, Tailwind CSS, Java. 
            I have 2 years of professional work experience which helped me strengthen my experience in Python, and DevOps Technologies like Terraform, Kubernetes, Google Cloud Platform, Looker.
            I am passionate about developing complex applications that solve real-world problems impacting millions of users.
          </p>
      </div>
    </div>
    </div>

    </div>
    
  )
}

export default About