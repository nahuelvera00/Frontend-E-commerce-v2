//TYPES
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
  //NUEVA SUBCATEGORIA
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
  //OBTENER MARCA PARA EDITAR
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
  //Eliminar Marca
  OBTENER_MARCA_ELIMINAR,
  ELIMINAR_MARCA_EXITO,
  ELIMINAR_MARCA_ERROR,

  //-----EVENTOS----------
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

//STATE-INICIAL
const initialState = {
  productos: [],
  producto: {},
  productoEliminar: null,
  productoEditar: null,
  marcas: [],
  marcaEliminar: null,
  marcaEditar: null,
  eventos: [],
  eventoSeleccionado: null,
  productosEventoSeleccionado: [],
  productosSinEvento: [],
  productoAgregarEvento: null,
  productoQuitarEvento: null,
  categorias: [],
  subCategorias: [],
  subCategoriaEliminar: null,
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    //--------------------------------PRODUCTOS---------------------------//
    //OBTENER PRODUCTOS ADMIN
    case OBTENER_PRODUCTOS:
      return {
        ...state,
        loading: action.payload,
      };
    case OBTENER_PRODUCTOS_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        productos: action.payload,
      };
    case OBTENER_PRODUCTOS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //AGREGAR UN NUEVO PRODUCTO
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        loading: action.payload,
      };
    case AGREGAR_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        productos: [...state.productos, action.payload],
      };
    case AGREGAR_PRODUCTO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //ELIMINAR UN PRODUCTO
    case OBTENER_PRODUCTO_ELIMINAR:
      return {
        ...state,
        productoEliminar: action.payload,
      };
    case PRODUCTO_ELIMNADO_EXITO:
      return {
        ...state,
        productos: state.productos.filter(
          (producto) => producto._id !== state.productoEliminar
        ),
        productoeliminar: null,
      };
    case PRODUCTO_ELIMNADO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //--------------------OBTENER DATOS PARA PANEL ADMIN----------------------------//
    //-----------OBTENER SUBCATEGORIAS
    case OBTENER_SUBCATEGORIAS:
      return {
        ...state,
        loading: action.payload,
      };
    case OBTENER_SUBCATEGORIAS_EXITO:
      return {
        ...state,
        subCategorias: action.payload,
        loading: false,
      };
    case OBTENER_SUBCATEGORIAS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    //-------------NUEVA SUBCATEGORIA-------------

    case NUEVA_SUBCATEGORIA:
      return {
        ...state,
        loading: action.payload,
      };
    case NUEVA_SUBCATEGORIA_EXITO:
      return {
        ...state,
        subCategorias: [...state.subCategorias, action.payload],
        loading: false,
      };

    case NUEVA_SUBCATEGORIA_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    //-----------ELIMINAR SUBCATEGORIA------------
    case OBTENER_SUBCATEGORIA_ELIMINAR:
      return {
        ...state,
        subCategoriaEliminar: action.payload,
        loading: true,
      };
    case ELIMINAR_SUBCATEGORIA_EXITO:
      return {
        ...state,
        loading: false,
        subCategorias: state.subCategorias.filter(
          (subCategoria) => subCategoria._id !== state.subCategoriaEliminar
        ),
      };
    case ELIMINAR_SUBCATEGORIA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    //---------OBTENER MARCAS
    case OBTENER_MARCAS:
      return {
        ...state,
        loading: action.payload,
      };
    case OBTENER_MARCAS_EXITO:
      return {
        ...state,
        marcas: action.payload,
        loading: false,
      };
    case OBTENER_MARCAS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    //OBTENER MARCA
    case OBTENER_MARCA:
      return {
        ...state,
        loading: action.payload,
      };
    case OBTENER_MARCA_EXITO:
      return {
        ...state,
        loading: false,
        marcaEditar: action.payload,
      };
    case OBTENER_MARCA_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    //NUEVA MARCA
    case CREAR_MARCA:
      return {
        ...state,
        loading: action.payload,
      };
    case CREAR_MARCA_EXITO:
      return {
        ...state,
        marcas: [...state.marcas, action.payload],
        loading: false,
      };
    case CREAR_MARCA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    //EDITAR MARCA
    case EDITAR_MARCA:
      return {
        ...state,
        marcaEditar: action.payload,
        loading: true,
      };
    case EDITAR_MARCA_EXITO:
      return {
        ...state,
        marcas: state.marcas.map((marca) =>
          marca._id === state.marcaEditar ? action.payload : marca
        ),
        loading: false,
        marcaEditar: null,
      };
    case EDITAR_MARCA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        marcaEditar: null,
      };
    //ELIMINAR MARCA
    case OBTENER_MARCA_ELIMINAR:
      return {
        ...state,
        marcaEliminar: action.payload,
        loading: true,
      };
    case ELIMINAR_MARCA_EXITO:
      return {
        ...state,
        marcas: state.marcas.filter(
          (marca) => marca._id !== state.marcaEliminar
        ),
        loading: false,
      };
    case ELIMINAR_MARCA_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    //-----------OBTENER CATEGORIAS
    case OBTENER_CATEGORIAS:
      return {
        ...state,
        loading: action.payload,
      };
    case OBTENER_CATEGORIAS_EXITO:
      return {
        ...state,
        categorias: action.payload,
        loading: false,
      };
    case OBTENER_CATEGORIAS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    //-----------------EVENTOS--------------
    case OBTENER_EVENTOS:
      return {
        ...state,
        loading: action.payload,
      };
    case OBTENER_EVENTOS_EXITO:
      return {
        ...state,
        eventos: action.payload,
        loading: false,
      };
    case OBTENER_EVENTOS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case AGREGAR_PRODUCTO_EVENTO:
      return {
        ...state,
        eventoSeleccionado: action.payload,
        loading: true,
      };
    case AGREGAR_PRODUCTO_EVENTO_EXITO:
      return {
        ...state,
        loading: false,
        productosEventoSeleccionado: state.productos.filter(
          (producto) => producto.evento === state.eventoSeleccionado
        ),
        productosSinEvento: state.productos.filter(
          (producto) => producto.evento === null
        ),
      };
    case AGREGAR_PRODUCTO_EVENTO_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case AGREGAR_EVENTO_PRODUCTO:
      return {
        ...state,
        loading: true,
        productoAgregarEvento: action.payload,
      };
    case AGREGAR_EVENTO_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        productos: state.productos.map((producto) =>
          producto._id === state.productoAgregarEvento
            ? action.payload
            : producto
        ),
        productosSinEvento: state.productosSinEvento.filter(
          (producto) => producto._id !== state.productoAgregarEvento
        ),
        productosEventoSeleccionado: [
          action.payload,
          ...state.productosEventoSeleccionado,
        ],
        productoAgregarEvento: null,
      };
    case AGREGAR_EVENTO_PRODUCTO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        productoAgregarEvento: null,
      };

    case QUITAR_EVENTO_PRODUCTO:
      return {
        ...state,
        loading: true,
        productoQuitarEvento: action.payload,
      };
    case QUITAR_EVENTO_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        productos: state.productos.map((producto) =>
          producto._id === state.productoQuitarEvento
            ? action.payload
            : producto
        ),
        productosEventoSeleccionado: state.productosEventoSeleccionado.filter(
          (producto) => producto._id !== state.productoQuitarEvento
        ),
        productosSinEvento: [action.payload, ...state.productosSinEvento],
        productoQuitarEvento: null,
      };
    case QUITAR_EVENTO_PRODUCTO_ERROR:
      return {
        ...state,
      };
    case GUARDAR_EVENTO:
      return {
        ...state,
        eventoSeleccionado: null,
        productosEventoSeleccionado: [],
      };
    //DEFAULT
    default:
      return state;
  }
}
