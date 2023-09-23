import React from 'react'
import NavBar from "../components/NavBar";
import Mission from '../assets/mission.png'
import Vision from '../assets/vision.png'
import  Training  from "../components/Training";
import  Contact  from "../components/Contact";

export const AboutMain = () => {
  return (
    <>
      <NavBar />
      <div className="w-screen h-full">
        <div className="flex gap-5 flex-col items-center text-center text-green-600 mx-auto sm:p-16 p-10">
          <p className="font-bold text-4xl pt-10 ">WHO WE ARE</p>
          <p className="font-bold">Empowering Nigeria's Fisheries Sector for Socio-Economic Development!</p>
          <div className="grid grid-row md:grid-cols-2 md:gap-16 gap-10 lg:px-32 ">
            <div className="p-10 flex flex-col rounded-lg bg-green-600 items-center">
              <img src={Mission} alt="mission icon" className="w-1/5 pb-10" />
              <p className="text-blue-300 pb-5 font-bold">Mission</p>
              <p className="text-white">Our primary mission is to provide free training and education to schools, communities, and individuals across Nigeria, focusing on harnessing the country's resources for socio-economic development in the fisheries sector. With expertise in aquarium construction and design, aquaculture, fish feed formulation and production, as well as fish processing, we aim to equip participants with the knowledge and skills necessary to excel in these areas.</p>
            </div>
            <div className="p-10 flex flex-col bg-green-600 items-center rounded-lg">
              <img src={Vision} alt="vision icon" className="w-1/5 pb-10" />
              <p className="text-blue-300 pb-5 font-bold">Vision</p>
              <p className="text-white">At Sourcereflect, we envision a Nigeria where the fisheries sector becomes a catalyst for sustainable socio-economic growth. By empowering individuals and communities with the necessary tools and expertise, we aim to create a thriving industry that contributes to job creation, food security, environmental sustainability, and overall economic well-being.</p>
            </div>
          </div>
        </div>
      < Training />
      <div className="sm:p-20 p-10 w-screen">
        <p className="text-2xl py-10 font-bold">Why Choose Sourcereflect?</p>
        <div className="grid md:grid-cols-2 gap-10">
          <div className='bg-gray-200 p-10'>
            <p className="font-bold text-lg">Expertise and Experience</p>
            <div className="border-b-2 border-b-gray-300 py-1"></div>
            <ul className="text-gray-800 font-medium">
              <li><span>&#8226;</span>&nbsp;Our founders, Samson Popoola and Segun Adedoyin, bring a wealth of experience and expertise to the organization.</li>
              <li><span>&#8226;</span>&nbsp;With their deep knowledge and passion for the fisheries sector, they are committed to imparting practical skills and fostering sustainable development in Nigeria.</li>
            </ul>
          </div>
          <div className='bg-gray-200 p-10'>
            <p className="font-bold text-lg">Free Training</p>
            <div className="border-b-2 border-b-gray-300 py-1"></div>
            <ul className="text-gray-800  font-medium">
              <li><span>&#8226;</span>&nbsp;We firmly believe in providing equal access to education.</li>
              <li><span>&#8226;</span>&nbsp;All our training programs are offered completely free of charge, ensuring that schools, communities, and individuals from all backgrounds can benefit from our initiatives.</li>
            </ul>
          </div>
          <div className='bg-gray-200 p-10'>
            <p className="font-bold text-lg">Holistic Approach</p>
            <div className="border-b-2 border-b-gray-300 py-1"></div>
            <ul className="text-gray-800 font-medium">
              <li><span>&#8226;</span>&nbsp;Sourcereflect offers a holistic approach to training, covering various aspects of the fisheries sector.</li>
              <li><span>&#8226;</span>&nbsp;By addressing aquarium construction, aquaculture, fish feed formulation and production, and fish processing, we provide participants with a comprehensive skill set to succeed in different facets of the industry.</li>
            </ul>
          </div>
          <div className='bg-gray-200 p-10'>
            <p className="font-bold text-lg">Community Engagement</p>
            <div className="border-b-2 border-b-gray-300 py-1"></div>
            <ul className="text-gray-800 font-medium">
              <li><span>&#8226;</span>&nbsp;We actively engage with schools, communities, and individuals across Nigeria.</li>
              <li><span>&#8226;</span>&nbsp;Through our training programs, we aim to empower local communities, promote sustainable practices, and foster socio-economic development from the grassroots level.</li>
            </ul>
          </div>
          <div className='bg-gray-200 p-10'>
            <p className="font-bold text-lg">Networking Opportunities</p>
            <div className="border-b-2 border-b-gray-300 py-1"></div>
            <ul className="text-gray-800 font-medium">
              <li><span>&#8226;</span>&nbsp;Joining Sourcereflect opens doors to networking and collaboration within the fisheries sector.</li>
              <li><span>&#8226;</span>&nbsp;Participants have the opportunity to connect with fellow learners, industry experts, potential mentors, and like-minded individuals who share a common passion for the fisheries industry.</li>
            </ul>
          </div>
        </div>
      </div>
      < Contact />
     </div>
    </>
  );
}
export default AboutMain;