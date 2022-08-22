import {
  //OBTENER PRODUCTOS DE LA DB
  OBTENER_PRODUCTOS,
  OBTENER_PRODUCTOS_EXITO,
  OBTENER_PRODUCTOS_ERROR,
  //AGREGAR UN NUEVO PRODUCTOS
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  //ELIMINAR PRODUCTO ESPECIFICO
  OBTENER_PRODUCTO_ELIMINAR,
  PRODUCTO_ELIMNADO_EXITO,
  PRODUCTO_ELIMNADO_ERROR,
  //OBTENER DATOS PARA EL PANEL ADMIN
  //OBTENER_SUBCATEGORIAS
  OBTENER_SUBCATEGORIAS,
  OBTENER_SUBCATEGORIAS_EXITO,
  OBTENER_SUBCATEGORIAS_ERROR,
  //CREAR NUEVA SUBCATEGORIA
  NUEVA_SUBCATEGORIA,
  NUEVA_SUBCATEGORIA_EXITO,
  NUEVA_SUBCATEGORIA_ERROR,
  //ELIMINAR SUBCATEGORIA
  OBTENER_SUBCATEGORIA_ELIMINAR,
  ELIMINAR_SUBCATEGORIA_EXITO,
  ELIMINAR_SUBCATEGORIA_ERROR,
  //OBTENER CATEGORIAS
  OBTENER_CATEGORIAS,
  OBTENER_CATEGORIAS_EXITO,
  OBTENER_CATEGORIAS_ERROR,
  //OBTENER_MARCAS
  OBTENER_MARCAS,
  OBTENER_MARCAS_EXITO,
  OBTENER_MARCAS_ERROR,
  //OBTENER MARCA
  OBTENER_MARCA,
  OBTENER_MARCA_EXITO,
  OBTENER_MARCA_ERROR,
  //CREAR MARCA
  CREAR_MARCA,
  CREAR_MARCA_EXITO,
  CREAR_MARCA_ERROR,
  //EDITAR MARCA
  EDITAR_MARCA,
  EDITAR_MARCA_EXITO,
  EDITAR_MARCA_ERROR,
  //ELIMINAR MARCA
  OBTENER_MARCA_ELIMINAR,
  ELIMINAR_MARCA_EXITO,
  ELIMINAR_MARCA_ERROR,

  //-----EVENTOS----------
  //OBTENER TODOS LOS EVENTOS
  OBTENER_EVENTOS,
  OBTENER_EVENTOS_EXITO,
  OBTENER_EVENTOS_ERROR,
  //AÑADIR EVENTO A PRODUCTO
  AGREGAR_EVENTO_PRODUCTO,
  AGREGAR_EVENTO_PRODUCTO_EXITO,
  AGREGAR_EVENTO_PRODUCTO_ERROR,
  //QUITAR EVENTO A PRODUCTO
  QUITAR_EVENTO_PRODUCTO,
  QUITAR_EVENTO_PRODUCTO_EXITO,
  QUITAR_EVENTO_PRODUCTO_ERROR,
  //
  AGREGAR_PRODUCTO_EVENTO,
  AGREGAR_PRODUCTO_EVENTO_EXITO,
  AGREGAR_PRODUCTO_EVENTO_ERROR,
  //GUARDAR EVENTO
  GUARDAR_EVENTO,
  //ELIMINAR EVENTO A PRODUCTO
  ELIMINAR_EVENTO_PRODUCTO,
  ELIMINAR_EVENTO_PRODUCTO_EXITO,
  ELIMINAR_EVENTO_PRODUCTO_ERROR,
} from "../types";
import clienteAxios from "../config/clienteAxios";
//import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert";

//const navigate = useNavigate();

//---------------------------------------------------PRODUCTOS-------------------------------------------------//

//-----------NUEVO PRODUCTO--------------------//
export function crearNuevoProductoAction(product) {
  return async (dispatch) => {
    dispatch(agregarProducto());

    try {
      //Configuracion de token
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      //insertar en la API

      const respuesta = await clienteAxios.post(
        "/admin/new-product",
        product,
        config
      );
      //Si todo sale bien, actualiza el state
      dispatch(agregarProductoExito(respuesta.data));
      Swal("Producto creado correctamente!", {
        icon: "success",
      });
      return true;
    } catch (error) {
      console.log(error);
      dispatch(agregarProductoError(true));
      return false;
    }
  };
}

const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
  payload: true,
});

//SI el producto se guarda en la BD
const agregarProductoExito = (product) => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: product,
});

