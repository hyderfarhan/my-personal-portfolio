import React from 'react'
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLightbulb , faBook , faHatCowboy } from '@fortawesome/free-solid-svg-icons'

export default function About() {
  return (
    
    <section id='About-Me' className="w-full  bg-[#2699fb] min-h-screen p-4">
<div className='mt-12'>
<ScrollAnimation animateIn="fadeup" delay={100}>
      <div className="w-full  flex flex-col text-center items-center">
        <p className="text-white text-3xl mt-4 font-serif">Get To Know</p>
        <p  className="text-[#ffcc00]  font-bold text-4xl mt-3">About Me</p>
        <p className="w-32 hidden md:block border-b-4 border-white mt-3"></p>
      </div></ScrollAnimation>
      
      

      <ScrollAnimation animateIn="bounceInLeft" delay={200}>

      <div className="md:w-[100%] md:h-52 md:flex justify-evenly mt-16 p-2 md:ml-4">
      
        <div className="md:w-[25%] mt-3  flex flex-col items-center bg-[#001f3f] text-[#ffff] border-2 border-slate-700  hover:text-white hover:bg-[#2699fb]  hover:border-white  rounded-xl  p-8  text-2xl">
          <p className=""><FontAwesomeIcon className='' icon={faLightbulb} /></p>
          <p>Experience</p>
          <p className="mt-3 mb-2">3+ Months</p>
        </div> 
    
        <div className="md:w-[25%] mt-3 flex flex-col p-8 items-center  bg-[#001f3f] text-[#ffff] border-2 border-slate-700  hover:text-white hover:bg-[#2699fb]  hover:border-white rounded-xl text-2xl">
          <ul>
            <li className="text-center">
            <FontAwesomeIcon icon={faHatCowboy}/>
            </li>
            <li className="mt-5 text-center">Front-End Developer</li>
            {/* <li className="mt-2">Voice Artist</li>
            <li className="mt-2">Content Writer</li> */}
          </ul>
        </div>

        <div className="md:w-[25%] mt-3 flex flex-col items-center  bg-[#001f3f] text-[#ffff] border-2 border-slate-700  hover:text-white hover:bg-[#2699fb]  hover:border-white rounded-xl p-8 text-2xl">
          <p className=""><FontAwesomeIcon classNameName='' icon={faBook}/></p>
          <p>Projects</p>
          <p className="ml-3 mt-3">5+</p>
        </div>

        </div>
        <ScrollAnimation animateIn="bounceInLeft" delay={200}>
       <div className="md:w-[90%] h-auto mb-8 flex flex-col md:items-center justify-center border-2 border-[#001f3f] bg-[#001f3f] text-white mt-16 md:ml-20 rounded-xl">
        <div className="mt-16 text-[#ffcc00] font-bold text-4xl text-center">Who Am I</div>
        <div className="md:mx-16 p-8 text-start justify-center">
          I am a 19 years old dedicated Frontend Developer specializing in
          React.js, Tailwind CSS, and Ant Design. With 3+ Month of experience, I
          have honed my skills in crafting responsive and user-friendly web
          applications. My proficiency lies in translating design concepts into
          efficient and elegant code. Currently open to new opportunities, I am
          eager to contribute my expertise to innovative projects and further
          enhance my skills in the dynamic field of web development, and I'm
          fully prepare for the challengs next to come and I am exited to
          contribute with any company to just learn and applay my concepts of
          skills.
        </div>
       </div>
       </ScrollAnimation>
      </ScrollAnimation>
      </div>
    </section>
    
  )
}
