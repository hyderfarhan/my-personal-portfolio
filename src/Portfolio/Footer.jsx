import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <section className='bg-[#001f3f] w-full p-4'>
<div className='md:flex justify-between'>
    <div className='font-thin flex text-white'><h4>Farhan<br />Hyder</h4>
    <img className='mt-2 p-2' src="" alt="image" />
    </div>
    <div className='font-mono mt-3 text-white'>© Farhan Hyder. All rights reserve 2024</div>
    <div className='mt-3  '>
         <a href="/#" className="bg-white  border-2 m-1 border-black rounded-full"><FontAwesomeIcon className='w-6' icon={faLinkedin} /></a>
         <a href="/#" className="bg-white  border-2 m-1 border-black rounded-full"><FontAwesomeIcon className='w-6' icon={faInstagram} /></a>
         <a href="/#" className="bg-white  border-2 m-1 border-black rounded-full"><FontAwesomeIcon className='w-6' icon={faFacebook} /></a>
         <a href="/#" className="bg-white  border-2 m-1 border-black rounded-full"><FontAwesomeIcon className='w-6' icon={faGithub} /></a>
    </div>
</div>
    </section>
      
    
  )
}
