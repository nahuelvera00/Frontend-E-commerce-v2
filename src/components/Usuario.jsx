import React from "react";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import TagPedido from "./TagPedido";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { obtenerOrdenesCompraClienteAction } from "../actions/ClientAction";

const Usuario = ({ usuario }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const obtenerOrdenes = () => dispatch(obtenerOrdenesCompraClienteAction());
    obtenerOrdenes();
  }, []);
  const pedidos = useSelector((state) => state.cliente.pedidos);
  console.log(pedidos);
  const { cerrarSesionAuth } = useAuth();
  return (
    <div className='w-full md:w-1/2 flex flex-col'>
      <div className='bg-gray-200 rounded-xl mt-2 mx-2 p-1'>
        <h1 className='uppercase font-semibold py-2 w-full flex justify-center'>
          perfil
        </h1>
        <div className='w-full flex flex-col px-5 mb-3'>
          <p className='uppercase'>
            nombre: <span className='font-semibold'>{usuario.username}</span>
          </p>
          <p className='uppercase'>
            email: <span className='font-semibold'>{usuario.email}</span>
          </p>
        </div>
      </div>
      <div className='bg-gray-200 rounded-xl mt-2 mb-2 mx-2 p-1'>
        <p className='uppercase w-full flex justify-center font-semibold py-2'>
          pedidos
        </p>
        <div className='w-full flex flex-col px-5 mb-3'>
          {pedidos.length > 0 ? (
            pedidos.map((pedido) => (
              <TagPedido key={pedido._id} pedido={pedido} />
            ))
          ) : (
            <p>No hay pedidos existentes</p>
          )}
        </div>
      </div>
      <button
        onClick={() => cerrarSesionAuth()}
        className='uppercase font-semibold text-white bg-slate-800 mx-2 p-2 rounded-xl'
      >
        cerrar sesion
      </button>
    </div>
  );
};

export default Usuario;
