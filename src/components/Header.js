import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeNavState } from '../utils/slice/navSlice'
import { MdOutlineDehaze } from "react-icons/md";
import { Link } from 'react-router-dom';
import { CgSoftwareDownload } from "react-icons/cg";
import axios from 'axios';
import resume from '../assets/resume.pdf';

const Header = () => {
    
    const [open,setOpen]=useState(false);
    const dispatch = useDispatch()
    const currentNav = useSelector(store => store.nav.showNavSelection);

    const handleResumeDL = async () => {
        try {
            const response = await axios.get(
              resume,
              {
                responseType: "blob", 
              }
            );
    
            // Create a Blob from the response data
            const pdfBlob = new Blob([response.data], { type: "application/pdf" });
    
            // Create a temporary URL for the Blob
            const url = window.URL.createObjectURL(pdfBlob);
    
            // Create a temporary <a> element to trigger the download
            const tempLink = document.createElement("a");
            tempLink.href = url;
            tempLink.setAttribute(
              "download",
              `AntaraResume.pdf`
            ); // Set the desired filename for the downloaded file
    
            // Append the <a> element to the body and click it to trigger the download
            document.body.appendChild(tempLink);
            tempLink.click();
    
            // Clean up the temporary elements and URL
            document.body.removeChild(tempLink);
            window.URL.revokeObjectURL(url);
          } catch (error) {
            console.error("Error downloading PDF:", error);
          }
    }

  return (
    <div className={`shadow-md w-full fixed top-0 left-0 bg-gradient-to-b bg-opacity-95 ${currentNav ? "from-cyan-100 bg-white" : "bg-gradient-to-br from-white"} `}>
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
      <Link to="/">
            <h1 className='font-extrabold text-3xl text-cyan-500 cursor-pointer'
                onClick={() => {dispatch(changeNavState(null))}}>Antara Kundu</h1>
        </Link>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <MdOutlineDehaze name={open ? 'close':'menu'}></MdOutlineDehaze>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute bg-white md:bg-transparent md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-[70px]':'top-[-490px]'}`}>
        <Link to="/about">
            <h3 
                className={`group px-2 py-2 md:py-0 font-bold cursor-pointer hover:text-cyan-500 hover:text-xl transition-all duration-300 ease-in-out ${currentNav === "about" ? 'text-cyan-500 text-xl' : 'text-cyan-950 text-lg'}`}
                onClick={()=>{dispatch(changeNavState("about"))}}>
                <span className={`py-2 bg-left-bottom bg-gradient-to-r from-cyan-500 to-cyan-500 bg-no-repeat group-hover:bg-[length:60%_2px] ${currentNav === "about" ? 'bg-[length:60%_2px]' :  'bg-[length:0%_2px]' } transition-all duration-500 ease-out`}>
                    About
                </span>
            </h3>
        </Link>
        <Link to="/skills">
            <h3 
                className={`group px-2 py-2 md:py-0 font-bold cursor-pointer hover:text-cyan-500 hover:text-xl transition-all duration-300 ease-in-out ${currentNav === "skills" ? 'text-cyan-500 text-xl' : 'text-cyan-950 text-lg'}`}
                onClick={()=>{dispatch(changeNavState("skills"))}}>
                <span className={`py-2 bg-left-bottom bg-gradient-to-r from-cyan-500 to-cyan-500 bg-no-repeat group-hover:bg-[length:60%_2px] ${currentNav === "skills" ? 'bg-[length:60%_2px]' :  'bg-[length:0%_2px]' } transition-all duration-500 ease-out`}>
                    Skills
                </span>
            </h3>
        </Link>
        <Link to="/projects">
            <h3 
                className={`group px-2 py-2 md:py-0 font-bold cursor-pointer hover:text-cyan-500 hover:text-xl transition-all duration-300 ease-in-out ${currentNav === "projects" ? 'text-cyan-500 text-xl' : 'text-cyan-950 text-lg'}`}
                onClick={()=>{dispatch(changeNavState("projects"))}}>
                <span className={`py-2 bg-left-bottom bg-gradient-to-r from-cyan-500 to-cyan-500 bg-no-repeat group-hover:bg-[length:60%_2px] ${currentNav === "projects" ? 'bg-[length:60%_2px]' :  'bg-[length:0%_2px]' } transition-all duration-500 ease-out`}>
                    Projects
                </span>
            </h3>
        </Link>
        <Link to="/contact">
            <h3 
                className={`group px-2 py-2 md:py-0 font-bold cursor-pointer hover:text-cyan-500 hover:text-xl transition-all duration-300 ease-in-out ${currentNav === "contact" ? 'text-cyan-500 text-xl' : 'text-cyan-950 text-lg'}`}
                onClick={()=>{dispatch(changeNavState("contact"))}}>
                <span className={`py-2 bg-left-bottom bg-gradient-to-r from-cyan-500 to-cyan-500 bg-no-repeat group-hover:bg-[length:60%_2px] ${currentNav === "contact" ? 'bg-[length:60%_2px]' :  'bg-[length:0%_2px]' } transition-all duration-500 ease-out`}>
                    Contact
                </span>
            </h3>
        </Link>
        <button 
            onClick={handleResumeDL}
            className='flex bg-cyan-500 py-2 px-3 ml-2 rounded-md text-white font-bold hover:scale-105'>
            <CgSoftwareDownload className='mt-1 mr-1' />
            Resume
        </button>
      </ul>
      </div>
    </div>
  )

}

export default Header