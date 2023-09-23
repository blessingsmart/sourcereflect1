import React from 'react'
import Aquarium1 from '../assets/Aquarium1.jpg'
import FishProcess from '../assets/FishProcess.jpg'
import Fishfeed1 from '../assets/Fishfeed1.jpg'
import Aquaculture from '../assets/aquaculture.jpg'

const Training = () => {
  return (
    <div className="flex gap-5 flex-col p-20 text-green-600">
          <p className="font-bold text-xl">Our Training Programs</p>
          <div className="grid md:gap-10 gap-5 sm:grid-cols-2 ">
            <div className="bg-white rounded-lg flex flex-col">
              <img src={Aquarium1} alt="aquarium" />
              <p className="text-gray-600 font-bold pt-10 pb-3">Aquarium Construction and Design</p>
              <p className="text-gray-600">Discover the art of creating captivating aquariums and aquatic environments. Our training program covers the fundamentals of aquarium design, construction techniques, and maintenance. Participants will learn how to create aesthetically pleasing and functional aquariums while considering the welfare of aquatic life.</p>
            </div>
            <div className="bg-white rounded-lg flex flex-col">
              <img src={Aquaculture} alt="Aquaculture" />
              <p className="text-gray-600 font-bold pt-10 pb-3">Aquaculture</p>
              <p className="text-gray-600">Unlock the potential of aquaculture, the sustainable farming of fish and aquatic organisms. Our comprehensive training covers various aspects of aquaculture, including fish species selection, pond management, water quality control, feeding strategies, disease prevention, and marketing techniques. Participants will gain practical skills to establish and manage their own aquaculture ventures.</p>
            </div>
            <div className="bg-white rounded-lg flex flex-col">
              <img src={Fishfeed1} alt="fish feed" />
              <p className="text-gray-600 font-bold pt-10 pb-3">Fish Feed Formulation and Production</p>
              <p className="text-gray-600">Learn the art of formulating and producing high-quality fish feeds. Our training program guides participants through the process of understanding fish nutritional requirements, sourcing feed ingredients, formulating balanced diets, and producing cost-effective feeds. By mastering these skills, participants can enhance fish growth, reduce production costs, and contribute to the overall sustainability of the aquaculture industry.</p>
            </div>
            <div className="bg-white rounded-lg flex flex-col">
              <img src={FishProcess} alt="fish feed" />
              <p className="text-gray-600 font-bold pt-10 pb-3">Fish Processing</p>
              <p className="text-gray-600">Acquire the knowledge and techniques for processing fish products. Our training program covers topics such as fish handling, cleaning, filleting, smoking, drying, packaging, and quality control. Participants will learn best practices and standards to ensure the production of safe, nutritious, and market-ready fish products.</p>
            </div>
          </div>
    </div>
  )
}
export default Training