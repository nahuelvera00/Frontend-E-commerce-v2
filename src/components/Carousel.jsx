import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

//REDUX
import { useSelector } from "react-redux";

const Carousel = () => {
  const params = useParams();
  const productos = useSelector((state) => state.cliente.productos);
  const producto = productos.filter((producto) => producto._id === params.id);

  //VARIABLES PARA CARUSEL
  const images = [...producto[0].image];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

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
    <div className='flex flex-col m-5 h-[345px] justify-center items-center'>
      <img
        className='px-2 min-h-[345px] w-full object-cover'
        src={`${import.meta.env.VITE_BACKEND_URL}/images/${selectedImage}`}
        alt='Imagen'
      />
      <button className='absolute left-2 font-bold text-2xl' onClick={previous}>
        {"<"}
      </button>
      <button className='absolute right-2 font-bold text-2xl' onClick={next}>
        {">"}
      </button>
    </div>
  );
};

export default Carousel;
