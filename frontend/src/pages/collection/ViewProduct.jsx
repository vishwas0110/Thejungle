import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Footer from "../../components/Home/Footer";
import Header from "../../components/Home/Header";
import { v4 } from 'uuid';
import Sidebar from "../../components/Home/Sidebar";
import { useParams, useNavigate } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LinearProgress from '@mui/material/LinearProgress';
import { Carousel } from 'react-responsive-carousel';
import api from "../../api/api";
import Product from "../../components/collection/Product";

const ViewProduct = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [products,setProducts] = useState([]);
  const [reLoading,setReloading] = useState();
  const navigate = useNavigate();
  const [size, setSize] = useState("S");

  const { id } = useParams();

  const getProducts = () =>{
    setReloading(true);
    fetch(`${api}/products`).then(resp=>{
      resp.json().then(dta=>{
        setReloading(false);
        setProducts(dta);
      }).catch(err=>{
        console.log(err);
      })
    })
  }

  const getProduct = () => {
    setLoading(true);
    fetch(`${api}/products/${id}`).then(resp => {
      resp.json().then(dta => {
        setProduct(dta[0]);
        setLoading(false);
        getProducts();
      })
    }).catch(err => {
      console.log(err);
      setLoading(false);
    })
  }

  useEffect(() => {
    getProduct();
  }, []);

  const AddtoCart = itm => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    if (cartItems === null) {
      const cartItems = [];
      cartItems.push(itm);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      alert("added to cart")
    } else if (cartItems.length >= 0) {
      const items = [...cartItems];
      items.push(itm);
      localStorage.setItem("cart", JSON.stringify(items));
      alert("added to cart !")
    } else {
      console.log(cartItems)
    }
  }

  return (
    <div>
      <Header />
      <Sidebar />
      {loading && <LinearProgress color="error"/>}
      {!loading && <div className="pt-20">
        <div className="grid md:grid-cols-2">
          <div className="p-3 flex flex-row justify-center">
            <Carousel>
              {
                product.images.map(img => {
                  return (<div>
                    <img src={img} alt="hood" className="md:w-full" />
                  </div>);
                })
              }
            </Carousel>
          </div>
          <div className="pt-10 flex flex-col gap-5 p-3">
            <h1 className="text-gray-700 capitalize" style={{fontFamily:"impact"}}>
              {product.name}
            </h1>
            {/* <p className="text-gray-800 text-xs " style={{ lineHeight: 1.5 }}>
              {product.description}
            </p> */}
            <h1 className="text-gray-700 capitalize text-xs">RS {product.price}</h1>
            <div className="flex flex-row gap-8 text-xs">
              <h1 className={`cursor-pointer ${size === "XSS" ? "underline underline-offset-2" : ""}`} onClick={() => setSize("XSS")}>XSS</h1>
              <h1 className={`cursor-pointer ${size === "XS" ? "underline underline-offset-2" : ""}`} onClick={() => setSize("XS")}>XS</h1>
              <h1 className={`cursor-pointer ${size === "S" ? "underline underline-offset-2" : ""}`} onClick={() => setSize("S")}>S</h1>
              <h1 className={`cursor-pointer ${size === "M" ? "underline underline-offset-2" : ""}`} onClick={() => setSize("M")}>M</h1>
              <h1 className={`cursor-pointer ${size === "L" ? "underline underline-offset-2" : ""}`} onClick={() => setSize("L")}>L</h1>
              <h1 className={`cursor-pointer ${size === "XL" ? "underline underline-offset-2" : ""}`} onClick={() => setSize("XL")}>XL</h1>
              <h1 className={`cursor-pointer ${size === "XXL" ? "underline underline-offset-2" : ""}`} onClick={() => setSize("XXL")}>XXL</h1>
            </div>
            <h1 className="text-gray-700 text-xs underline">SIZE GUIDE</h1>
            <div className="p-3 bg-black text-white text-center md:w-64 cursor-pointer">
              <button onClick={() => {
                console.log(product);
                const prdct = {
                  id: v4(),
                  image: product.images[0],
                  price: product.price,
                  stock: product.stock,
                  description:product.description,
                  name: product.name,
                  size: size
                }
                AddtoCart(prdct);
              }}>Add to Cart</button>
            </div>
            <div>
              <Tabs
                selectedIndex={tabIndex}
                onSelect={(index) => setTabIndex(index)}
              >
                <TabList>
                  <Tab><p className="text-xs uppercase">Description</p></Tab>
                  <Tab><p className="text-xs uppercase">Payment Methods</p></Tab>
                </TabList>
                <TabPanel>
                  <p className="text-xs text-gray-700">{product.description}</p>
                </TabPanel>
                <TabPanel>
                  <p className="text-xs text-gray-700 mt-3">We accept payments via</p>
                  <div className="flex flex-row gap-2 mt-3">
                    <img src="https://almostgods.com/wp-content/uploads/2021/12/mastercard-1.svg" alt="" className="w-10" />
                    <img src="https://almostgods.com/wp-content/uploads/2021/12/visa.svg" alt="" className="w-10" />
                    <img src="https://almostgods.com/wp-content/uploads/2021/12/upi2.svg" alt="" className="w-10" />
                  </div>
                </TabPanel>
              </Tabs>
              <div>
                <h1 className="mt-3  text-center">Related Products</h1>
                {
                  !reLoading && <div className="grid md:grid-cols-2 justify-center gap-2">
                    {
                      products && products.map(prdct=>{
                        if(prdct._id !== product._id){
                          return(
                            <div className="flex flex-col gap-2" onClick={()=>{
                              navigate(`/product/${prdct._id}`);
                              window.location.reload();
                            }}>
                                <img src={prdct.images[0]} alt="" className="productImg"/>
                                <h1 style={{fontFamily:"impact"}}>{prdct.name}</h1>
                                <h1 className="text-xs ">RS {prdct.price}</h1>
                            </div>
                          );
                        }
                      })
                    }
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>}
    </div>
  );
};

export default ViewProduct;
