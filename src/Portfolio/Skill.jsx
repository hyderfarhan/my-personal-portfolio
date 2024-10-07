import React from 'react'
import "animate.css/animate.compat.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLightbulb , faBook , faHatCowboy } from '@fortawesome/free-solid-svg-icons'

import ScrollAnimation from 'react-animate-on-scroll';
import html from './images/html.png'
import css from './images/css.png'
import js from './images/js.png'
import reactjs from './images/reactjs.png'
import tailwind from './images/tailwindcss.png'
import github from './images/github.png'


export default function Skill() {
  return (
    
     <section id='Skills' className='bg-[#2699fb] w-full min-h-screen p-4'>
     <ScrollAnimation animateIn="fadeup" delay={50}>
        <div className="w-full flex flex-wrap text-center flex-col md:items-center mt-16">
        <p className="text-white text-3xl font-serif">What Skills I Have</p>
        <p className=" text-[#ffcc00] font-bold text-4xl mt-3">Tools & Technologies</p>
        <p className="w-60 hidden md:block border-b-4 border-white mt-3"></p>
      </div></ScrollAnimation>

      <ScrollAnimation animateIn="bounceInRight" delay={200}>
      <div className="md:w-[90%] h-auto mb-8 flex flex-col md:items-center border-2 border-[#001f3f] bg-[#001f3f] text-white mt-16 md:ml-20 rounded-xl">
        <div className="mt-8 text-[#ffcc00]  text-center font-bold md:text-4xl ">Technology I Use (Skills)</div>


        <div className=" md:ml-0 mx-16 p-4 md:flex gap-4">
        <div className='flex flex-col items-center'>
         <img src={html} alt="" />
         <h3 className='md:text-center'>Html</h3>
         </div>
         <div  className='flex flex-col items-center'>
         <img src={css} alt="" />
         <h3 className='md:text-center'>Css</h3>
         </div> 
         <div  className='flex flex-col items-center'>
          <img className='w-32 mt-2' src={js} alt="" />
          <h3 className='md:text-center mt-1'>JavaScript</h3>
         </div>
         <div  className='flex flex-col items-center'>
         <img className='w-32 mt-2' src={reactjs} alt="" />
         <h3 className='md:text-center mt-1'>React</h3>
         </div>
         <div  className='flex flex-col items-center'>
           <img className='w-32 ' src={tailwind} alt="" />
           <h3 className='md:text-center md:mt-2'>Tailwind Css</h3>
         </div>
         <div  className='flex flex-col items-center'>
           <img className='w-32 ' src={github} alt="" />
           <h3  className='md:text-center mt-2'>Github</h3>
         </div>
          </div>
          </div>
       </ScrollAnimation>
       <ScrollAnimation animateIn="fadeup" delay={50}>
        <div className="w-full flex flex-wrap text-center flex-col md:items-center mt-24">
        <p className="text-white text-3xl font-serif">What I Offer</p>
        <p className="text-[#ffcc00] font-bold text-4xl mt-3">My Services</p>
        <p className="w-36 hidden md:block border-b-4 border-white mt-3"></p>
      </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="animate__bounceInUp" delay={300}>
      <div className="w-[100%]  md:flex justify-evenly mt-16 md:ml-4">
      
      <div className=" md:w-[25%] border-2 m-8 text-center border-[#001f3f] rounded-2xl text-white font-serif">
       <div className='bg-[#001f3f] w-full mb-4 text-white text-2xl font-semibold rounded-xl p-8'>
        <h3>Frontend Development</h3>
       </div>
       <div className='text-start'> 
        <ul>
          <li className='p-2 ml-4'>Responsive Web Design: <br />Highlight your ability to create websites that work seamlessly across various devices and screen sizes.</li>
          <li className='p-2 ml-4'>Cross-browser Compatibility: <br /> Emphasize your expertise in ensuring your websites function well on different browsers.</li>
          <li className='p-2 ml-4'>Performance Optimization: <br /> Showcase your skills in optimizing website performance for faster loading times.</li>
        </ul>
        </div>
      </div> 
      
      <div className="md:w-[25%] border-2 m-8 h-[70%] text-start border-[#001f3f] text-white rounded-2xl font-serif">
      <div>
        <div className='text-center bg-[#001f3f] w-full mb-4 text-white text-2xl font-semibold rounded-xl p-8'>UI/UX Design</div>
          <ul>
            <li className='p-3 ml-4'>User Interface (UI) Design: <br />Showcase your proficiency in creating visually appealing and intuitive user interfaces.</li>
            <li className='p-3 ml-4'>User Experience (UX) Design:<br /> Highlight your focus on creating positive user experiences through thoughtful design and usability.</li>
            <li className='p-3 ml-4'>Mention your ability to create prototypes to demonstrate the flow and functionality of websites</li>
          </ul>
        </div>
      </div>
      

      <div className="md:w-[25%] border-2 m-8 text-center border-[#001f3f]   rounded-2xl text-slate-100 font-serif">
        <div>
          <div className='text-center bg-[#001f3f] w-full mb-4 text-white text-2xl font-semibold rounded-xl p-8'>Maintenance and Support</div>
          <div className='text-start'>
          <ul>
            <li className='p-3'>Bug Fixing: Mention your commitment to identifying and resolving issues promptly to ensure a smooth user experience.</li>
            <li className='p-3'>Updates and Upgrades: Highlight your capability to keep websites up-to-date with the latest technologies and trends.</li>
            <li className='p-3'>Ongoing Support: Communicate your dedication to providing support to clients for any post-launch needs.</li>
          </ul>
        </div>
        </div>


        
      </div>

      </div>
     </ScrollAnimation>
    </section>
    
  )
}
