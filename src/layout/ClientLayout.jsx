import React from "react";
import { Outlet } from "react-router-dom";

const ClientLayout = () => {
  return (
    <div className='flex flex-col min-h-screen w-full bg-gray-100'>
      <nav className='sticky top-0 bg-gray-500 p-4'>
        <p>NAVBAR</p>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ClientLayout;
