import React from 'react'
import "animate.css/animate.compat.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLightbulb , faBook , faHatCowboy } from '@fortawesome/free-solid-svg-icons'
import ScrollAnimation from 'react-animate-on-scroll';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Projects() {
  return (


   <section id='Projects' className='bg-[#2699fb] w-full min-h-screen p-4'>
     <ScrollAnimation animateIn="fadeup" delay={50}>
        <div className="w-full flex flex-wrap text-center flex-col md:items-center mt-24">
        <p className="text-white text-3xl font-serif">My Recent Work</p>
        <p className="text-[#ffcc00] font-bold text-4xl mt-3">Projects..</p>
        <p className="hidden md:block w-32 border-b-4 border-white mt-3"></p>
      </div></ScrollAnimation>


      <ScrollAnimation animateIn="bouncInDown" delay={50}>
      <div className='w-[100%] md:flex justify-between p-8'>
      
 <div className='md:w-[23%] flex flex-col mt-8 border-2 border-white bg-[#001f3f] rounded-xl hover:bg-[#2699fb]  text-white'>
    <div className='text-center p-4 text-3xl mb-8'><h3>My Personal Portfolio</h3></div>
    <div className='text-center mb-6 hover:underline font-serif text-xl'><a href="/#">Click Here To Go..</a>
    </div>
    </div>
   

<div className='md:w-[23%] flex flex-col mt-8 border-2 border-white bg-[#001f3f] text-white hover:bg-[#2699fb]  rounded-xl'>
    <div className='text-center p-4 text-3xl mb-8'>
        <h3>Resturant Menu Project</h3></div>
    <div className='text-center mb-6 hover:underline font-serif text-xl'><a href="/#">Click Here To Go..</a>
    </div>
    </div>

<div className='md:w-[23%] flex flex-col mt-8 border-2 border-white bg-[#001f3f] text-white hover:bg-[#2699fb]  rounded-xl'>
    <div className='text-center p-4 text-3xl mb-8'><h3>Movie Search App</h3></div>
    <div className='text-center mb-6 hover:underline font-serif text-xl'><a href="/#">Click Here To Go..</a>
    </div>
    </div>

<div className='md:w-[23%] flex flex-col mt-8 border-2 border-white bg-[#001f3f] text-white hover:bg-[#2699fb]  rounded-xl'>
   <div className='text-center p-4 text-3xl mb-8'><h3>Image Generator App</h3></div> 
   <div className='text-center mb-6 hover:underline font-serif text-xl'><a href="/#">Click Here To Go..</a>
   </div>
   </div>
</div>

</ScrollAnimation>

  <div className="w-full flex flex-col  mt-24 mb-8">
        <p className="text-white text-start font-bold text-4xl md:ml-8">Need a sleek, responsive website?</p>
        <p className="text-[#ffcc00] font-bold text-4xl md:ml-8">Let's Chat!</p>
        <button className='text-start mt-8 md:ml-8'> <a href="/#" className='bg-white text-slate-700 border-2 border-white cursor-pointer  hover:text-white hover:bg-[#2699fb]   w-32 hover:border-2 hover:border-white p-4 font-semibold rounded-lg md:m-2 mt-4'>Whatsapp <FontAwesomeIcon className='w-6 mt-1' icon={faWhatsapp} /></a>
        </button>
      </div>
    
   </section>
  )
}
