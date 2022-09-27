import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AsideNavClient from "../components/AsideNavClient";
import Footer from "../components/Footer";
import NavBarCliente from "../components/NavBarCliente";

const ClientLayout = () => {
  return (
    <div className='flex flex-col min-h-screen w-full bg-gray-100'>
      <nav className='sticky top-0 bg-slate-700 p-3 z-50'>
        <NavBarCliente />
      </nav>
      <div className='flex'>
        <AsideNavClient />
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ClientLayout;
