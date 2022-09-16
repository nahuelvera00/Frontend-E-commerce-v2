import React from "react";
import { useParams, useNavigate } from "react-router-dom";

//REDUX
import { useDispatch, useSelector } from "react-redux";

const Pedido = () => {
  const params = useParams();
  console.log(params.id);
  const pedido = useSelector((state) => state.cliente.pedidos);
  const pedidoSeleccionado = pedido.filter((e) => e._id === params.id)[0];
  console.log(pedidoSeleccionado);
  const metodosPago = useSelector((state) => state.cliente.metodosPago);
  const metodoPago = metodosPago.filter(
    (e) => e.nombreMetodo == pedidoSeleccionado.metodoDePago.metodo
  )[0];
  let fecha = pedidoSeleccionado.fechaCompra;
  fecha = fecha.replace(/\D/g, " ");
  let componentes = fecha.split(" ");

  return (
    <div className='w-full'>
      <h1 className='flex w-full justify-center py-2 font-semibold uppercase'>
        Pedido
      </h1>
      <div className='w-full px-3'>
        <div className='w-full flex justify-between px-2'>
          <p className='uppercase'> fecha de compra:</p>
          <p className='uppercase font-semibold'>
            {componentes[2]}-{componentes[1]}-{componentes[0]}
          </p>
        </div>
        <div className='w-full bg-gray-200 rounded-xl py-2 px-2 mb-2'>
          <p className='w-full uppercase font-semibold flex justify-center'>
            Datos comprador
          </p>
          <div>
            <p>Nombre: {pedidoSeleccionado.datosUsuario.nombre}</p>
            <p>Apellido: {pedidoSeleccionado.datosUsuario.apellido}</p>
            <p>DNI: {pedidoSeleccionado.datosUsuario.dni} </p>
          </div>
        </div>
        <div className='w-full bg-gray-200 rounded-xl py-2 px-2 mb-2'>
          <p className='w-full uppercase font-semibold flex justify-center'>
            Datos Envio
          </p>
          <div>
            <p>Calle: {pedidoSeleccionado.datosEnvio.calle}</p>
            <p>Numero: {pedidoSeleccionado.datosEnvio.numero}</p>
            <p>C.P.: {pedidoSeleccionado.datosEnvio.codigoPostal}</p>
          </div>
        </div>
        <div className='w-full bg-gray-200 rounded-xl py-2 px-2 mb-2'>
          <p className='w-full uppercase font-semibold flex justify-center'>
            Lista de Productos
          </p>
          <div></div>
        </div>
        <div className='w-full bg-orange-300 rounded-xl py-2 px-2 mb-2'>
          <p className='w-full uppercase font-semibold flex justify-center'>
            Metodo de Pago
          </p>
          <div>
            <p>
              Tipo de Pago:{" "}
              <span className='uppercase font-semibold'>
                {metodoPago.nombreMetodo}
              </span>
            </p>
            <p>Banco: {metodoPago.banco}</p>
            <p>Nombre Titular: {metodoPago.nombreCuenta}</p>
            <p>CUIT Titular: {metodoPago.cuit}</p>
            <p>CBU: {metodoPago.cbu}</p>
            <p>
              TOTAL A PAGAR:{" "}
              <span className='uppercase font-semibold'>
                ${pedidoSeleccionado.total}
              </span>
            </p>
          </div>
        </div>
        <div>
          <p>Formulario Enviar comprobante</p>
        </div>
      </div>
    </div>
  );
};

export default Pedido;
