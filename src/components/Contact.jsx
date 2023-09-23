import React from 'react'
import { FaInstagram, FaTwitter, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export const Contact = () => {
  const social = [
    {
      id: 1,
      child: (
        <>
           <FaTwitter size={30}/>
        </>
      ),
      href: 'https://www.twitter.com/sourcereflect1'
    },
    {
      id: 2,
      child: (
        <>
           <FaWhatsapp size={30}/>
        </>
      ),
      href: 'https://wa.me/message/YL3HPLETTPM5O1?src=qr',
    },
    {
      id: 3,
      child: (
        <>
           <FaInstagram size={30}/>
        </>
      ),
      href: 'https://instagram.com/sourcereflect?igshid=MmIzYWVlNDQ5Yg==',
    },
    {
      id: 4,
      child: (
        <>
           <FaFacebook size={30}/>
        </>
      ),
      href: 'https://www.facebook.com/sourcereflec?mibextid=LQQJ4d',
    },
  ];
  const links = [
    {
        id: 1,
        link: "/",
        title: "Home",
    },
    // {
    //     id: 2,
    //     link: "Testimonials",
    // },
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
                  <div className='flex flex-col items-center'> 
                    <h1 className='md:text-3xl text-lg text-blue-300 pb-5'>CONTACT US</h1>
                    <p>Email: welldoericon@gmail.com</p>
                    <p>Phone: +234 708 451 9109</p>
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