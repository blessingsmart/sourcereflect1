import React from 'react'
import NavBar from "../components/NavBar";
import  Contact  from "../components/Contact";
import  partner  from "../assets/partner.jpg";

const Partner = () => {
  return (
    <>
    <NavBar />
    <div>
      <img src={partner} alt="partner with us" className="pt-16 w-screen relative" />
      <div className="w-3/6 h-full justify-center absolute -bottom-3 bg-gradient-to-r from-black to-black/5"></div>
        <div className='absolute text-white bottom-1/2 px-10 w-3/6 pt-16'>
          <p className='text-4xl font-bold py-5'>Partner with us.</p>
          <p>Join us at Sourcereflect as we work together to unlock the potential of Nigeria's fisheries sector and drive socio-economic development. Together, we can create a brighter future for all.</p>
        </div>
    </div>
    < Contact />
    </>
  )
}

export default Partner