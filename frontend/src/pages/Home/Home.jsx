import React from "react";
import Header from "../../components/Home/Header";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Home/Footer";
import Sidebar from "../../components/Home/Sidebar";
import collectionBtn from '../../Assets/Home/collection.PNG';

const Home = () => {

  const navigate = useNavigate();
  
  return (
    <div>
      <Sidebar/>
      <div
        className="h-8 bg-white flex flex-row justify-center items-center"
        id="top_quote"
      >
        <h1 className="text-black font1 text-xs font-bold">FREE STANDARD SHIPPING</h1>
        <span
          class="material-symbols-outlined cursor-pointer absolute right-1 text-black"
          onClick={() => {
            document.getElementById("top_quote").style.display = "none";
          }}
        >
          close
        </span>
      </div>
      <Header />
      <div className="pb-20"></div>
      <div className="home-content flex flex-row justify-center items-center"> 
          <div className="flex flex-col justify-center items-center mt-32">

          </div>
      </div>
      <div className="flex flex-row justify-center ">
        <img src={collectionBtn} className="w-72 absolute md:relative" style={{top:"70%"}} onClick={()=>navigate("/collection")}/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
