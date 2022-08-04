import React, { useState } from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.svg'
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <Link to="home" smooth={true} duration={500} className='cursor-pointer'>
          <img src={Logo} alt="Logo Image" style={{width: '50px'}}/>
        </Link>
        
      </div>

      {/* Menu */}
      
      <ul className='hidden md:flex'>
        <li>
          <Link to="home" spy={true} smooth={true} duration={500} className='hover:text-[#FFD07D] duration-300' >
            Home
          </Link>
        </li>
        <li>
        <Link to="about" spy={true} offset={20} smooth={true} duration={500} className='hover:text-[#FFD07D] duration-300' >
          About me
        </Link>
        </li>
        <li>
          <Link to="skills" spy={true} offset={20} smooth={true} duration={500} className='hover:text-[#FFD07D] duration-300' >
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" spy={true} offset={0} smooth={true} duration={500} className='hover:text-[#FFD07D] duration-300' >
            Works
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} offset={30} smooth={true} duration={500} className='hover:text-[#FFD07D] duration-300' >
            Contact
          </Link>
        </li>
      </ul>
      

      {/* Menu Hamburguer */}

      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars size={25} /> : <FaTimes size={25}/>}
      </div>

      {/* Mobile menu */}
      <ul className={ !nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' }>
        
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to="home" smooth={true} duration={500} >
            Home
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to="about" smooth={true} duration={500} >
            About
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
            Skills
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to="work" smooth={true} duration={500} >
            Work
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to="contact" smooth={true} duration={500} >
            Contact
          </Link>
        </li>
      </ul>


      {/* Social Icons */}
      <div className='hidden lg:flex flex-column fixed top-[35%] left-0 '>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-[400ms] bg-blue-600'>
            <a href="/" className='flex justify-between items-center w-full text-gray-300'>
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-[400ms] bg-[#333333]'>
            <a href="/" className='flex justify-between items-center w-full text-gray-300'>
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-[400ms] bg-[#3b927e]'>
            <a href="/" className='flex justify-between items-center w-full text-gray-300'>
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-[400ms] bg-[#565f69]'>
            <a href="/" className='flex justify-between items-center w-full text-gray-300'>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar