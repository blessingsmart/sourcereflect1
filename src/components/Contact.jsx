import React from 'react'

export const Contact = () => {
  return (
    <div className='bg-gray-200 w-full'>
      <div className='m-20'>
            <div className='text-3xl text-blue-300 pt-20'>
              <h1>CONTACT US</h1>
            </div>
            <div  className=' flex justify-between text-gray-500 py-10'>
                  <div>
                    <p>Email: bublessingsmart@gmail.com</p>
                    <p>Address: 123 Flower Street, Lagos, Nigeria</p>
                    <p>Phone: +234 808 104 5656</p>
                  </div>
                  <div>
                    <p>Training Program</p>
                    <p>Testimonials</p>
                    <p>Why Sourereflect</p>
                    <p>About Us</p>
                  </div>
                  <div className='text-3xl text-blue-300'>
                    <p>Get In Touch</p>
                  </div>
            </div>
      </div>      
    </div>
  )
}
export default Contact;