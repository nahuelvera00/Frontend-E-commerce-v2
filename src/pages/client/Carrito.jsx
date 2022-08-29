import React from "react";

//REDUX
import { useSelector } from "react-redux";
import ProductoPreviewCart from "../../components/ProductoPreviewCart";

const Carrito = () => {
  const carrito = useSelector((state) => state.cliente.carrito);
  const eventos = useSelector((state) => state.cliente.eventos);
  let total = 0;

  return (
    <div className='w-full px-5 mb-5'>
      <h1 className='flex w-full justify-center uppercase font-bold my-3'>
        Carrito
      </h1>
      <div className='w-full flex flex-col'>
        {carrito.length > 0 ? (
          carrito.map((producto) => (
            <ProductoPreviewCart
              key={producto.producto._id}
              talle={producto.talle}
              producto={producto.producto}
            />
          ))
        ) : (
          <p>
            Tu carrito esta vacio, añade articulos en el para poderlos ver en
            esta pestaña y efectuar tu compra
          </p>
        )}
      </div>
      {carrito.length > 0 ? (
        <div>
          <div className='mb-3'>
            <p className='uppercase font-bold flex justify-end pr-2'>
              total: $xxxx
            </p>
          </div>
          <div className='w-full flex justify-center bg-slate-800 text-white rounded-md'>
            <button className='p-2 uppercase font-bold'>COMPRAR</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Carrito;
