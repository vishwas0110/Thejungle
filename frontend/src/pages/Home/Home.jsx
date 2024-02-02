import React from "react";
import Header from "../../components/Home/Header";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Home/Footer";

const Home = () => {

  const navigate = useNavigate();
  
  return (
    <div>
      <div
        className="h-12 bg-title flex flex-row justify-center items-center"
        id="top_quote"
      >
        <h1 className="text-white font1">FREE STANDARD SHIPPING</h1>
        <span
          class="material-symbols-outlined cursor-pointer absolute right-1 text-white"
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
            <h1 className="text-white md:text-3xl p-4 text-base text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laudantium rem officia architecto veniam. Neque laudantium dignissimos quibusdam, iure facilis cumque et, laboriosam suscipit, voluptatem repellat aspernatur inventore ipsam eveniet aperiam molestias dolorum illo accusantium assumenda quo deleniti nostrum labore ab. Deleniti laudantium esse maiores maxime qui possimus pariatur excepturi.</h1>
            <button className="border border-white p-3 bg-white outline outline-white outline-offset-4 outline-2" onClick={()=>navigate("/collection")}>Collection</button>
          </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
