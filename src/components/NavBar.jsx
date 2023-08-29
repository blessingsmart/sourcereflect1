import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from "../assets/logo.png";
import { Link } from "react-scroll";



export const NavBar = () => {

  const [nav, setNav] = useState(false);
  
const links = [
  {
      id: 1,
      link: "Home",
  },
  {
      id: 2,
      link: "Testimonials",
  },
  {
      id: 3,
      link: "Trainings",
  },
  {
      id: 4,   
      link: "About",
  },
  {
      id: 5,
      link: "Contact",
  },
];

  return (
    <div className='flex justify-between sm:px-10 items-center w-full h-20 bg-gradient-to-r from-green-600 to-lime-600 fixed z-20'>
      <div className='flex items-center'>
        <img src={logo} alt="mainlogo" className="w-12 h-12 mr-2" />
        <h1 className='text-lg md:text-2xl text-white'>SOURCE REFLECT</h1>
      </div>
      <ul className="hidden md:flex">
            {links.map(({id, link}) => (
                <li 
                    key={id} className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200'>
                    <Link to={link} smooth duration={500}>{link} </Link>
                </li>
            ))}      
      </ul>

      <div onClick={() => setNav(!nav)}className='cursor-pointer pr-4 z-10 text-white md:hidden'>
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}   
        </div>

        {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-green-600 to-lime-600">

                {links.map(({id, link}) => (
                    <li 
                        key={id} className='px-4 cursor-pointer text-white capitalize py-6 text-4xl'>
                        <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                    </li>
                ))} 
            </ul>
        )}
    </div>
  );
};

export default NavBar;