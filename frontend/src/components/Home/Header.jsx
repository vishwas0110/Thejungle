import React from "react";
import Logo from '../../Assets/logo.png';
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  return (
    <div className="h-16 border flex flex-row justify-evenly items-center head">
      <div className="ml-3"><span className="material-symbols-outlined text-gray-600 cursor-pointer" onClick={()=>{
        document.getElementById("sidebar").style.left = "0px";
      }}>menu</span></div>
      <div className="w-full flex flex-row justify-center">
        <img src={Logo} alt="logo" className="w-48"/>
      </div>
      <div className="flex flex-row gap-2 pr-3 text-gray-600">
        <span className="material-symbols-outlined">search</span>
        <span className="material-symbols-outlined cursor-pointer" onClick={()=>navigate("/cart")}>shopping_bag</span>
      </div>
    </div>
  );
};

export default Header;
