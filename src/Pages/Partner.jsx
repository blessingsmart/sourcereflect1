import React from 'react'
import NavBar from "../components/NavBar";
import  Contact  from "../components/Contact";
import  partner  from "../assets/partner.jpg";
import  trainingprogram  from "../assets/trainingprogram.jpg";
import  Volunteer  from "../assets/volunteer.jpg";
import  donate  from "../assets/donate.jpg";
import  collaboration  from "../assets/collaboration.jpeg";
import  spread  from "../assets/spread.jpg";
import  social  from "../data/sociallink";

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
      <div className="grid md:grid-cols-2 md:gap-20 gap-10 items-center font-medium mx-auto p-5 md:p-20">
          <div className="flex flex-col gap-5 order-2 md:order-1">
            <p>Explore our training programs and sign up for the ones that align with your interests.</p>
            <button className="bg-gradient-to-r from-green-600 to-lime-600 rounded-full text-white py-2 px-5 w-fit">Sign Up</button>
          </div>
          <img src={trainingprogram} alt="Training" className="rounded-lg order-1 md:order-2" />
          <img src={Volunteer} alt="volunteer" className="rounded-lg order-3" />
          <div className="flex flex-col order-4">
            <p>Volunteer your time and expertise to support our training initiatives.</p>
            <button className="bg-gradient-to-r from-green-600 to-lime-600 rounded-full text-white py-2 px-5 w-fit">Sign Up</button>
          </div>
          <div className="flex flex-col order-6 md:order-5">
            <p>Donate resources, equipment, or funds to help us expand our reach and impact.</p>
            <div className="items-center font-bold text-xl flex flex-col">
            <p>ACCOUNT DETAILS</p>
            <p>SOURCEREFLECT</p>
            <p>GTBANK</p>
            <p>0742180735</p>
            </div>
          </div>
          <img src={donate} alt="donate" className="rounded-lg order-5 md:order-6" />
          <img src={collaboration} alt="collaborate" className="rounded-lg order-7" />
          <div className="flex flex-col order-8">
            <p>Collaborate with us on research projects, advocacy efforts, or community development programs.</p>
          </div>
          <div className="flex flex-col order-10 md:order-9">
            <p>Spread the word about Sourcereflect through social media and other platforms to help us reach schools, communities, and individuals who can benefit from our free training.</p>
            <ul className='flex text-green-600 items-center pt-5'>
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
          <img src={spread} alt="spread the word" className="rounded-lg order-9 md:order-10" />
      </div>
    </div>
    < Contact />
    </>
  )
}

export default Partner