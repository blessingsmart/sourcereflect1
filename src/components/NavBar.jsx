import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from "../assets/logo.png";

export const NavBar = () => {
  return (
    <div className='flex justify-between items-center w-full h-20 bg-green-400 fixed'>
      <div className='flex flex-col justify-between'>
        <div>
          <img src={logo} alt="mainlogo" className=' '/> 
        </div>
        <div>
          <h1 className='text-50 text-black'>SOURCE REFLECT</h1>
        </div>
      </div>
    </div>
  )
}
