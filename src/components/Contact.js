import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Card } from 'react-bootstrap';
import ants from '../assets/antara.jpeg';
import { Link } from 'react-router-dom';
import { 
  SiGithub,
  SiLinkedin,
  SiTwitter,
  SiMedium,
 } from "react-icons/si";
import Header from './Header';

const Contact = () => {

  const [sentEmail, setSentEmail] = useState(null);
  const form = useRef();

  const handleEmailSubmit = (e) => {
    
    e.preventDefault();

    emailjs
      .sendForm('service_cupd0bj', 'template_va2p3uf', form.current, {
        publicKey: 'C_fabX4WDIAlxdN7Z',
      })
      .then(
        () => {
          setSentEmail("Successfully sent message to Antara!");
        },
        (error) => {
          setSentEmail("Fail to send message, please try again later..");
        },
      );
  }
  return (
    <div>
      <Header />
    <div className='mt-20 h-screen'>
      <div className="flex justify-center">
        <h1 className='font-bold text-cyan-950 text-3xl'>Want to <span  className='text-cyan-500'>Connect?</span></h1>
      </div>
      <img 
        src={ants} 
        className='w-40 mx-auto mt-8 rounded-full border-1 border-cyan-500'
        alt='userImg'
      />
      <Card className=' w-3/4 shadow-lg rounded-lg bg-cyan-50 mx-auto my-4'>
        <p className='mx-10 p-4 text-center text-cyan-900 font-medium'>By now, you must have got a pretty decent idea about who I am, what I do and how can we be of help to each other. 
          I am open to opportunities in the domain of Software Development, Analytics, and User Experience. 
          Also, I would also like to know more about the upcoming trends in the above sectors. 
          Also, let me know if I can be of any help to you!</p>
          <br/>
          <p className='text-center font-bold text-cyan-900'>You can also find me on the following channels</p>
          <br/>
          <div className='flex p-2 justify-center'>
            <Link to="https://github.com/antarakundu08/" className='mb-4 mx-3 hover:scale-110 border-2 border-cyan-500 p-2 rounded-lg'>
              <SiGithub size="2rem" color="#09BFC9"/>
            </Link>
            <Link to="https://www.linkedin.com/in/antarakundu17/" className='mb-4 mx-3 hover:scale-110 border-2 border-cyan-500 p-2 rounded-lg'>
              <SiLinkedin size="2rem" color="#09BFC9"/>
            </Link>
            <Link to="https://x.com/antara17_" className='mb-4 mx-3 hover:scale-110 border-2 border-cyan-500 p-2 rounded-lg'>
              <SiTwitter size="2rem" color="#09BFC9"/>
            </Link>
            <Link to="https://medium.com/@antarakundu08" className='mb-4 mx-3 hover:scale-110 border-2 border-cyan-500 p-2 rounded-lg'>
              <SiMedium size="2rem" color="#09BFC9"/>
            </Link>
          </div>
      </Card>
      
      
      <div className='flex justify-center m-2 p-4'>
        <Card className='w-3/4 shadow-lg rounded-lg bg-cyan-50'>
          <form ref={form}>
            <div className='md:flex p-4 pb-0'>
              <div className='md:w-1/2 p-1'>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg className="w-4 h-4 text-cyan-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                  </svg>
                </div>
                <input
                 type="text"
                 className="bg-cyan-50 border border-cyan-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                 placeholder="Amitabh Bachhan" 
                 name="from_name"/>
              </div>
              </div>

              <div className='md:w-1/2 p-1'>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg className="w-4 h-4 text-cyan-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                    </svg>
                  </div>
                  <input
                   type="email" 
                   className="bg-cyan-50 border border-cyan-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-cyan-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                   placeholder="name@gmail.com"
                   name="reply_to"/>
                </div>
              </div>
            </div>
            <div className='p-4'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
            <textarea type="text" rows="5" name="message"
            className="resize-none rounded-lg bg-cyan-50 border border-cyan-400 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="E.g. Hey, Antara! I am Zach from XYZ. I would like to connect with you as I have a/an doubt/opportunity that I would like to share with you. Check if you can help me with it/ if you are interested." /> 
            </div>
            <div className='mb-2 flex justify-center'>
              <button
               className='bg-cyan-500 text-white font-bold px-6 py-1 rounded-md hover:scale-110 '
               onClick={handleEmailSubmit}>
                Send
              </button>
            </div>
            {
              sentEmail && 
              <div className='mb-2 flex justify-center'>
                {sentEmail === 'Successfully sent message to Antara!'} :
                <p className='text-green-700 font-semibold'>{sentEmail}</p> ? 
                <p className='text-red-700 font-semibold'>{sentEmail}</p>
              </div>
            }
            </form>
        </Card>
      </div>
    </div>
    </div>
  )
}

export default Contact