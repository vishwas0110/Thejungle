import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Collection from './pages/collection/Collection';
import ViewProduct from './pages/collection/ViewProduct';
import Cart from './pages/client/Cart';
import AdminHome from './pages/admin/AdminHome';
import Products from './pages/admin/Products';
import ManageProduct from "./pages/admin/ManageProducts.jsx"
import EditProduct from './pages/admin/Editproduct';
import Checkout from './pages/client/Checkout.jsx';
import Terms from './pages/client/Terms.jsx';
import Refund from './pages/client/Refund.jsx';
import Shipping from './pages/client/Shipping.jsx';
import About from './pages/client/About.jsx';
import Login from './pages/client/Login.jsx';
import AdminLogin from './pages/admin/Login.jsx';
import Signup from './pages/client/Signup.jsx';
import Success from './pages/client/Success.jsx';
import { useSelector } from 'react-redux';

function App() {

  const AdminA = useSelector(state=>state.AdminAuth);

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/collection" element={<Collection/>}/>
      <Route path="/product/:id" element={<ViewProduct/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/terms" element={<Terms/>}/>
      <Route path="/refund" element={<Refund/>}/>
      <Route path="/shipping" element={<Shipping/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/success/:tid/:oid" element={<Success/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/adminlogin" element={<AdminLogin/>}/>
      {AdminA && <Route path='/admin' element={<AdminHome/>}>
        <Route path="/admin/addproduct" element={<Products/>}/>
        <Route path="/admin/manageproducts" element={<ManageProduct/>}/>
        <Route path="/admin/editproduct/:id" element={<EditProduct/>}/>
      </Route>}
    </Routes>
  );
}

export default App;
