import React from 'react'
import { rawData } from '../utils/rawData';
import ProjectCard from './ProjectCard';

const Project = () => {
  return (
    <div className='pt-[10%] flex flex-wrap justify-center'>   
      <ProjectCard project={rawData["HotFlix"]}/> 
      <ProjectCard project={rawData["FoodBazaar"]}/> 
      <ProjectCard project={rawData["ShopItHere"]}/> 
      <ProjectCard project={rawData["BinTracker"]}/> 
      <ProjectCard project={rawData["NewsApp"]}/> 
      <ProjectCard project={rawData["BabelApp"]}/>      
    </div>
  )
}

export default Project