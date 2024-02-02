import React, { useEffect, useState } from "react";
import api from '../api/api';

const Orders = () => {
  const [orderData, setOrder] = useState();
  useEffect(() => {
    fetch(`${api}/orders/`)
      .then((res) => res.json())
      .then((orders) => setOrder(orders))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(orderData);
  return (
    <div className="productCard">
      {orderData &&
        orderData.map((data) => {
          return (
            <div key={data._id} className="card">
              <p>Order ID : {data._id}</p>
              <p>Order Items ID : {data._id}</p>
              <p>Product ID : {data._id}</p>
              <p>Product ID : {data._id}</p>
              <p>Product ID : {data._id}</p>
              <p>Product ID : {data._id}</p>
              <p>Product ID : {data._id}</p>
              <p>Product ID : {data._id}</p>
              <p>Product ID : {data._id}</p>
              <p>Product ID : {data._id}</p>
              orderitems: shippingAddress1: shippingAddress2: city:
              req.body.city, zip: req.body.zip, country: req.body.country,
              totalprice: req.body.totalprice, name: req.body.userName, email:
              req.body.email, phoneno: req.body.phoneno,
            </div>
          );
        })}
    </div>
  );
};
export default Orders;
