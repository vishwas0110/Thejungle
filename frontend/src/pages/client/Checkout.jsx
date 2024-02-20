import React, { useEffect, useState } from "react";
import Header from "../../components/Home/Header";
import Sidebar from "../../components/Home/Sidebar";
import api from "../../api/api";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from 'react-redux'

const Checkout = () => {
    const [cartItems, setCartItems] = useState([]);

    const Auth = useSelector(state=>state.Auth);

    const [loading,setLoading] = useState(false);
    let [total, setTotal] = useState(0);

    const [data, setData] = useState({
        Mobile: "",
        Email: "",
        State: "",
        Address: "",
        Pincode: "",
        City:"",
        Name:"",
        Flatno:"",
        Orders:[]
    });

    const getItems = () => {
        const cartItems = JSON.parse(localStorage.getItem("cart"));
        setCartItems(cartItems);
    }

    useEffect(() => {
        getItems();
    }, []);

    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value});
    }

    const SubmitHandler = async () =>{
        setLoading(true);
        fetch(`${api}/orders/add`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({...data,Orders:cartItems})
        }).then(resp=>{
            resp.json().then(dta=>{
                if(dta.success){
                    fetch(`${api}/payment/init`,{
                        method:"POST",
                        body:JSON.stringify({...data,TotalAmount:total,orderID:dta.orderID,userID:dta.userID}),
                        headers: { "Content-Type": "application/json" },
                    }).then(resp=>{
                        console.log(resp);
                        resp.json().then(dta=>{
                            window.location.href = dta.url
                        })
                    }).catch(err=>{
                        setLoading(false);
                        console.log(err);
                    })
                }else{
                    alert(dta.message);
                    setLoading(false);
                }
            }).catch(err=>{
                console.log(err);
            })
        }).catch(err=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        if(!Auth){
            window.location.href = "/";
        }
    },[]);

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
                        <input type="text" placeholder="Enter Name" className="p-2 outline-orange-500 border w-full" onChange={changeHandler} name="Name"/>
                        <input type="number" placeholder="Enter Mobile Number" className="p-2 outline-orange-500 border w-full" onChange={changeHandler} name="Mobile"/>
                        <input type="email" placeholder="Enter Email Address" className="p-2 outline-orange-500 border w-full" onChange={changeHandler} name="Email"/>
                        <input type="email" placeholder="Enter Address" className="p-2 outline-orange-500 border w-full" onChange={changeHandler} name="Address"/>
                        <div className="flex flex-row gap-2 flex-wrap">
                            <input type="text" placeholder="Enter City" className="p-2 outline-orange-500 border md:w-72 w-full" onChange={changeHandler} name="City"/>
                            <input type="text" placeholder="Enter State" className="p-2 outline-orange-500 border md:w-72 w-full" onChange={changeHandler} name="State"/>
                            <input type="text" placeholder="Enter Flatno / Landmark" className="p-2 outline-orange-500 border md:w-72 w-full" onChange={changeHandler} name="Flatno"/>
                            <input type="number" placeholder="Enter Pincode" className="p-2 outline-orange-500 border md:w-72 w-full" onChange={changeHandler} name="Pincode"/>
                        </div>
                    </form>
                    {!loading && <button className="mt-4 border p-2 text-xs bg-black text-white" onClick={SubmitHandler}>Proceed to pay</button>}
                    {loading && <CircularProgress size={20} color="error"/>}
                </div>
            </div>
        </div>
    );
};

export default Checkout;
