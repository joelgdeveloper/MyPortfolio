import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home-to' className='w-full h-screen bg-[#0a192f]'>
      
      {/* Container */}
      <div id='home' className="max-w-[1000px] mx-auto pt-10 md:pt-0 px-8 flex flex-col justify-center items-center h-full">
        <p className='text-[#E31B6D] font-semibold'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6] pt-1'>Joel Gomez</h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0] text-center pt-1'>i'm a Full stack Developer.</h2>
        <p className='text-[#8892b0] py-6 max-w-[700px]'>I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.</p>
        <div>
          <Link to="about" smooth={true} duration={500}>
            <button className='text-[#FFD07D] group border-2 px-6 py-3 my-5 flex items-center hover:bg-pink-600 hover:border-pink-600 hover:text-[#FFD07D] duration-300'>View Works
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