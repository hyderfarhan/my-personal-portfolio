import React from 'react'
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (

      <section id='Home' className='w-full bg-[#2699fb] md:min-h-screen p-4 md:flex justify-around'>
 
        <div className=' md:w-1/3 md:mt-24 mt-10 flex flex-col gap-12'>
            <div>
           <p className='text-xl text-white font-serif'>Welcome To My World</p> 
           <h1 className='text-3xl font-bold mr-6 mt-4 text-white'>Hey, I'm <span className='text-[#ffcc00] text-4xl font-extrabold'>Farhan Hyder</span></h1>
           <div className='md:hidden block w-1/6 mt-12'>LAANAAT ON ZUBAIR</div>
           <h1 className=' text-2xl md:text-4xl font-bold  mt-4 font-sans text-white'>Frontend Developer</h1>
           <p className='mt-6 text-white'>Explore my portfolio to witness the art of designing sleek websites with a touch of innovation. Let's collaborate to elevate your online presence through captivating user experiences!</p>
        </div>

        <div className='flex justify-between'>
            <div className=' w-28'>
                <p className=' text-white'>Find With Me...</p>


                <div className='flex justify-between mt-2'>

                <a
                href="#"
                class="bg-white border-2 border-white rounded"
              ><FontAwesomeIcon className='w-6' icon={faInstagram} /></a>
               <a
                href="#"
                class="bg-white border-2 border-white rounded"
              > <FontAwesomeIcon className='w-6' icon={faFacebook} /> </a>
                <a
                href="#"
                class="bg-white border-2 border-white rounded"
              ><FontAwesomeIcon className='w-6' icon={faLinkedin} /></a>
                </div>


            </div>

            
           <div> <p className='w-32 text-center bg-white text-slate-700 border-2 border-white cursor-pointer  hover:text-white hover:bg-[#2699fb] p-2 font-semibold md:mx-2 rounded-lg md:mt-4 mt-2'>Download Cv</p>
           </div>
        </div>
        </div>

        
        <div className='hidden md:block w-1/6 mt-32'>LAANAAT ON ZUBAIR</div>

      </section>
    
  )
}
