import React from 'react'
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <div className='h-screen bg-gradient-to-r from-green-600 to-lime-600'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white mt-20 md:mt-0">
                    I'm a Data Scientist
                </h2>
                <p className="text-gray-500 py-4 max-w-md">i'm skilled in data analysis using Excel, PowerBi and Python. i have 2 years experience analysing and visualizing data. i'm also into frontend web development using Tailwind and React. </p>
                <div>
                    <Link to="portfolio" smooth duration={500} activeClass="active" spy={true} offset={-50}>
                        <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        </button>
                    </Link>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Home;