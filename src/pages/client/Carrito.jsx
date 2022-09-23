import React from "react";

//REDUX
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductoPreviewCart from "../../components/ProductoPreviewCart";
import useAuth from "../../hooks/useAuth";

const Carrito = () => {
  const { auth } = useAuth();
  const carrito = useSelector((state) => state.cliente.carrito);
  const eventos = useSelector((state) => state.cliente.eventos);

  const calcularPrecio = (producto) => {
    let descuento = 0;
    descuento = eventos.filter((e) => (e._id = producto.evento))[0].descuento;

    const precio = producto.price - (producto.price / 100) * descuento;

    return precio;
  };

  const precio = carrito
    .map((ev) =>
      ev.producto.evento !== null
        ? calcularPrecio(ev.producto)
        : ev.producto.price
    )
    .reduce((prev, curr) => prev + curr, 0);

  const handleClick = () => {};

  return (
    <div className='w-full flex justify-center min-h-screen'>
      <div className='w-full md:w-1/2 px-5 mb-5'>
        <h1 className='flex w-full justify-center uppercase font-bold md:py-3 my-3'>
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
              <p className='uppercase font-bold flex justify-center pr-2 text-xl'>
                total: ${precio}
              </p>
            </div>
          </div>
        ) : null}
        {carrito.length > 0 ? (
          auth !== null ? (
            <div className='w-full flex justify-center bg-slate-800 text-white rounded-md'>
              <Link to='/home/buy' className='p-2 uppercase font-bold'>
                COMPRAR
              </Link>
            </div>
          ) : (
            <div className='w-full flex justify-center bg-slate-800 text-white rounded-md'>
              <Link to='/auth' className='p-2 uppercase font-bold'>
                debes iniciar sesion
              </Link>
            </div>
          )
        ) : null}
      </div>
    </div>
  );
};

export default Carrito;
