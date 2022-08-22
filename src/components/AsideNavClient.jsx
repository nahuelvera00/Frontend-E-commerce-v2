import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

//REDUX
import { useSelector } from "react-redux";

const AsideNavClient = () => {
  const [menuHombre, setMenuHombre] = useState(false);
  const [menuMujer, setMenuMujer] = useState(false);

  const handleClick = () => {
    setMenuHombre(!menuHombre);
  };
  const handleClickMujer = () => {
    setMenuMujer(!menuMujer);
  };

  const menu = useSelector((state) => state.cliente.menu);
  const subCategorias = useSelector((state) => state.cliente.subCategorias);
  const categorias = useSelector((state) => state.cliente.categorias);
  return (
    <div
      className={`sm:hidden fixed links h-full w-3/4 bg-white ease-in duration-300 z-40 ${
        menu ? "left-0" : "-left-[400px]"
      } `}
    >
      <div className='w-full p-3'>
        <div className='flex justify-between items-center py-2 px-2 bg-slate-300 border-b-[1px] border-slate-800'>
          <h1 className='text-xl uppercase font-bold text-slate-800'>hombre</h1>
          <button onClick={handleClick} type='button'>
            {menuHombre ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-slate-800'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-slate-800'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`px-3 text-slate-800 flex flex-col gap-1 py-1 uppercase font-semibold bg-gray-200 transition-all ease-in duration-300 ${
            menuHombre ? "block" : "hidden"
          }`}
        >
          {subCategorias.map((categoria) => (
            <Link
              to={`/home/product/male/${categoria.name}`}
              key={categoria._id}
            >
              <p>{categoria.name}</p>
            </Link>
          ))}
        </div>
        <div className='flex justify-between items-center py-2 px-2 bg-slate-300 border-b-[1px] border-slate-800'>
          <h1 className='text-xl uppercase font-bold text-slate-800'>mujer</h1>
          <button onClick={handleClickMujer} type='button'>
            {menuMujer ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-slate-800'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-slate-800'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`px-3 text-slate-800 flex flex-col gap-1 py-1 uppercase font-semibold bg-gray-200 transition-all ease-in duration-300 ${
            menuMujer ? "block" : "hidden"
          }`}
        >
          {subCategorias.map((categoria) => (
            <Link
              to={`/home/product/female/${categoria.name}`}
              key={categoria._id}
            >
              <p>{categoria.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AsideNavClient;
