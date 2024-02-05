import React, { useEffect, useState } from "react";
import hoodie from "../../Assets/hoodie.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Footer from "../../components/Home/Footer";
import Header from "../../components/Home/Header";
import { v4 } from 'uuid';
import Sidebar from "../../components/Home/Sidebar";

const ViewProduct = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [product,setProduct] = useState({});
    const [size,setSize] = useState("S");

    const getProduct = () =>{
      const product = JSON.parse(sessionStorage.getItem("product"));
      setProduct(product);
    }

    useEffect(()=>{
      getProduct();
    },[]);

    const AddtoCart = itm =>{
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      if(cartItems === null){
        const cartItems = [];
        cartItems.push(itm);
        localStorage.setItem("cart",JSON.stringify(cartItems));
        alert("added to cart")
      }else if(cartItems.length >= 0){
        const items = [...cartItems];
        items.push(itm);
        localStorage.setItem("cart",JSON.stringify(items));
        alert("added to cart !")
      }else{
        console.log(cartItems)
      }
    }

  return (
    <div>
     <Header/>
     <Sidebar/>
      <div className="">
        <div className="grid md:grid-cols-2">
          <div className="p-3 flex flex-row justify-center">
            <img src={product.image} alt="hood" className="md:w-2/4" />
          </div>
          <div className="pt-10 flex flex-col gap-5 p-3">
            <h1 className="text-gray-700 capitalize">
              {product.title}
            </h1>
            <p className="text-gray-800 text-xs " style={{ lineHeight: 1.5 }}>
              "Jungle: Where urban style meets untamed adventure on every tee."
            </p>
            <h1 className="text-gray-700 capitalize text-xs">₹{product.price}/-</h1>
            <div className="flex flex-row gap-8 text-xs">
              <h1 className={`cursor-pointer ${size === "S" ? "underline underline-offset-2" : ""}`} onClick={()=>setSize("S")}>S</h1>
              <h1 className={`cursor-pointer ${size === "M" ? "underline underline-offset-2" : ""}`} onClick={()=>setSize("M")}>M</h1>
              <h1 className={`cursor-pointer ${size === "L" ? "underline underline-offset-2" : ""}`} onClick={()=>setSize("L")}>L</h1>
              <h1 className={`cursor-pointer ${size === "XL" ? "underline underline-offset-2" : ""}`} onClick={()=>setSize("XL")}>XL</h1>
            </div>
            <h1 className="text-gray-700 text-xs underline">SIZE GUIDE</h1>
            <div className="p-3 bg-black text-white text-center md:w-64 cursor-pointer">
              <button onClick={()=>{
                const prdct = {
                  id:v4(),
                  image:product.image,
                  price:product.price,
                  stock:10,
                  description:"lLorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, soluta.m ",
                  name:product.title,
                  size:size
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
                    <p className="text-xs text-gray-700">{product.desc}</p>
                </TabPanel>
                <TabPanel>
                    <p className="text-xs text-gray-700 mt-3">We accept payments via</p>
                    <div className="flex flex-row gap-2 mt-3">
                        <img src="https://almostgods.com/wp-content/uploads/2021/12/mastercard-1.svg" alt="" className="w-10"/>
                        <img src="https://almostgods.com/wp-content/uploads/2021/12/visa.svg" alt="" className="w-10"/>
                        <img src="https://almostgods.com/wp-content/uploads/2021/12/upi2.svg" alt="" className="w-10"/>
                    </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default ViewProduct;
