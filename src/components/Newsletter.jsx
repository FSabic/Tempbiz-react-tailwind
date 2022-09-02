import React from 'react'
import Bgnews from '../assets/bg-news.jpg'

function Newsletter() {
  return (
    <div style={{ backgroundImage:`url(${Bgnews})` }} className='w-full py-16 text-white bg-cover bg-fixed bg-no-repeat bg-blend-overlay bg-gray-700'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 px-4'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input className='p-3 rounded-lg w-full text-black ' type="email" placeholder='Enter Email' />
            <button className='bg-[#8fb7e4] w-[200px] rounded-lg font-medium sm:ml-4 my-6 py-3 text-black hover:text-gray-300 hover:bg-[#475d75] ease-in-out duration-500 mx-auto'>Notify Me</button>
          </div>
          <p>We care about protection of your data. Read our <span className='text-[#8fb7e4]'>Privacy Policy</span></p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter