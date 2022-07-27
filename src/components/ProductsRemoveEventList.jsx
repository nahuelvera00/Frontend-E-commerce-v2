import React from 'react';
import { useParams } from 'react-router-dom';

const ProductsRemoveEventList = ({ producto }) => {
  const params = useParams();
  const URL = `${import.meta.env.VITE_BACKEND_URL}/images/${producto.image[0]}`;

  if (producto.evento == params.id) {
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
            <p>Quitar</p>
          </div>
        </td>
      </tr>
    );
  } else {
    null;
  }
};

export default ProductsRemoveEventList;
