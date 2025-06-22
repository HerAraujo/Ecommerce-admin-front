import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Orders from "./pages/Orders/Orders";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products/Products";
import Categories from "./pages/Categories/Categories";
import NewCategory from "./pages/Categories/NewCategory";
import EditCategory from "./pages/Categories/EditCategory";
import ProductCreateFrom from "./pages/ProductCreateForm/ProductCreateFrom";
import ProductEditFrom from "./pages/ProductEditForm/ProductEditForm";
import Admins from "./pages/Admins/Admins";
import NewAdmin from "./pages/Admins/NewAdmin";
import UpdateAdmin from "./pages/Admins/UpdateAdmin";
import Images from "./pages/Images/Images";
import ImageUploadForm from "./pages/ImageUploadForm/ImageUploadForm";
import ProductImages from "./pages/ProductImages/ProductImages";
import PrivateRoute from "./components/PrivateRoute";
import OrderEditStatusForm from "./pages/OrderEditStatusForm";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <Sidebar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/orders" element={<PrivateRoute element={<Orders />} />} />
        <Route path="/order/:id" element={<PrivateRoute element={<OrderEditStatusForm />} />} />
        <Route path="/admins" element={<PrivateRoute element={<Admins />} />} />
        <Route path="/newAdmin" element={<PrivateRoute element={<NewAdmin />} />} />
        <Route path="/edit-admin/:id" element={<PrivateRoute element={<UpdateAdmin />} />} />
        <Route path="/images" element={<PrivateRoute element={<Images />} />} />
        <Route path="/upload-image" element={<PrivateRoute element={<ImageUploadForm />} />} />
        <Route
          path="/edit-product-images/:slug"
          element={<PrivateRoute element={<ProductImages />} />}
        />
        <Route path="/products" element={<PrivateRoute element={<Products />} />} />
        <Route path="/category" element={<PrivateRoute element={<Categories />} />} />
        <Route path="/newCategory" element={<PrivateRoute element={<NewCategory />} />} />
        <Route path="/edit-category/:id" element={<PrivateRoute element={<EditCategory />} />} />
        <Route path="/create-product" element={<PrivateRoute element={<ProductCreateFrom />} />} />
        <Route
          path="/edit-product/:slug"
          element={<PrivateRoute element={<ProductEditFrom />} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
