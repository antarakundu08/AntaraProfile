import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import HomePage from './HomePage'
import Project from './Project'
import Skills from './Skills'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
          path: '/',
          element: <HomePage/>,
        },  
        {
          path: '/about',
          element: <About/>,
        },  
        {
          path: '/skills',
          element: <Skills/>,
        },  
        {
          path: '/projects',
          element: <Project/>,
        },    
        {
          path: '/contact',
          element: <Contact/>,
        },         
    ])
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

// h-screen object-cover md:object-none md:w-full

export default Body