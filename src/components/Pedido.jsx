import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { enviarComprobantePagoAction } from "../actions/ClientAction";

const Pedido = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const pedido = useSelector((state) => state.cliente.pedidos);
  const pedidoSeleccionado = pedido.filter((e) => e._id === params.id)[0];
  const metodosPago = useSelector((state) => state.cliente.metodosPago);
  const metodoPago = metodosPago.filter(
    (e) => e.nombreMetodo == pedidoSeleccionado.metodoDePago.metodo
  )[0];
  let fecha = pedidoSeleccionado.fechaCompra;
  fecha = fecha.replace(/\D/g, " ");
  let componentes = fecha.split(" ");

  const productosId = pedidoSeleccionado.orden.map((e) => e.id);
  const productos = useSelector((state) => state.cliente.productos);
  const productosOrden = productos.filter(
    (id) => id._id === productosId.find((e) => (e == id._id ? e : null))
  );
  console.log(productosOrden);

  const [comprobante, setComprobante] = useState({
    image: [],
  });

  const subirArchivo = (e) => {
    setComprobante({ ...comprobante, image: e });
  };

  const enviarComprobante = (comprobante, id) => {
    dispatch(enviarComprobantePagoAction(comprobante, id));
  };

  const handleSubmit = async (comprobante) => {
    const formData = new FormData();
    formData.append("image", comprobante.image[0]);

    if (await enviarComprobante(formData, pedidoSeleccionado._id)) {
      navigate("/home/profile");
    }
  };

  return (
    <div className='w-full flex justify-center'>
      <div className='w-full md:w-1/2'>
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
          <div className='w-full flex justify-between px-2'>
            <p className='uppercase'> estado:</p>
            <p className='uppercase font-semibold'>
              {pedidoSeleccionado.estado}
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
            <div>
              {productosOrden.length >= 1
                ? productosOrden.map((e) => <p key={e._id}>- {e.name}</p>)
                : null}
            </div>
          </div>
          <div className='w-full bg-orange-300 rounded-xl py-2 px-2 mb-2'>
            <p className='w-full uppercase font-semibold flex justify-center'>
              Metodo de Pago
            </p>
            <div>
              <p>
                Tipo de Pago:{" "}
                <span className='uppercase font-semibold'>
                  {pedidoSeleccionado.metodoDePago.metodo}
                </span>
              </p>
              <p>Banco: {metodoPago.banco}</p>
              <p>Nombre Titular: {metodoPago.nombreCuenta}</p>
              <p>CUIT: {metodoPago.cuit}</p>
              <p>CBU: {metodoPago.cbu}</p>
              <p>
                TOTAL A PAGAR:{" "}
                <span className='uppercase font-semibold'>
                  ${pedidoSeleccionado.total}
                </span>
              </p>
            </div>
          </div>
          {pedidoSeleccionado.comprobante == null ? (
            <div className='w-full bg-gray-300 rounded-xl py-2 px-2 mb-2'>
              <p className='w-full uppercase font-semibold flex justify-center mb-2'>
                Comprobante de pago
              </p>
              <div className='mb-2 w-full'>
                <input
                  className='mb-1 w-full'
                  type='file'
                  name='image'
                  multiple={false}
                  onChange={(e) => subirArchivo(e.target.files)}
                />
              </div>
              <button
                onClick={(e) => handleSubmit(comprobante)}
                className='flex justify-center w-full rounded-xl text-white font-semibold uppercase bg-slate-700 py-2'
              >
                enviar comprobante
              </button>
            </div>
          ) : (
            <div className='w-full bg-gray-300 rounded-xl py-2 px-2 mb-2'>
              <p className='w-full flex justify-center uppercase font-semibold mb-2'>
                Comprobante
              </p>
              <img
                className='rounded-md'
                src={`${import.meta.env.VITE_BACKEND_URL}/images/${
                  pedidoSeleccionado.comprobante
                }`}
                alt=''
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pedido;
