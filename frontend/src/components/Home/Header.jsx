import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'

const Header = () => {

  const navigate = useNavigate();
  const Auth = useSelector(state=>state.Auth);

  return (
    <div className="h-16 border flex flex-row justify-around items-center head absolute w-full">
      <div className="ml-3"><span className="material-symbols-outlined text-black cursor-pointer" onClick={()=>{
        document.getElementById("sidebar").style.left = "0px";
      }}>menu</span></div>
      <div className="w-full flex flex-row justify-center">
        <a href="/"><h1 style={{fontFamily:"impact",fontSize:50,color:"#FF6200"}} className="pl-20">JUNGLE</h1></a>
      </div>
      <div className="flex flex-row gap-2 pr-4 text-gray-600 items-center w-32 justify-end">
        {/* <span className="material-symbols-outlined">search</span> */}
        {!Auth && <h1 className="md:text-xl text-black mt-1 cursor-pointer" style={{fontFamily:"impact"}} onClick={()=>navigate("/login")}>LOG IN</h1>}
        {/* <img src={loginpng} alt="" className="border "/> */}
        <span className="material-symbols-outlined cursor-pointer text-black" onClick={()=>navigate("/cart")}>shopping_bag</span>
      </div>
    </div>
  );
};

export default Header;
