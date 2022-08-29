import React from 'react';
import App1 from '../assets/proyecto1.png';
import App2 from '../assets/proyecto2.png';
import App3 from '../assets/proyecto3.png';
import App4 from '../assets/proyecto4.png';
import App5 from '../assets/proyecto5.png';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';

const Work = () => {
  return (
    <div name='work-to' className='w-full text-gray-300 bg-[#0a192f] h-auto pt-24'>
      <div id='work' className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
          Proyectos
          </p>
          <p className='py-6'>// Estos son algunos de los Proyectos que he realizado.</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(./${App5})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 group-hover:duration-700'>
              <span className='text-lg font-bold text-[#0A192F] tracking-wider'>
                Clon de Netflix
              </span>
              <div className='pt-8 text-center flex justify-center items-center gap-5'>
                <span className='text-2xl font-bold text-[#0A192F] tracking-wider'>En proceso...</span>
                {/* <a href='/'>
                  <AiOutlineEye size={50} className="text-[#0A192F] hover:text-[#E31B6D] duration-300" />
                </a>
                <a href='/'>
                  <AiOutlineGithub size={42} className="text-[#0A192F] hover:text-[#E31B6D] duration-300" />
                </a> */}
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(./${App1})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 group-hover:duration-700'>
              <span className='text-lg font-bold text-[#0A192F] tracking-wider'>
                Consultora EMMA
              </span>
              <div className='pt-8 text-center flex justify-center items-center gap-5'>
                <a href='https://www.emmaconsultora.com.ar/' target="_blank">
                  <AiOutlineEye size={42} className="text-[#0A192F] hover:text-[#E31B6D] duration-300" />
                </a>
                <a href='https://github.com/joelgdeveloper/Consultora-Emma' target="_blank">
                  <AiOutlineGithub size={34} className="text-[#0A192F] hover:text-[#E31B6D] duration-300" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(./${App2})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center group-hover:duration-700'>
              <span className='text-lg font-bold text-[#0A192F] tracking-wider '>
                Clon de Digital Ocean (Front End)
              </span>
              <div className='pt-8 text-center flex justify-center items-center gap-5'>
                <a href='https://joelgdeveloper.github.io/Clon-DigitalOcean/' target="_blank">
                  <AiOutlineEye size={42} className="text-[#0A192F] hover:text-[#E31B6D] duration-300" />
                </a>
                <a href='https://github.com/joelgdeveloper/Clon-DigitalOcean' target="_blank">
                  <AiOutlineGithub size={34} className="text-[#0A192F] hover:text-[#E31B6D] duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(./${App3})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 group-hover:duration-700'>
              <span className='text-2xl font-bold text-[#0A192F] tracking-wider'>
                Heroes SPA
              </span>
              <div className='pt-8 text-center flex justify-center items-center gap-5'>
                <a href='https://heroappjoel.netlify.app/' target="_blank">
                  <AiOutlineEye size={42} className="text-[#0A192F] hover:text-[#E31B6D] duration-300" />
                </a>
                <a href='https://github.com/joelgdeveloper/Heroes-SPA-Single-Page-Application-' target="_blank">
                  <AiOutlineGithub size={34} className="text-[#0A192F] hover:text-[#E31B6D] duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(./${App4})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 group-hover:duration-700'>
              <span className='text-2xl font-bold text-[#0A192F] tracking-wider'>
                Clon de LinkTree
              </span>
              <div className='pt-8 text-center flex justify-center items-center gap-5'>
                <a href='https://joelgdeveloper.github.io/Link-Tree/' target="_blank">
                  <AiOutlineEye size={42} className="text-[#0A192F] hover:text-[#E31B6D] duration-300" />
                </a>
                <a href='https://github.com/joelgdeveloper/Link-Tree' target="_blank">
                  <AiOutlineGithub size={34} className="text-[#0A192F] hover:text-[#E31B6D] duration-300" />
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