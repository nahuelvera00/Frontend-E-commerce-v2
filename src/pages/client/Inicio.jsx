import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
//COMPONENTES
import ProductoVistaPrevia from "../../components/ProductoVistaPrevia";
import banner from "../../public/img/HOTSALE.jpg";
import nike from "../../public/img/NikeLogo.png";
import adidas from "../../public/img/AdidasLogo.png";
import puma from "../../public/img/PumaLogo.png";

//REDUX
import { useDispatch, useSelector } from "react-redux/es/exports";
import { obtenerProductosClienteAction } from "../../actions/ClientAction";
import { obtenerEventosClienteAction } from "../../actions/ClientAction";
import { obtenerSubCategoriasClienteAction } from "../../actions/ClientAction";
import { obtenerCategoriasClienteAction } from "../../actions/ClientAction";

const Inicio = () => {
  //DEFINIR ELEMENTos
  const dispatch = useDispatch();
  //STATE
  const productos = useSelector((state) => state.cliente.productos);
  const productosDestacados = productos.slice(0, 3);

  const subCategorias = useSelector((state) => state.cliente.subCategorias);
  //OBTENER PRODUCTOS AL CARGAR EL COMPONENTE
  useState(() => {
    const obtenerProductos = () => dispatch(obtenerProductosClienteAction());
    obtenerProductos();

    const obtenerEventos = () => dispatch(obtenerEventosClienteAction());
    obtenerEventos();

    const obtenerSubCategorias = () =>
      dispatch(obtenerSubCategoriasClienteAction());
    obtenerSubCategorias();

    const obtenerCategoriasCliente = () =>
      dispatch(obtenerCategoriasClienteAction());
    obtenerCategoriasCliente();
  }, []);
  return (
    <div className='flex flex-col w-full p-1'>
      <div className='h-48 mb-1'>
        <img className='w-full h-full object-cover' src={banner} alt='' />
      </div>
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
        <div className='flex w-full justify-center mt-2 mb-10'>
          <Link
            to='/home/all-products'
            className='uppercase bg-blue-400 hover:bg-blue-500 py-1 px-2 rounded-md font-semibold text-white'
          >
            Ver mas
          </Link>
        </div>
      </div>
      <div className='flex flex-col gap-2 mb-4 px-10'>
        {subCategorias.length > 0
          ? subCategorias.map((subCategoria) => (
              <Link
                to={`/home/product/all/${subCategoria.name}`}
                key={subCategoria._id}
                className='bg-slate-600 h-24 text-white hover:bg-white hover:text-slate-600 rounded-md flex justify-center items-center'
              >
                <p className='uppercase font-bold text-xl'>
                  {subCategoria.name}
                </p>
              </Link>
            ))
          : null}
      </div>
      <div className='w-full'>
        <h2 className='flex justify-center uppercase font-bold mb-3'>Marcas</h2>
        <div className='grid grid-cols-2 gap-4 mx-10'>
          <Link to='/home/products/nike'>
            <div>
              <img src={nike} alt='' />
            </div>
          </Link>
          <Link to='/home/products/adidas'>
            <div>
              <img src={adidas} alt='' />
            </div>
          </Link>
          <Link to='/home/products/puma'>
            <div>
              <img src={puma} alt='' />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
