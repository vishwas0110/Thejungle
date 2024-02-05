import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = props =>{
    const navigate = useNavigate();
    return(
        <div className='mt-2 cursor-pointer' onClick={()=>{
            sessionStorage.setItem("product",JSON.stringify({
                image:props.image,
                title:props.title,
                price:props.price,
                size:"S",
                desc:props.desc
            }));
            navigate("/product");
        }}>
            <img src={props.image} alt="" className='productImg'/>
            <div className='p-1 flex flex-col gap-2'>
                <h1 className='text-xs text-gray-950 uppercase'>{props.title}</h1>
                <h1 className='text-xs text-gray-950'>₹{props.price}/-</h1>
            </div>
        </div>
    );
};

export default Product;