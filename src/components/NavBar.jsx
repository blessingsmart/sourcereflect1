import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from "../assets/logo.png";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";



export const NavBar = () => {

  const [nav, setNav] = useState(false);

  const scrollTo = (to) => {
    setNav(false); // Close the mobile menu when clicking a link
    scroll.scrollTo(to);
  };
  
const links = [
  {
      id: 1,
      link: "/",
      title: "Home",
  },
//   {
//       id: 2,
//       link: "Testimonials",
//   },
//   {
//       id: 3,
//       link: "Trainings",
//   },
  {
      id: 4,   
      link: "/about",
      title: "About Us",
  },
  {
      id: 5,   
      to: "Shop",
      title: "Shop",
  },
  {
      id: 6,
      link: "/partner-with-us",
      title: "Partner With Us",
  },
  {
      id: 7,
      to: "Contact",
      title: "Contact",
  },
];

  return (
    <div className='flex justify-between drop-shadow-md sm:px-10 items-center w-screen h-16 bg-gradient-to-r from-green-600 to-lime-600 fixed z-50'>
        <RouterLink to='/' className='flex items-center'>
            <img src={logo} alt="mainlogo" className="w-10 h-10 mr-2" />
            <h1 className='text-lg md:text-xl text-white'>SOURCE REFLECT</h1>
        </RouterLink>
        <ul className="hidden md:flex">
            {links.map(({id, link, title, to}) => (
                <li 
                    key={id} className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200'>
                    {to ? (
                        <ScrollLink
                        to={to}
                        smooth="true"
                        duration={500}
                        className="cursor-pointer"
                        >
                        {title}
                        </ScrollLink>
                    ) : (
                        <RouterLink to={link}>
                        {title}
                        </RouterLink>
                    )}
                </li>
            ))}      
        </ul>

        <div onClick={() => setNav(!nav)}className='cursor-pointer pr-4 z-10 text-white md:hidden'>
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}   
        </div>
        {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-green-600 to-lime-600">

                {links.map(({id, link, title, to}) => (
                    <li 
                        key={id} className='px-4 cursor-pointer text-white capitalize py-6 text-4xl'>
                        {to ? (
                        <ScrollLink
                            to={to}
                            smooth="true"
                            duration={500}
                            className="cursor-pointer"
                            onClick={() => scrollTo(to)}
                        >
                            {title}
                        </ScrollLink>
                        ) : (
                        <RouterLink to={link}>{title}</RouterLink>
                        )}
                    </li>
                ))} 
            </ul>
        )}
    </div>
  );
};

export default NavBar;