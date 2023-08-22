import React from 'react'

export const About = () => {
  return (
    <div className='h-full bg-white '>
      <div className='flex mx-auto m-20 gap-60 items-center justify-center'>
      <div className='bg-green-500 ml-20 h-60 w-72 p-4 rounded-lg'></div>
      <div className='flex flex-col'> 
        <div className='border-t-2 border-gray-500 w-8 p-1'></div>
        <div className='text-3xl text-blue-300 inline '>
          About us
        </div>
        <div>
          <h1 className='my-5 text-4xl'> Mission</h1>
          <p className=' text-gray-500'>Our primary mission is to provide free training and education to schools, communities, and individuals across Nigeria, focusing on harnessing the country's resources for socio-economic development in the fisheries sector. With expertise in aquarium construction and design, aquaculture, fish feed formulation and production, as well as fish processing, we aim to equip participants with the knowledge and skills necessary to excel in these areas.</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About;