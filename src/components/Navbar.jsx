import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    const linkClass = ({ isActive }) => isActive ? 'text-white bg-black px-3 py-2 rounded-md hover:text-white hover:bg-gray-900' : 'text-white  px-3 py-2 rounded-md hover:text-white hover:bg-gray-900'
    return (
        <nav className='bg-indigo-700 border-b border-indigo-500'>
            <div className='max-w-7xl mx-auto pl-2 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-20'>
                    <div className='flex flex-1 items-center  md:items-stretch justify-center md:justify-start'>
                        <a href='/' className='flex flex-shrink-0 items-center mr-4 '>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png' alt='' className='h-12 w-12 py-2 px-2 bg-white rounded-full' />
                            <span className='hidden md:block text-2xl text-white fontbold ml-2'>React Jobs</span>
                        </a>
                        <div className='md:ml-auto'>
                            <div className='flex space-x-2'>
                                <NavLink to='/' className={linkClass}>Home</NavLink>
                                <NavLink to='/jobs' className={linkClass}>Jobs</NavLink>
                                <NavLink to='/add-jobs' className={linkClass}>Add Job</NavLink>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar