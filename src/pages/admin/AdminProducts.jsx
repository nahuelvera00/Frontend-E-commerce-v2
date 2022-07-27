import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//COMPONENTS
import ProductListAdmin from '../../components/ProductListAdmin';

//REDUX
import { useSelector, useDispatch } from 'react-redux';
import { obtenerProductosAction } from '../../actions/AdminAction';

const AdminProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const cargarProductos = () => dispatch(obtenerProductosAction());
    cargarProductos();
  }, []);

  const productos = useSelector((state) => state.admin.productos);
  const cargando = useSelector((state) => state.admin.loading);

  return (
    <Container>
      <h1 className="pb-3 pt-2 flex justify-center">Productos</h1>
      <div className="w-full px-2">
        <Link
          to="/admin/new-product"
          className="flex gap-1 w-full items-center justify-center px-2 py-1 text-white rounded-lg bg-blue-500 hover:bg-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-circle-plus"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#fff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="9" />
            <line x1="9" y1="12" x2="15" y2="12" />
            <line x1="12" y1="9" x2="12" y2="15" />
          </svg>
          <p>NUEVO PRODUCTO</p>
        </Link>
      </div>

      <div className="flex justify-between py-2 mx-2">
        <h1 className="">Listado de Productos</h1>
        <p>BUSCAR</p>
      </div>
      <div className="px-1 py-2 overflow-scroll max-h-[400px] border m-1 rounded-md">
        <table className="w-full">
          <thead className="border-b-2 border-b-gray-500">
            <tr className="">
              <th className="w-1/8">
                <span>Imagen</span>
              </th>
              <th className="" scope="col">
                <span className="w-full flex">Nombre</span>
              </th>
              <th className="" scope="col">
                Precio
              </th>
              <th className="w-1/4" scope="col">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {productos.length === 0 ? (
              <tr>
                <td>
                  <p>No hay Productos</p>
                </td>
              </tr>
            ) : (
              productos.map((producto) => (
                <ProductListAdmin key={producto._id} producto={producto} />
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between px-2 py-2 bg-gray-200 m-1 rounded-lg">
        <p className="uppercase text-xs bg-green-400 py-1 px-2 rounded-lg">
          buen stock
        </p>
        <p className="uppercase text-xs bg-yellow-400 py-1 px-2 rounded-lg">
          poco stock
        </p>
        <p className="uppercase text-xs bg-red-400 py-1 px-2 rounded-lg">
          sin stock
        </p>
      </div>
    </Container>
  );
};

export default AdminProducts;

const Container = styled.div``;
