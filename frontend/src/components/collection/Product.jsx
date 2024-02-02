import React from 'react';
import hoodie from '../../Assets/hoodie.png';
import { useNavigate } from 'react-router-dom';

const Product = () =>{
    const navigate = useNavigate();
    return(
        <div className='mt-2 cursor-pointer' onClick={()=>navigate("/product")}>
            <img src={hoodie} alt="" className='productImg'/>
            <div className='p-1 flex flex-col gap-2'>
                <h1 className='text-xs text-gray-950'>SOUTH CLUB ARCANA JACQUARD HOODIE</h1>
                <h1 className='text-xs text-gray-950'>₹19,500</h1>
            </div>
        </div>
    );
};

export default Product;