import React, { useState } from 'react';

const imageUrls = [
  '/img/books.png',
  '/img/books1.jpg',
  '/img/books2.jpg',
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const slideStyle = {
    width: '100%',
    height: '400px', // Customize the height as needed
    backgroundImage: `url(${imageUrls[currentIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background-image 0.5s ease-in-out',
  };

  return (
    <div className="relative">
      <div className="flex justify-center items-center" style={slideStyle}>
        {/* Navigation buttons */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
          onClick={handlePrevSlide}
        >
          Prev
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
          onClick={handleNextSlide}
        >
          Next
        </button>
      </div>
      {/* Indicators */}
      <div className="flex justify-center mt-2">
        {imageUrls.map((url, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full bg-gray-800 ${
              index === currentIndex ? 'bg-white' : ''
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}







