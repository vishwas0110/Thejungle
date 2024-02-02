import React, { useState } from "react";
import hoodie from "../../Assets/hoodie.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Footer from "../../components/Home/Footer";
import Header from "../../components/Home/Header";
import { v4 } from 'uuid';

const ViewProduct = () => {
    const [tabIndex, setTabIndex] = useState(0);

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
      <div className="">
        <div className="grid md:grid-cols-2">
          <div className="p-3 flex flex-row justify-center">
            <img src={hoodie} alt="hood" className="md:w-2/4" />
          </div>
          <div className="pt-10 flex flex-col gap-5 p-3">
            <h1 className="text-gray-700 capitalize">
              ALMOST GODS ARCANA JACQUARD HOODIE
            </h1>
            <p className="text-gray-800 text-xs " style={{ lineHeight: 1.5 }}>
              Custom Almost Gods’ Jacquard Arcana featuring a collection of
              various brand symbols; including the signature Alpha Cross,
              Serpentine motif and Chain Link graphic.
            </p>
            <h1 className="text-gray-700 capitalize text-xs">₹19,500</h1>
            <div className="flex flex-row gap-8 text-xs">
              <h1 className="cursor-pointer">S</h1>
              <h1 className="cursor-pointer">M</h1>
              <h1 className="cursor-pointer">L</h1>
              <h1 className="cursor-pointer">XL</h1>
            </div>
            <h1 className="text-gray-700 text-xs underline">SIZE GUIDE</h1>
            <div className="p-3 bg-black text-white text-center md:w-64 cursor-pointer">
              <button onClick={()=>{
                const product = {
                  id:v4(),
                  image:"https://hoodies.com/hoodie.png",
                  price:500,
                  stock:2,
                  description:"lLorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, soluta.m ",
                  name:"Hoodie Jungle"
                }
                AddtoCart(product);
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
                  <Tab><p className="text-xs uppercase">Assistance</p></Tab>
                </TabList>
                <TabPanel>
                    <p className="text-xs text-gray-700">Boxy fit. Crafted in Almost Gods custom-made Arcana Jacquard. Almost Gods Gothic Logo patched on front. Side slits on both the left and right side.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptate facere fugiat ab dolorum cumque autem minus officia blanditiis laboriosam modi, suscipit nemo eligendi magni, eius sit, possimus iste dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolorum possimus vero, aliquid, beatae distinctio magni ad molestias error rerum quae saepe reprehenderit esse, quos voluptates ut animi molestiae alias! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, quia ipsum a laudantium iure consectetur, et unde nobis at ipsam omnis quo perspiciatis asperiores laboriosam, est excepturi doloremque molestiae aperiam!</p>
                </TabPanel>
                <TabPanel>
                    <p className="text-xs text-gray-700 mt-3">We accept payments via</p>
                    <div className="flex flex-row gap-2 mt-3">
                        <img src="https://almostgods.com/wp-content/uploads/2021/12/mastercard-1.svg" alt="" className="w-10"/>
                        <img src="https://almostgods.com/wp-content/uploads/2021/12/visa.svg" alt="" className="w-10"/>
                        <img src="https://almostgods.com/wp-content/uploads/2021/12/upi2.svg" alt="" className="w-10"/>
                    </div>
                </TabPanel>
                <TabPanel>
                    <p className="text-xs text-gray-700 mt-3">Free shipping globally. If you have any questions, feel free to contact us on WhatsApp or Call Us.</p>
                    <p className="text-xs text-gray-700 mt-3">Email Us at southclub@gmail.com.</p>
                    <p className="text-xs text-gray-700 mt-3">If you are not satisfied with your order, you have up to 30 days to return it. For more details read our return policy.</p>
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
