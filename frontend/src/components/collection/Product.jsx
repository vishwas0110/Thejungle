import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = props =>{
    const navigate = useNavigate();
    return(
        <div className='mt-2 cursor-pointer' onClick={()=>{
            navigate(`/product/${props.id}`);
        }}>
            <img src={props.images[0]} alt="" className='productImg'/>
            <div className='p-1 flex flex-col gap-2'>
                <h1 className='text-xs text-gray-950 uppercase' style={{fontFamily:"impact"}}>{props.title}</h1>
                <h1 className='text-xs text-gray-950'>RS {props.price}</h1>
            </div>
        </div>
    );
};

export default Product;