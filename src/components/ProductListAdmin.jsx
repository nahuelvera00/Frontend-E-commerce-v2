import React from 'react';
import Swal from 'sweetalert';
//REDUX
import { useDispatch } from 'react-redux';
import { borrarProductoAction } from '../actions/AdminAction';

const ProductListAdmin = ({ producto }) => {
  const URL = `${import.meta.env.VITE_BACKEND_URL}/images/${producto.image[0]}`;
  const stock =
    producto.waist.small +
    producto.waist.medium +
    producto.waist.large +
    producto.waist.extraLarge;
  const dispatch = useDispatch();

  const confirmarEliminarProducto = (id) => {
    //Preguntar al usuario
    Swal({
      title: '¿Seguro quieres eliminar este Producto?',
      text: 'Una vez eliminado, no podra ser recuperado!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((result) => {
      if (result) {
        //pasar al action
        dispatch(borrarProductoAction(id));
      }
    });
  };

  return (
    <tr className="border-b-2">
      <td className="">
        <div className="w-full flex justify-center">
          <img className="w-12" src={URL} alt="" />
        </div>
      </td>
      <td>
        <div>
          <p
            className={`${
              stock > 10
                ? 'bg-green-300'
                : stock <= 1
                ? 'bg-red-300'
                : 'bg-yellow-300'
            } p-1 rounded-md inline`}
          >
            {producto.name}
          </p>
        </div>
      </td>
      <td>$ {producto.price}</td>
      <td className="flex flex-col sm:flex-row py-1">
        <button
          type="button"
          className="bg-blue-400 hover:bg-blue-500 px-2 mx-1 sm:my-1 mb-1 py-1 rounded-md text-white uppercase"
        >
          Editar
        </button>
        <button
          onClick={() => confirmarEliminarProducto(producto._id)}
          type="button"
          className="bg-red-400 hover:bg-red-500 px-2 mx-1 sm:my-1 py-1 rounded-md text-white uppercase"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default ProductListAdmin;
