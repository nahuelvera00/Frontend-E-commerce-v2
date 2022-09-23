import React from "react";
import { useParams } from "react-router-dom";
import ProductoVistaPrevia from "../../components/ProductoVistaPrevia";

//REDUX
import { useSelector } from "react-redux";

const ProductosMarca = () => {
  const params = useParams();

  const productos = useSelector((state) => state.cliente.productos);

  const productosMarca = productos.filter(
    (producto) => producto.brand === params.brand
  );

  return (
    <div className='w-full'>
      <h1 className='flex justify-center uppercase font-bold py-2'>
        {params.brand}
      </h1>
      <div className='w-full flex justify-center'>
        <div className='mx-5 my-5 grid grid-cols-2 gap-6 md:w-1/2'>
          {productosMarca.map((producto) => (
            <ProductoVistaPrevia producto={producto} key={producto._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductosMarca;
