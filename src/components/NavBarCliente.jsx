import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { abrirCerrarMenuACtion } from "../actions/ClientAction";
import { obtenerSubCategoriasClienteAction } from "../actions/ClientAction";

const NavBarCliente = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const obtenerDatos = () => dispatch(obtenerSubCategoriasClienteAction());
    obtenerDatos();
  }, []);

  const carrito = useSelector((state) => state.cliente.carrito);
  const subCategorias = useSelector((state) => state.cliente.subCategorias);

  const handleClick = () => {
    dispatch(abrirCerrarMenuACtion());
  };
  const [menuHombre, setMenuHombre] = useState(false);
  const [menuMujer, setMenuMujer] = useState(false);

  const handleClickHombre = () => {
    setMenuHombre(!menuHombre);

    if (menuMujer) {
      setMenuMujer(false);
    }
  };
  const handleClickMujer = () => {
    setMenuMujer(!menuMujer);

    if (menuHombre) {
      setMenuHombre(false);
    }
  };
  return (
    <div className='flex justify-between items-center'>
      <div className='flex justify-center items-center gap-5'>
        <button className='md:hidden' type='button' onClick={handleClick}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8 text-white'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>

        <Link to='' className='text-white font-semibold mr-5'>
          <p>E-Commerce</p>
        </Link>
        <div className='hidden md:flex gap-2 h-full uppercase text-white'>
          <button
            type='button'
            className='w-full h-full flex gap-2 items-center uppercase'
            onClick={handleClickHombre}
          >
            <p className='font-bold'>hombre</p>
            {menuHombre ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-3 h-3'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 19.5L8.25 12l7.5-7.5'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-3 h-3'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8.25 4.5l7.5 7.5-7.5 7.5'
                />
              </svg>
            )}
          </button>
          <div className={`${menuHombre ? "flex" : "hidden"} gap-3`}>
            {subCategorias.map((categoria) => (
              <Link
                to={`/home/product/male/${categoria.name}`}
                key={categoria._id}
              >
                <p className='hover:underline'>{categoria.name}</p>
              </Link>
            ))}
          </div>
          <button
            type='button'
            className='w-full h-full flex gap-2 items-center uppercase'
            onClick={handleClickMujer}
          >
            <p className='font-bold'>mujer</p>
            {menuMujer ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-3 h-3'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 19.5L8.25 12l7.5-7.5'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-3 h-3'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8.25 4.5l7.5 7.5-7.5 7.5'
                />
              </svg>
            )}
          </button>
          <div className={`${menuMujer ? "flex" : "hidden"} gap-3`}>
            {subCategorias.map((categoria) => (
              <Link
                to={`/home/product/female/${categoria.name}`}
                key={categoria._id}
              >
                <p className='hover:underline'>{categoria.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className='flex'>
        <Link to='/home/profile'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='w-12 text-white p-2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
            />
          </svg>
        </Link>
        <Link to='/home/cart' className=' rounded-3xl flex'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-12 text-white p-2'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
            />
          </svg>
          {carrito.length > 0 ? (
            <div className='absolute bottom-2 right-2 bg-white rounded-3xl w-5 h-5 flex justify-center items-center'>
              <p className='text-xs p-[2px] font-bold'>
                {carrito.length > 9 ? "+9" : carrito.length}
              </p>
            </div>
          ) : null}
        </Link>
      </div>
    </div>
  );
};

export default NavBarCliente;
