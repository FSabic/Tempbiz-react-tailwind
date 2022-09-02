import React from 'react'
import AnalyticsBg from '../assets/analytics.png'


const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4 ' src={AnalyticsBg} alt="/" />
                <div className='flex flex-col justify-center'>
                <p className='text-[#8fb7e4] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sn:text-3xl text-2xl font-bold py-2'>Better Solutions For Your Business</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque maiores est tempore nam reprehenderit vero, beatae sit officiis, voluptatem alias atque odio aliquam. Dignissimos in porro ipsum. Expedita, necessitatibus numquam!</p>
            <button className='bg-[#8fb7e4] w-[200px] rounded-lg font-medium my-6 mx-auto md:mx-0 py-3 text-black hover:text-gray-300 hover:bg-[#475d75]  ease-in-out duration-500'>Get Started</button>
            </div>

            </div>
        </div>
    )
}

export default Analytics