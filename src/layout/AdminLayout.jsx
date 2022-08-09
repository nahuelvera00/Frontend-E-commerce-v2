import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AsideAdmin from "../components/AsideAdmin";
import HeaderAdmin from "../components/HeaderAdmin";
import useAuth from "../hooks/useAuth.jsx";

const AdminLayout = () => {
  const { auth, cargando } = useAuth();

  if (cargando) return "Cargando...";
  return (
    <div className=''>
      {auth.rol === "admin" ? (
        <div className='flex flex-col'>
          <HeaderAdmin />
          <div className='flex h-full'>
            <aside className={`md:w-2/6 lg:w-2/12 bg-gray-200`}>
              <AsideAdmin />
            </aside>
            <main
              className={`w-full md:w-4/6 lg:w-10/12 bg-gray-100 p-2 min-h-[1000px]`}
            >
              <Outlet />
            </main>
          </div>
        </div>
      ) : (
        <Navigate to='/auth' />
      )}
    </div>
  );
};

export default AdminLayout;
