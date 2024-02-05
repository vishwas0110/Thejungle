import React from "react";
import Header from "../../components/Home/Header";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Home/Footer";
import Sidebar from "../../components/Home/Sidebar";
import bg from '../../Assets/junglemain.jpg';

const Home = () => {

  const navigate = useNavigate();
  
  return (
    <div>
      <Sidebar/>
      <div
        className="h-8 bg-white flex flex-row justify-center items-center"
        id="top_quote"
      >
        <h1 className="text-black font1 text-xs">FREE STANDARD SHIPPING</h1>
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
      <div className="home-content flex flex-row justify-center items-center"> 
          <div className="flex flex-col justify-center items-center">
            <button className="border border-white p-3 bg-white outline outline-white outline-offset-4 outline-2 mt-36" onClick={()=>navigate("/collection")}>Collection</button>
          </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