//Si HUBO UN ERROR
const agregarProductoError = (estado) => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: estado,
});

//-----------ELIMINAR UN PRODUCTO--------------//
export function borrarProductoAction(id) {
  return async (dispatch) => {
    dispatch(obtenerProductoEliminar(id));

    try {
      //Configuracion de token
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      await clienteAxios.delete(`/admin/product/${id}`, config);
      dispatch(eliminarProductoExito());

      //Si se elimina correctamente
      Swal("Producto eliminado correctamente!", {
        icon: "success",
      });
    } catch (error) {
      console.log(error);
      dispatch(eliminarProductoError());
    }
  };
}
const obtenerProductoEliminar = (id) => ({
  type: OBTENER_PRODUCTO_ELIMINAR,
  payload: id,
});

const eliminarProductoExito = () => ({
  type: PRODUCTO_ELIMNADO_EXITO,
});

const eliminarProductoError = () => ({
  type: PRODUCTO_ELIMNADO_ERROR,
  payload: true,
});

//----------------------------------OBTENER PRODUCTOS------------------------------------------------------//
export function obtenerProductosAction() {
  return async (dispatch) => {
    dispatch(obtenerProductos());
    try {
      const respuesta = await clienteAxios.get("/products");
      dispatch(obtenerProductosExito(respuesta.data));
    } catch (error) {
      console.log(error);
      dispatch(obtenerProductosError(true));
    }
  };
}

const obtenerProductos = () => ({
  type: OBTENER_PRODUCTOS,
  payload: true,
});

const obtenerProductosExito = (respuesta) => ({
  type: OBTENER_PRODUCTOS_EXITO,
  payload: respuesta,
});

const obtenerProductosError = (estado) => ({
  type: OBTENER_PRODUCTOS_ERROR,
  payload: estado,
});

//----------------------------------------OBTENER DATOS ADMIN-------------------------------------------//

//---------------OBTENER SUBCATEGORIAS-----------//
export function obtenerSubCategoriasAction() {
  return async (dispatch) => {
    dispatch(obtenerSubCategorias());

    try {
      const respuesta = await clienteAxios.get("/admin/sub-categories");
      dispatch(obtenerSubCategoriasExito(respuesta.data));
    } catch (error) {
      console.log(error);
      dispatch(obtenerSubCategoriasError(true));
    }
  };
}

const obtenerSubCategorias = () => ({
  type: OBTENER_SUBCATEGORIAS,
  payload: true,
});

const obtenerSubCategoriasExito = (respuesta) => ({
  type: OBTENER_SUBCATEGORIAS_EXITO,
  payload: respuesta,
});

const obtenerSubCategoriasError = (estado) => ({
  type: OBTENER_SUBCATEGORIAS_ERROR,
  payload: estado,
});
//------------CREAR NUEVA SUBCATEGORIA---------//
export function nuevaSubCategoriaAction(subCategory) {
  return async (dispatch) => {
    console.log(subCategory);

    dispatch(nuevaSubCategoria());
    try {
      //Configuracion de token
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const respuesta = await clienteAxios.post(
        "/admin/sub-category/new",
        subCategory,
        config
      );
      dispatch(nuevaSubCategoriaExito(respuesta.data));
      Swal("Subcategoria creado correctamente!", {
        icon: "success",
      });
      return true;
    } catch (error) {
      console.log(error);
      dispatch(nuevaSubCategoriaError(true));
      return false;
    }
  };
}

const nuevaSubCategoria = () => ({
  type: NUEVA_SUBCATEGORIA,
  payload: true,
});

const nuevaSubCategoriaExito = (respuesta) => ({
  type: NUEVA_SUBCATEGORIA_EXITO,
  payload: respuesta,
});

const nuevaSubCategoriaError = (estado) => ({
  type: NUEVA_SUBCATEGORIA_ERROR,
  payload: estado,
});

//----------ELIMINAR SUBCATEGORIA--------------//
export function subCategoriaEliminarAction(id) {
  return async (dispatch) => {
    dispatch(eliminarSubCategoria(id));
    const URL = `/admin/sub-category/${id}`;
    //Configuracion de token
    const token = localStorage.getItem("token");
    if (!token) return;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      //  consulta
      await clienteAxios.delete(URL, config);
      dispatch(eliminarSubCategoriaExito());
      //Si se elimina correctamente
      Swal("Categoria eliminada correctamente!", {
        icon: "success",
      });
    } catch (error) {
      console.log(error);
      dispatch(eliminarSubCategoriaError());
    }
  };
}

