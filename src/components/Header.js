import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeNavState } from '../utils/slice/navSlice'

const Header = () => {

    const dispatch = useDispatch()
    const currentNav = useSelector(store => store.nav.showNavSelection);

  return (
    <div className='absolute w-full p-6 flex justify-between bg-gradient-to-b from-blue-100'>
        <div>
            <h1 className='font-extrabold text-3xl text-cyan-950'>Antara Kundu</h1>
        </div>
        <div className='flex'>
            <h3 
                className={`group px-2 font-bold cursor-pointer hover:text-cyan-950 hover:text-xl transition-all duration-300 ease-in-out ${currentNav === "about" ? 'text-cyan-950 text-xl' : 'text-cyan-800 text-lg'}`}
                onClick={()=>{dispatch(changeNavState("about"))}}>
                <span className={`py-2 bg-left-bottom bg-gradient-to-r from-cyan-950 to-cyan-950 bg-no-repeat group-hover:bg-[length:60%_2px] ${currentNav === "about" ? 'bg-[length:60%_2px]' :  'bg-[length:0%_2px]' } transition-all duration-500 ease-out`}>
                    About
                </span>
            </h3>

            <h3 
                className={`group px-2 font-bold cursor-pointer hover:text-cyan-950 hover:text-xl transition-all duration-300 ease-in-out ${currentNav === "education" ? 'text-cyan-950 text-xl' : 'text-cyan-800 text-lg'}`}
                onClick={()=>{dispatch(changeNavState("education"))}}>
                <span className={`py-2 bg-left-bottom bg-gradient-to-r from-cyan-950 to-cyan-950 bg-no-repeat group-hover:bg-[length:60%_2px] ${currentNav === "education" ? 'bg-[length:60%_2px]' :  'bg-[length:0%_2px]' } transition-all duration-500 ease-out`}>
                    Education
                </span>
            </h3>
            <h3 
                className={`group px-2 font-bold cursor-pointer hover:text-cyan-950 hover:text-xl transition-all duration-300 ease-in-out ${currentNav === "experience" ? 'text-cyan-950 text-xl' : 'text-cyan-800 text-lg'}`}
                onClick={()=>{dispatch(changeNavState("experience"))}}>
                <span className={`py-2 bg-left-bottom bg-gradient-to-r from-cyan-950 to-cyan-950 bg-no-repeat group-hover:bg-[length:60%_2px] ${currentNav === "experience" ? 'bg-[length:60%_2px]' :  'bg-[length:0%_2px]' } transition-all duration-500 ease-out`}>
                    Experience
                </span>
            </h3>
            <h3 
                className={`group px-2 font-bold cursor-pointer hover:text-cyan-950 hover:text-xl transition-all duration-300 ease-in-out ${currentNav === "skills" ? 'text-cyan-950 text-xl' : 'text-cyan-800 text-lg'}`}
                onClick={()=>{dispatch(changeNavState("skills"))}}>
                <span className={`py-2 bg-left-bottom bg-gradient-to-r from-cyan-950 to-cyan-950 bg-no-repeat group-hover:bg-[length:60%_2px] ${currentNav === "skills" ? 'bg-[length:60%_2px]' :  'bg-[length:0%_2px]' } transition-all duration-500 ease-out`}>
                    Skills
                </span>
            </h3>
            <h3 
                className={`group px-2 font-bold cursor-pointer hover:text-cyan-950 hover:text-xl transition-all duration-300 ease-in-out ${currentNav === "projects" ? 'text-cyan-950 text-xl' : 'text-cyan-800 text-lg'}`}
                onClick={()=>{dispatch(changeNavState("projects"))}}>
                <span className={`py-2 bg-left-bottom bg-gradient-to-r from-cyan-950 to-cyan-950 bg-no-repeat group-hover:bg-[length:60%_2px] ${currentNav === "projects" ? 'bg-[length:60%_2px]' :  'bg-[length:0%_2px]' } transition-all duration-500 ease-out`}>
                    Projects
                </span>
            </h3>
            <h3 
                className={`group px-2 font-bold cursor-pointer hover:text-cyan-950 hover:text-xl transition-all duration-300 ease-in-out ${currentNav === "contact" ? 'text-cyan-950 text-xl' : 'text-cyan-800 text-lg'}`}
                onClick={()=>{dispatch(changeNavState("contact"))}}>
                <span className={`py-2 bg-left-bottom bg-gradient-to-r from-cyan-950 to-cyan-950 bg-no-repeat group-hover:bg-[length:60%_2px] ${currentNav === "contact" ? 'bg-[length:60%_2px]' :  'bg-[length:0%_2px]' } transition-all duration-500 ease-out`}>
                    Contact
                </span>
            </h3>
        </div>
    </div>
  )
}

export default Header