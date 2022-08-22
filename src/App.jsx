import { BrowserRouter, Routes, Route } from "react-router-dom";

//REDUX
import { Provider } from "react-redux";
import AuthLayout from "./layout/AuthLayout";
import store from "./store";
//import store, { saveState } from './store';
import { AuthProvider } from "./context/AuthProvider";
//LOGIN
import Login from "./pages/auth/Login";
import ConfirmarCuenta from "./pages/auth/ConfirmarCuenta";
import Registrar from "./pages/auth/Registrar";

//admin
import AdminLayout from "./layout/AdminLayout";
import AdminInicio from "./pages/admin/AdminInicio";
import AdminCategories from "./pages/admin/AdminCategories";
import AdminProducts from "./pages/admin/AdminProducts";
import NewProduct from "./pages/admin/NewProduct";
import NewCategory from "./pages/admin/NewCategory";
import NewBrand from "./pages/admin/NewBrand";
import EditBrand from "./pages/admin/EditBrand";
import AdminEventos from "./pages/admin/AdminEventos";
import EditEvents from "./pages/admin/EditEvents";
import AddProductsEvent from "./pages/admin/AddProductsEvent";
import ClientLayout from "./layout/ClientLayout";
import Inicio from "./pages/client/Inicio";
import Producto from "./pages/client/Producto";
import ProductosCategoria from "./pages/client/ProductosCategoria";
import AllProducts from "./pages/client/AllProducts";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Provider store={store}>
          <Routes>
            //RutasPublicas
            <Route path='home' element={<ClientLayout />}>
              <Route index element={<Inicio />} />
              <Route path='product/:id' element={<Producto />} />
              <Route path='all-products' element={<AllProducts />} />
              <Route
                path='product/:gender/:categoria'
                element={<ProductosCategoria />}
              />
            </Route>
            //AUTENTICACION
            <Route path='auth' element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path='register' element={<Registrar />} />
              <Route path='confirm-account/:id' element={<ConfirmarCuenta />} />
            </Route>
            //RUTAS ADMIN
            <Route path='admin' element={<AdminLayout />}>
              <Route index element={<AdminInicio />} />
              <Route path='products' element={<AdminProducts />} />
              <Route path='new-product' element={<NewProduct />} />
              <Route path='categories-brands' element={<AdminCategories />} />
              <Route path='new-category' element={<NewCategory />} />
              <Route path='new-brand' element={<NewBrand />} />
              <Route path='brand/:id' element={<EditBrand />} />
              <Route path='events' element={<AdminEventos />} />
              <Route path='events/:id' element={<EditEvents />} />
              <Route
                path='events/:id/add-products'
                element={<AddProductsEvent />}
              />
            </Route>
          </Routes>
        </Provider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
