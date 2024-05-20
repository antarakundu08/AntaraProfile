import React from 'react'
import TechStack from './TechStack';
import ToolStack from './ToolStack';

const Skills = () => {
  return (
    <div className='pt-[8%] '>
      <div className="flex justify-center">
        <p className='font-bold text-cyan-950 text-3xl'>Professional <span className='text-cyan-500'> Skillset</span></p>
      </div>
      <TechStack />
      <div className="flex justify-center">
        <p className='font-bold text-cyan-500 text-3xl'>Tools <span className='text-cyan-900'> I Used</span></p>
      </div>
      <ToolStack/>
    </div>
  )
}

export default Skills