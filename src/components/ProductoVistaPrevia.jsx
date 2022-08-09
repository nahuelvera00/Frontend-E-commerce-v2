import React from "react";
import { Link } from "react-router-dom";

const ProductoVistaPrevia = ({ producto }) => {
  const URL = `${import.meta.env.VITE_BACKEND_URL}/images/${producto.image[0]}`;

  return (
    <Link
      className='bg-gray-100 hover:bg-gray-200 transition-colors rounded-md p-1'
      to='/auth'
    >
      <div className='flex justify-center items-center'>
        <img className='h-24 w-full object-cover rounded-md' src={URL} alt='' />
      </div>
      <p className='text-sm mt-1 py-2'>{producto.name}</p>
    </Link>
  );
};

export default ProductoVistaPrevia;
