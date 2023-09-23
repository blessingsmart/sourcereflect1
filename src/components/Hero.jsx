import React from 'react'
import { Link } from "react-router-dom";
import heroImage from "../assets/heroImage.png"
import heroImage1 from "../assets/heroImage1.png"


export const Hero = () => {
  return (
    <div className='h-full bg-gradient-to-r from-green-600 to-lime-600'>

      <div className='max-w-screen-lg md:mx-auto mx-10 flex flex-col items-center justify-center pt-5 md:flex-row md:gap-32'>
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white mt-20 md:mt-0">
            Welcome to Sourcereflect
          </h2>
          <p className="text-white py-4 max-w-md">
            Empowering Nigeria's Fisheries Sector for Socio-Economic Development!
          </p>
          <div>
            <Link to="/partner-with-us">
              <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md border-2 border-white cursor-pointer'>
                PARTNER
              </button>
            </Link>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row gap-10 mt-10 md:mt-40 md:pt-56'>
          <a
            href={"https://www.linkedin.com/in/popoola-samson-343129b9"}
            target='_blank'
            rel='noopener noreferrer'
            className='relative'>
            <div className='bg-white h-60 w-60 p-4 rounded-lg'>
              <img src={heroImage} alt='my profile' className='mx-auto mb-10' />
            </div>
            <button className='absolute bottom-1.5 translate-x-1/4 bg-white border border-blue-500 text-blue-500 px-4 py-2 mt-2 items-center rounded-md'>
              Popoola Samson <br />
              <p className='font-bold'>FOUNDER</p>
            </button>
          </a>
          <a
            href={"https://www.linkedin.com/in/adedoyin-solomon-3b596b19a"}
            target='_blank'
            rel='noopener noreferrer'
            className='relative'>
            <div className='bg-white h-60 w-60 p-4 rounded-lg'>
              <img src={heroImage1} alt='my profile' className='mx-auto mb-10' />
            </div>
            <button className='absolute bottom-1.5 translate-x-1/4 bg-white border border-blue-500 text-blue-500 px-4 py-2 mt-2 items-center rounded-md'>
              Segun Adedoyin <br />
              <p className='font-bold'>CO-FOUNDER </p>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}


export default Hero;