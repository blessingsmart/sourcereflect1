import React, { useEffect } from 'react';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';
import usman from "../assets/usman.jpg"
import teacher from "../assets/teacher.jpg"
import akiola from "../assets/akiola1.jpg"


const Testimonial = () => {
  useEffect(() => {

    const splide = new Splide('.splide', {
      type: 'loop',
      drag: 'free',
      focus: 'center',
      perPage: 2,
      breakpoints: {
        640: {
          perPage: 1,},
        },
      autoScroll: {
        speed: 1,
      },
    });

    splide.mount({ AutoScroll });
  }, []); 

  return (
    <div name="Testimonials" className="splide p-16 bg-gradient-to-r from-green-600 to-lime-600 text-white font-medium text-xs md:text-sm">
      <div className="splide__track">
        <ul className="splide__list"> 
          <li className="splide__slide px-5">
            <div className='flex flex-col gap-2'> 
             <p>I have been involved in the fishery class for years, but I had never had the opportunity to see an aquarium in person, let alone construct one myself. However, thanks to Sourcerflect. I had the privilege of building and decorating a small-scale aquarium with my own hands. </p>
             <p>My experience with the sourcereflect team was truly remarkable. They employs a unique teaching method where he consistently includes relevant content related to the topics he covers.</p>
             <p>Additionally, he ensures that we practice everything we learn, which helps us retain the knowledge we have gained till date.</p>
             <div className='flex items-center gap-3'>
             <img src={usman} alt="Image 1" className='rounded-full sm:h-20 sm:w-20 w-12 h-12'/>
             <div className='flex flex-col text-xs'>
              <p className='text-gray-200'>Usman Abubakar</p>
              <p>Koramo secondary school</p>
             </div>
             </div>
            </div>
          </li>
          <li className="splide__slide px-5">
            <div className='flex flex-col gap-2'> 
             <p>The teacher and the students of fishery unit in the Science department of Kuramo Senior College, Victoria Island, wish to express our profound gratitude to Mr Samson and his team for the assistance rendered in the past. </p>
             <p>We appreciate the skills and knowledge you impacted on us in the field of fishery as a trade subject as required by the scheme of work in the school.</p>
             <p>We are very grateful for all your efforts in the past two terms and look forward to more cordial practical sessions in the future</p>
             <div className='flex items-center gap-3'>
             <img src={teacher} alt="Image 1" className='rounded-full sm:h-20 sm:w-20 w-12 h-12'/>
             <div className='flex flex-col text-xs'>
              <p className='text-gray-200'>Mr Orowale Clement</p>
              <p>Agricultural Teacher</p>
              <p>Koramo secondary school</p>
             </div>
             </div>
            </div>
          </li>
          <li className="splide__slide px-5">
            <div className='flex flex-col gap-2'> 
             <p>hands-on involvement in fishery practices has improved my academic journey. Despite excelling in most subjects at Kuramo Senior College, my performance in fisheries studies lagged behind, causing frustration and disappointment. However, everything changed when Mr. Samson and his team introduced practical fishery sessions at our school.</p>
             <p>Engaging in activities like fish feeds formulations, Aquarium construction and design, fish culturing and aquatic habitat assessments provided invaluable insights that textbooks alone couldn't offer. Through these practical experiences, I gained a deeper understanding of fish behavior, habitat requirements, and industry challenges, bridging the gap between theory and practice.</p>
             <p>Beyond academic enrichment, practical experience honed my problem-solving skills, critical thinking, and personal growth. Learning skills that aid a solid foundation for future career success.</p>
             <p>I am much grateful for the opportunity 🙏</p>
             <div className='flex items-center gap-3'>
             <img src={akiola} alt="Image 1" className='rounded-full sm:h-20 sm:w-20 w-12 h-12'/>
             <div className='flex flex-col text-xs'>
              <p className='text-gray-200'>Akiola Modupe Summayyah</p>
              <p>Koramo secondary school</p>
             </div>
             </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
