import React from 'react';
import WorkImg from '../assets/workImg.jpeg';
import realEstate from '../assets/realestate.jpg';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';

const Work = () => {
  return (
    <div name='work' className='w-full text-gray-300 bg-[#0a192f] h-auto pt-24'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 group-hover:duration-700'>
              <span className='text-2xl font-bold text-[#0A192F] tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center flex justify-center items-center gap-5'>
                <a href='/'>
                  <AiOutlineEye size={50} className="text-[#0A192F] hover:text-[#E31B6D] duration-300" />
                </a>
                <a href='/'>
                  <AiOutlineGithub size={42} className="text-[#0A192F] hover:text-[#E31B6D] duration-300" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 group-hover:duration-700'>
              <span className='text-2xl font-bold text-[#0A192F] tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center flex justify-center items-center gap-5'>
                <a href='/'>
                  <AiOutlineEye size={50} className="text-[#0A192F] hover:text-[#E31B6D] duration-300" />
                </a>
                <a href='/'>
                  <AiOutlineGithub size={42} className="text-[#0A192F] hover:text-[#E31B6D] duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 group-hover:duration-700'>
              <span className='text-2xl font-bold text-[#0A192F] tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center flex justify-center items-center gap-5'>
                <a href='/'>
                  <AiOutlineEye size={50} className="text-[#0A192F] hover:text-[#E31B6D] duration-300" />
                </a>
                <a href='/'>
                  <AiOutlineGithub size={42} className="text-[#0A192F] hover:text-[#E31B6D] duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 group-hover:duration-700'>
              <span className='text-2xl font-bold text-[#0A192F] tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center flex justify-center items-center gap-5'>
                <a href='/'>
                  <AiOutlineEye size={50} className="text-[#0A192F] hover:text-[#E31B6D] duration-300" />
                </a>
                <a href='/'>
                  <AiOutlineGithub size={42} className="text-[#0A192F] hover:text-[#E31B6D] duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 group-hover:duration-700'>
              <span className='text-2xl font-bold text-[#0A192F] tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center flex justify-center items-center gap-5'>
                <a href='/'>
                  <AiOutlineEye size={50} className="text-[#0A192F] hover:text-[#E31B6D] duration-300" />
                </a>
                <a href='/'>
                  <AiOutlineGithub size={42} className="text-[#0A192F] hover:text-[#E31B6D] duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 group-hover:duration-700'>
              <span className='text-2xl font-bold text-[#0A192F] tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center flex justify-center items-center gap-5'>
                <a href='/'>
                  <AiOutlineEye size={50} className="text-[#0A192F] hover:text-[#E31B6D] duration-300" />
                </a>
                <a href='/'>
                  <AiOutlineGithub size={42} className="text-[#0A192F] hover:text-[#E31B6D] duration-300" />
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Work;