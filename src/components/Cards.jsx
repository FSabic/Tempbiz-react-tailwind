import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
import {
    FiUser,
    FiUsers,
    FiUserCheck,
    } from 'react-icons/fi'


const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-xl hover:scale-105 duration-300'>
                <div className='mx-auto mt-[-3rem] bg-transparent' >
                <FiUser size={60}/>
                </div>
                <h2 className='text-2xl font-bold text-center py-8'>Free Plan</h2>
                <p className='text-4xl font-bold text-center'>$0</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Quam adipiscing vitae proin</p>
                    <p className='py-2 border-b mx-8'>Nec feugiat nisl pretium</p>
                    <p className='py-2 border-b mx-8'>Nulla at volutpat diam uteera</p>
                </div>
                <button className='bg-[#8fb7e4] w-[200px] rounded-lg font-medium my-6 mx-auto py-3 text-black hover:text-gray-300 hover:bg-[#475d75]  ease-in-out duration-500'>Star Free</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 md:my-0 bg-gray-100 my-8 rounded-xl hover:scale-105 duration-300'>
            <div className='mx-auto mt-[-3rem] bg-transparent' >
                <FiUserCheck size={60}/>
                </div>
                <h2 className='text-2xl font-bold text-center py-8'>Business Plan</h2>
                <p className='text-4xl font-bold text-center'>$49</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Quam adipiscing vitae proin</p>
                    <p className='py-2 border-b mx-8'>Nec feugiat nisl pretium</p>
                    <p className='py-2 border-b mx-8'>Nulla at volutpat diam uteera</p>
                    <p className='py-2 border-b mx-8'>Pharetra massa massa ultricies</p>
                </div>
                <button className='bg-black text-[#8fb7e4] w-[200px] rounded-lg font-medium my-6 mx-auto py-3 hover:text-black hover:bg-gray-400  ease-in-out duration-500'>Star Business</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-xl hover:scale-105 duration-300'>
            <div className='mx-auto mt-[-3rem] bg-transparent' >
                <FiUsers size={60}/>
                </div>
                <h2 className='text-2xl font-bold text-center py-8'>Delevoper Plan</h2>
                <p className='text-4xl font-bold text-center'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Quam adipiscing vitae proin</p>
                    <p className='py-2 border-b mx-8'>Nec feugiat nisl pretium</p>
                    <p className='py-2 border-b mx-8'>Nulla at volutpat diam uteera</p>
                    <p className='py-2 border-b mx-8'>Pharetra massa massa ultricies</p>
                    <p className='py-2 border-b mx-8'>Massa ultricies mi quis hendrerit</p>
                </div>
                <button className='bg-[#8fb7e4] w-[200px] rounded-lg font-medium my-6 mx-auto py-3 text-black hover:text-gray-300 hover:bg-[#475d75]  ease-in-out duration-500'>Star Developer</button>
            </div>
        </div>
    </div>
  )
}

export default Cards