import React from 'react';
import Swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

//REDUX
import { useDispatch, useSelector } from 'react-redux';
import {
  eliminarMarcaAction,
  obtenerMarcaAction,
} from '../actions/AdminAction';

const BrandListAdmin = ({ props }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const confirmarEliminarMarca = (id) => {
    //Preguntar al usuario
    Swal({
      title: '¿Seguro quieres eliminar esta Marca?',
      text: 'Una vez eliminada, no podra ser recuperada!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((result) => {
      if (result) {
        //pasar al action
        dispatch(eliminarMarcaAction(id));
      }
    });
  };

  const editarMarca = async (id) => {
    if (await dispatch(obtenerMarcaAction(id))) {
      navigate(`/admin/brand/${id}`);
    }
  };

  return (
    <tr className=" border-b-[1px] border-gray-300 last:border-b-0">
      <td>
        <div className="flex p-1">
          <p className="uppercase text-sm">{props.nombre}</p>
        </div>
      </td>
      <td>
        <div className="flex p-1">
          <button
            onClick={() => editarMarca(props._id)}
            className="bg-blue-400 hover:bg-blue-500 px-2 mx-1 sm:my-1 rounded-md text-white uppercase"
          >
            Editar
          </button>
          <button
            onClick={() => confirmarEliminarMarca(props._id)}
            type="button"
            className="bg-red-400 hover:bg-red-500 px-2 mx-1 sm:my-1 rounded-md text-white uppercase"
          >
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  );
};

export default BrandListAdmin;
