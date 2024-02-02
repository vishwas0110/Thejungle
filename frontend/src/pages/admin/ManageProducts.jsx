import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../../api/api';

const ManageProducts = () => {
  const Navigate = useNavigate();
  let [productData, setData] = useState([]);

  useEffect(() => {
    fetch(`${api}/products/`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="productCard">
      {productData &&
        productData.map((data) => {
          return (
            <div key={data._id} className="p-3 border h-auto card" style={{width:"350px"}}>
              <img src={data.images[0]} alt="img" />
              <hr />

              <p className="text-red-700">Product ID : <span className="text-black">{data._id}</span></p>
              <p className="text-red-700">Product Name : <span className="text-black">{data.name}</span></p>
              <p className="text-red-700">Product Brand : <span className="text-black">{data.brand}</span></p>
              <p className="text-red-700">Price : <span className="text-black">{data.price}</span></p>
              <p className="text-red-700">Category : <span className="text-black">{data.category}</span></p>
              <p className="text-red-700">Sub-Category : <span className="text-black">{data.subcategory}</span></p>
              <p className="text-red-700">Stock : <span className="text-black">{data.stock}</span></p>
              <p className="text-red-700">Reviews : <span className="text-black">{data.reviews}</span></p>
              <p className="text-red-700">Description : <span className="text-black">{data.description}</span></p>
              <p className="text-red-700">dateCreated : <span className="text-black">{data.dateCreated}</span></p>
              <input
                type="button"
                value="EDIT"
                className="bg-green-500 border-slate border-2 rounded-lg hover:bg-green-600"
                onClick={() => {
                  Navigate(`/admin/editproduct/${data._id}`);
                }}
              />
              <input
                type="button"
                value="DELETE"
                className="bg-red-500 border-slate border-2 rounded-lg hover:bg-red-600"
                onClick={() => {
                  fetch(
                    `${api}/products/${data._id}`,
                    {
                      method: "DELETE",
                    }
                  )
                    .then((res) => res.json())
                    .catch((err) => console.log(err));
                  window.location.reload();
                }}
              />
            </div>
          );
        })}
    </div>
  );
};
export default ManageProducts;
