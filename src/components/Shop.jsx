import React from 'react'
import Aquarium from '../assets/Aquarium.jpeg'
import Fishfeed from '../assets/Fishfeed.jpeg'
import SmokeFish from '../assets/smokefish.jpeg'

const Product = () => {
    const products = [
        {
            id: 1,
            src: Aquarium,
            title:"Acqurium",
        },
        {
            id: 2,
            src: SmokeFish,
            title: "Smoked Fish"
        },
        {
            id: 3,
            src: Fishfeed,
            title: "Fish Feed"
        },
    ]

  return (
    <div name="Shop" className='bg-gradient-to-r from-green-600 to-lime-600 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col items-center justify-center w-full h-full '>
            <div className='py-8 items-center flex flex-col'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Shop</p>
                <p className='py-3'>Check out some of our products</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                {
                products.map(({ id, src, title}) => (
                    <div key={id} className='shadow-md shadow-gray-600 '>
                        <div className='relative'>
                        <p className='w-full text-center py-3 absolute bottom-0 bg-gradient-to-t from-black to-black/5 '>{title}</p >
                        <img src={src} alt='products' className='rounded-lg' />
                        </div>
                        
                        <button className='w-full bg-white text-green-600 py-3 rounded-md border-2 border-white duration-200 hover:scale-105'>Order Now</button>
                    </div>
                    ))}
            </div>    
        </div>
    </div>
  );
};

export default Product;