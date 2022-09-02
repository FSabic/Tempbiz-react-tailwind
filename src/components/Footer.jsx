import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa'

function Footer() {
  return (
    <div className='w-full bg-gradient-to-b from-gray-700'>
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#8fb7e4] font-Antic filter drop-shadow-lg'>TEMPBIZ.</h1>
                <p className='py-2 text-sm text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nostrum totam eligendi dignissimos, libero atque consequatur vero odit tenetur deserunt necessitatibus itaque ratione obcaecati minima, autem magnam. Eos, iste distinctio.</p>
                <div className='flex justify-between md:w-[75%] my-6'> 
                    <a className='hover:text-gray-800 ease-in-out duration-300' href=""><FaFacebookSquare size={30}/></a>
                    <a className='hover:text-gray-800 ease-in-out duration-300' href=""><FaInstagram size={30}/></a>
                    <a className='hover:text-gray-800 ease-in-out duration-300' href=""><FaDribbbleSquare size={30}/></a>
                    <a className='hover:text-gray-800 ease-in-out duration-300' href=""><FaGithubSquare size={30}/></a>
                    <a className='hover:text-gray-800 ease-in-out duration-300' href=""><FaTwitterSquare size={30}/></a>
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-8'>
                <div>
                    <h6 className=' text-gray-500 font-bold'>Solutions</h6>
                    <ul>
                        <li className='py-1 text-sm border-b border-b-gray-800'>Analytics</li>
                        <li className='py-1 text-sm border-b border-b-gray-800'>Marketing</li>
                        <li className='py-1 text-sm border-b border-b-gray-800'>Commerce</li>
                        <li className='py-1 text-sm border-b border-b-gray-800'>Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold text-gray-500'>Support</h6>
                    <ul>
                        <li className='py-1 text-sm border-b border-b-gray-800'>Pricing</li>
                        <li className='py-1 text-sm border-b border-b-gray-800'>Documentation</li>
                        <li className='py-1 text-sm border-b border-b-gray-800'>Guides</li>
                        <li className='py-1 text-sm border-b border-b-gray-800'>API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold text-gray-500'>Company</h6>
                    <ul>
                        <li className='py-1 text-sm border-b border-b-gray-800'>About</li>
                        <li className='py-1 text-sm  border-b border-b-gray-800'>Blog</li>
                        <li className='py-1 text-sm border-b border-b-gray-800'>Jobs</li>
                        <li className='py-1 text-sm border-b border-b-gray-800'>Press</li>
                        <li className='py-1 text-sm border-b border-b-gray-800'>Careers</li>

                    </ul>
                </div>
                <div>
                    <h6 className='font-bold text-gray-500'>Legal</h6>
                    <ul>
                        <li className='py-1 text-sm border-b border-b-gray-800'>Claim</li>
                        <li className='py-1 text-sm border-b border-b-gray-800'>Policy</li>
                        <li className='py-1 text-sm border-b border-b-gray-800'>Terms</li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer