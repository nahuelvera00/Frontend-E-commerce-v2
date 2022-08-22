import React from "react";
import { useParams } from "react-router-dom";

const ProductosCategoria = () => {
  const params = useParams();
  return (
    <div className='flex w-full'>
      <h1 className='flex w-full  justify-center items-center uppercase font-semibold py-2'>
        {params.gender === "male" ? "hombre" : "Mujer"}-{params.categoria}
      </h1>
    </div>
  );
};

export default ProductosCategoria;
