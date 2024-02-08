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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/collection" element={<Collection/>}/>
      <Route path="/product/:id" element={<ViewProduct/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/terms" element={<Terms/>}/>
      <Route path="/refund" element={<Refund/>}/>
      <Route path="/shipping" element={<Shipping/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path='/admin' element={<AdminHome/>}>
        <Route path="/admin/addproduct" element={<Products/>}/>
        <Route path="/admin/manageproducts" element={<ManageProduct/>}/>
        <Route path="/admin/editproduct/:id" element={<EditProduct/>}/>
      </Route>
    </Routes>
  );
}

export default App;
