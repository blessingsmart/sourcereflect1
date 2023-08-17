import React from 'react'
import { Link } from "react-scroll";
import heroImage from "../assets/heroImage.png"

export const Home = () => {
  return (
    <div className='h-screen bg-gradient-to-r from-green-600 to-lime-600'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row md:gap-32'>
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-6xl font-bold text-white mt-20 md:mt-0">
                Welcome to Sourcereflect
                </h2>
                <p className="text-white py-4 max-w-md">Empowering Nigeria's Fisheries Sector for Socio-Economic Development! </p>
                <div>
                    <Link to="portfolio" smooth duration={500} activeClass="active" spy={true} offset={-50}>
                        <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md border-2 border-white cursor-pointer'>
                        PARTNER
                        </button>
                    </Link>
                </div>
            </div>

            <div className='flex gap-10 mt-10 md:mt-40 md:pt-56'>
                <div className='relative'>
                      <div className='bg-white h-60 w-60 p-4 rounded-lg'>
                        <img src={heroImage} alt='my profile' className='mx-auto mb-10' />
                      </div>
                      <button className='absolute bottom-1.5 translate-x-1/4  bg-white border border-blue-500 text-blue-500 px-4 py-2 mt-2 flex items-center rounded-md cursor-pointer'>
                      Popoola Samson<br />
                      FOUNDER
                      </button>
                </div>
                <div className='relative'>
                     <div className='bg-white h-60 w-60 p-4 rounded-lg'>
                        <img src={heroImage} alt='my profile' className='mx-auto mb-10' />
                      </div>
                      <button className='absolute bottom-1.5 translate-x-1/4  bg-white border border-blue-500 text-blue-500 px-4 py-2 mt-2 flex items-center rounded-md cursor-pointer'>
                      Segun Adedoyin <br />CO-FOUNDER 
                      </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;