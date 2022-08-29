import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home-to' className='w-full h-screen bg-[#0a192f]'>
      
      {/* Container */}
      <div id='home' className="max-w-[1000px] mx-auto pt-10 md:pt-0 px-8 flex flex-col justify-center items-center h-full">
        <p className='text-[#E31B6D] font-semibold'>Hola, mi nombre es</p>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6] pt-1'>Joel</h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0] text-center pt-1'>Bienvenidos a mi portafolio</h2>
        <p className='text-[#8892b0] py-6 max-w-[700px]'>Soy Desarrollador web Full-Stack, Técnico en informática y Estudiante de Sistemas.
<br />Me fascina la Tecnología y el Conocimiento, es por eso que cada día aprendo algo nuevo.
Actualmente, me encuentro en la búsqueda de mi primera experiencia en el mundo IT.</p>
        <div>
          <Link to="about-to" smooth={true} duration={500}>
            <button className='text-[#FFD07D] group border-2 px-6 py-3 my-5 flex items-center hover:bg-pink-600 hover:border-pink-600 hover:text-[#FFD07D] duration-300'>Comenzar
              <span className='group-hover:rotate-90 group-hover:text-[#FFD07D] duration-300'>
                <HiArrowNarrowRight className='ml-3'/>
              </span>
            </button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Home