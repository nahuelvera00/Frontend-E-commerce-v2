import React from "react";

//REDUX
import { useSelector } from "react-redux";
import ProductoVistaPrevia from "../../components/ProductoVistaPrevia";

const AllProducts = () => {
  const productos = useSelector((state) => state.cliente.productos);
  return (
    <div className='w-full flex flex-col'>
      <h1 className='flex justify-center uppercase py-2 font-semibold'>
        Todos nuestros productos
      </h1>
      <div className='flex justify-center w-full'>
        <div className='w-3/4 grid grid-cols-2 gap-2 px-2'>
          {productos.map((producto) => (
            <ProductoVistaPrevia producto={producto} key={producto._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
