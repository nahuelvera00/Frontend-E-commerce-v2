import React, { useState } from 'react';
import { useEffect } from 'react';

//redux
import {
  obtenerSubCategoriasAction,
  obtenerMarcasAction,
  obtenerCategoriasAction,
} from '../../actions/AdminAction';
import { useDispatch } from 'react-redux';

const AdminInicio = () => {
  const [estado, setEstado] = useState(false);
  const dispatch = useDispatch();

  const cambiarColor = () => {
    setEstado(!estado);
  };

  //OBTENER MARCAS Y SUBCATEGORIAS
  useEffect(() => {
    const obtenerSubcategorias = () => dispatch(obtenerSubCategoriasAction());
    obtenerSubcategorias();
  }, []);

  useEffect(() => {
    const obtenerMarcas = () => dispatch(obtenerMarcasAction());
    obtenerMarcas();
  }, []);

  useEffect(() => {
    const obtenerCategorias = () => dispatch(obtenerCategoriasAction());
    obtenerCategorias();
  }, []);
  return (
    <div>
      <h1>Inicio</h1>
      <div className="flex flex-col md:flex-row gap-1">
        <div className="w-1/2 bg-gray-400 py-2 px-4">
          <p className="">Estadisticas</p>
          <input type="button" value="Cambiar Color" onClick={cambiarColor} />
        </div>

        <div className="w-1/2 bg-gray-400 py-2 px-4">
          <p>Ultimas Ventas</p>
          <ul
            className={
              estado
                ? 'bg-green-400'
                : 'bg-red-400 hover:bg-red-600 transition-colors'
            }
          >
            <li>
              <p>1</p>
            </li>
            <li>
              <p>2</p>
            </li>
            <li>
              <p>3</p>
            </li>
            <li>
              <p>4</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminInicio;
