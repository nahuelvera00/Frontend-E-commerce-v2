import {
  OBTENER_PRODUCTOS_CLIENTE,
  OBTENER_PRODUCTOS_CLIENTE_EXITO,
  OBTENER_PRODUCTOS_CLIENTE_ERROR,
  OBTENER_EVENTOS_CLIENTE,
  OBTENER_EVENTOS_CLIENTE_EXITO,
  OBTENER_EVENTOS_CLIENTE_ERROR,
  AGREGAR_PRODUCTO_CARRITO,
  AGREGAR_PRODUCTO_CARRITO_ERROR,
  AGREGAR_PRODUCTO_CARRITO_EXITO,
  QUITAR_PRODUCTO_CARRITO,
  QUITAR_PRODUCTO_CARRITO_EXITO,
  QUITAR_PRODUCTO_CARRITO_ERROR,
  MENU,
  OBTENER_CATEGORIAS_CLIENTE,
  OBTENER_CATEGORIAS_CLIENTE_EXITO,
  OBTENER_CATEGORIAS_CLIENTE_ERROR,
  OBTENER_SUBCATEGORIAS_CLIENTE,
  OBTENER_SUBCATEGORIAS_CLIENTE_EXITO,
  OBTENER_SUBCATEGORIAS_CLIENTE_ERROR,
  OBTENER_METODOS_PAGO,
  OBTENER_METODOS_PAGO_EXITO,
  OBTENER_METODOS_PAGO_ERROR,
  OBTENER_ORDENES_COMPRA_CLIENTE,
  OBTENER_ORDENES_COMPRA_CLIENTE_EXITO,
  OBTENER_ORDENES_COMPRA_CLIENTE_ERROR,
  CREAR_ORDEN_COMPRA,
  CREAR_ORDEN_COMPRA_EXITO,
  CREAR_ORDEN_COMPRA_ERROR,
} from "../types";

const initialState = {
  productos: [],
  carrito: [],
  eventos: [],
  categorias: [],
  subCategorias: [],
  pedidos: [],
  metodosPago: [],
  menu: false,
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    //DEFAULT
    case OBTENER_PRODUCTOS_CLIENTE:
      return {
        ...state,
        loading: true,
      };
    case OBTENER_PRODUCTOS_CLIENTE_EXITO:
      return {
        ...state,
        productos: action.payload,
        loading: false,
      };
    case OBTENER_PRODUCTOS_CLIENTE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case OBTENER_EVENTOS_CLIENTE:
      return {
        ...state,
        loading: true,
      };
    case OBTENER_EVENTOS_CLIENTE_EXITO:
      return {
        ...state,
        loading: false,
        eventos: action.payload,
      };
    case OBTENER_EVENTOS_CLIENTE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case AGREGAR_PRODUCTO_CARRITO:
      return {
        ...state,
        loading: true,
      };
    case AGREGAR_PRODUCTO_CARRITO_EXITO:
      return {
        ...state,
        carrito: [...state.carrito, action.payload],
        loading: false,
      };
    case AGREGAR_PRODUCTO_CARRITO_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case QUITAR_PRODUCTO_CARRITO:
      return {
        ...state,
        loading: true,
      };
    case QUITAR_PRODUCTO_CARRITO_EXITO:
      return {
        ...state,
        loading: false,
        carrito: state.carrito.filter((e) => e.producto._id !== action.payload),
      };
    case QUITAR_PRODUCTO_CARRITO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case MENU:
      return {
        ...state,
        menu: !state.menu,
      };
    case OBTENER_SUBCATEGORIAS_CLIENTE:
      return {
        ...state,
        loading: true,
      };
    case OBTENER_SUBCATEGORIAS_CLIENTE_EXITO:
      return {
        ...state,
        subCategorias: action.payload,
        loading: false,
      };
    case OBTENER_SUBCATEGORIAS_CLIENTE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case OBTENER_CATEGORIAS_CLIENTE:
      return {
        ...state,
        loading: true,
      };
    case OBTENER_CATEGORIAS_CLIENTE_EXITO:
      return {
        ...state,
        loading: false,
        categorias: action.payload,
      };
    case OBTENER_CATEGORIAS_CLIENTE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case OBTENER_METODOS_PAGO:
      return {
        ...state,
        loading: true,
      };
    case OBTENER_METODOS_PAGO_EXITO:
      return {
        ...state,
        loading: false,
        metodosPago: action.payload,
      };
    case OBTENER_METODOS_PAGO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case OBTENER_ORDENES_COMPRA_CLIENTE:
      return {
        ...state,
        loading: true,
      };
    case OBTENER_ORDENES_COMPRA_CLIENTE_EXITO:
      return {
        ...state,
        pedidos: action.payload,

        loading: false,
      };
    case OBTENER_ORDENES_COMPRA_CLIENTE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREAR_ORDEN_COMPRA:
      return {
        ...state,
        loading: true,
      };
    case CREAR_ORDEN_COMPRA_EXITO:
      return {
        ...state,
        pedidos: [...state.pedidos, action.payload],
        loading: false,
      };
    case CREAR_ORDEN_COMPRA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
