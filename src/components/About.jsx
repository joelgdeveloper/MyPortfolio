import React from 'react'

const About = () => {
  return (
    <div name='about-to' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div id='about' className='flex flex-col justify-center items-center w-full h-full'>
        <div className=''>
          <div className='text-center sm:text-right pb-8 pl-41'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Sobre mi</p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full px-4'>
          
          <div className='mt-5'>
            <p>
            Desde pequeño tuve fascinación por la tecnología, es por eso que a en mi adolescencia ya me dedicaba a hacer servicio técnico de computadoras y desde ese entonces supe que quería pertenecer a este rubro. Actualmente, me dedico a programar, con experiencias siendo freelancer, y lo cual he aprendido un gran stack de tecnologías con un sólido conocimiento.
            <br />Hoy me encuentro en la búsqueda de mi primer empleo, estoy con muchas ganas de participar en equipo, mejorar mis aptitudes y adquirir nuevos conocimientos.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About