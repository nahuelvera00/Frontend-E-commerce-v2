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
  OBTENER_SUBCATEGORIAS_CLIENTE,
  OBTENER_SUBCATEGORIAS_CLIENTE_EXITO,
  OBTENER_SUBCATEGORIAS_CLIENTE_ERROR,
  OBTENER_CATEGORIAS_CLIENTE,
  OBTENER_CATEGORIAS_CLIENTE_EXITO,
  OBTENER_CATEGORIAS_CLIENTE_ERROR,
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

//AGREGAR UN PRODUCTO AL CARRITO
export function agregarProductoCarritoAction({ talle }, id) {
  return async (dispatch) => {
    dispatch(agregarProductoCarrito());
    const productoAgregar = {
      talle,
      producto: id,
    };

    try {
      dispatch(agregarProductoCarritoExito(productoAgregar));
    } catch (error) {
      dispatch(agregarProductoCarritoError(true));
    }
  };
}

const agregarProductoCarrito = () => ({
  type: AGREGAR_PRODUCTO_CARRITO,
});

const agregarProductoCarritoExito = (producto) => ({
  type: AGREGAR_PRODUCTO_CARRITO_EXITO,
  payload: producto,
});

const agregarProductoCarritoError = (estado) => ({
  type: AGREGAR_PRODUCTO_CARRITO_ERROR,
  payload: estado,
});

//ELIMINAR PRODUCTO DEL CARRITO
export function quitarProductoCarritoAction(id) {
  return async (dispatch) => {
    dispatch(quitarProducto());

    try {
      dispatch(quitarProductoCarritoExito(id));
    } catch (error) {
      dispatch(quitarProductoCarritoError(true));
    }
  };
}

const quitarProducto = () => ({
  type: QUITAR_PRODUCTO_CARRITO,
});

const quitarProductoCarritoExito = (producto) => ({
  type: QUITAR_PRODUCTO_CARRITO_EXITO,
  payload: producto,
});

const quitarProductoCarritoError = (estado) => ({
  type: QUITAR_PRODUCTO_CARRITO_ERROR,
  payload: estado,
});

export function abrirCerrarMenuACtion() {
  return (dispatch) => {
    dispatch(abrirCerrarMenu());
  };
}

const abrirCerrarMenu = () => ({
  type: MENU,
});

//OBTENER CATEGORIAS
export function obtenerCategoriasClienteAction() {
  return async (dispatch) => {
    dispatch(obtenerCategorias());

    try {
      const respuesta = await clienteAxios.get("/admin/categories");
      dispatch(obtenerCategoriasExito(respuesta.data));
    } catch (error) {
      dispatch(obtenerCategoriasError(true));
    }
  };
}

const obtenerCategorias = () => ({
  type: OBTENER_CATEGORIAS_CLIENTE,
});
const obtenerCategoriasExito = (respuesta) => ({
  type: OBTENER_CATEGORIAS_CLIENTE_EXITO,
  payload: respuesta,
});
const obtenerCategoriasError = (estado) => ({
  type: OBTENER_CATEGORIAS_CLIENTE_ERROR,
  payload: estado,
});

//OBTENER SUB-CATEGORIAS
export function obtenerSubCategoriasClienteAction() {
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
  type: OBTENER_SUBCATEGORIAS_CLIENTE,
});

const obtenerSubCategoriasExito = (respuesta) => ({
  type: OBTENER_SUBCATEGORIAS_CLIENTE_EXITO,
  payload: respuesta,
});

const obtenerSubCategoriasError = (estado) => ({
  type: OBTENER_SUBCATEGORIAS_CLIENTE_ERROR,
  payload: estado,
});

//Metodos de PAGO
//-----------------Obtener metodos de pago-------------------------

export function obtenerMetodosPagoAction() {
  return async (dispatch) => {
    dispatch(obtenerMetodosPago());
    try {
      const respuesta = await clienteAxios.get("/admin/methods-payment");
      dispatch(obtenerMetodosPagoExito(respuesta.data));
    } catch (error) {
      dispatch(obtenerMetodosPagoError(true));
    }
  };
}

const obtenerMetodosPago = () => ({
  type: OBTENER_METODOS_PAGO,
});

const obtenerMetodosPagoExito = (respuesta) => ({
  type: OBTENER_METODOS_PAGO_EXITO,
  payload: respuesta,
});

const obtenerMetodosPagoError = (estado) => ({
  type: OBTENER_METODOS_PAGO_ERROR,
  payload: estado,
});

export function obtenerOrdenesCompraClienteAction() {
  return async (dispatch) => {
    dispatch(obtenerOrdenesCompra());

    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const respuesta = await clienteAxios.get("/user/orders", config);
      dispatch(obtenerOrdenesCompraExito(respuesta.data));
    } catch (error) {
      dispatch(obtenerOrdenesCompraError(true));
    }
  };
}

const obtenerOrdenesCompra = () => ({
  type: OBTENER_ORDENES_COMPRA_CLIENTE,
});

const obtenerOrdenesCompraExito = (respuesta) => ({
  type: OBTENER_ORDENES_COMPRA_CLIENTE_EXITO,
  payload: respuesta,
});

const obtenerOrdenesCompraError = (estado) => ({
  type: OBTENER_ORDENES_COMPRA_CLIENTE_ERROR,
  payload: estado,
});

export function crearOrdenCompraAction(orden) {
  return async (dispatch) => {
    dispatch(crearOrdenCompra());

    console.log(orden);
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
        "/user/orders/new-order",
        orden,
        config
      );
      console.log(respuesta);
      dispatch(crearOrdenCompraExito(respuesta.data));
      return true;
    } catch (error) {
      dispatch(crearOrdenCompraError(true));
      return false;
    }
  };
}

const crearOrdenCompra = () => ({
  type: CREAR_ORDEN_COMPRA,
});

const crearOrdenCompraExito = (respuesta) => ({
  type: CREAR_ORDEN_COMPRA_EXITO,
  payload: respuesta,
});

const crearOrdenCompraError = (estado) => ({
  type: CREAR_ORDEN_COMPRA_ERROR,
  payload: estado,
});
