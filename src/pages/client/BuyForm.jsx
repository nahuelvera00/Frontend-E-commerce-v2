import React from "react";
import { useState, useEffect } from "react";
import Alerta from "../../components/Alerta";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { crearOrdenCompraAction } from "../../actions/ClientAction";

const BuyForm = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const dispatch = useDispatch();

  const carrito = useSelector((state) => state.cliente.carrito);
  const eventos = useSelector((state) => state.cliente.eventos);
  const metodosPago = useSelector((state) => state.cliente.metodosPago);

  const calcularPrecio = (producto) => {
    let descuento = 0;
    descuento = eventos.filter((e) => (e._id = producto.evento))[0].descuento;

    const precio = producto.price - (producto.price / 100) * descuento;

    return precio;
  };

  const precio = carrito
    .map((ev) =>
      ev.producto.evento !== null
        ? calcularPrecio(ev.producto)
        : ev.producto.price
    )
    .reduce((prev, curr) => prev + curr, 0);

  const precioEnvio = 900;

  const productoOrden = (e) => {
    return { product: e.producto._id, talle: e.talle };
  };

  const order = carrito.map((e) => productoOrden(e));

  //ALERTA
  const [alerta, setAlerta] = useState({});

  //DATOS PERSONALES
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState(0);
  const [email, setEmail] = useState("");

  //DATOS ENVIO
  const [calle, setCalle] = useState("");
  const [numero, setNumero] = useState(0);
  const [cp, setCp] = useState(0);

  //METODO DE PAGO
  const [metodo, setMetodo] = useState();

  useEffect(() => {
    setNombre(auth.data.usuario.username);
    setEmail(auth.data.usuario.email);
  }, []);

  const crearOrden = (orden) => dispatch(crearOrdenCompraAction(orden));

  const handleSubmit = (e) => {
    if (nombre.length < 3) {
      setAlerta({
        msg: "Es obligatorio ingresar el Nombre",
        error: true,
      });
      return;
    } else {
      setAlerta({});
    }

    if (apellido.length < 1) {
      setAlerta({
        msg: "es obligatorio ingresar el apellido",
        error: true,
      });
      return;
    } else {
      setAlerta({});
    }

    if (dni == 0 || dni.length < 8) {
      setAlerta({
        msg: "es obligatorio ingresar el dni",
        error: true,
      });
      return;
    } else {
      setAlerta({});
    }

    if (email.length < 6) {
      setAlerta({
        msg: "Es obligatorio ingresar un correo Electronico",
        error: true,
      });
      return;
    } else {
      setAlerta({});
    }

    if (calle.length < 3) {
      setAlerta({
        msg: "es obligatorio ingresar la calle",
        error: true,
      });
      return;
    } else {
      setAlerta({});
    }
    if (numero == "") {
      setAlerta({
        msg: "Es obligatorio ingresar el numero de calle",
        error: true,
      });
      return;
    } else {
      setAlerta({});
    }

    if (cp == 0) {
      setAlerta({
        msg: "es obligatorio ingresar el codigo postal",
        error: true,
      });
      return;
    } else {
      setAlerta({});
    }

    if (metodo === undefined || metodo == "default") {
      setAlerta({
        msg: "Seleccione un metodo de Pago",
        error: true,
      });
      return;
    } else {
      setAlerta({});
    }

    if (
      crearOrden({
        order,
        total: precio + precioEnvio,
        datosUsuario: {
          nombre: nombre,
          apellido: apellido,
          dni: Number(dni),
          correo: email,
        },
        datosEnvio: {
          calle: calle,
          numero: Number(numero),
          codigoPostal: Number(cp),
        },
        metodoPago: metodo,
      })
    ) {
      navigate("/home/profile");
    }
  };

  const { msg } = alerta;

  return (
    <div className='w-full'>
      <h1 className='w-full flex justify-center uppercase py-2 font-semibold'>
        Completar compra
      </h1>
      <div className='w-full px-3 mb-3 uppercase'>
        {msg && <Alerta alerta={alerta} />}
        <div className=' py-2 bg-gray-200 rounded-xl px-2'>
          <p className='justify-center w-full flex mb-1'>lista de productos</p>
          <div className='pl-2'>
            {carrito.length > 0
              ? carrito.map((e) => (
                  <div className='normal-case flex gap-3 text-sm'>
                    <p>
                      Producto:{" "}
                      <span className='uppercase font-semibold'>
                        {e.producto.name}
                      </span>
                    </p>
                    <p>
                      Talle:{" "}
                      <span className='uppercase font-semibold'>{e.talle}</span>
                    </p>
                  </div>
                ))
              : null}
          </div>
        </div>
        <div className=' py-2 bg-gray-200 rounded-xl px-2 mt-2'>
          <p className='justify-center w-full flex mb-1'>datos personales</p>
          <div className='px-2'>
            <form action=''>
              <div className='flex items-center gap-2 mb-1'>
                <label htmlFor=''>Nombre:</label>
                <input
                  className='w-full border rounded-lg p-1'
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Nombre del Usuario'
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className='flex items-center gap-2 mb-1'>
                <label htmlFor=''>Apellido:</label>
                <input
                  className='w-full border rounded-lg p-1'
                  type='text'
                  id='surname'
                  name='surname'
                  placeholder='Apellido del Usuario'
                  onChange={(e) => setApellido(e.target.value)}
                />
              </div>
              <div className='flex items-center gap-2 mb-1'>
                <label htmlFor=''>DNI:</label>
                <input
                  className='w-full border rounded-lg p-1'
                  type='number'
                  id='dni'
                  name='dni'
                  placeholder='Numero de Documento'
                  onChange={(e) => setDni(e.target.value)}
                />
              </div>{" "}
              <div className='flex items-center gap-2'>
                <label htmlFor=''>Email:</label>
                <input
                  className='w-full border rounded-lg p-1'
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Correo Electronico'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </form>
          </div>
        </div>
        <div className='mt-2 bg-gray-200 rounded-xl py-2 px-2'>
          <p className='justify-center w-full flex mb-1'>Datos de envio</p>
          <div className='px-2'>
            <form action=''>
              <div className='flex items-center gap-2 mb-1'>
                <label htmlFor=''>calle: </label>
                <input
                  className='w-full border rounded-lg p-1'
                  type='text'
                  id='street'
                  name='street'
                  placeholder='Nombre de la Calle'
                  onChange={(e) => setCalle(e.target.value)}
                />
              </div>
              <div className='flex items-center gap-2 mb-1'>
                <label htmlFor=''>numero: </label>
                <input
                  className='w-full border rounded-lg p-1'
                  type='number'
                  id='number'
                  name='number'
                  placeholder='Altura de la Calle'
                  onChange={(e) => setNumero(e.target.value)}
                />
              </div>
              <div className='flex items-center gap-2 mb-1'>
                <label htmlFor=''>c.p.: </label>
                <input
                  className='w-full border rounded-lg p-1'
                  type='number'
                  id='cp'
                  name='cp'
                  placeholder='Codigo Postal'
                  onChange={(e) => setCp(e.target.value)}
                />
              </div>
              <p className='flex w-full justify-center'>
                costo envio: ${precioEnvio}
              </p>
            </form>
          </div>
        </div>
        <div className='mt-2 bg-gray-200 rounded-xl py-2 px-2'>
          <p className='justify-center w-full flex mb-1'>Total a pagar</p>
          <div className='px-2'>
            <p className='text-sm'>Productos: ${precio}</p>
            <p className='text-sm'>Envio: ${precioEnvio}</p>
            <p className='font-semibold'>Total: ${precio + precioEnvio}</p>
          </div>
        </div>
        <div className='mt-2 bg-gray-200 rounded-xl py-2 px-2 mb-2'>
          <p className='justify-center w-full flex mb-1'>metodo de pago</p>
          <div className='px-2 gap-2 flex items-center'>
            <label htmlFor=''>Metodo: </label>
            <select
              onChange={(e) => setMetodo(e.target.value)}
              className='uppercase'
              name=''
              id=''
            >
              <option value='default'>Seleccione un metodo</option>
              {metodosPago.map((e) => (
                <option className='uppercase' value={e._id}>
                  {e.nombreMetodo}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='w-full'>
          <button
            type='button'
            onClick={(e) => handleSubmit()}
            className='w-full py-2 bg-slate-800 rounded-xl text-white uppercase font-semibold'
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyForm;
