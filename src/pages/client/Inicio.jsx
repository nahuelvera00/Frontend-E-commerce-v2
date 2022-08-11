import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
//COMPONENTES
import ProductoVistaPrevia from "../../components/ProductoVistaPrevia";

//REDUX
import { useDispatch, useSelector } from "react-redux/es/exports";
import { obtenerProductosClienteAction } from "../../actions/ClientAction";
import { obtenerEventosClienteAction } from "../../actions/ClientAction";

const Inicio = () => {
  //DEFINIR ELEMENTos
  const dispatch = useDispatch();
  //STATE
  const productos = useSelector((state) => state.cliente.productos);
  const productosDestacados = productos.slice(0, 3);
  //OBTENER PRODUCTOS AL CARGAR EL COMPONENTE
  useState(() => {
    const obtenerProductos = () => dispatch(obtenerProductosClienteAction());
    obtenerProductos();

    const obtenerEventos = () => dispatch(obtenerEventosClienteAction());
    obtenerEventos();
  }, []);
  return (
    <div className='flex flex-col w-full p-1'>
      <div className='h-36 bg-gray-400 mb-1'>BANNER</div>
      <div className='mx-3 px-2 py-1 rounded-md'>
        <h1 className='flex w-full justify-center items-center uppercase font-semibold py-1'>
          Productos destacados
        </h1>
        <div className='grid grid-cols-3 grid-rows-1 gap-2 '>
          {productos.length > 0 ? (
            productosDestacados.map((producto) => (
              <ProductoVistaPrevia producto={producto} key={producto._id} />
            ))
          ) : (
            <p>No hay Productos</p>
          )}
        </div>
        <div className='flex w-full justify-center mt-2'>
          <Link
            to=''
            className='uppercase bg-blue-400 hover:bg-blue-500 py-1 px-2 rounded-md font-semibold text-white'
          >
            Ver mas
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
