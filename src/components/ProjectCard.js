import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const ProjectCard = ({project}) => {
    console.log(project)
    const {image, content, title, code, live} = project
  return (
        <Card className='mx-11 mb-11 w-[25%] h-max-100 border-2 border-cyan-500 p-2 rounded-md group hover:bg-cyan-50 hover:shadow-xl'>
        <div className='px-3 pt-3'>
          <img
          className='h-max-34 rounded-lg group-hover:scale-110'
          src={image}
          alt='projectImage'/>
        </div>
         <div className='p-2'>
          <p className='font-bold'>{title}</p>
          <div className='h-20 overflow-y-auto'>
            <p className='font-semibold text-cyan-900 text-sm' >
             {content}
            </p>
          </div>
          <div className='flex justify-center mt-3'>
            <Link to={code}
              className='rounded-lg w-1/2 mx-1'>
              <Button
                className='bg-cyan-500 text-white p-2 rounded-lg w-full'>Source Code
              </Button>
            </Link>
            {live && <Link to={live}
              className='rounded-lg w-1/2 mx-1'>
              <Button
                className='bg-cyan-500 text-white p-2 rounded-lg w-full'>Live Demo
              </Button>
            </Link>}
          </div>
         </div>
      </Card>
  )
}

export default ProjectCard