const eliminarSubCategoria = (id) => ({
  type: OBTENER_SUBCATEGORIA_ELIMINAR,
  payload: id,
});

const eliminarSubCategoriaExito = () => ({
  type: ELIMINAR_SUBCATEGORIA_EXITO,
});

const eliminarSubCategoriaError = () => ({
  type: ELIMINAR_SUBCATEGORIA_ERROR,
  payload: true,
});

//--------------OBTENER_MARCAS----------------//
export function obtenerMarcasAction() {
  return async (dispatch) => {
    dispatch(obtenerMarcas());

    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const respuesta = await clienteAxios.get("/admin/brands", config);
      dispatch(obtenerMarcasExito(respuesta.data));
    } catch (error) {
      console.log(error);
      dispatch(obtenerMarcasError(true));
    }
  };
}

const obtenerMarcas = () => ({
  type: OBTENER_MARCAS,
  payload: true,
});

const obtenerMarcasExito = (respuesta) => ({
  type: OBTENER_MARCAS_EXITO,
  payload: respuesta,
});

const obtenerMarcasError = (estado) => ({
  type: OBTENER_MARCAS_ERROR,
  payload: estado,
});

//__________MARCA-----------------
export function crearMarcaAction(marca) {
  return async (dispatch) => {
    dispatch(crearMarca());
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const respuesta = await clienteAxios.post(
        "/admin/brands/new-brand",
        marca,
        config
      );
      dispatch(crearMarcaExito(respuesta.data));
      Swal("Subcategoria creado correctamente!", {
        icon: "success",
      });
      return true;
    } catch (error) {
      dispatch(crearMarcaError(true));
      return false;
    }
  };
}

const crearMarca = () => ({
  type: CREAR_MARCA,
  payload: true,
});

const crearMarcaExito = (respuesta) => ({
  type: CREAR_MARCA_EXITO,
  payload: respuesta,
});

const crearMarcaError = (estado) => ({
  type: CREAR_MARCA_ERROR,
  payload: estado,
});
//----------------------EDITAR MARCA-----------------
//-----OBTENER MARCA PARA EDITAR
export function obtenerMarcaAction(id) {
  return async (dispatch) => {
    dispatch(obtenerMarca());
    try {
      //CONFIG TOKEN
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const respuesta = await clienteAxios.get(`/admin/brands/${id}`, config);
      dispatch(obtenerMarcaExito(respuesta.data));
      return true;
    } catch (error) {
      dispatch(obtenerMarcaError(true));
      return false;
    }
  };
}

const obtenerMarca = () => ({
  type: OBTENER_MARCA,
  payload: true,
});

const obtenerMarcaExito = (respuesta) => ({
  type: OBTENER_MARCA_EXITO,
  payload: respuesta,
});

const obtenerMarcaError = (estado) => ({
  type: OBTENER_MARCA_ERROR,
  payload: estado,
});
//--------EDITAR MARCA-----------
export function editarMarcaAction(nombre, id) {
  return async (dispatch) => {
    dispatch(editarMarca(id));
    try {
      //CONFIG TOKEN
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const respuesta = await clienteAxios.put(
        `/admin/brand/${id}`,
        nombre,
        config
      );
      dispatch(editarMarcaExito(respuesta.data));
      Swal("Marca editada correctamente!", {
        icon: "success",
      });
      return true;
    } catch (error) {
      dispatch(editarMarcaError());
      console.log(error);
      return false;
    }
  };
}

const editarMarca = (id) => ({
  type: EDITAR_MARCA,
  payload: id,
});

const editarMarcaExito = (respuesta) => ({
  type: EDITAR_MARCA_EXITO,
  payload: respuesta,
});

const editarMarcaError = (estado) => ({
  type: EDITAR_MARCA_ERROR,
  payload: estado,
});

//----ELIMINAR MARCA------------

export function eliminarMarcaAction(id) {
  return async (dispatch) => {
    dispatch(eliminarMarca(id));
    try {
      //CONFIG TOKEN
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      await clienteAxios.delete(`/admin/brands/${id}`, config);
      Swal("Marca eliminada correctamente!", {
        icon: "success",
      });
      dispatch(eliminarMarcaExito());
    } catch (error) {
      console.log(error);
      dispatch(eliminarMarcaError(true));
    }
  };
}

const eliminarMarca = (id) => ({
  type: OBTENER_MARCA_ELIMINAR,
  payload: id,
});

const eliminarMarcaExito = () => ({
  type: ELIMINAR_MARCA_EXITO,
  payload: false,
});

