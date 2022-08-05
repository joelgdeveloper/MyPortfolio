import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full pt-[135px] md:pt-[150px] bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/0277bed4-ba8a-4960-92c1-3666906f2b9d" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - myemail@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2 focus:outline-none' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] focus:outline-none' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 focus:outline-none' name="message" rows="6" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 hover:text-[#FFD07D] px-4 py-3 my-8 mx-auto flex items-center duration-300'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact