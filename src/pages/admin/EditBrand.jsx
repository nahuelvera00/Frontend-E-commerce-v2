import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { editarMarcaAction } from '../../actions/AdminAction';

const EditBrand = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const [name, setName] = useState('');
  const [alerta, setAlerta] = useState({});
  const marca = useSelector((state) => state.admin.marcaEditar);

  const editarMarca = (nombre, id) => dispatch(editarMarcaAction(nombre, id));

  const handleSubmit = async (e) => {
    e.preventDefault();

    //VALIDACIOn
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
    if (await editarMarca({ nombre: name }, params.id)) {
      navigate('/admin/categories-brands');
    }
  };

  //OBTENER MARCA
  useEffect(() => {
    setName(marca.nombre);
  }, []);

  //EDITAR MARCA
  return (
    <div>
      <p className="uppercase flex justify-center py-2">Editar Marca</p>
      <form action="" onSubmit={handleSubmit}>
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
            className="w-1/3 p-2 mr-2 bg-red-400 rounded-lg hover:bg-red-500 transition-colors text-white uppercase font-bold"
            to="/admin/categories-brands"
          >
            Cancelar
          </Link>
          <input
            className="w-2/3 bg-blue-400 hover:bg-blue-500 rounded-lg transition-colors uppercase font-bold text-white p-2 "
            type="submit"
            value="guardar cambios"
          />
        </div>
      </form>
    </div>
  );
};

export default EditBrand;
