import React from 'react'
import { useSelector } from 'react-redux'
import Header from './Header'
import VideoBackground from './VideoBackground'
import About from './About'
import Skills from './Skills'
import Project from './Project'
import Contact from './Contact'

const HomePage = () => {
  const currentNav = useSelector(store => store.nav.showNavSelection);
  return (
    <div>
        <Header />
        {
          !currentNav ? ( <VideoBackground /> ):
          currentNav === "about" ? ( <About /> ) : 
          currentNav === "skills" ? ( <Skills /> ) :
          currentNav === "projects" ? ( <Project /> ) :
          <Contact />
        }
    </div>
  )
}

export default HomePage