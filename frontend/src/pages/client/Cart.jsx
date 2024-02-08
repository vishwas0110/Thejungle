import React, { useEffect, useState } from 'react';
import Header from '../../components/Home/Header';
import { useNavigate } from 'react-router-dom';
import hoodie from '../../Assets/hoodie.png'
import Sidebar from '../../components/Home/Sidebar';

const Cart = () =>{

    const [cartItems,setCartItems] = useState([]);
    const navigate = useNavigate();

    const getCartItems = () =>{
        const cartItems = JSON.parse(localStorage.getItem("cart"));
        if(cartItems !== null){
            setCartItems(cartItems);
        }
    }

    useEffect(()=>{
        getCartItems();
    },[]);

    const deleteFromCart = itm =>{
        const items = [...cartItems];
        const index = items.findIndex(obj=>obj.id===itm.id);
        items.splice(index,1);
        setCartItems(items);
        localStorage.setItem("cart",JSON.stringify(items));
    }

    return(
        <div>
            <Header/>
            <Sidebar/>
            <div className='pt-20'>
                <h1 className='text-center mt-2 uppercase text-xs text-gray-600'>Cart</h1>
                {
                    cartItems.length > 0 ? <div>
                        {
                            cartItems.map(itm=>{
                                // console.log(itm);
                                return(
                                    <div className='flex flex-row gap-3 justify-evenly mt-3 items-center'>
                                        <div className='p-3'>
                                            <img src={itm.image} alt="" className='w-20'/>
                                        </div>
                                        <div className='flex flex-col gap-1'>
                                            <h1 className='text-base textgray-600'>{itm.name}</h1>
                                            <h1 className='text-xs textgray-600'>{itm.description}</h1>
                                            <h1 className='text-xs textgray-600'>RS {itm.price} </h1>
                                            <h1 className='text-xs textgray-600'>SIZE : {itm.size}</h1>
                                        </div>
                                        <div onClick={()=>deleteFromCart(itm)}>
                                            <span className='material-symbols-outlined text-sm text-red-600 pr-3 cursor-pointer'>delete</span>
                                        </div>
                                    </div>
                                );
                            })
                        }
                        <div className='flex flex-row mt-4'>
                            <button className='p-1 text-white bg-black text-base mx-auto' onClick={()=>{
                                navigate("/checkout");
                            }}>Checkout</button>
                        </div>
                    </div> : <div className='flex flex-col justify-center items-center pt-4'>
                        <h1>Your Cart is empty ! </h1>
                        <button className='p-2 text-white bg-black' onClick={()=>navigate("/")}>Continue shopping</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default Cart;