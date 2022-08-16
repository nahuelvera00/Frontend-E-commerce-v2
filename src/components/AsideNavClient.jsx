import React from "react";
//REDUX
import { useSelector } from "react-redux";

const AsideNavClient = () => {
  const menu = useSelector((state) => state.cliente.menu);

  return (
    <div
      className={`fixed links h-full w-3/4 bg-white ease-in duration-300 z-40 ${
        menu ? "left-0" : "-left-[400px]"
      } `}
    >
      <p>categoria 1</p>
      <p>categoria 1</p>
      <p>categoria 1</p>
    </div>
  );
};

export default AsideNavClient;
