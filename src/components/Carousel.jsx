import React, { useEffect } from "react";
import { useState } from "react";

const Carousel = ({ producto }) => {
  //VARIABLES PARA CARUSEL
  const images = [...producto[0].image];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  if (!images.includes(selectedImage)) {
    setSelectedImage(images[0]);
  }

  const selectNewImageindex = (index, images, next = true) => {
    const condition = next
      ? selectedIndex < images.length - 1
      : selectedIndex > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
      ? selectedIndex - 1
      : images.length - 1;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const previous = () => {
    selectNewImageindex(selectedIndex, images, false);
  };

  const next = () => {
    selectNewImageindex(selectedIndex, images, true);
  };

  return (
    <div className='flex m-5 p-2  justify-center items-center z-10 transition-all'>
      <button className='font-bold text-2xl z-10' onClick={previous}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15 19l-7-7 7-7'
          />
        </svg>
      </button>
      <img
        className='px-2 min-h-[345px] w-full object-cover'
        src={`${import.meta.env.VITE_BACKEND_URL}/images/${selectedImage}`}
        alt='Imagen'
      />

      <button className='font-bold text-2xl' onClick={next}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
