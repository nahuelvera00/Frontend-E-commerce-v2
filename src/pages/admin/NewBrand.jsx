import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//REDUX
import { useDispatch } from 'react-redux';
import { crearMarcaAction } from '../../actions/AdminAction';

const NewBrand = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [alerta, setAlerta] = useState({});

  const nuevaMarca = (marca) => dispatch(crearMarcaAction(marca));

  const handleClick = (e) => {
    e.preventDefault();
    //VALIDACION
    if (name === '') {
      return setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true,
        active: true,
      });
    }
    setAlerta({
      msg: '',
      error: false,
      active: false,
    });

    //EJECUTAR DISPATCH
    if (
      nuevaMarca({
        nombre: name.toLowerCase(),
      })
    ) {
      setTimeout(() => {
        navigate('/admin/categories-brands');
      }, 1000);
    }
  };

  return (
    <div>
      <p className="uppercase flex justify-center py-2">Crear nueva Marca</p>
      <form action="">
        <div className="mb-2">
          <label htmlFor="name">Nombre de la Marca:</label>
          <input
            className="w-full border rounded-lg p-1"
            type="text"
            id="name"
            name="name"
            placeholder="Nombre de la Marca"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex">
          <Link
            className="p-2 mr-2 bg-red-400 rounded-lg hover:bg-red-500 transition-colors text-white uppercase font-bold"
            to="/admin/categories-brands"
          >
            Cancelar
          </Link>
          <button
            className={`p-2 font-bold flex justify-center w-full uppercase text-white rounded-md bg-blue-400 hover:bg-blue-500`}
            onClick={handleClick}
          >
            Crear
          </button>
        </div>
      </form>
      {alerta.active ? (
        <p className="flex justify-center bg-red-500 rounded-lg uppercase text-white pt-1 mt-2">
          {alerta.msg}
        </p>
      ) : null}
    </div>
  );
};

export default NewBrand;
