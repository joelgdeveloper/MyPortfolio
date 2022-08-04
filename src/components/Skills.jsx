import React from 'react'
import Html from '../assets/html-5.svg'
import Css from '../assets/css-3.svg'
import Javascript from '../assets/javascript.svg'
import ReactImg from '../assets/react.svg'
import Sass from '../assets/sass.svg'
import Tailwind from '../assets/tailwindcss.svg'
import Node from '../assets/nodejs-icon.svg'
import Express from '../assets/express.svg'
import Mongo from '../assets/mongodb.svg'
import Npm from '../assets/npm.svg'
import Git from '../assets/git-icon.svg'
import Heroku from '../assets/heroku.svg'

const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex-col justify-center w-full h-auto pt-32'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Experience</p>
          <p className='py-4'>// These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Html} alt="HTML Icon" className='w-20 mx-auto' />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Css} alt="HTML Icon" className='w-20 mx-auto' />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Javascript} alt="HTML Icon" className='w-20 mx-auto' />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={ReactImg} alt="HTML Icon" className='w-20 mx-auto' />
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Sass} alt="HTML Icon" className='w-20 mx-auto' />
            <p className='my-4'>Sass</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Tailwind} alt="HTML Icon" className='w-20 mx-auto' />
            <p className='my-4'>Tailwind CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Node} alt="HTML Icon" className='w-20 mx-auto' />
            <p className='my-4'>Node JS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Express} alt="HTML Icon" className='w-20 mx-auto' />
            <p className='my-4'>Express JS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Mongo} alt="HTML Icon" className='w-20 mx-auto' />
            <p className='my-4'>Mongo DB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Npm} alt="HTML Icon" className='w-20 mx-auto' />
            <p className='my-4'>NPM</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Git} alt="HTML Icon" className='w-20 mx-auto' />
            <p className='my-4'>Git</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Heroku} alt="HTML Icon" className='w-20 mx-auto' />
            <p className='my-4'>Heroku</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills