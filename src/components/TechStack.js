import React from 'react'
import githubdots from '../assets/skills/github-dots.svg'
import python from '../assets/skills/python.svg'
import javascript from '../assets/skills/javascript.svg'
import react from '../assets/skills/react.svg'
import redux from '../assets/skills/redux.svg'
import gcp  from '../assets/skills/gcp.svg'
import terraform from '../assets/skills/terraform.svg'
import java  from '../assets/skills/java.svg'
import git  from '../assets/skills/git.svg'
import postgresql  from '../assets/skills/postgresql.svg'
import firebase  from '../assets/skills/firebase.svg'
import kubernetes  from '../assets/skills/kubernets.svg'
import android  from '../assets/skills/android.svg'
import jenkins  from '../assets/skills/jenkins.svg'
import tailwind from '../assets/skills/tailwindcss.svg'
import Card from 'react-bootstrap/Card'

const TechStack = () => {
  return (
    <div className='md:flex'>
      <div className='p-10 md:w-1/2 md:p-20'>
        <img src={githubdots} />
      </div>
      <div className='md:w-1/2 flex justify-center flex-wrap mx-5 mb-16 md:m-10'>
        <Card 
          className='mx-2 my-1 align-middle border-[1.5px] shadow-md border-cyan-500 h-24 w-24 rounded-md px-4 py-2 bg-cyan-500 bg-opacity-10 hover:shadow-lg transform transition duration-500 hover:scale-110'>
          <p className='text-center text-[12px] mb-1'>Python</p>
          <img src={python} className='w-10 mx-auto'/>
        </Card>
        <Card 
          className='mx-2 my-1 border-[1.5px] shadow-md border-cyan-500  h-24 w-24  rounded-md px-4 py-2 bg-cyan-500 bg-opacity-10 hover:shadow-lg transform transition duration-500 hover:scale-110'>
          <p className='text-center text-[12px] mb-1'>Javascript</p>
          <img src={javascript} className='w-10 mx-auto'/>
        </Card>
        <Card 
          className='mx-2 my-1 border-[1.5px] shadow-md border-cyan-500  h-24 w-24  rounded-md px-4 py-2 bg-cyan-500 bg-opacity-10 hover:shadow-lg transform transition duration-500 hover:scale-110'>
          <p className='text-center text-[12px] mb-1'>React</p>
          <img src={react} className='w-10 mx-auto'/>
        </Card>
        <Card 
          className='mx-2 my-1 border-[1.5px] shadow-md border-cyan-500  h-24 w-24  rounded-md px-4 py-2 bg-cyan-500 bg-opacity-10 hover:shadow-lg transform transition duration-500 hover:scale-110'>
          <p className=' text-center text-[12px] mb-1'>Redux</p>
          <img src={redux} className='w-10 mx-auto'/>
        </Card>
        <Card 
          className='mx-2 my-1 border-[1.5px] shadow-md border-cyan-500  h-24 w-24  rounded-md px-4 py-2 bg-cyan-500 bg-opacity-10 hover:shadow-lg transform transition duration-500 hover:scale-110'>
          <p className=' text-center text-[12px] mb-1'>GCP</p>
          <img src={gcp} className='w-10 mx-auto'/>
        </Card>
        <Card 
          className='mx-2 my-1 border-[1.5px] shadow-md border-cyan-500  h-24 w-24  rounded-md px-4 py-2 bg-cyan-500 bg-opacity-10 hover:shadow-lg transform transition duration-500 hover:scale-110'>
          <p className=' text-center text-[12px] mb-1'>Terraform</p>
          <img src={terraform} className='w-10 mx-auto'/>
        </Card>
        <Card 
          className='mx-2 my-1 border-[1.5px] shadow-md border-cyan-500  h-24 w-24  rounded-md px-4 py-2 bg-cyan-500 bg-opacity-10 hover:shadow-lg transform transition duration-500 hover:scale-110'>
          <p className=' text-center text-[12px] mb-1'>Java</p>
          <img src={java} className='w-10 mx-auto'/>
        </Card>
        <Card 
          className='mx-2 my-1 border-[1.5px] shadow-md border-cyan-500  h-24 w-24  rounded-md px-4 py-2 bg-cyan-500 bg-opacity-10 hover:shadow-lg transform transition duration-500 hover:scale-110'>
          <p className=' text-center text-[12px] mb-1'>Git</p>
          <img src={git} className='w-10 mx-auto'/>
        </Card>
        <Card 
          className='mx-2 my-1 border-[1.5px] shadow-md border-cyan-500  h-24 w-24  rounded-md px-4 py-2 bg-cyan-500 bg-opacity-10 hover:shadow-lg transform transition duration-500 hover:scale-110'>
          <p className=' text-center text-[12px] mb-1'>PostgreSQL</p>
          <img src={postgresql} className='w-10 mx-auto'/>
        </Card>
        <Card 
          className='mx-2 my-1 border-[1.5px] shadow-md border-cyan-500 h-24 w-24 rounded-md px-4 py-2 bg-cyan-500 bg-opacity-10 hover:shadow-lg transform transition duration-500 hover:scale-110'>
          <p className=' text-center text-[12px] mb-1'>Firebase</p>
          <img src={firebase} className='w-10 mx-auto'/>
        </Card>
        <Card 
          className='mx-2 my-1 border-[1.5px] shadow-md border-cyan-500  h-24 w-24  rounded-md px-4 py-2 bg-cyan-500 bg-opacity-10 hover:shadow-lg transform transition duration-500 hover:scale-110'>
          <p className=' text-center text-[12px] mb-1'>Kubernetes</p>
          <img src={kubernetes} className='w-10 mx-auto'/>
        </Card>
        <Card 
          className='mx-2 my-1 border-[1.5px] shadow-md border-cyan-500  h-24 w-24  rounded-md px-4 py-2 bg-cyan-500 bg-opacity-10 hover:shadow-lg transform transition duration-500 hover:scale-110'>
          <p className=' text-center text-[12px] mb-1'>Android</p>
          <img src={android} className='w-10 mx-auto'/>
        </Card>
        <Card 
          className='mx-2 my-1 border-[1.5px] shadow-md border-cyan-500  h-24 w-24  rounded-md px-4 py-2 bg-cyan-500 bg-opacity-10 hover:shadow-lg transform transition duration-500 hover:scale-110'>
          <p className=' text-center text-[12px] mb-1'>Jenkins</p>
          <img src={jenkins} className='w-10 mx-auto'/>
        </Card>
        <Card 
          className='mx-2 my-1 border-[1.5px] shadow-md border-cyan-500  h-24 w-24  rounded-md px-4 py-2 bg-cyan-500 bg-opacity-10 hover:shadow-lg transform transition duration-500 hover:scale-110'>
          <p className=' text-center text-[12px] mb-1'>Tailwind</p>
          <img src={tailwind} className='w-10 mx-auto'/>
        </Card>
      </div>
    </div>
  )
}

export default TechStack