import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

export const Contact = () => {
  const social = [
    {
      id: 1,
      child: (
        <>
           <FaLinkedin size={30}/>
        </>
      ),
      href: 'https://www.linkedin.com/in/blessing.eno'
    },
    {
      id: 2,
      child: (
        <>
           <FaGithub size={30}/>
        </>
      ),
      href: 'https://github.com/blessingsmart',
    },
    {
      id: 3,
      child: (
        <>
           <HiOutlineMail size={30}/>
        </>
      ),
      href: 'mailto:bublessingsmart@gmail.com',
    },
  ];
  const links = [
    {
        id: 1,
        link: "Home",
    },
    {
        id: 2,
        link: "About",
    },
    {
        id: 3,
        link: "Partner",
    },
    {
        id: 4,   
        link: "Testimonials",
    },
    {
        id: 5,
        link: "Training Program",
    },
];

  return (
    <div className='bg-gradient-to-r from-green-600 to-lime-600 w-full'>
      <div className='flex flex-col items-center sm:flex-row p-20 text-white sm:justify-between'>
                  <div className='flex flex-col items-center'> 
                    <h1 className='text-3xl text-blue-300 pb-5'>CONTACT US</h1>
                    <p>Email: welldoericon@gmail.com</p>
                    <p>Phone: +234 708 451 9109</p>
                  </div>
                  <ul className="pt-10 flex flex-col items-center">
                      {links.map(({id, link}) => (
                          <li 
                              key={id} className='cursor-pointer capitalize font-medium hover:scale-105 duration-200'>
                              <Link to={link} smooth duration={500}>{link}</Link>
                          </li>
                      ))}      
                  </ul>
                  <div className='flex flex-col items-center mt-10'>
                    <div className='text-3xl text-blue-300'>Get In Touch</div>
                        <ul className='flex pt-5'>
                          {social.map(({id, child, href}) => (
                            <li 
                              key={id} 
                              className={
                                `flex justify-between items-center hover:scale-105`
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