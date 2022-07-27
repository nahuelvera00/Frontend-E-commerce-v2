import React from 'react';
import { useEffect } from 'react';
import EventosListAdmin from '../../components/EventosListAdmin';

//REDUX
import { obtenerEventosAction } from '../../actions/AdminAction';
import { useDispatch, useSelector } from 'react-redux';
const AdminEventos = () => {
  const dispatch = useDispatch();
  const eventos = useSelector((state) => state.admin.eventos);

  useEffect(() => {
    const getEvents = () => dispatch(obtenerEventosAction());
    getEvents();
  }, []);

  return (
    <div>
      <div>
        <h1 className="flex justify-center uppercase font-bold">EVENTOS</h1>
        <div className="px-1 py-2 overflow-scroll max-h-[400px] border m-1 rounded-md">
          <table className="w-full">
            <thead className="border-b-2 border-b-gray-500 w-full">
              <tr className="">
                <th className="uppercase text-sm w-3/12">
                  <span>nombre</span>
                </th>
                <th className="uppercase text-sm w-3/12" scope="col">
                  <span>descuento</span>
                </th>
                <th className="uppercase text-sm" scope="col">
                  <span className="">acciones</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {eventos.length > 0 ? (
                eventos.map((evento) => (
                  <EventosListAdmin evento={evento} key={evento._id} />
                ))
              ) : (
                <tr>
                  <td>
                    <p>No existen Eventos</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminEventos;
