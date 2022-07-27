import React from 'react';
import Swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { agregarProductoEventosAction } from '../actions/AdminAction';

const EventosListAdmin = ({ evento }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const confirmarEliminarEvento = (id) => {
    //Preguntar al usuario
    Swal({
      title: '¿Seguro quieres eliminar este Evento?',
      text: 'Una vez eliminado se quitara de todos los productos vinculados!!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((result) => {
      if (result) {
        //pasar al action
        dispatch(borrarEventoAction(id));
      }
    });
  };

  const editarEvento = (id) => {
    if (dispatch()) navigate(`/admin/events/${id}`);
  };

  const agregarProductosEvento = (id) => {
    if (dispatch(agregarProductoEventosAction(id))) {
      navigate(`/admin/events/${id}/add-products`);
    }
  };
  return (
    <tr className="border-b-2">
      <td className="uppercase text-sm w-3/12">
        <div className="flex justify-center">
          <p className="">{evento.name}</p>
        </div>
      </td>
      <td className="uppercase text-sm w-3/12">
        <span className="flex justify-center">{evento.descuento}%</span>
      </td>
      <td>
        <div className="sm:flex pb-1">
          <div className="flex sm:flex-row py-1">
            <button
              onClick={() => editarEvento(evento._id)}
              type="button"
              className="bg-blue-400 hover:bg-blue-500 px-2 mx-1 py-1 rounded-md text-white uppercase"
            >
              Editar
            </button>
            <button
              onClick={() => confirmarEliminarEvento(evento._id)}
              type="button"
              className="bg-red-400 hover:bg-red-500 px-2 mx-1 py-1 rounded-md text-white uppercase"
            >
              Eliminar
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-1 w-full sm:py-1">
            <button
              onClick={() => agregarProductosEvento(evento._id)}
              type="button"
              className="bg-blue-400 hover:bg-blue-500 px-2 mx-1 py-1 rounded-md text-sm text-white uppercase"
            >
              productos
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default EventosListAdmin;
