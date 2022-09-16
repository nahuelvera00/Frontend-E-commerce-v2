import React from "react";
import { Link } from "react-router-dom";

//REDUX
import { useSelector } from "react-redux";

const ProductoVistaPrevia = ({ producto }) => {
  const eventos = useSelector((state) => state.cliente.eventos);

  let eventoAplicado = 0;
  if (producto.evento !== null) {
    eventoAplicado = eventos.filter((e) => e._id === producto.evento)[0]
      .descuento;
  }
  const URL = `${import.meta.env.VITE_BACKEND_URL}/images/${producto.image[0]}`;
  return (
    <Link
      className='bg-gray-100 hover:bg-gray-200 transition-colors rounded-md p-1 flex flex-col justify-between'
      to={`/home/product/${producto._id}`}
    >
      <div>
        <div className='flex justify-center items-center'>
          <img
            className='h-full w-full object-cover rounded-md'
            src={URL}
            alt=''
          />
        </div>
        <p className='text-sm mt-1 py-2'>{producto.name}</p>
      </div>
      <p className='text-gray-400 font-semibold'>
        $ {producto.price - (producto.price / 100) * eventoAplicado}
      </p>
    </Link>
  );
};

export default ProductoVistaPrevia;
