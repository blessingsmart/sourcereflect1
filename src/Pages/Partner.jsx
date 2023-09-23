import React from 'react'
import NavBar from "../components/NavBar";
import  Contact  from "../components/Contact";
import  partner  from "../assets/partner.jpg";
import  trainingprogram  from "../assets/trainingprogram.jpg";

const Partner = () => {
  return (
    <>
    <NavBar />
    <div>
      <div className="w-screen relative flex flex-col justify-center">
        <div className="sm:w-3/6 w-full h-full absolute left-0 bg-gradient-to-r from-black to-black/5"></div>
        <div className='absolute  text-white sm:left-0 md:px-10 md:w-3/6 px-5 pt-16'>
          <p className='md:text-6xl text-base font-bold md:py-5'>Partner with us.</p>
          <p className="md:text-lg font-medium text-xs">Join us at Sourcereflect as we work together to unlock the potential of Nigeria's fisheries sector and drive socio-economic development. Together, we can create a brighter future for all.</p>
        </div>
        <img src={partner} alt="partner with us" className="pt-16" />
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <div className="items-center">
            <p>Explore our training programs and sign up for the ones that align with your interests.</p>
            <button className="bg-gradient-to-r from-green-600 to-lime-600">Sign Up</button>
          </div>
          <img src={trainingprogram} alt="Training" className="w-72 h-72 rounded-lg" />
        </div>
      </div>
    </div>
    < Contact />
    </>
  )
}

export default Partner