const eliminarMarcaError = (estado) => ({
  type: ELIMINAR_MARCA_ERROR,
  payload: estado,
});

//--------------Obtener Categorias------

export function obtenerCategoriasAction() {
  return async (dispatch) => {
    dispatch(obtenerCategorias());
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const respuesta = await clienteAxios.get("/admin/categories", config);
      dispatch(obtenerCategoriasExito(respuesta.data));
    } catch (error) {
      console.log(error);
      dispatch(obtenerCategoriasError(true));
    }
  };
}

const obtenerCategorias = () => ({
  type: OBTENER_CATEGORIAS,
  payload: true,
});

const obtenerCategoriasExito = (respuesta) => ({
  type: OBTENER_CATEGORIAS_EXITO,
  payload: respuesta,
});

const obtenerCategoriasError = (estado) => ({
  type: OBTENER_CATEGORIAS_ERROR,
  payload: estado,
});

//-------------------------------EVENTOS-------------------------
//--OBTENER EVENTOS--
export function obtenerEventosAction() {
  return async (dispatch) => {
    dispatch(obtenerEventos());

    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const respuesta = await clienteAxios.get("/admin/events");
      dispatch(obtenerEventosExito(respuesta.data));
    } catch (error) {
      dispatch(obtenerEventosError(true));
    }
  };
}

const obtenerEventos = () => ({
  type: OBTENER_EVENTOS,
  payload: true,
});

const obtenerEventosExito = (respuesta) => ({
  type: OBTENER_EVENTOS_EXITO,
  payload: respuesta,
});

const obtenerEventosError = (estado) => ({
  type: OBTENER_EVENTOS_ERROR,
  payload: estado,
});
// DEFINIR EVENTO AL QUE SE LE VAN A AGREGAR PRODUCTOS
export function agregarProductoEventosAction(id) {
  return async (dispatch) => {
    dispatch(agregarProductoEvento(id));
    try {
      dispatch(agregarProductoEventoExito());
      return true;
    } catch (error) {
      dispatch(agregarProductoEventoError(true));
      return false;
    }
  };
}

const agregarProductoEvento = (id) => ({
  type: AGREGAR_PRODUCTO_EVENTO,
  payload: id,
});

const agregarProductoEventoExito = () => ({
  type: AGREGAR_PRODUCTO_EVENTO_EXITO,
});

const agregarProductoEventoError = (estado) => ({
  type: AGREGAR_PRODUCTO_EVENTO_ERROR,
  payload: estado,
});

//AGREGAR EVENTO A PRODUCTO

export function agregarEventoAction(id, evento) {
  return async (dispatch) => {
    dispatch(agregarEventoProducto(id));

    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const respuesta = await clienteAxios.put(
        `/admin/products/add-event/${id}`,
        {
          evento: evento.name,
        },
        config
      );

      dispatch(agregarEventoProductoExito(respuesta.data));
    } catch (error) {
      dispatch(agregarEventoProductoError(true));
      console.log(error);
    }
  };
}

const agregarEventoProducto = (producto) => ({
  type: AGREGAR_EVENTO_PRODUCTO,
  payload: producto,
});

const agregarEventoProductoExito = (respuesta) => ({
  type: AGREGAR_EVENTO_PRODUCTO_EXITO,
  payload: respuesta,
});

const agregarEventoProductoError = (estado) => ({
  type: AGREGAR_EVENTO_PRODUCTO_ERROR,
  payload: estado,
});

export function quitarEventoAction(id) {
  return async (dispatch) => {
    dispatch(quitarEvento(id));

    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const respuesta = await clienteAxios.put(
        `/admin/products/delete-event/${id}`,
        {
          evento: null,
        },
        config
      );
      dispatch(quitarEventoExito(respuesta.data));
    } catch (error) {
      console.log(error);
      dispatch(quitarEventoError(true));
    }
  };
}

const quitarEvento = (producto) => ({
  type: QUITAR_EVENTO_PRODUCTO,
  payload: producto,
});

const quitarEventoExito = (respuesta) => ({
  type: QUITAR_EVENTO_PRODUCTO_EXITO,
  payload: respuesta,
});

const quitarEventoError = (estado) => ({
  type: QUITAR_EVENTO_PRODUCTO_ERROR,
  payload: estado,
});

export function guardarEventoAction() {
  return async (dispatch) => {
    await dispatch(guardarEvento());
    return true;
  };
}

const guardarEvento = () => ({
  type: GUARDAR_EVENTO,
});
