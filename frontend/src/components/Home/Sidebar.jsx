import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () =>{

    const navigate = useNavigate();

    return(
        <div className='bg-white absolute border sidebar' style={{height:"100vh",width:"200px",zIndex:2}} id="sidebar">
            <div className='flex flex-row justify-end'>
                <span className='material-symbols-outlined cursor-pointer' onClick={()=>{
                    document.getElementById("sidebar").style.left = "-200px";
                }}>close</span>
            </div>
            <div>
                <ul className='text-xs p-1 flex flex-col gap-2'>
                    <li className='hover:underline hover:cursor-pointer' onClick={()=>navigate("/about")}>About us</li>
                    <li className='hover:underline hover:cursor-pointer' onClick={()=>{
                        navigate("/terms");
                    }}>Terms & Conditions</li>
                    <li className='hover:underline hover:cursor-pointer' onClick={()=>navigate("/refund")}>Return & Refund Policy</li>
                    <li className='hover:underline hover:cursor-pointer' onClick={()=>navigate("/shipping")}>Shipping Policy</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;