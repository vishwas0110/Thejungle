import React from "react";
import { useNavigate } from 'react-router-dom'


const Admin = () => {

  const navigate = useNavigate();

  return (
    <div
      className="h-screen flex flex-col py-5 space-y-4 font-serif border"
      style={{ width: "200px" }}
    >
      <h1 className="uppercase text-xs text-gray-600 ml-3">Products</h1>
      <div className="flex flex-row text-gray-900 uppercase text-sm items-center pl-2 cursor-pointer hover:text-red-700 gap-2" onClick={()=>navigate("/admin/addproduct")}>
        <span class="material-symbols-outlined">add</span>
        <h1>Add Product</h1>
      </div>
      <div className="flex flex-row text-gray-900 uppercase text-sm items-center pl-2 cursor-pointer hover:text-red-700 gap-2" onClick={()=>navigate("/admin/manageproducts")}>
        <span class="material-symbols-outlined">inventory</span>
        <h1>Manage Products</h1>
      </div>
      <div className="flex flex-row text-gray-900 uppercase text-sm items-center pl-2 cursor-pointer hover:text-red-700 gap-2" onClick={()=>navigate("/admin/orders")}>
        <span class="material-symbols-outlined">inventory_2</span>
        <h1>Orders</h1>
      </div>
    </div>
  );
};
export default Admin;
  