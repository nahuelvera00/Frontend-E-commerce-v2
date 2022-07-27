import React from 'react';
import { useParams } from 'react-router-dom';

//REDUX
import { useSelector, useDispatch } from 'react-redux';
import { agregarEventoAction } from '../actions/AdminAction';

const ProductsAddEventList = ({ producto }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const eventos = useSelector((state) => state.admin.eventos);

  const evento = eventos.filter((evento) =>
    evento._id === params.id ? evento : null
  );
  const URL = `${import.meta.env.VITE_BACKEND_URL}/images/${producto.image[0]}`;

  const agregarEventoProducto = (id, evento) =>
    dispatch(agregarEventoAction(id, evento));
  if (producto.evento !== null) {
    return null;
  }
  if (producto.evento === null) {
    return (
      <tr>
        <td>
          <div className="w-full flex justify-center">
            <img className="w-12" src={URL} alt="" />
          </div>
        </td>
        <td>
          <div>
            <p>{producto.name}</p>
          </div>
        </td>
        <td>
          <div>
            <button
              type="button"
              onClick={() => agregarEventoProducto(producto._id, evento[0])}
            >
              agregar
            </button>
          </div>
        </td>
      </tr>
    );
  }
};

export default ProductsAddEventList;
