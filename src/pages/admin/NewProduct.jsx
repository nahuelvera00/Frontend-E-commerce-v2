import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { crearNuevoProductoAction } from '../../actions/AdminAction';

const NewProduct = () => {
  const navigate = useNavigate();
  const cargando = useSelector((state) => state.admin.loading);
  const marcas = useSelector((state) => state.admin.marcas);
  const subCategorias = useSelector((state) => state.admin.subCategorias);

  //LLAMAR DISPATCH
  const dispatch = useDispatch();
  //EJECUTA LAS FUNCIONES DESDE EL ACTION
  const addProduct = (product) => dispatch(crearNuevoProductoAction(product));

  const [alerta, setAlerta] = useState({
    msg: '',
    error: false,
    active: false,
  });

  const [producto, setProducto] = useState({
    name: '',
    price: 0,
    description: '',
    image: [],
    brand: '',
    subCategory: '',
    gender: '',
    small: 0,
    medium: 0,
    large: 0,
    extraLarge: 0,
  });

  const onChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const subirArchivo = (e) => {
    setProducto({ ...producto, image: e });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let i = 0; producto.image.length > i; i++) {
      formData.append('image', producto.image[i]);
    }
    formData.append('name', producto.name);
    formData.append('price', producto.price);
    formData.append('description', producto.description);
    formData.append('brands', producto.brand);
    formData.append('subCategory', producto.subCategory);
    formData.append('gender', producto.gender);
    formData.append('small', producto.small);
    formData.append('medium', producto.medium);
    formData.append('large', producto.large);
    formData.append('extraLarge', producto.extraLarge);

    if (
      producto.name === '' ||
      producto.price <= 0 ||
      producto.description === '' ||
      producto.subCategory === '' ||
      producto.brand === '' ||
      producto.gender === ''
    ) {
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
    if (await addProduct(formData)) {
      navigate('/admin/products');
    }
  };

  if (subCategorias.length <= 0)
    return (
      <div className="m-2 flex flex-col items-center justify-center">
        <p className="mb-3">
          No hay Categorias Añadidas, para añadir un nuevo Producto añada una
          Categoria en el siguiente apartado:
        </p>
        <Link
          to="/admin/categories-brands"
          className="py-1 px-2 bg-blue-400 hover:bg-blue-500 uppercase text-white rounded-md w-full flex justify-center items-center"
        >
          Categorias y Marcas
        </Link>
      </div>
    );

  if (marcas.length <= 0)
    return (
      <div className="m-2 flex flex-col items-center justify-center">
        <p className="mb-3">
          No hay Marcas añadidas, para añadir un nuevo Producto añada una Marca
          en el siguiente apartado:
        </p>
        <Link
          to="/admin/categories-brands"
          className="py-1 px-2 bg-blue-400 hover:bg-blue-500 uppercase text-white rounded-md w-full flex justify-center items-center"
        >
          Categorias y Marcas
        </Link>
      </div>
    );

  return (
    <div className="m-2">
      <h1 className=" flex items-center justify-center py-2 uppercase font-bold underline">
        Nuevo Producto
      </h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-2">
          <label className="uppercase" htmlFor="name">
            Nombre del Producto:
          </label>
          <input
            className="w-full border rounded-lg p-1"
            type="text"
            id="name"
            name="name"
            placeholder="Nombre del Producto"
            onChange={onChange}
          />
        </div>
        <div className="mb-2">
          <label className="uppercase" htmlFor="price">
            Precio del Producto:
          </label>
          <input
            className="w-full border rounded-lg p-1"
            type="number"
            id="price"
            placeholder="Precio del Producto"
            name="price"
            onChange={onChange}
          />
        </div>
        <div className="mb-2">
          <label className="uppercase" htmlFor="description">
            Descripcion del Producto:
          </label>
          <textarea
            className="w-full border rounded-lg p-1"
            id="description"
            placeholder="Descripcion del Producto"
            name="description"
            onChange={onChange}
          />
        </div>
        <div className="mb-2">
          <label className="uppercase" htmlFor="image">
            Imagenes
          </label>

          <input
            className="mb-1"
            type="file"
            name="image"
            multiple={true}
            onChange={(e) => subirArchivo(e.target.files)}
          />
          <span className="block text-xs">
            *La primer imagen sera la que se mostrara en la portada del producto
          </span>
        </div>
        <div className="mb-2">
          <label className="uppercase" htmlFor="brand">
            Marca del Producto:
          </label>
          <select
            className="ml-2 uppercase w-1/3"
            name="brand"
            id="brand"
            onChange={onChange}
          >
            <option>Seleccione Marca</option>
            {marcas.length
              ? marcas.map((marca) => (
                  <option
                    className="uppercase"
                    key={marca._id}
                    value={marca._id}
                  >
                    {marca.nombre}
                  </option>
                ))
              : null}
          </select>
        </div>
        <div className="mb-2">
          <label className="uppercase" htmlFor="category">
            Categoria del Producto:
          </label>
          <select
            className="ml-2 uppercase w-1/3"
            name="subCategory"
            id="subCategory"
            onChange={onChange}
          >
            <option>Seleccione Marca</option>
            {subCategorias.length
              ? subCategorias.map((subCategoria) => (
                  <option
                    className="uppercase"
                    key={subCategoria._id}
                    value={subCategoria.name}
                  >
                    {subCategoria.name}
                  </option>
                ))
              : null}
          </select>
        </div>
        <div className="mb-2">
          <label className="uppercase" htmlFor="gender">
            Genero:
          </label>
          <select
            className="ml-2"
            name="gender"
            id="gender"
            onChange={onChange}
          >
            <option>Seleccione Genero</option>
            <option value="male">Hombre</option>
            <option value="female">Mujer</option>
          </select>
        </div>
        <div className="mb-2">
          <h1 className="uppercase">Talles:</h1>
          <div className="flex gap-2">
            <div className="w-1/4 flex">
              <label htmlFor="waist-s">S:</label>
              <input
                className="w-full"
                type="number"
                id="waist-s"
                name="small"
                onChange={onChange}
              />
            </div>
            <div className="w-1/4 flex">
              <label htmlFor="waist-m">M:</label>
              <input
                className="w-full"
                type="number"
                id="waist-m"
                name="medium"
                onChange={onChange}
              />
            </div>
            <div className="w-1/4 flex">
              <label htmlFor="waist-l">L:</label>
              <input
                className="w-full"
                type="number"
                id="waist-l"
                name="large"
                onChange={onChange}
              />
            </div>
            <div className="w-1/4 flex">
              <label htmlFor="waist-xl">XL:</label>
              <input
                className="w-full"
                type="number"
                id="waist-xl"
                name="extraLarge"
                onChange={onChange}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end my-2">
          <Link
            className="p-2 mr-2 bg-red-400 rounded-lg hover:bg-red-500 transition-colors text-white uppercase font-bold"
            to="/admin/products"
          >
            Cancelar
          </Link>

          <input
            className="p-2 bg-blue-400 w-3/4 rounded-lg hover:bg-blue-500 transition-colors text-white uppercase font-bold"
            type="submit"
            value="Crear Producto"
          />
        </div>
        {alerta.active ? (
          <p className="flex justify-center bg-red-500 rounded-lg uppercase text-white pt-1">
            {alerta.msg}
          </p>
        ) : null}
      </form>
    </div>
  );
};

export default NewProduct;
