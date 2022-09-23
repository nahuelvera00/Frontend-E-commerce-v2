import React from "react";
import { useParams } from "react-router-dom";
import ProductoVistaPrevia from "../../components/ProductoVistaPrevia";

//REDUX
import { useSelector } from "react-redux";

const ProductosCategoria = () => {
  const params = useParams();
  const subCategorias = useSelector((state) => state.cliente.subCategorias);
  const subCategoria = subCategorias.filter((e) => e.name === params.categoria);
  const productos = useSelector((state) => state.cliente.productos);

  const productosCategoria = productos.filter(
    (producto) => producto.subCategory === subCategoria[0]._id
  );

  const productosGenero = productosCategoria.filter(
    (producto) => producto.gender === params.gender
  );

  return (
    <div className='flex flex-col w-full'>
      <h1 className='flex w-full  justify-center items-center uppercase font-semibold py-2'>
        {params.gender === "male"
          ? `hombre-${params.categoria}`
          : params.gender === "female"
          ? `mujer-${params.categoria}`
          : params.categoria}
      </h1>
      <div className='w-full flex justify-center'>
        <div className='mx-5 my-5 grid grid-cols-2 gap-6 md:w-2/4'>
          {params.gender === "all" ? (
            productosCategoria.map((producto) => (
              <ProductoVistaPrevia producto={producto} key={producto._id} />
            ))
          ) : productosGenero.length > 0 ? (
            productosGenero.map((producto) => (
              <ProductoVistaPrevia producto={producto} key={producto._id} />
            ))
          ) : (
            <p>No hay Productos de la Categoria Seleccionada</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductosCategoria;
