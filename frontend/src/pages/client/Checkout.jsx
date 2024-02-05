import React, { useEffect, useState } from "react";
import Header from "../../components/Home/Header";
import Sidebar from "../../components/Home/Sidebar";

const Checkout = () => {
    const [cartItems, setCartItems] = useState([]);
    let [total,setTotal] = useState(0);

    const [data,setData] = useState({
        Mobile:"",
        Email:"",
        State:"",
        Address:"",
        Pincode:""
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
            <Sidebar/>
            <div>
                <h1 className="text-xs text-center mt-2">Items</h1>
            </div>
            <div>
                {cartItems && (
                    <div>
                        {
                            cartItems.map(itm => {
                                total=total+(Number(itm.price));
                                return(
                                <div className="flex flex-row gap-3 justify-evenly mt-3 items-center">
                                    <div className="p-3">
                                        <img src={itm.image} alt="" className="rounded-full w-12" />
                                    </div>
                                    <div>
                                        <h1 className="text-base textgray-600">{itm.name}</h1>
                                        <h1 className="text-xs textgray-600">
                                            "Jungle: Where urban style meets untamed adventure on every
                                            tee."
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
                    <div className="flex flex-row items-center gap-2 px-4">
                        <label htmlFor="mobile" className="text-xs">Mobile Number</label>
                        <input type="number" id="mobile" className=" bg-white border"/>
                    </div>
                    <div className="flex flex-row items-center gap-2 px-4">
                        <label htmlFor="email" className="text-xs">Email Address</label>
                        <input type="email" id="email" className=" bg-white border"/>
                    </div>
                    <div className="flex flex-row items-center gap-2 px-4">
                        <label htmlFor="state" className="text-xs"> State</label>
                        <input type="text" id="state" className=" bg-white border"/>
                    </div>
                    <div className="flex flex-row items-center gap-2 px-4">
                        <label htmlFor="Address" className="text-xs"> Address</label>
                        <input type="text" id="Address" className=" bg-white border"/>
                    </div>
                    <div className="flex flex-row items-center gap-2 px-4">
                        <label htmlFor="pin" className="text-xs">Pincode</label>
                        <input type="number" id="pin" className=" bg-white border"/>
                    </div>
                    <button className="mt-4 border p-2 text-xs bg-black text-white">Proceed to pay</button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
