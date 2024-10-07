import React, { useState } from 'react'
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll'; 

export default function Header() {

  const[toggle,Settoggle]=useState(false)
  return (
   
    <nav class="w-full sticky top-0 z-50 h-20 flex justify-between items-center  bg-[#001f3f]">

    <div class="font-bold text-white text-2xl ml-4">
      <img src="" alt="" />
      <p>FARHAN</p>
    </div>

    <div>
      <ul class="hidden md:flex justify-between">
        <a
          href="#Home"
          class="p-4 text-white text-xl cursor-pointer hover:underline"
        >
          Home
        </a>

        <a
          href="#About-Me"
          class="p-4 text-white text-xl cursor-pointer hover:underline"
        >
          About Me
        </a>
        <a
          href="#Skills"
          class="p-4 text-white text-xl cursor-pointer hover:underline"
        >
          Skills
        </a>
        <a
          href="#Projects"
          class="p-4 text-white text-xl cursor-pointer hover:underline"
        >
          Projects
        </a>
      </ul>

      {/* [responsive ul here] */}
      <ul className={`duration-300 md:hidden w-full h-screen flex flex-col text-white fixed bg-black top-24
       ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
        <a
          href="#Home"
          class="p-2 text-white text-lg cursor-pointer hover:underline"
        >
          Home
        </a>
        <br />  

        <a
          href="#About-Me"
          class="p-2 text-white text-lg cursor-pointer hover:underline"
        >
          About Me
        </a>

        <br />
        <a
          href="#Skills"
          class="p-2 text-white text-lg cursor-pointer hover:underline"
        >
          Skills
        </a>
        <br />
        <a
          href="/#Projects"
          class="p-2 text-white text-lg cursor-pointer hover:underline"
        >
          Projects
        </a>
        <br />
      </ul>
    </div>

    <div>
      <p
        class="hidden md:block bg-white text-slate-700 border-2 border-white cursor-pointer  hover:text-white hover:bg-[#001f3f] p-2 font-semibold mx-2 rounded-lg mr-4"
      >
        Contact Me
      </p>
    </div>

    <div class="md:hidden">
      {
        toggle
        ?
      <p onClick={()=>Settoggle(!toggle)}  className='text-2xl text-white font-bold mr-2 cursor-pointer'>&#10005;</p>
      :
      <p onClick={()=>Settoggle(!toggle)} className="text-4xl text-white font-bold mr-2 cursor-pointer">&#8801;</p>
      }
       
    </div>

  </nav>
  
  )
}
