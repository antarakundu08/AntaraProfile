import React from 'react'
import Card from 'react-bootstrap/Card'
import { 
    DiVisualstudio,
} from "react-icons/di";
import { 
    SiPostman, 
    SiSlack,
    SiVercel,
    SiAndroidstudio,
} from "react-icons/si";

const ToolStack = () => {
  return (
    <div className='m-10 justify-center flex flex-wrap '>
        <Card className='border-2 border-cyan-500 m-4 py-8 px-16 rounded-md bg-cyan-500 bg-opacity-10 shadow-md w-fit hover:shadow-lg transform transition duration-500 hover:scale-110'>
            <DiVisualstudio size={'5rem'} color="#09BFC9"/>
        </Card>
        <Card className='border-2 border-cyan-500 m-4 py-8 px-16 rounded-md bg-cyan-500 bg-opacity-10 shadow-md w-fit hover:shadow-lg transform transition duration-500 hover:scale-110'>
            <SiPostman size={'5rem'} color="#09BFC9"/>
        </Card>
        <Card className='border-2 border-cyan-500 m-4 py-8 px-16 rounded-md bg-cyan-500 bg-opacity-10 shadow-md w-fit hover:shadow-lg transform transition duration-500 hover:scale-110'>
            <SiSlack size={'5rem'} color="#09BFC9"/>
        </Card>
        <Card className='border-2 border-cyan-500 m-4 py-8 px-16 rounded-md bg-cyan-500 bg-opacity-10 shadow-md w-fit hover:shadow-lg transform transition duration-500 hover:scale-110'>
            <SiVercel size={'5rem'} color="#09BFC9"/>
        </Card>
        <Card className='border-2 border-cyan-500 m-4 py-8 px-16 rounded-md bg-cyan-500 bg-opacity-10 shadow-md w-fit hover:shadow-lg transform transition duration-500 hover:scale-110'>
            <SiAndroidstudio size={'5rem'} color="#09BFC9"/>
        </Card>
    </div>
  )
}

export default ToolStack