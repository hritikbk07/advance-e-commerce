"use client"
import React, { useState } from 'react'
import { FaRegUserCircle, FaShoppingCart, FaSearch, FaHome} from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);
 const toggleMenu = () => {
    setIsOpen(!isOpen);
 };
 console.log(isOpen);

  return (
    <nav className = "bg-gradient-to-r from-green-100 via-white to-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* logo */}
          <div className='flex shrink-0'>
            
            < h1 className='text-gray-700 hover:text-green-600'>
              <FaHome className='text-2xl'/>
            </h1>
          </div>
          {/* search*/}
          <div className="flex-1 mx-4">
            <div className="relative">
              <input
                type="search"
                name=""
                id=""
                className="w-full bg-gray-200 rounded-full ps-4 pe-10 py-2 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <FaSearch className="absolute right-3 top-3 text-sm text-gray-500 " />
            </div>
          </div>
          {/* menu items */}
          <div className='hidden md:flex items-center space-x-6'>
            <h1 className='text-gray-700 hover:text-green-600'>
             <FaRegUserCircle className='text-2xl'/>
            </h1>
            <h1 className='text-gray-700 hover:text-green-600'>
             <ShoppingCart className='text-green-600 text-3xl'/>
            </h1>
            <h1 className='text-gray-700 hover:text-green-600'>
             <MdContactSupport className='text-2xl'/>
            </h1>
          </div>
          {/* toggle button */}
          <div className='md:hidden flex items-center'>
            <button onClick={toggleMenu}>
              <GiHamburgerMenu />
            </button>
          </div>     
        </div>  
      </div>
      {/* mobile menu */}
          {isOpen && (
            <div className='md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow-md'>
              <h1  className='block text-gray-600 hover:text-green-600'>Home</h1>
              <h1  className='block text-gray-600 hover:text-green-600'>Cart</h1>
              <h1  className='block text-gray-600 hover:text-green-600'>User</h1>
            </div>
          )}
    </nav>
  )
  
}

export default Navbar
