import {
  OBTENER_PRODUCTOS_CLIENTE,
  OBTENER_PRODUCTOS_CLIENTE_EXITO,
  OBTENER_PRODUCTOS_CLIENTE_ERROR,
  OBTENER_EVENTOS_CLIENTE,
  OBTENER_EVENTOS_CLIENTE_EXITO,
  OBTENER_EVENTOS_CLIENTE_ERROR,
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

export function obtenerEventosClienteAction() {
  return async (dispatch) => {
    dispatch(obtenerEventos());

    try {
      const respuesta = await clienteAxios.get("/admin/events");

      dispatch(obtenerEventosExito(respuesta.data));
    } catch (error) {
      console.log(error);
      dispatch(obtenerEventosError());
    }
  };
}

const obtenerEventos = () => ({
  type: OBTENER_EVENTOS_CLIENTE,
});

const obtenerEventosExito = (respuesta) => ({
  type: OBTENER_EVENTOS_CLIENTE_EXITO,
  payload: respuesta,
});

const obtenerEventosError = (estado) => ({
  type: OBTENER_EVENTOS_CLIENTE_ERROR,
  payload: estado,
});
