import {
  OBTENER_PRODUCTOS_CLIENTE,
  OBTENER_PRODUCTOS_CLIENTE_EXITO,
  OBTENER_PRODUCTOS_CLIENTE_ERROR,
} from "../types";

import clienteAxios from "../config/clienteAxios";

export function obtenerProductosClienteAction() {
  return async (dispatch) => {
    dispatch(obtenerProductosCliente());
    try {
      const respuesta = await clienteAxios.get("/products");
      dispatch(obtenerProductosClienteExito(respuesta.data));
    } catch (error) {
      console.log(error);
      dispatch(obtenerProductosClienteError(true));
    }
  };
}

const obtenerProductosCliente = () => ({
  type: OBTENER_PRODUCTOS_CLIENTE,
});

const obtenerProductosClienteExito = (respuesta) => ({
  type: OBTENER_PRODUCTOS_CLIENTE_EXITO,
  payload: respuesta,
});
const obtenerProductosClienteError = (estado) => ({
  type: OBTENER_PRODUCTOS_CLIENTE_ERROR,
  payload: estado,
});
