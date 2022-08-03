import React from 'react';
import { Link } from 'react-router-dom';

//REDUX
import { useSelector } from 'react-redux';
import CategoryListAdmin from '../../components/CategoryListAdmin';
import BrandListAdmin from '../../components/BrandListAdmin';

const AdminCategories = () => {
  const subCategorias = useSelector((state) => state.admin.subCategorias);
  const marcas = useSelector((state) => state.admin.marcas);

  return (
    <div className="flex flex-col m-2">
      <div className="w-full bg-gray-100 mb-2 rounded-lg p-2">
        <h1 className="flex justify-center uppercase">categorias</h1>
        <div>
          <div className="flex justify-end py-1">
            <Link
              to="/admin/new-category"
              className="w-full py-1 px-2 rounded-lg uppercase font-bold text-white bg-blue-500 hover:bg-blue-600 flex justify-center gap-1 items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-circle-plus"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#fff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="12" r="9" />
                <line x1="9" y1="12" x2="15" y2="12" />
                <line x1="12" y1="9" x2="12" y2="15" />
              </svg>
              <p>nueva categoria</p>
            </Link>
          </div>
        </div>
        <div className="overflow-scroll py-1">
          <table className="w-full bg-gray-200 rounded-lg">
            <thead className="uppercase">
              <tr className="border-b-[1px] border-black">
                <th>
                  <div className="w-full flex pt-1 px-1">
                    <p>nombre</p>
                  </div>
                </th>
                <th>
                  <div className="w-full flex pt-1 pl-1">
                    <p>Acciones</p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {subCategorias.length === 0 ? (
                <tr>
                  <td>
                    <p>No existen categorias</p>
                  </td>
                </tr>
              ) : (
                subCategorias.map((subCategoria) => (
                  <CategoryListAdmin
                    key={subCategoria._id}
                    subCategoria={subCategoria}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-full bg-gray-100 rounded-lg p-2">
        <h1 className="uppercase flex justify-center">marcas</h1>
        <div>
          <div className="flex justify-end py-1">
            <Link
              to="/admin/new-brand"
              className="w-full py-1 px-2 rounded-lg uppercase font-bold text-white bg-blue-500 hover:bg-blue-600 flex justify-center gap-1 items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-circle-plus"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#fff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="12" r="9" />
                <line x1="9" y1="12" x2="15" y2="12" />
                <line x1="12" y1="9" x2="12" y2="15" />
              </svg>
              <p>nueva marca</p>
            </Link>
          </div>
        </div>
        <div className="overflow-scroll py-1">
          <table className="w-full bg-gray-200 rounded-lg">
            <thead className="uppercase">
              <tr className="border-b-[1px] border-black">
                <th className="w-1/2" scope="col">
                  <div className="w-full flex pt-1 px-1">
                    <p>nombre</p>
                  </div>
                </th>
                <th>
                  <div className="w-full flex pt-1 pl-1">
                    <p>acciones</p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {marcas.length === 0 ? (
                <tr>
                  <td>
                    <p>No existen marcas</p>
                  </td>
                </tr>
              ) : (
                marcas.map((marca) => (
                  <BrandListAdmin key={marca._id} props={marca} />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminCategories;
