import React from 'react';
import { useState } from 'react';

//REDUX
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { nuevaSubCategoriaAction } from '../../actions/AdminAction';

const NewCategory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nuevaSubCategoria = (subCategory) =>
    dispatch(nuevaSubCategoriaAction(subCategory));

  const categorias = useSelector((state) => state.admin.categorias);

  const [name, setName] = useState('');
  const [categoryReference, setCategoryReference] = useState('');
  const [alerta, setAlerta] = useState({});

  const handleClick = (e) => {
    e.preventDefault();
    //VALIDACION
    if (name === '' || categoryReference === '') {
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
      nuevaSubCategoria({
        name: name.toLowerCase(),
        categorieReference: categoryReference,
      })
    ) {
      setTimeout(() => {
        navigate('/admin/categories-brands');
      }, 2000);
    }
  };

  return (
    <div className="m-2">
      <p className="uppercase flex justify-center py-2">
        Crear nueva Categoria
      </p>
      <form>
        <div className="mb-2">
          <label htmlFor="name">Nombre de la Categoria:</label>
          <input
            className="w-full border rounded-lg p-1"
            type="text"
            id="name"
            name="name"
            placeholder="Nombre de la Categoria"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="categoryReference" className="mr-1">
            Categoria Referencia:
          </label>
          <select
            className="bg-gray-200 rounded-md py-1 px-2 uppercase"
            value={categoryReference}
            onChange={(e) => setCategoryReference(e.target.value)}
          >
            <option value="">Seleccione Categoria</option>
            {categorias.length > 0
              ? categorias.map((categoria) => (
                  <option
                    key={categoria._id}
                    value={categoria.name}
                    className="uppercase"
                  >
                    {categoria.name}
                  </option>
                ))
              : null}
          </select>
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

export default NewCategory;
