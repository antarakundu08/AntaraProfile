import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './HomePage'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <HomePage/>,
        }        
    ])
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

// h-screen object-cover md:object-none md:w-full

export default Body