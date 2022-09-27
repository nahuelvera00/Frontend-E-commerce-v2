import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { agregarProductoCarritoAction } from "../../actions/ClientAction";
import { obtenerProductosClienteAction } from "../../actions/ClientAction";
import { obtenerEventosClienteAction } from "../../actions/ClientAction";

const Producto = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const productos = useSelector((state) => state.cliente.productos);

  const producto = productos.filter((producto) => producto._id === params.id);
  const eventos = useSelector((state) => state.cliente.eventos);
  const eventoAplicado = eventos.filter(
    (evento) => evento._id === producto[0].evento
  );
  const evento = eventoAplicado[0];
  let descuento = 0;

  if (evento) {
    descuento += evento.descuento;
  }
  let suma = 0;

  const stock = producto[0].waist;
  for (let valor in stock) {
    suma += stock[valor];
  }

  const [talle, setTalle] = useState({
    talle: "small",
  });

  //SELECCIONAR TALLE PRODUCTO
  const onChange = (e) => {
    setTalle({ ...talle, [e.target.name]: e.target.value });
  };
  //AGREGAR PRODUCTO AL CARRO
  const agregarProductoCarro = (talle, id) => {
    dispatch(agregarProductoCarritoAction(talle, producto[0]));
  };

  return (
    <div className='flex flex-col'>
      <div className='w-full md:flex md:justify-center'>
        <div className='w-full md:w-3/4 md:flex'>
          <div className='md:w-1/2'>
            <Carousel />
          </div>
          <div className='md:w-1/2 md:mt-5'>
            <div className='mx-5'>
              <h1 className='text-3xl font-semibold text-slate-800'>
                {producto[0].name}
              </h1>
              <div className='flex justify-between'>
                <div>
                  {descuento > 0 ? (
                    <div>
                      <p className='text-md font-semibold text-slate-500 line-through'>
                        ${producto[0].price}
                      </p>
                      <p className='text-md font-semibold text-slate-700'>
                        $
                        {producto[0].price -
                          (producto[0].price / 100) * descuento}
                      </p>
                    </div>
                  ) : (
                    <p className='text-md font-semibold text-slate-500'>
                      ${producto[0].price}
                    </p>
                  )}
                </div>
                {suma > 0 ? (
                  <p className='uppercase font-semibold'>en stock</p>
                ) : (
                  <p className='uppercase font-semibold text-red-500'>
                    sin stock
                  </p>
                )}
              </div>
            </div>
            <div className='mx-5'>
              <div className='flex'>
                <h1 className='mr-2'>Talle:</h1>
                <select className='w-16' name='talle' id='' onChange={onChange}>
                  {producto[0].waist.small > 0 ? (
                    <option className='font-semibold' value='small'>
                      S
                    </option>
                  ) : null}
                  {producto[0].waist.medium > 0 ? (
                    <option className='font-semibold' value='medium'>
                      M
                    </option>
                  ) : null}
                  {producto[0].waist.large > 0 ? (
                    <option className='font-semibold' value='large'>
                      L
                    </option>
                  ) : null}
                  {producto[0].waist.extraLarge > 0 ? (
                    <option className='font-semibold' value='extraLarge'>
                      XL
                    </option>
                  ) : null}
                </select>
              </div>
              {suma > 0 ? (
                <button
                  onClick={(e) => agregarProductoCarro(talle, params.id)}
                  className='flex w-full justify-center mt-2 p-2 text-white font-bold uppercase bg-green-600 hover:bg-green-700 rounded-md'
                >
                  agregar al carrito
                </button>
              ) : (
                <p className='flex w-full justify-center mt-2 p-2 text-white font-bold uppercase bg-gray-400 hover:bg-gray-500 rounded-md'>
                  no disponible
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='w-full md:flex md:justify-center'>
        <div className='mx-5 mb-5 pt-3 md:w-3/4'>
          <div className='flex'>
            <h2 className='uppercase font-semibold text-slate-600 underline'>
              marca:
            </h2>
            <p className='uppercase text-black pl-1'>{producto[0].brand}</p>
          </div>
          <h2 className='uppercase font-semibold text-slate-600 underline'>
            descripcion:
          </h2>
          <p className='pl-1 uppercase text-xs font-semibold'>
            {producto[0].description}
          </p>
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <p className='uppercase font-semibold py-2'>Productos Relacionados</p>
      </div>
    </div>
  );
};

export default Producto;
