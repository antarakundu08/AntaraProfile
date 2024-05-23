import React from 'react'
import resume from '../assets/resume.pdf';

const Resume = () => {

  return (
    <div className="pt-[10%] w-full max-w-screen-lg mx-auto h-full">
      <object width="100%" height="800" data={resume} type="application/pdf" >   </object>
    </div>
  )
}

export default Resume