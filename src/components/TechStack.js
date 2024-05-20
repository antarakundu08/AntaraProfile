import React from 'react'
import Card from 'react-bootstrap/Card'
import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiJava,
  DiGoogleCloudPlatform,
  DiPython,
  DiAndroid,
} from "react-icons/di";
import { 
  SiFirebase,
  SiTerraform,
  SiPostgresql,
  SiKubernetes,
  SiRedux,
  SiJenkins,
  SiApachekafka,
} from "react-icons/si";

const TechStack = () => {
  return (
    <div className='m-10 justify-center flex flex-wrap '>
      <Card className='border-2 border-cyan-500 m-4 py-8 px-12 rounded-md bg-cyan-500 bg-opacity-10 shadow-md w-fit hover:shadow-lg transform transition duration-500 hover:scale-110'>
        <DiPython size={'5rem'} color="#09BFC9"/>
      </Card>
      <Card className='border-2 border-cyan-500 m-4 py-8 px-12 rounded-md bg-cyan-500 bg-opacity-10 shadow-md w-fit hover:shadow-lg transform transition duration-500 hover:scale-110'>
        <DiJavascript1 size={'5rem'} color="#09BFC9"/>
      </Card>
      <Card className='border-2 border-cyan-500 m-4 py-8 px-12 rounded-md bg-cyan-500 bg-opacity-10 shadow-md w-fit hover:shadow-lg transform transition duration-500 hover:scale-110'>
        <DiReact size={'5rem'} color="#09BFC9"/>
      </Card>
      <Card className='border-2 border-cyan-500 m-4 py-8 px-12 rounded-md bg-cyan-500 bg-opacity-10 shadow-md w-fit hover:shadow-lg transform transition duration-500 hover:scale-110'>
        <SiRedux size={'5rem'} color="#09BFC9"/>
      </Card>
      <Card className='border-2 border-cyan-500 m-4 py-8 px-12 rounded-md bg-cyan-500 bg-opacity-10 shadow-md w-fit hover:shadow-lg transform transition duration-500 hover:scale-110'>
        <DiGoogleCloudPlatform size={'5rem'} color="#09BFC9"/>
      </Card>
      <Card className='border-2 border-cyan-500 m-4 py-8 px-12 rounded-md bg-cyan-500 bg-opacity-10 shadow-md w-fit hover:shadow-lg transform transition duration-500 hover:scale-110'>
        <SiTerraform size={'5rem'} color="#09BFC9"/>
      </Card>
      <Card className='border-2 border-cyan-500 m-4 py-8 px-12 rounded-md bg-cyan-500 bg-opacity-10 shadow-md w-fit hover:shadow-lg transform transition duration-500 hover:scale-110'>
        <DiJava size={'5rem'} color="#09BFC9"/>
      </Card>
      <Card className='border-2 border-cyan-500 m-4 py-8 px-12 rounded-md bg-cyan-500 bg-opacity-10 shadow-md w-fit hover:shadow-lg transform transition duration-500 hover:scale-110'>
        <DiGit size={'5rem'} color="#09BFC9"/>
      </Card>
      <Card className='border-2 border-cyan-500 m-4 py-8 px-12 rounded-md bg-cyan-500 bg-opacity-10 shadow-md w-fit hover:shadow-lg transform transition duration-500 hover:scale-110'>
        <SiPostgresql size={'5rem'} color="#09BFC9"/>
      </Card>
      <Card className='border-2 border-cyan-500 m-4 py-8 px-12 rounded-md bg-cyan-500 bg-opacity-10 shadow-md w-fit hover:shadow-lg transform transition duration-500 hover:scale-110'>
        <SiFirebase size={'5rem'} color="#09BFC9"/>
      </Card>
      <Card className='border-2 border-cyan-500 m-4 py-8 px-12 rounded-md bg-cyan-500 bg-opacity-10 shadow-md w-fit hover:shadow-lg transform transition duration-500 hover:scale-110'>
        <SiKubernetes size={'5rem'} color="#09BFC9"/>
      </Card>
      <Card className='border-2 border-cyan-500 m-4 py-8 px-12 rounded-md bg-cyan-500 bg-opacity-10 shadow-md w-fit hover:shadow-lg transform transition duration-500 hover:scale-110'>
        <SiJenkins size={'5rem'} color="#09BFC9"/>
      </Card>
      <Card className='border-2 border-cyan-500 m-4 py-8 px-12 rounded-md bg-cyan-500 bg-opacity-10 shadow-md w-fit hover:shadow-lg transform transition duration-500 hover:scale-110'>
        <DiAndroid size={'5rem'} color="#09BFC9"/>
      </Card>
      <Card className='border-2 border-cyan-500 m-4 py-8 px-12 rounded-md bg-cyan-500 bg-opacity-10 shadow-md w-fit hover:shadow-lg transform transition duration-500 hover:scale-110'>
        <SiApachekafka size={'5rem'} color="#09BFC9"/>
      </Card>
    </div>
  )
}

export default TechStack