import React from 'react';
import Swal from 'sweetalert';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { subCategoriaEliminarAction } from '../actions/AdminAction';

const CategoryListAdmin = ({ subCategoria }) => {
  const { _id, name } = subCategoria;
  const dispatch = useDispatch();

  const confirmarEliminarSubCategoria = (id) => {
    Swal({
      title: '¿Seguro quieres eliminar esta Categoria?',
      text: 'Una vez eliminado, no podra ser recuperado!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((result) => {
      if (result) {
        //pasar al action
        dispatch(subCategoriaEliminarAction(id));
      }
    });
  };

  return (
    <tr className=" border-b-[1px] border-gray-300 last:border-b-0">
      <td>
        <div className="flex p-1">
          <p className="uppercase text-sm">{name}</p>
        </div>
      </td>
      <td>
        <div className="flex p-1">
          <button
            onClick={() => confirmarEliminarSubCategoria(_id)}
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

export default CategoryListAdmin;
