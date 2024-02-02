import React, { useState } from "react";
import api from '../../api/api';


const Products = () => {
  const [product, setproduct] = useState({
    product: "",
    price: 0,
    category: "Men",
    subcategory: "shirt",
    brand: "",
    description: "",
    reviews: 0,
    stock: 0,
    date: Date.now(),
  });
  let productimages = [];
  const changeHandler = (e) => {
    setproduct({ ...product, [e.target.name]: e.target.value });
  };

  const changeImages = (e) => {
    productimages.push(e.target.files[0]);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    fetch(`${api}/products/postproducts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: product.product,
        price: product.price,
        category: product.category,
        subcategory: product.subcategory,
        brand: product.brand,
        description: product.description,
        reviews: product.reviews,
        stock: product.stock,
        dateCreated: product.date,
        images: productimages.toString(),
      }),
    }).then(resp=>{
        resp.json().then(dta=>{
            if(dta.success){
                alert("product added successfully");
            }
        })
    }).catch(err=>{
        console.log(err);
    })
  };
  return (
    <div className="w-full pt-3">
      <center className="font-serif h-full">
        <h1
          className="text-xl p-2 text-red-700"
        >
          Add Products
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
              onChange={changeHandler}
              value={product.value}
            />
            <br />
            <span>Enter product price : </span>
            <input
              className="py-1 bg-white hover:border-2 border-black"
              type="number"
              name="price"
              placeholder="price"
              onChange={changeHandler}
              value={product.value}
            />
            <br />
            <span>Choose a Category : </span>
            <select
              className="py-1 border-2 border-black mx-2"
              name="category"
              id="category"
              onChange={changeHandler}
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Child">Child</option>
            </select>
            <select
              className="py-1 border-2 border-black mx-2"
              name="subcategory"
              id="subcategory"
              onChange={changeHandler}
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
              onChange={changeHandler}
              value={product.value}
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
              onChange={changeHandler}
              value={product.value}
            ></textarea>
            <br />
            <span>Upload product images : </span>
            <br />
            <input
              className="py-1 ml-20 "
              type="file"
              name="images"
              onChange={changeImages}
              value={productimages}
            />
            <br />
            <span>Stock : </span>
            <input
              className="py-1 bg-white hover:border-2 border-black"
              type="number"
              placeholder="Add stock"
              name="stock"
              onChange={changeHandler}
              value={product.value}
            />
            <br />
            <span>Reviwes : </span>
            <input
              className="py-1 bg-white hover:border-2 border-black"
              type="number"
              placeholder="Add Review"
              name="reviews"
              onChange={changeHandler}
              value={product.value}
            />
            <br />
            <span>Date of Creation : </span>
            <input
              className="py-1 bg-white hover:border-2 border-black"
              type="date"
              name="date"
              onChange={changeHandler}
              value={product.value}
            />
            <br />
            <input
              type="submit"
              onClick={submitHandler}
              value="Add Product"
              className="bg-red-700 hover:bg-red-700 text-white font-bold py-2 px-4 border-b-4 hover:border-red-700 rounded cursor-pointer"
            />
          </form>
        </div>
      </center>
    </div>
  );
};
export default Products;
