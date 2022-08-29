import React, {useEffect, useState} from 'react'

const Contact = () => {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  
  useEffect(() => {
    setInputs("");
  }, []);

  return (

    <div name='contact-to' className='w-full pt-[135px] md:pt-[150px] bg-[#0a192f]'>
      <div id='contact' className='flex justify-center items-center p-4'>

        <form method='POST' action="https://getform.io/f/cc1f04fd-0a64-42e9-8b5c-01032d13eb54" className='flex flex-col max-w-[600px] w-full' >
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contáctame</p>
            <p className='text-gray-300 py-4'>// Contactame para cualquier consulta - También lo puedes  hacer en joelgdeveloper@gmail.com</p>
          </div>
          
          <input className='bg-[#ccd6f6] p-2 focus:outline-none' type="text" value={inputs.name || ""} placeholder='Name' name='name' onChange={handleChange} />

          <input className='my-4 p-2 bg-[#ccd6f6] focus:outline-none' type="email" value={inputs.email || ""}  placeholder='Email' name='email' onChange={handleChange} />

          <textarea className='bg-[#ccd6f6] p-2 focus:outline-none' value={inputs.message || ""} name="message" rows="6" placeholder='Message' onChange={handleChange}></textarea>

          <button 
            className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 hover:text-[#FFD07D] px-4 py-3 my-8 mx-auto flex items-center duration-300'
            type="submit"
          >Enviar Consulta</button>
        </form>

      </div>
    </div>
  )
}

export default Contact