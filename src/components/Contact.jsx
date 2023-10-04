import React from 'react'
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import  social  from "../data/sociallink";

export const Contact = () => {
  const links = [
    {
        id: 1,
        link: "/",
        title: "Home",
    },
    {
        id: 2,
        to: "Testimonials",
        title: "Testimonials",
    },
    {
        id: 3,
        link: "Training Program",
        title: "Training Programs"
    },
    {
        id: 4,   
        link: "/about",
        title:"About Us"
    },
    {
        id: 5,   
        to: "Shop",
        title: "Shop"
    },
    {
        id: 6,
        link: "/partner-with-us",
        title: "Partner With Us"
    },
];

  return (
    <div name="Contact" className='bg-gradient-to-r from-green-600 to-lime-600 w-full'>
      <div className='flex flex-col items-center sm:flex-row p-20 text-white sm:justify-between'>
                  <div className='flex flex-col items-center gap-2'> 
                    <h1 className='md:text-3xl text-lg text-blue-300 pb-5'>CONTACT US</h1>
                    <div className='flex flex-col md:flex-row md:gap-2 items-center'>
                      <p className='font-medium'>Email:</p> <p>welldoericon@gmail.com</p>
                    </div>
                    <div className='flex flex-col md:flex-row md:gap-2 items-center'>
                      <p className='font-medium'>Phone:</p><p> +234 708 451 9109</p>
                    </div>
                    <p> +234 816 670 6620</p>
                  </div>
                  <ul className="pt-10 flex flex-col items-center text-center">
                      {links.map(({id, link, title, to}) => (
                          <li 
                              key={id} className='cursor-pointer capitalize font-medium hover:scale-105 duration-200'>
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
                  <div className='flex flex-col items-center mt-10'>
                    <div className='md:text-3xl text-lg text-blue-300'>Get In Touch</div>
                        <ul className='flex justify-between items-center  pt-5'>
                          {social.map(({id, child, href}) => (
                            <li 
                              key={id} 
                              className={
                                `hover:scale-105 m-1`
                              }
                            >
                              <a 
                                href={href} 
                                target='_blank'
                                rel='noopener noreferrer'
                              >
                                {child}
                            </a>
                            </li>
                          ))} 
                        </ul>
            </div>
      </div>      
    </div>
  )
}
export default Contact;