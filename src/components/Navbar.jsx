import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = ()  => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='flex justify-between  items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#8fb7e4] font-Antic filter drop-shadow-lg' >TEMPBIZ.</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'><a href="#" className='hover:text-[#8fb7e4] ease-in-out duration-500'>Home</a></li>
                <li className='p-4'><a href="#" className='hover:text-[#8fb7e4] ease-in-out duration-500'>About</a></li>
                <li className='p-4'><a href="#" className='hover:text-[#8fb7e4] ease-in-out duration-500'>Services</a></li>
                <li className='p-4'><a href="#" className='hover:text-[#8fb7e4] ease-in-out duration-500'>Pricing</a></li>
                <li className='p-4'><a href="#" className='hover:text-[#8fb7e4] ease-in-out duration-500'>Contact</a></li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                
            </div>
        <div className={nav ? 'fixed  md:hidden left-0 top-0 w-[80%] h-full border-r border-r-gray-900  bg-[#000300] bg-opacity-80 ease-in-out duration-500' : 'fixed left-[-100%]'}>
                
                <ul className='p-4 uppercase mt-20 '> 
                    <li className='p-4 border-b border-b-gray-600'><a href="#" className='hover:text-[#8fb7e4] ease-in-out duration-500'>Home</a></li>
                    <li className='p-4 border-b border-b-gray-600'><a href="#" className='hover:text-[#8fb7e4] ease-in-out duration-500'>About</a></li>
                    <li className='p-4 border-b border-b-gray-600'><a href="#" className='hover:text-[#8fb7e4] ease-in-out duration-500'>Services</a></li>
                    <li className='p-4 border-b border-b-gray-600'><a href="#" className='hover:text-[#8fb7e4] ease-in-out duration-500'>Pricing</a></li>
                    <li className='p-4'><a href="#" className='hover:text-[#8fb7e4] ease-in-out duration-500'>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar