import React from 'react';
import Typed from 'react-typed';
import Bghero from '../assets/bg-hero.jpg'

const Hero = () => {
    return (
        <div style={{ backgroundImage:`url(${Bghero})` }} className='text-white bg-cover bg-fixed bg-no-repeat bg-blend-overlay bg-gray-800'>
            <div className='max-w-[1000px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#8fb7e4] uppercase font-bold'>Lighting fast workflow.</p>
                <h1 className='md:text-7xl sm:text-6xl text-5xl font-bold py-2'>Built exclusively for you.</h1>
                <div className='flex items-center justify-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-2'>Landing templates for</p>
                    <Typed  className='md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4' strings={['developers', 'designers', 'teams']} typeSpeed={120} backSpeed={140} loop />
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-400 mx-auto px-2'>Our landing page templates works on all devices, so you only have to set it up once, and get beautiful results forever. </p>
                <button className='bg-[#8fb7e4] w-[200px] rounded-lg font-medium my-6 mx-auto py-3 text-black hover:text-gray-300 hover:bg-[#475d75] ease-in-out duration-500'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero