import React from "react";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Usuario from "../../components/Usuario";
import useAuth from "../../hooks/useAuth";
import loginpng from "../../public/img/iniciarSesion.png";

const Perfil = () => {
  const { auth, cerrarSesionAuth, cargando } = useAuth();

  return (
    <div className='w-full flex justify-center min-h-screen'>
      {auth === null ? (
        <div className='uppercase flex flex-col w-full my-28 px-5'>
          <div className='flex justify-center'>
            <img src={loginpng} alt='' />
          </div>
          <p className='py-2 flex justify-center'>No has iniciado sesion aun</p>
          <Link
            to='/auth'
            className='bg-slate-600 py-3 rounded-md flex justify-center'
            type='button'
          >
            <p className='uppercase text-white font-semibold'>INICIAR SESION</p>
          </Link>
        </div>
      ) : (
        <Usuario usuario={auth.data.usuario} />
      )}
    </div>
  );
};

export default Perfil;
