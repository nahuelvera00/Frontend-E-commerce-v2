import {
  OBTENER_PRODUCTOS_CLIENTE,
  OBTENER_PRODUCTOS_CLIENTE_EXITO,
  OBTENER_PRODUCTOS_CLIENTE_ERROR,
  OBTENER_EVENTOS_CLIENTE,
  OBTENER_EVENTOS_CLIENTE_EXITO,
  OBTENER_EVENTOS_CLIENTE_ERROR,
} from "../types";

const initialState = {
  productos: [],
  eventos: [],
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
    default:
      return state;
  }
}
