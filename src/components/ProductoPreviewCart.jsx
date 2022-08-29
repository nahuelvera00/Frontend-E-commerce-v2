import React from "react";

//REDUX
import { useSelector } from "react-redux";

const ProductoPreviewCart = ({ talle, producto }) => {
  const eventos = useSelector((state) => state.cliente.eventos);
  let descuento = 0;
  if (producto.evento !== null) {
    const eventoSeleccionado = eventos.filter((e) => e._id === producto.evento);
    var eventoAplicado = eventoSeleccionado[0].descuento;
  }

  return (
    <div className='mb-2 flex max-h-20 bg-slate-200 rounded-md p-1'>
      <div className='flex items-center gap-2'>
        <div className='w-2/12 rounded-md'>
          <img
            className='rounded-md'
            src={`${import.meta.env.VITE_BACKEND_URL}/images/${
              producto.image[0]
            }`}
            alt=''
          />
        </div>
        <div className='w-5/12'>
          <p className='text-sm'>{producto.name}</p>
        </div>
        <div className='w-1/12 uppercase font-bold'>
          {talle === "small" ? (
            <p className='flex justify-center'>S</p>
          ) : talle === "medium" ? (
            <p className='flex justify-center'>M</p>
          ) : talle === "large" ? (
            <p className='flex justify-center'>L</p>
          ) : (
            <p className='flex justify-center'>XL</p>
          )}
        </div>
        <div className='w-3/12'>
          <p className='flex justify-end pr-2'>
            $
            {producto.evento === null
              ? producto.price
              : (producto.price / 100) * eventoAplicado}
          </p>
        </div>
        <div className='w-1/12 flex'>
          <button>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductoPreviewCart;