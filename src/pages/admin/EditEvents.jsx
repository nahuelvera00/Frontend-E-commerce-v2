import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

//REDUX
import { useDispatch, useSelector } from 'react-redux';

const EditEvents = () => {
  const [evento, setEvento] = useState({});
  const [name, setName] = useState('');
  const [descuento, setDescuento] = useState(0);
  const [fechaInicio, setFechaInicio] = useState(Date());
  console.log(fechaInicio);

  const eventos = useSelector((state) => state.admin.eventos);
  const params = useParams();
  useEffect(() => {
    const evento = eventos.map((evento) =>
      evento._id === params.id ? evento : null
    );
    console.log(evento[0]);
    setEvento(evento[0]);
    setName(evento[0].name);
    setDescuento(evento[0].descuento);
    setFechaInicio(evento[0].fechaInicio);
  }, []);
  return (
    <div>
      <h1>editar evento</h1>
      <form action="">
        <div className="mb-2">
          <label htmlFor="name">Nombre del Evento:</label>
          <input
            className="w-full border rounded-lg p-1"
            type="text"
            id="name"
            name="name"
            placeholder="Nombre del Evento"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="name">Descuento:</label>
          <div className="flex gap-1 justify-center items-center">
            <input
              className="w-full border rounded-lg p-1"
              type="number"
              id="descuento"
              name="descuento"
              placeholder="Descuento"
              value={descuento}
              onChange={(e) => setDescuento(e.target.value)}
            />
            <p>%</p>
          </div>
          <div className="mb-2">
            <label htmlFor="name">Fecha de Inicio:</label>
            <input
              className="w-full border rounded-lg p-1"
              type="date"
              id="fechaInicio"
              name="fecha de Inicio"
              placeholder="Nombre del Evento"
              value={fechaInicio}
              onChange={(e) => setFechaInicio(e.target.value)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditEvents;
