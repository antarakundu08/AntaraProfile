import React from 'react'
import Header from './Header';
import TechStack from './TechStack';

const Skills = () => {
  return (
    <div>
      <Header />
    <div className='pt-[23%] md:pt-[8%]'>
      <div className="flex justify-center">
        <p className='font-bold text-cyan-950 text-3xl'>Professional <span className='text-cyan-500'> Skillset</span></p>
      </div>
      <TechStack />
    </div>
    </div>
  )
}

export default Skills