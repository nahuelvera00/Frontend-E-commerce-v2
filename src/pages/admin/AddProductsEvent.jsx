import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductsAddEventList from '../../components/ProductsAddEventList';
import ProductsRemoveEventList from '../../components/ProductsRemoveEventList';

//REDUX
import { useSelector, useDispatch } from 'react-redux';

const AddProductsEvent = () => {
  const productosSinEvento = useSelector(
    (state) => state.admin.productosSinEvento
  );

  const productosEventoSeleccionado = useSelector(
    (state) => state.admin.productosEventoSeleccionado
  );
  const eventos = useSelector((state) => state.admin.eventos);
  const params = useParams();

  const evento = eventos.filter((evento) =>
    evento._id === params.id ? evento : null
  );
  return (
    <div>
      <h1 className="flex justify-center">{evento[0].name}</h1>
      <h2 className="flex w-full justify-start uppercase font-bold">
        Productos Agregados
      </h2>
      <div className="mb-2">
        <table className="w-full mx-1 border border-gray-300 rounded-md">
          <thead className="border-b-[1px] border-gray-400 uppercase">
            <tr className="">
              <th className="w-2/8">
                <p>Imagen</p>
              </th>
              <th className="w-3/8">
                <p>Nombre</p>
              </th>
              <th className="w-3/8">
                <p>Acciones</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {productosEventoSeleccionado.length > 0 ? (
              productosEventoSeleccionado.map((producto) => (
                <ProductsRemoveEventList
                  key={producto._id}
                  producto={producto}
                />
              ))
            ) : (
              <tr>
                <td>
                  <p>No hay Productos para Agregar</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <h2 className="flex w-full justify-start uppercase font-bold">
        Productos sin agregar
      </h2>
      <div>
        <table className="w-full mx-1 border border-gray-300 rounded-md">
          <thead className="border-b-[1px] border-gray-400 uppercase">
            <tr className="">
              <th className="w-2/8">
                <p>Imagen</p>
              </th>
              <th className="w-3/8">
                <p>Nombre</p>
              </th>
              <th className="w-3/8">
                <p>Acciones</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {productosSinEvento.length > 0 ? (
              productosSinEvento.map((producto) => (
                <ProductsAddEventList key={producto._id} producto={producto} />
              ))
            ) : (
              <tr>
                <td>
                  <p>No hay Productos para Agregar</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <Link
          className="w-full py-1 m-1 flex justify-center uppercase rounded-md text-white bg-blue-400 hover:bg-blue-500"
          to="/admin/events"
        >
          Guardar
        </Link>
      </div>
    </div>
  );
};

export default AddProductsEvent;
