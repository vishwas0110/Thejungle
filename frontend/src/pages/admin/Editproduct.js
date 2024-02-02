import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from '../../api/api';


const EditProduct = () => {
  const [editData, setEdit] = useState([]);
  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`${api}/products/${id}`)
      .then((res) => res.json())
      .then((data) => setEdit(data[0]))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(editData);
  const changeEditHandler = (e) => {
    setEdit({ ...editData, [e.target.name]: e.target.value });
  };
  const changeEditImages = (e) => {};
  const submitEditHandler = (e) => {
    e.preventDefault();
    fetch(`${api}/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({
        name: editData.name,
        price: editData.price,
        category: editData.category,
        subcategory: editData.subcategory,
        brand: editData.brand,
        description: editData.description,
        reviews: editData.reviews,
        stock: editData.stock,
        dateCreated: editData.date,
        images: editData.images,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <center className="bg-gray-200 font-serif h-full">
        <h1
          className="text-xl"
          style={{
            backgroundColor: "#818cf8",
            padding: "12px",
            color: "white",
          }}
        >
          Edit Products
        </h1>
        <div>
          {" "}
          <form className=" px-2 space-y-2">
            <span>Enter product name : </span>
            <input
              className="py-1 bg-white hover:border-2 border-black"
              type="text"
              name="product"
              placeholder="product name"
              onChange={changeEditHandler}
              value={editData.name}
            />
            <br />
            <span>Enter product price : </span>
            <input
              className="py-1 bg-white hover:border-2 border-black"
              type="number"
              name="price"
              placeholder="price"
              onChange={changeEditHandler}
              value={editData.price}
            />
            <br />
            <span>Choose a Category : </span>
            <select
              className="py-1 border-2 border-black mx-2"
              name="category"
              id="category"
              onChange={changeEditHandler}
              value={editData.category}
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Child">Child</option>
            </select>
            <select
              className="py-1 border-2 border-black mx-2"
              name="subcategory"
              id="subcategory"
              onChange={changeEditHandler}
              value={editData.subcategory}
            >
              <option value="shirt">shirt</option>
              <option value="pants">Pants</option>
              <option value="t-shirts">T-shirts</option>
              <option value="trousers">Trousers</option>
              <option value="kurta sets">kurta sets</option>
              <option value="sarees">Sarees</option>
              <option value="skirts">Skirts</option>
              <option value="jeans">jeans</option>
              <option value="leggins">leggins</option>
            </select>
            <br />
            <span>Brand : </span>
            <input
              className="py-1 bg-white hover:border-2 border-black"
              type="text"
              placeholder="brand name"
              name="brand"
              onChange={changeEditHandler}
              value={editData.brand}
            />
            <br />
            <span className="">Description : </span>
            <br />
            <textarea
              rows="5"
              cols="20"
              className="hover:border-2 border-black"
              placeholder="type here?"
              name="description"
              onChange={changeEditHandler}
              value={editData.description}
            ></textarea>
            <br />
            <span>Upload product images : </span>
            <br />
            <input
              className="py-1 ml-20 "
              type="file"
              name="images"
              onChange={changeEditImages}
            />
            <br />
            <span>Stock : </span>
            <input
              className="py-1 bg-white hover:border-2 border-black"
              type="number"
              placeholder="Add stock"
              name="stock"
              onChange={changeEditHandler}
              value={editData.stock}
            />
            <br />
            <span>Reviwes : </span>
            <input
              className="py-1 bg-white hover:border-2 border-black"
              type="number"
              placeholder="Add Review"
              name="reviews"
              onChange={changeEditHandler}
              value={editData.reviews}
            />
            <br />
            <span>Date of Creation : </span>
            <input
              className="py-1 bg-white hover:border-2 border-black"
              type="date"
              name="date"
              onChange={changeEditHandler}
              value={editData.dateCreated}
            />
            <br />
            <input
              type="submit"
              onClick={submitEditHandler}
              value="Edit Product"
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded cursor-pointer"
            />
          </form>
        </div>
      </center>
    </div>
  );
};
export default EditProduct;
