import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Slider from './Gallery';
import heroImage from "../assets/heroImage.png"
import heroImage1 from "../assets/heroImage1.png"

export const About = () => {
  const sliderData = [
    {
      image: heroImage,
      heading: "Slide One",
      desc: "This is the description of slide one Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
    },
    {
      image: heroImage1,
      heading: "Slide Two",
      desc: "This is the description of slide two Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
    },
    {
      image: heroImage1,
      heading: "Slide Three",
      desc: "This is the description of slide three Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
    },
    {
      image: heroImage1,
      heading: "Slide Three",
      desc: "This is the description of slide three Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
    },
    {
      image: heroImage1,
      heading: "Slide Three",
      desc: "This is the description of slide three Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
    },
    {
      image: heroImage1,
      heading: "Slide Three",
      desc: "This is the description of slide three Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
    },
    {
      image: heroImage1,
      heading: "Slide Three",
      desc: "This is the description of slide three Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
    },
  ];
  return (
    <div className='h-full bg-white '>
      <div className='flex sm:flex-row flex-col m-10 sm:m-20 lg:gap-52 gap-10 items-center justify-center'>
        <Slider sliderData={sliderData} />
        <div className='flex flex-col'> 
          <div className='border-t-2 border-gray-500 w-8 p-1'></div>
          <div className='text-3xl text-blue-300 inline '>
            About us
          </div>
          <div>
            <h1 className='my-5 text-4xl'> Mission</h1>
            <p className=' text-gray-500'>Our primary mission is to provide free training and education to schools, communities, and individuals across Nigeria, focusing on harnessing the country's resources for socio-economic development in the fisheries sector. With expertise in aquarium construction and design, aquaculture, fish feed formulation and production, as well as fish processing, we aim to equip participants with the knowledge and skills necessary to excel in these areas.</p>
          </div>
          <Link to="/" className='flex text-blue-300 cursor-pointer items-center justify-end'>See More <BsArrowRight/> </Link>
        </div>
      </div>
    </div>
  )
}
