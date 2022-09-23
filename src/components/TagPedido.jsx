import React from "react";
import { Link } from "react-router-dom";

const TagPedido = ({ pedido }) => {
  //FORMATEAR FECHA
  let fecha = pedido.fechaCompra;
  fecha = fecha.replace(/\D/g, " ");
  let componentes = fecha.split(" ");

  return (
    <Link
      to={`/home/profile/order/${pedido._id}`}
      className={`${
        pedido.estado == "Pago Pendiente"
          ? "bg-yellow-400"
          : pedido.estado == "Pago a Confirmar"
          ? "bg-blue-200"
          : pedido.estado == "Pago Confirmado"
          ? "bg-green-200"
          : ""
      } rounded-md w-full mb-2`}
    >
      <div className='w-full'>
        <p className='flex w-full uppercase font-semibold py-1 px-1'>
          fecha: {componentes[2]}-{componentes[1]}-{componentes[0]}
        </p>
        <div className='w-full px-2 flex justify-between'>
          <p>C. Productos: {pedido.orden.length}</p>
          <p className='uppercase'>total: ${pedido.total}</p>
        </div>
        <div className='w-full flex p-2 uppercase font-semibold'>
          <p className='w-full flex justify-center'>{pedido.estado}</p>
        </div>
      </div>
    </Link>
  );
};

export default TagPedido;
