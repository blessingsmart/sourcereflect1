import React from 'react'
import NavBar from "../components/NavBar";

export const AboutMain = () => {
  return (
    <>
      <NavBar />
      <div className="bg-gradient-to-r from-green-600 to-lime-600 w-screen h-full mx-auto p-16">
        <div className="flex gap-5 flex-col items-center text-white">
          <p className="font-bold">WHO WE ARE</p>
          <p>Empowering Nigeria's Fisheries Sector for Socio-Economic Development!</p>
          <div className="flex md:gap-16 gap-10 lg:px-32 text-center">
            <div className="bg-white w-1/2 p-10 rounded-lg">
              <p className="text-blue-300 pb-5">Mission</p>
              <p className="text-gray-500">Our primary mission is to provide free training and education to schools, communities, and individuals across Nigeria, focusing on harnessing the country's resources for socio-economic development in the fisheries sector. With expertise in aquarium construction and design, aquaculture, fish feed formulation and production, as well as fish processing, we aim to equip participants with the knowledge and skills necessary to excel in these areas.</p>
            </div>
            <div className="bg-white w-1/2 p-10 rounded-lg">
              <p className="text-blue-300 pb-5">Vision</p>
              <p className="text-gray-500">At Sourcereflect, we envision a Nigeria where the fisheries sector becomes a catalyst for sustainable socio-economic growth. By empowering individuals and communities with the necessary tools and expertise, we aim to create a thriving industry that contributes to job creation, food security, environmental sustainability, and overall economic well-being.</p>
            </div>
          </div>
        </div>
        <div className="flex gap-5 flex-col pt-10 items-center text-white">
          <p>Our Training Programs</p>
          <div className="grid md:gap-10 gap-5 text-center lg:grid-cols-4 sm:grid-cols-2 ">
            <div className="bg-white rounded-lg p-10">
              <p className="text-blue-300 pb-5">Aquarium Construction and Design</p>
              <p className="text-gray-500">Discover the art of creating captivating aquariums and aquatic environments. Our training program covers the fundamentals of aquarium design, construction techniques, and maintenance. Participants will learn how to create aesthetically pleasing and functional aquariums while considering the welfare of aquatic life.</p>
            </div>
            <div className="bg-white rounded-lg p-10">
              <p className="text-blue-300 pb-5">Aquaculture</p>
              <p className="text-gray-500">Unlock the potential of aquaculture, the sustainable farming of fish and aquatic organisms. Our comprehensive training covers various aspects of aquaculture, including fish species selection, pond management, water quality control, feeding strategies, disease prevention, and marketing techniques. Participants will gain practical skills to establish and manage their own aquaculture ventures.</p>
            </div>
            <div className="bg-white rounded-lg p-10">
              <p className="text-blue-300 pb-5">Fish Feed Formulation and Production</p>
              <p className="text-gray-500">Learn the art of formulating and producing high-quality fish feeds. Our training program guides participants through the process of understanding fish nutritional requirements, sourcing feed ingredients, formulating balanced diets, and producing cost-effective feeds. By mastering these skills, participants can enhance fish growth, reduce production costs, and contribute to the overall sustainability of the aquaculture industry.</p>
            </div>
            <div className="bg-white rounded-lg p-10">
              <p className="text-blue-300 pb-5">Fish Processing</p>
              <p className="text-gray-500">Acquire the knowledge and techniques for processing fish products. Our training program covers topics such as fish handling, cleaning, filleting, smoking, drying, packaging, and quality control. Participants will learn best practices and standards to ensure the production of safe, nutritious, and market-ready fish products.</p>
            </div>
          </div>
        </div>
     </div>
    </>
  );
}
export default AboutMain;