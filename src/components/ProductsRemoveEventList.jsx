import React from "react";
import { useParams } from "react-router-dom";

//REDUX
import { useDispatch } from "react-redux";
import { quitarEventoAction } from "../actions/AdminAction";

const ProductsRemoveEventList = ({ producto }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const URL = `${import.meta.env.VITE_BACKEND_URL}/images/${producto.image[0]}`;

  const quitarEventoProducto = (id) => dispatch(quitarEventoAction(id));

  return (
    <tr className=''>
      <td>
        <div className='w-full flex justify-center'>
          <img className='w-12' src={URL} alt='' />
        </div>
      </td>
      <td>
        <div>
          <p>{producto.name}</p>
        </div>
      </td>
      <td className='px-1'>
        <div>
          <button
            className='uppercase text-sm text-white font-bold flex w-full justify-center items-center bg-red-300 rounded-md hover:bg-red-400'
            type='button'
            onClick={() => quitarEventoProducto(producto._id)}
          >
            Quitar
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductsRemoveEventList;
