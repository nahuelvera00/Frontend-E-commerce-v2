import {
  OBTENER_PRODUCTOS_CLIENTE,
  OBTENER_PRODUCTOS_CLIENTE_EXITO,
  OBTENER_PRODUCTOS_CLIENTE_ERROR,
} from "../types";

const initialState = {
  productos: [],
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
    default:
      return state;
  }
}
