import React, { useEffect, useState } from "react";
import Header from "../../components/Home/Header";
import Sidebar from "../../components/Home/Sidebar";

const Checkout = () => {
    const [cartItems, setCartItems] = useState([]);
    let [total, setTotal] = useState(0);

    const [data, setData] = useState({
        Mobile: "",
        Email: "",
        State: "",
        Address: "",
        Pincode: "",
        City:"",
    });

    const getItems = () => {
        const cartItems = JSON.parse(localStorage.getItem("cart"));
        setCartItems(cartItems);
        console.log(cartItems);
    }

    useEffect(() => {
        getItems();
    }, []);

    return (
        <div>
            <Header />
            <Sidebar />
            <div className="pt-20">
                <h1 className="text-xs text-center mt-2">Items</h1>
            </div>
            <div>
                {cartItems && (
                    <div>
                        {
                            cartItems.map(itm => {
                                total = total + (Number(itm.price));
                                return (
                                    <div className="flex flex-row gap-3 justify-evenly mt-3 items-center">
                                        <div className="p-3">
                                            <img src={itm.image} alt="" className="w-20" />
                                        </div>
                                        <div>
                                            <h1 className="text-base textgray-600">{itm.name}</h1>
                                            <h1 className="text-xs textgray-600">
                                                {itm.description}
                                            </h1>
                                            <h1 className="text-xs textgray-600">₹ {itm.price} /-</h1>
                                            <h1 className="text-xs textgray-600">SIZE : {itm.size}</h1>
                                        </div>
                                    </div>);
                            })
                        }
                    </div>
                )}
            </div>
            <div>
                <div>
                    <h1 className="text-xs text-center mt-5"><span className="font-bold">Total</span> : {total}/-</h1>
                </div>
                <h1 className="text-center font-bold mt-3">Contact Details</h1>
                <div className="flex flex-col gap-3 justify-center items-center p-4">
                    <form action="" className="flex flex-col gap-3 justify-center items-center">
                        <input type="number" placeholder="Enter Mobile Number" className="p-2 outline-orange-500 border w-full"/>
                        <input type="email" placeholder="Enter Email Address" className="p-2 outline-orange-500 border w-full" />
                        <input type="email" placeholder="Enter Address" className="p-2 outline-orange-500 border w-full" />
                        <div className="flex flex-row gap-2 flex-wrap">
                            <input type="text" placeholder="Enter City" className="p-2 outline-orange-500 border md:w-72 w-full" />
                            <input type="text" placeholder="Enter State" className="p-2 outline-orange-500 border md:w-72 w-full" />
                            <input type="text" placeholder="Enter Flatno / Landmark" className="p-2 outline-orange-500 border md:w-72 w-full" />
                            <input type="number" placeholder="Enter Pincode" className="p-2 outline-orange-500 border md:w-72 w-full" />
                        </div>
                    </form>
                    <button className="mt-4 border p-2 text-xs bg-black text-white">Proceed to pay</button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
