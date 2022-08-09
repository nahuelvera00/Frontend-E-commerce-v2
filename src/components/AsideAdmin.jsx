import React from "react";
import { Link } from "react-router-dom";

const AsideAdmin = () => {
  return (
    <div className='hidden md:flex flex-col px-2 uppercase'>
      <div className='pt-2 pb-1 hover:underline'>
        <Link to='products'>Productos</Link>
      </div>
      <div className='pb-1 hover:underline'>
        <Link to='orders'>Pedidos</Link>
      </div>
      <div className='pb-1 hover:underline'>
        <Link to='events'>Eventos</Link>
      </div>
      <div className='pb-1 hover:underline'>
        <Link to='categories-brands'>Categorias y Marcas</Link>
      </div>
    </div>
  );
};

export default AsideAdmin;
