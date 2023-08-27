import React, { useState, useEffect, useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Slider = ({ sliderData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  const intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  // Use useRef to store the interval reference
  const slideInterval = useRef(null);

  function auto() {
    slideInterval.current = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    if (autoScroll) {
      auto();
    }

    return () => {
      clearInterval(slideInterval.current);
    };
  }, [autoScroll, currentSlide]);

  return (
    <div className="w-full h-[50vh] relative overflow-hidden">
      <AiOutlineArrowLeft
        className="arrow prev absolute top-[35%] left-2 text-black border-2 border-black rounded-full cursor-pointer hover:bg-white hover:text-gray-700"
        onClick={prevSlide}
      />
      <AiOutlineArrowRight
        className="arrow next absolute top-[35%] right-2 text-black border-2 border-black rounded-full cursor-pointer hover:bg-white hover:text-gray-700"
        onClick={nextSlide}
      />
      {sliderData.map((slide, index) => {
        return (
          <div
            className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            key={index}
          >
            {index === currentSlide && (
              <img
                src={slide.image}
                alt="slide"
                className="object-cover w-full h-full"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
