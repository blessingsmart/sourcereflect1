import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Slider from './Gallery';
import SLIDER1 from "../assets/SLIDE1.jpeg"
import SLIDER2 from "../assets/SLIDE2.jpeg"
import SLIDER3 from "../assets/SLIDE3.jpeg"
import SLIDER4 from "../assets/SLIDE4.jpeg"
import SLIDER5 from "../assets/SLIDE5.jpeg"
import SLIDER6 from "../assets/SLIDE6.jpeg"
import SLIDER7 from "../assets/SLIDE7.jpeg"
import SLIDER8 from "../assets/SLIDE8.jpeg"
import SLIDER9 from "../assets/SLIDE9.jpeg"
import SLIDER10 from "../assets/SLIDE10.jpeg"
import SLIDER11 from "../assets/SLIDE11.jpeg"
import SLIDER12 from "../assets/SLIDE12.jpeg"

export const About = () => {
  const sliderData = [
    {
      image: SLIDER1,},
    {
      image: SLIDER2,},
    {
      image: SLIDER3,},
    {
      image: SLIDER4,},
    {
      image: SLIDER5,},
    {
      image: SLIDER6,},
    {
      image: SLIDER7,},
    {
      image: SLIDER8,},
    {
      image: SLIDER9,},
    {
      image: SLIDER10,},
    {
      image: SLIDER11,},
    {
      image: SLIDER12,},
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
            <h1 className='my-5 text-2xl'> Mission</h1>
            <p className=' text-gray-500'>Our primary mission is to provide free training and education to schools, communities, and individuals across Nigeria, focusing on harnessing the country's resources for socio-economic development in the fisheries sector. With expertise in aquarium construction and design, aquaculture, fish feed formulation and production, as well as fish processing, we aim to equip participants with the knowledge and skills necessary to excel in these areas.</p>
          </div>
          <Link to="/" className='flex text-blue-300 cursor-pointer items-center justify-end'>See More <BsArrowRight/> </Link>
        </div>
      </div>
    </div>
  )
}
